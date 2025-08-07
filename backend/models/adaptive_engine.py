"""
Adaptive Difficulty Engine using Thompson Sampling Multi-Armed Bandit
Maintains separate models per subject for personalized learning
"""

import numpy as np
from scipy import stats
import json
from datetime import datetime
from collections import defaultdict, deque

class ThompsonSamplingBandit:
    """
    Thompson Sampling implementation for difficulty level selection
    Each difficulty level (1-10) is treated as an arm of the bandit
    """
    
    def __init__(self, n_arms=10, alpha_prior=1.0, beta_prior=1.0):
        """
        Initialize Thompson Sampling bandit
        
        Args:
            n_arms: Number of difficulty levels (1-10)
            alpha_prior: Prior alpha parameter for Beta distribution
            beta_prior: Prior beta parameter for Beta distribution
        """
        self.n_arms = n_arms
        self.alpha_prior = alpha_prior
        self.beta_prior = beta_prior
        
        # Beta distribution parameters for each arm (difficulty level)
        self.alpha = np.full(n_arms, alpha_prior)
        self.beta = np.full(n_arms, beta_prior)
        
        # Track arm selection history
        self.arm_counts = np.zeros(n_arms)
        self.total_selections = 0
        
        # Track rewards (learning effectiveness) for each arm
        self.arm_rewards = np.zeros(n_arms)
        
    def calculate_learning_effectiveness(self, is_correct, response_time, 
                                       cognitive_load, difficulty_level, subject_baseline=18.0):
        """
        Calculate learning effectiveness as reward signal
        Combines accuracy, response time, and cognitive load
        
        Args:
            is_correct: Whether answer was correct (bool)
            response_time: Time taken to respond (float)
            cognitive_load: Current cognitive load score (0-1)
            difficulty_level: Question difficulty (1-10)
            subject_baseline: Expected response time for subject
            
        Returns:
            float: Learning effectiveness score (0-1)
        """
        # Base reward from correctness
        accuracy_reward = 1.0 if is_correct else 0.0
        
        # Time efficiency reward (faster is better, but not too fast)
        optimal_time = subject_baseline * (1 + (difficulty_level - 5) * 0.1)
        time_ratio = response_time / optimal_time
        
        if time_ratio < 0.5:  # Too fast, might be guessing
            time_reward = 0.3
        elif time_ratio < 1.2:  # Good timing
            time_reward = 1.0
        elif time_ratio < 2.0:  # Acceptable timing
            time_reward = 0.7
        else:  # Too slow
            time_reward = 0.4
        
        # Cognitive load penalty (higher load = lower reward)
        cognitive_penalty = 1.0 - cognitive_load
        
        # Difficulty appropriateness bonus
        # Reward for attempting appropriate difficulty levels
        if is_correct and difficulty_level >= 3:
            difficulty_bonus = min(0.2, (difficulty_level - 2) * 0.05)
        else:
            difficulty_bonus = 0.0
        
        # Combine all factors
        effectiveness = (
            accuracy_reward * 0.4 +           # 40% accuracy
            time_reward * 0.3 +               # 30% timing
            cognitive_penalty * 0.2 +         # 20% cognitive load
            difficulty_bonus * 0.1            # 10% difficulty bonus
        )
        
        return min(1.0, max(0.0, effectiveness))
    
    def select_arm(self):
        """
        Select difficulty level using Thompson Sampling
        
        Returns:
            int: Selected difficulty level (0-indexed, add 1 for actual difficulty)
        """
        # Sample from Beta distribution for each arm
        samples = np.random.beta(self.alpha, self.beta)
        
        # Select arm with highest sample
        selected_arm = np.argmax(samples)
        
        # Update selection counts
        self.arm_counts[selected_arm] += 1
        self.total_selections += 1
        
        return selected_arm
    
    def update_arm(self, arm, reward):
        """
        Update Beta distribution parameters based on reward
        
        Args:
            arm: Selected arm (difficulty level - 1)
            reward: Learning effectiveness reward (0-1)
        """
        # Update Beta parameters
        # Treat reward as probability of success
        self.alpha[arm] += reward
        self.beta[arm] += (1 - reward)
        
        # Track cumulative rewards
        self.arm_rewards[arm] += reward
    
    def get_arm_statistics(self):
        """
        Get statistics for all arms
        
        Returns:
            dict: Statistics for each difficulty level
        """
        stats_dict = {}
        
        for arm in range(self.n_arms):
            difficulty = arm + 1
            
            # Calculate posterior mean and confidence interval
            posterior_mean = self.alpha[arm] / (self.alpha[arm] + self.beta[arm])
            
            # 95% confidence interval
            ci_lower, ci_upper = stats.beta.interval(
                0.95, self.alpha[arm], self.beta[arm]
            )
            
            stats_dict[difficulty] = {
                'posterior_mean': posterior_mean,
                'confidence_interval': (ci_lower, ci_upper),
                'selections': int(self.arm_counts[arm]),
                'total_reward': float(self.arm_rewards[arm]),
                'alpha': float(self.alpha[arm]),
                'beta': float(self.beta[arm])
            }
        
        return stats_dict

