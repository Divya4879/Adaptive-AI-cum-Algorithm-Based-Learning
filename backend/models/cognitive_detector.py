"""
Cognitive Load Detection using Bayesian inference and statistical analysis
Focuses on response time variance, accuracy trends, and consecutive errors
"""

import numpy as np
from scipy import stats
from collections import deque
import json
from datetime import datetime, timedelta

class CognitiveLoadDetector:
    """
    Detects student cognitive load using multiple indicators:
    - Response time variance (primary indicator)
    - Accuracy trend analysis (secondary)
    - Consecutive error patterns (tertiary)
    """
    
    def __init__(self, window_size=10, batch_size=5):
        """
        Initialize cognitive load detector
        
        Args:
            window_size: Number of recent interactions to consider
            batch_size: Process cognitive load every N questions
        """
        self.window_size = window_size
        self.batch_size = batch_size
        
        # Bayesian priors for cognitive load estimation
        self.prior_alpha = 2.0  # Prior belief about low cognitive load
        self.prior_beta = 2.0   # Prior belief about high cognitive load
        
        # Thresholds for different cognitive load levels
        self.thresholds = {
            'low': 0.25,
            'moderate': 0.5,
            'high': 0.75
        }
        
        # Subject-specific baseline response times (from our data generation)
        self.subject_baselines = {
            'frontend_web_dev': 18.0,
            'backend_web_dev': 20.0,
            'software_engineering': 16.0,
            'cloud_computing': 22.0
        }
    
    def calculate_response_time_variance(self, response_times, subject):
        """
        Calculate normalized response time variance as cognitive load indicator
        
        Args:
            response_times: List of recent response times
            subject: Subject area for baseline comparison
            
        Returns:
            float: Variance-based cognitive load score (0-1)
        """
        if len(response_times) < 3:
            return 0.3  # Default moderate load for insufficient data
        
        baseline = self.subject_baselines.get(subject, 18.0)
        
        # Normalize response times by subject baseline
        normalized_times = [t / baseline for t in response_times]
        
        # Calculate coefficient of variation (std/mean)
        mean_time = np.mean(normalized_times)
        std_time = np.std(normalized_times)
        
        if mean_time == 0:
            return 0.5
        
        cv = std_time / mean_time
        
        # Convert coefficient of variation to cognitive load score
        # Higher variance = higher cognitive load
        variance_score = min(1.0, cv / 0.5)  # Normalize to 0-1 scale
        
        return variance_score
    
    def analyze_accuracy_trend(self, accuracy_history):
        """
        Analyze accuracy trend to detect cognitive fatigue
        
        Args:
            accuracy_history: List of recent accuracy values (0 or 1)
            
        Returns:
            float: Trend-based cognitive load score (0-1)
        """
        if len(accuracy_history) < 3:
            return 0.3
        
        # Calculate moving average accuracy
        window = min(5, len(accuracy_history))
        recent_accuracy = np.mean(accuracy_history[-window:])
        
        # Calculate trend using linear regression
        x = np.arange(len(accuracy_history))
        y = np.array(accuracy_history)
        
        if len(x) > 1:
            slope, _, r_value, _, _ = stats.linregress(x, y)
            
            # Negative slope indicates declining accuracy (higher cognitive load)
            trend_score = max(0.0, -slope * 10)  # Scale slope to meaningful range
            
            # Combine with absolute accuracy level
            accuracy_penalty = max(0.0, (0.7 - recent_accuracy) * 2)  # Penalty if accuracy < 70%
            
            trend_load = min(1.0, trend_score + accuracy_penalty)
        else:
            trend_load = 1.0 - recent_accuracy  # Simple accuracy-based load
        
        return trend_load
    
    def detect_consecutive_errors(self, recent_responses):
        """
        Detect patterns of consecutive errors indicating high cognitive load
        
        Args:
            recent_responses: List of recent correct/incorrect responses
            
        Returns:
            float: Error pattern-based cognitive load score (0-1)
        """
        if len(recent_responses) < 2:
            return 0.2
        
        # Count consecutive errors
        max_consecutive = 0
        current_consecutive = 0
        
        for response in reversed(recent_responses):  # Start from most recent
            if not response:  # Incorrect answer
                current_consecutive += 1
                max_consecutive = max(max_consecutive, current_consecutive)
            else:
                current_consecutive = 0
        
        # Convert consecutive errors to cognitive load score
        if max_consecutive == 0:
            return 0.1  # Very low load if no errors
        elif max_consecutive == 1:
            return 0.3  # Low load for single error
        elif max_consecutive == 2:
            return 0.6  # Moderate load for two consecutive
        elif max_consecutive == 3:
            return 0.8  # High load for three consecutive
        else:
            return 1.0  # Maximum load for 4+ consecutive errors
    
    def bayesian_cognitive_load_estimation(self, variance_score, trend_score, error_score):
        """
        Use Bayesian inference to combine multiple cognitive load indicators
        
        Args:
            variance_score: Response time variance score
            trend_score: Accuracy trend score  
            error_score: Consecutive error score
            
        Returns:
            dict: Bayesian cognitive load estimation with confidence
        """
        # Weight the different indicators based on reliability
        weights = {
            'variance': 0.5,    # Primary indicator
            'trend': 0.3,       # Secondary indicator
            'errors': 0.2       # Tertiary indicator
        }
        
        # Calculate weighted cognitive load score
        weighted_score = (
            variance_score * weights['variance'] +
            trend_score * weights['trend'] +
            error_score * weights['errors']
        )
        
        # Bayesian update using Beta distribution
        # Treat cognitive load as success/failure with Beta prior
        
        # Convert score to "successes" and "failures" for Beta update
        evidence_strength = 10  # How much to weight this observation
        successes = weighted_score * evidence_strength
        failures = (1 - weighted_score) * evidence_strength
        
        # Update Beta distribution parameters
        posterior_alpha = self.prior_alpha + successes
        posterior_beta = self.prior_beta + failures
        
        # Calculate posterior mean and confidence interval
        posterior_mean = posterior_alpha / (posterior_alpha + posterior_beta)
        
        # Calculate 95% confidence interval
        confidence_interval = stats.beta.interval(
            0.95, posterior_alpha, posterior_beta
        )
        
        # Calculate confidence as inverse of interval width
        confidence = 1.0 - (confidence_interval[1] - confidence_interval[0])
        
        return {
            'cognitive_load_score': posterior_mean,
            'confidence': confidence,
            'raw_scores': {
                'variance': variance_score,
                'trend': trend_score,
                'errors': error_score
            },
            'posterior_params': {
                'alpha': posterior_alpha,
                'beta': posterior_beta
            }
        }
    
    def get_cognitive_load_level(self, cognitive_load_score):
        """
        Convert cognitive load score to interpretable level
        
        Args:
            cognitive_load_score: Numerical score (0-1)
            
        Returns:
            str: Cognitive load level ('low', 'moderate', 'high')
        """
        if cognitive_load_score < self.thresholds['low']:
            return 'low'
        elif cognitive_load_score < self.thresholds['moderate']:
            return 'moderate'
        elif cognitive_load_score < self.thresholds['high']:
            return 'high'
        else:
            return 'critical'
    
    def get_recommendations(self, cognitive_load_level, cognitive_load_score):
        """
        Generate actionable recommendations based on cognitive load
        
        Args:
            cognitive_load_level: Level string ('low', 'moderate', 'high', 'critical')
            cognitive_load_score: Numerical score for fine-tuning
            
        Returns:
            list: List of recommendation strings
        """
        recommendations = []
        
        if cognitive_load_level == 'low':
            recommendations.extend([
                "Great focus! You're ready for more challenging questions.",
                "Consider increasing the pace to maximize learning efficiency."
            ])
        elif cognitive_load_level == 'moderate':
            recommendations.extend([
                "Good learning pace. Continue with current difficulty level.",
                "Take brief pauses between questions if needed."
            ])
        elif cognitive_load_level == 'high':
            recommendations.extend([
                "Consider taking a 2-3 minute break to reduce cognitive load.",
                "Questions will be adjusted to a more comfortable difficulty."
            ])
        else:  # critical
            recommendations.extend([
                "Take a 5-10 minute break to prevent cognitive overload.",
                "Switching to easier questions to rebuild confidence.",
                "Consider ending the session and returning when refreshed."
            ])
        
        return recommendations
    
    def process_batch(self, interactions_batch, subject):
        """
        Process a batch of interactions to calculate cognitive load
        
        Args:
            interactions_batch: List of recent interaction dictionaries
            subject: Subject area being studied
            
        Returns:
            dict: Comprehensive cognitive load analysis
        """
        if len(interactions_batch) < 2:
            return {
                'cognitive_load_score': 0.3,
                'cognitive_load_level': 'moderate',
                'confidence': 0.5,
                'recommendations': ["Continue learning - insufficient data for detailed analysis."],
                'raw_scores': {'variance': 0.3, 'trend': 0.3, 'errors': 0.3}
            }
        
        # Extract data from interactions
        response_times = [interaction['response_time'] for interaction in interactions_batch]
        accuracy_history = [interaction['is_correct'] for interaction in interactions_batch]
        
        # Calculate individual cognitive load indicators
        variance_score = self.calculate_response_time_variance(response_times, subject)
        trend_score = self.analyze_accuracy_trend(accuracy_history)
        error_score = self.detect_consecutive_errors(accuracy_history)
        
        # Bayesian estimation
        bayesian_result = self.bayesian_cognitive_load_estimation(
            variance_score, trend_score, error_score
        )
        
        # Get level and recommendations
        cognitive_load_level = self.get_cognitive_load_level(
            bayesian_result['cognitive_load_score']
        )
        recommendations = self.get_recommendations(
            cognitive_load_level, bayesian_result['cognitive_load_score']
        )
        
        return {
            'cognitive_load_score': bayesian_result['cognitive_load_score'],
            'cognitive_load_level': cognitive_load_level,
            'confidence': bayesian_result['confidence'],
            'recommendations': recommendations,
            'raw_scores': bayesian_result['raw_scores'],
            'bayesian_params': bayesian_result['posterior_params'],
            'timestamp': datetime.now().isoformat()
        }

# Example usage and testing
if __name__ == "__main__":
    detector = CognitiveLoadDetector()
    
    # Test with sample interaction data
    sample_interactions = [
        {'response_time': 15.0, 'is_correct': True},
        {'response_time': 18.0, 'is_correct': True},
        {'response_time': 25.0, 'is_correct': False},
        {'response_time': 30.0, 'is_correct': False},
        {'response_time': 35.0, 'is_correct': False},
    ]
    
    result = detector.process_batch(sample_interactions, 'frontend_web_dev')
    
    print("Cognitive Load Analysis:")
    print(f"Score: {result['cognitive_load_score']:.3f}")
    print(f"Level: {result['cognitive_load_level']}")
    print(f"Confidence: {result['confidence']:.3f}")
    print("Recommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