class SubjectSpecificAdaptiveEngine:
    """
    Manages separate adaptive engines for each subject
    Maintains student knowledge state and difficulty preferences per subject
    """
    
    def __init__(self, subjects=None):
        """
        Initialize subject-specific adaptive engines
        
        Args:
            subjects: List of subject names
        """
        if subjects is None:
            subjects = ['frontend_web_dev', 'backend_web_dev', 
                       'software_engineering', 'cloud_computing']
        
        self.subjects = subjects
        
        # Thompson Sampling bandit for each subject
        self.bandits = {
            subject: ThompsonSamplingBandit() for subject in subjects
        }
        
        # Subject-specific knowledge tracking
        self.knowledge_states = {
            subject: {
                'estimated_knowledge': 0.5,  # Initial knowledge estimate
                'confidence': 0.1,            # Confidence in estimate
                'interaction_count': 0,       # Number of interactions
                'recent_performance': deque(maxlen=10),  # Recent accuracy
                'optimal_difficulty': 5       # Current optimal difficulty
            } for subject in subjects
        }
        
        # Subject baseline response times
        self.subject_baselines = {
            'frontend_web_dev': 18.0,
            'backend_web_dev': 20.0,
            'software_engineering': 16.0,
            'cloud_computing': 22.0
        }
    
    def update_knowledge_state(self, subject, is_correct, difficulty_level, 
                             response_time, cognitive_load):
        """
        Update Bayesian knowledge state for a subject
        
        Args:
            subject: Subject name
            is_correct: Whether answer was correct
            difficulty_level: Question difficulty (1-10)
            response_time: Response time in seconds
            cognitive_load: Current cognitive load (0-1)
        """
        if subject not in self.knowledge_states:
            return
        
        state = self.knowledge_states[subject]
        
        # Update interaction count
        state['interaction_count'] += 1
        
        # Update recent performance
        state['recent_performance'].append(is_correct)
        
        # Bayesian knowledge update using difficulty and correctness
        prior_knowledge = state['estimated_knowledge']
        prior_confidence = state['confidence']
        
        # Expected probability of correctness given knowledge and difficulty
        expected_prob = max(0.1, min(0.9, 
            prior_knowledge - (difficulty_level - 5) * 0.1
        ))
        
        # Likelihood of observing this result
        if is_correct:
            likelihood = expected_prob
        else:
            likelihood = 1 - expected_prob
        
        # Bayesian update (simplified)
        # Increase confidence with more data
        new_confidence = min(0.9, prior_confidence + 0.05)
        
        # Update knowledge estimate
        learning_rate = 0.1 * (1 - prior_confidence)  # Learn more when less confident
        
        if is_correct:
            # Correct answer increases knowledge estimate
            knowledge_boost = learning_rate * (1 - prior_knowledge)
            new_knowledge = prior_knowledge + knowledge_boost
        else:
            # Incorrect answer decreases knowledge estimate
            knowledge_penalty = learning_rate * prior_knowledge * 0.5
            new_knowledge = prior_knowledge - knowledge_penalty
        
        # Ensure knowledge stays in valid range
        new_knowledge = max(0.1, min(0.9, new_knowledge))
        
        # Update state
        state['estimated_knowledge'] = new_knowledge
        state['confidence'] = new_confidence
        
        # Update optimal difficulty based on knowledge
        # Optimal difficulty should challenge but not overwhelm
        if len(state['recent_performance']) >= 3:
            recent_accuracy = np.mean(list(state['recent_performance']))
            
            if recent_accuracy > 0.8 and cognitive_load < 0.5:
                # Performing well with low cognitive load - increase difficulty
                state['optimal_difficulty'] = min(10, state['optimal_difficulty'] + 0.5)
            elif recent_accuracy < 0.5 or cognitive_load > 0.7:
                # Struggling or high cognitive load - decrease difficulty
                state['optimal_difficulty'] = max(1, state['optimal_difficulty'] - 0.5)
        
        # Update bandit with learning effectiveness
        effectiveness = self.bandits[subject].calculate_learning_effectiveness(
            is_correct, response_time, cognitive_load, difficulty_level,
            self.subject_baselines.get(subject, 18.0)
        )
        
        # Update the bandit (difficulty_level - 1 for 0-indexing)
        self.bandits[subject].update_arm(difficulty_level - 1, effectiveness)
    
    def select_next_difficulty(self, subject, cognitive_load_score=0.3):
        """
        Select optimal difficulty level for next question
        
        Args:
            subject: Subject name
            cognitive_load_score: Current cognitive load (0-1)
            
        Returns:
            int: Recommended difficulty level (1-10)
        """
        if subject not in self.bandits:
            return 5  # Default medium difficulty
        
        # Get Thompson Sampling recommendation
        bandit_arm = self.bandits[subject].select_arm()
        bandit_difficulty = bandit_arm + 1
        
        # Get knowledge-based recommendation
        state = self.knowledge_states[subject]
        knowledge_difficulty = int(round(state['optimal_difficulty']))
        
        # Adjust for cognitive load
        if cognitive_load_score > 0.7:
            # High cognitive load - reduce difficulty
            cognitive_adjustment = -2
        elif cognitive_load_score > 0.5:
            # Moderate cognitive load - slight reduction
            cognitive_adjustment = -1
        elif cognitive_load_score < 0.3:
            # Low cognitive load - can handle more challenge
            cognitive_adjustment = 1
        else:
            cognitive_adjustment = 0
        
        # Combine recommendations with weights
        combined_difficulty = (
            bandit_difficulty * 0.6 +           # 60% bandit recommendation
            knowledge_difficulty * 0.4          # 40% knowledge-based
        ) + cognitive_adjustment
        
        # Ensure difficulty is in valid range
        final_difficulty = max(1, min(10, int(round(combined_difficulty))))
        
        return final_difficulty
    
    def get_student_profile(self, subject=None):
        """
        Get comprehensive student profile
        
        Args:
            subject: Specific subject (None for all subjects)
            
        Returns:
            dict: Student profile information
        """
        if subject:
            if subject not in self.knowledge_states:
                return {}
            
            state = self.knowledge_states[subject]
            bandit_stats = self.bandits[subject].get_arm_statistics()
            
            return {
                'subject': subject,
                'estimated_knowledge': state['estimated_knowledge'],
                'confidence': state['confidence'],
                'interaction_count': state['interaction_count'],
                'recent_accuracy': np.mean(list(state['recent_performance'])) if state['recent_performance'] else 0.5,
                'optimal_difficulty': state['optimal_difficulty'],
                'bandit_statistics': bandit_stats
            }
        else:
            # Return profile for all subjects
            profile = {}
            for subj in self.subjects:
                profile[subj] = self.get_student_profile(subj)
            
            return profile
    
    def save_state(self):
        """
        Serialize engine state for persistence
        
        Returns:
            dict: Serializable state
        """
        state = {
            'subjects': self.subjects,
            'knowledge_states': {},
            'bandit_states': {}
        }
        
        # Save knowledge states
        for subject, knowledge_state in self.knowledge_states.items():
            state['knowledge_states'][subject] = {
                'estimated_knowledge': knowledge_state['estimated_knowledge'],
                'confidence': knowledge_state['confidence'],
                'interaction_count': knowledge_state['interaction_count'],
                'recent_performance': list(knowledge_state['recent_performance']),
                'optimal_difficulty': knowledge_state['optimal_difficulty']
            }
        
        # Save bandit states
        for subject, bandit in self.bandits.items():
            state['bandit_states'][subject] = {
                'alpha': bandit.alpha.tolist(),
                'beta': bandit.beta.tolist(),
                'arm_counts': bandit.arm_counts.tolist(),
                'total_selections': bandit.total_selections,
                'arm_rewards': bandit.arm_rewards.tolist()
            }
        
        return state
    
    def load_state(self, state):
        """
        Load engine state from serialized data
        
        Args:
            state: Serialized state dictionary
        """
        if 'knowledge_states' in state:
            for subject, knowledge_state in state['knowledge_states'].items():
                if subject in self.knowledge_states:
                    self.knowledge_states[subject].update(knowledge_state)
                    # Convert list back to deque
                    self.knowledge_states[subject]['recent_performance'] = deque(
                        knowledge_state['recent_performance'], maxlen=10
                    )
        
        if 'bandit_states' in state:
            for subject, bandit_state in state['bandit_states'].items():
                if subject in self.bandits:
                    bandit = self.bandits[subject]
                    bandit.alpha = np.array(bandit_state['alpha'])
                    bandit.beta = np.array(bandit_state['beta'])
                    bandit.arm_counts = np.array(bandit_state['arm_counts'])
                    bandit.total_selections = bandit_state['total_selections']
                    bandit.arm_rewards = np.array(bandit_state['arm_rewards'])

# Example usage and testing
if __name__ == "__main__":
    # Test the adaptive engine
    engine = SubjectSpecificAdaptiveEngine()
    
    # Simulate some learning interactions
    subjects = ['frontend_web_dev', 'backend_web_dev']
    
    for subject in subjects:
        print(f"\n=== Testing {subject} ===")
        
        # Simulate 10 interactions
        for i in range(10):
            # Get difficulty recommendation
            difficulty = engine.select_next_difficulty(subject, cognitive_load_score=0.4)
            
            # Simulate student response (better performance on easier questions)
            is_correct = np.random.random() < (0.9 - (difficulty - 1) * 0.08)
            response_time = 15 + difficulty * 2 + np.random.normal(0, 3)
            
            # Update engine
            engine.update_knowledge_state(
                subject, is_correct, difficulty, response_time, 0.4
            )
            
            print(f"Q{i+1}: Difficulty {difficulty}, Correct: {is_correct}")
        
        # Show final profile
        profile = engine.get_student_profile(subject)
        print(f"Final Knowledge: {profile['estimated_knowledge']:.3f}")
        print(f"Optimal Difficulty: {profile['optimal_difficulty']:.1f}")
