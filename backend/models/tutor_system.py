"""
Integrated Adaptive Tutor System
Combines cognitive load detection and adaptive difficulty engine
Manages persistent student profiles with local storage integration
"""

import json
import numpy as np
from datetime import datetime, timedelta
from collections import deque, defaultdict

from cognitive_detector import CognitiveLoadDetector
from adaptive_engine import SubjectSpecificAdaptiveEngine

class AdaptiveTutorSystem:
    """
    Main system that orchestrates cognitive load detection and adaptive difficulty
    Maintains persistent student profiles across sessions
    """
    
    def __init__(self, student_id=None):
        """
        Initialize the adaptive tutor system
        
        Args:
            student_id: Unique identifier for the student
        """
        self.student_id = student_id
        
        # Initialize core components
        self.cognitive_detector = CognitiveLoadDetector(
            window_size=10, 
            batch_size=5
        )
        
        self.adaptive_engine = SubjectSpecificAdaptiveEngine()
        
        # Session management
        self.current_session = {
            'session_id': None,
            'start_time': None,
            'interactions': [],
            'current_subject': None,
            'questions_answered': 0,
            'session_cognitive_load_history': []
        }
        
        # Interaction history for cognitive load analysis
        self.interaction_history = defaultdict(deque)  # Per subject
        
        # Performance tracking
        self.session_stats = {
            'total_questions': 0,
            'correct_answers': 0,
            'subjects_covered': set(),
            'average_response_time': 0.0,
            'cognitive_load_events': []
        }
        
        # Load existing student profile if available
        self.load_student_profile()
    
    def start_session(self, session_id=None):
        """
        Start a new learning session
        
        Args:
            session_id: Optional session identifier
        """
        if session_id is None:
            session_id = f"session_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        self.current_session = {
            'session_id': session_id,
            'start_time': datetime.now(),
            'interactions': [],
            'current_subject': None,
            'questions_answered': 0,
            'session_cognitive_load_history': []
        }
        
        print(f"Started learning session: {session_id}")
    
    def get_next_question_difficulty(self, subject, force_cognitive_analysis=False):
        """
        Get optimal difficulty for next question based on current state
        
        Args:
            subject: Subject area for the question
            force_cognitive_analysis: Force cognitive load analysis even if batch not ready
            
        Returns:
            dict: Question difficulty recommendation with reasoning
        """
        # Update current subject
        self.current_session['current_subject'] = subject
        
        # Get recent interactions for this subject
        recent_interactions = list(self.interaction_history[subject])
        
        # Analyze cognitive load if we have enough data or forced
        cognitive_analysis = None
        if len(recent_interactions) >= self.cognitive_detector.batch_size or force_cognitive_analysis:
            if recent_interactions:
                cognitive_analysis = self.cognitive_detector.process_batch(
                    recent_interactions, subject
                )
        
        # Get current cognitive load score
        if cognitive_analysis:
            cognitive_load_score = cognitive_analysis['cognitive_load_score']
            cognitive_load_level = cognitive_analysis['cognitive_load_level']
            recommendations = cognitive_analysis['recommendations']
        else:
            # Default values when insufficient data
            cognitive_load_score = 0.3
            cognitive_load_level = 'moderate'
            recommendations = ["Continue learning to build your profile."]
        
        # Get difficulty recommendation from adaptive engine
        recommended_difficulty = self.adaptive_engine.select_next_difficulty(
            subject, cognitive_load_score
        )
        
        # Get student profile for this subject
        student_profile = self.adaptive_engine.get_student_profile(subject)
        
        # Determine reasoning for the difficulty selection
        reasoning = self._generate_difficulty_reasoning(
            recommended_difficulty, cognitive_load_level, 
            student_profile, subject
        )
        
        return {
            'recommended_difficulty': recommended_difficulty,
            'cognitive_load_score': cognitive_load_score,
            'cognitive_load_level': cognitive_load_level,
            'student_knowledge_estimate': student_profile.get('estimated_knowledge', 0.5),
            'confidence_in_estimate': student_profile.get('confidence', 0.1),
            'reasoning': reasoning,
            'recommendations': recommendations,
            'session_question_count': self.current_session['questions_answered'],
            'subject_interaction_count': student_profile.get('interaction_count', 0)
        }
    
    def submit_answer(self, question_data, student_response, response_time):
        """
        Process student answer and update all models
        
        Args:
            question_data: Dictionary with question information
            student_response: Student's answer
            response_time: Time taken to respond (seconds)
            
        Returns:
            dict: Feedback and updated recommendations
        """
        # Extract question information
        question_id = question_data.get('question_id')
        correct_answer = question_data.get('correct_answer')
        difficulty_level = question_data.get('difficulty_level')
        subject = question_data.get('subject')
        
        # Determine correctness
        is_correct = (student_response == correct_answer)
        
        # Create interaction record
        interaction = {
            'question_id': question_id,
            'subject': subject,
            'difficulty_level': difficulty_level,
            'student_answer': student_response,
            'correct_answer': correct_answer,
            'is_correct': is_correct,
            'response_time': response_time,
            'timestamp': datetime.now().isoformat(),
            'session_id': self.current_session['session_id']
        }
        
        # Add to interaction history
        self.interaction_history[subject].append(interaction)
        self.current_session['interactions'].append(interaction)
        
        # Update session stats
        self.current_session['questions_answered'] += 1
        self.session_stats['total_questions'] += 1
        self.session_stats['subjects_covered'].add(subject)
        
        if is_correct:
            self.session_stats['correct_answers'] += 1
        
        # Update running average response time
        total_time = (self.session_stats['average_response_time'] * 
                     (self.session_stats['total_questions'] - 1) + response_time)
        self.session_stats['average_response_time'] = total_time / self.session_stats['total_questions']
        
        # Get current cognitive load analysis
        recent_interactions = list(self.interaction_history[subject])
        cognitive_analysis = None
        
        if len(recent_interactions) >= self.cognitive_detector.batch_size:
            cognitive_analysis = self.cognitive_detector.process_batch(
                recent_interactions, subject
            )
            
            # Store cognitive load event if significant
            if cognitive_analysis['cognitive_load_score'] > 0.7:
                self.session_stats['cognitive_load_events'].append({
                    'timestamp': datetime.now().isoformat(),
                    'subject': subject,
                    'cognitive_load_score': cognitive_analysis['cognitive_load_score'],
                    'level': cognitive_analysis['cognitive_load_level']
                })
        
        # Update adaptive engine
        cognitive_load_score = cognitive_analysis['cognitive_load_score'] if cognitive_analysis else 0.3
        
        self.adaptive_engine.update_knowledge_state(
            subject, is_correct, difficulty_level, response_time, cognitive_load_score
        )
        
        # Generate feedback
        feedback = self._generate_feedback(
            is_correct, difficulty_level, response_time, 
            cognitive_analysis, subject
        )
        
        # Save updated profile
        self.save_student_profile()
        
        return {
            'is_correct': is_correct,
            'feedback': feedback,
            'cognitive_load_analysis': cognitive_analysis,
            'updated_knowledge_estimate': self.adaptive_engine.get_student_profile(subject).get('estimated_knowledge', 0.5),
            'session_progress': {
                'questions_answered': self.current_session['questions_answered'],
                'accuracy_rate': self.session_stats['correct_answers'] / self.session_stats['total_questions'],
                'average_response_time': self.session_stats['average_response_time']
            }
        }
    
    def get_student_dashboard(self):
        """
        Generate comprehensive student dashboard
        
        Returns:
            dict: Dashboard data with analytics and insights
        """
        dashboard = {
            'student_id': self.student_id,
            'session_info': {
                'current_session_id': self.current_session['session_id'],
                'session_start_time': self.current_session['start_time'].isoformat() if self.current_session['start_time'] else None,
                'questions_in_session': self.current_session['questions_answered']
            },
            'overall_stats': {
                'total_questions': self.session_stats['total_questions'],
                'correct_answers': self.session_stats['correct_answers'],
                'accuracy_rate': self.session_stats['correct_answers'] / max(1, self.session_stats['total_questions']),
                'average_response_time': self.session_stats['average_response_time'],
                'subjects_covered': list(self.session_stats['subjects_covered'])
            },
            'subject_profiles': {},
            'cognitive_load_insights': self._generate_cognitive_load_insights(),
            'learning_recommendations': self._generate_learning_recommendations(),
            'progress_trends': self._calculate_progress_trends()
        }
        
        # Add subject-specific profiles
        for subject in self.adaptive_engine.subjects:
            profile = self.adaptive_engine.get_student_profile(subject)
            if profile.get('interaction_count', 0) > 0:
                dashboard['subject_profiles'][subject] = {
                    'knowledge_level': profile['estimated_knowledge'],
                    'confidence': profile['confidence'],
                    'interactions': profile['interaction_count'],
                    'recent_accuracy': profile['recent_accuracy'],
                    'optimal_difficulty': profile['optimal_difficulty'],
                    'performance_trend': self._calculate_subject_trend(subject)
                }
        
        return dashboard
    
    def _generate_difficulty_reasoning(self, difficulty, cognitive_load_level, 
                                     student_profile, subject):
        """Generate human-readable reasoning for difficulty selection"""
        
        knowledge = student_profile.get('estimated_knowledge', 0.5)
        confidence = student_profile.get('confidence', 0.1)
        
        reasoning_parts = []
        
        # Knowledge-based reasoning
        if knowledge > 0.7:
            reasoning_parts.append("Strong knowledge in this subject")
        elif knowledge > 0.4:
            reasoning_parts.append("Moderate understanding of concepts")
        else:
            reasoning_parts.append("Building foundational knowledge")
        
        # Cognitive load reasoning
        if cognitive_load_level == 'low':
            reasoning_parts.append("low cognitive load allows for challenge")
        elif cognitive_load_level == 'high':
            reasoning_parts.append("high cognitive load requires easier questions")
        else:
            reasoning_parts.append("moderate cognitive load suggests current pace is good")
        
        # Confidence reasoning
        if confidence > 0.6:
            reasoning_parts.append("high confidence in assessment")
        else:
            reasoning_parts.append("still learning your patterns")
        
        return f"Difficulty {difficulty}: {', '.join(reasoning_parts)}."
    
    def _generate_feedback(self, is_correct, difficulty, response_time, 
                          cognitive_analysis, subject):
        """Generate personalized feedback for the student"""
        
        feedback_parts = []
        
        # Correctness feedback
        if is_correct:
            if difficulty >= 7:
                feedback_parts.append("Excellent! You're mastering advanced concepts.")
            elif difficulty >= 4:
                feedback_parts.append("Great job! You're building solid understanding.")
            else:
                feedback_parts.append("Correct! Ready for more challenging questions.")
        else:
            if difficulty <= 3:
                feedback_parts.append("Let's review the fundamentals for this topic.")
            else:
                feedback_parts.append("Good attempt! Let's try a slightly easier question.")
        
        # Response time feedback
        baseline = self.cognitive_detector.subject_baselines.get(subject, 18.0)
        expected_time = baseline * (1 + (difficulty - 5) * 0.1)
        
        if response_time < expected_time * 0.7:
            feedback_parts.append("Quick thinking!")
        elif response_time > expected_time * 1.5:
            feedback_parts.append("Take your time to think through the problem.")
        
        # Cognitive load feedback
        if cognitive_analysis and cognitive_analysis['cognitive_load_level'] == 'high':
            feedback_parts.append("Consider taking a short break to stay fresh.")
        
        return " ".join(feedback_parts)
    
    def _generate_cognitive_load_insights(self):
        """Generate insights about cognitive load patterns"""
        
        insights = []
        
        # Analyze cognitive load events
        if len(self.session_stats['cognitive_load_events']) > 2:
            insights.append("You've experienced some high cognitive load periods. Consider shorter study sessions.")
        elif len(self.session_stats['cognitive_load_events']) == 0:
            insights.append("Great focus! You're maintaining good cognitive load levels.")
        
        # Session length insights
        if self.current_session['questions_answered'] > 20:
            insights.append("Long study session detected. Consider taking breaks every 15-20 questions.")
        
        return insights
    
    def _generate_learning_recommendations(self):
        """Generate personalized learning recommendations"""
        
        recommendations = []
        
        # Overall accuracy recommendations
        accuracy = self.session_stats['correct_answers'] / max(1, self.session_stats['total_questions'])
        
        if accuracy > 0.8:
            recommendations.append("Excellent performance! Consider exploring more advanced topics.")
        elif accuracy < 0.5:
            recommendations.append("Focus on reviewing fundamental concepts before advancing.")
        
        # Subject-specific recommendations
        subject_performances = {}
        for subject in self.session_stats['subjects_covered']:
            profile = self.adaptive_engine.get_student_profile(subject)
            if profile:
                subject_performances[subject] = profile['recent_accuracy']
        
        if subject_performances:
            best_subject = max(subject_performances, key=subject_performances.get)
            worst_subject = min(subject_performances, key=subject_performances.get)
            
            if subject_performances[best_subject] - subject_performances[worst_subject] > 0.3:
                recommendations.append(f"Strong in {best_subject.replace('_', ' ')}! Consider more practice in {worst_subject.replace('_', ' ')}.")
        
        return recommendations
    
    def _calculate_progress_trends(self):
        """Calculate learning progress trends"""
        
        trends = {}
        
        for subject in self.adaptive_engine.subjects:
            interactions = list(self.interaction_history[subject])
            if len(interactions) >= 5:
                # Calculate accuracy trend over time
                recent_accuracy = [int(interaction['is_correct']) for interaction in interactions[-10:]]
                early_accuracy = [int(interaction['is_correct']) for interaction in interactions[:5]]
                
                recent_avg = np.mean(recent_accuracy)
                early_avg = np.mean(early_accuracy)
                
                if recent_avg > early_avg + 0.1:
                    trend = "improving"
                elif recent_avg < early_avg - 0.1:
                    trend = "declining"
                else:
                    trend = "stable"
                
                trends[subject] = {
                    'trend': trend,
                    'recent_accuracy': recent_avg,
                    'early_accuracy': early_avg,
                    'improvement': recent_avg - early_avg
                }
        
        return trends
    
    def _calculate_subject_trend(self, subject):
        """Calculate performance trend for a specific subject"""
        
        interactions = list(self.interaction_history[subject])
        if len(interactions) < 3:
            return "insufficient_data"
        
        # Look at last 5 interactions
        recent_performance = [int(interaction['is_correct']) for interaction in interactions[-5:]]
        accuracy_trend = np.mean(recent_performance)
        
        if accuracy_trend > 0.8:
            return "excellent"
        elif accuracy_trend > 0.6:
            return "good"
        elif accuracy_trend > 0.4:
            return "fair"
        else:
            return "needs_improvement"
    
    def save_student_profile(self):
        """Save student profile to persistent storage"""
        
        profile_data = {
            'student_id': self.student_id,
            'last_updated': datetime.now().isoformat(),
            'adaptive_engine_state': self.adaptive_engine.save_state(),
            'session_stats': {
                'total_questions': self.session_stats['total_questions'],
                'correct_answers': self.session_stats['correct_answers'],
                'subjects_covered': list(self.session_stats['subjects_covered']),
                'average_response_time': self.session_stats['average_response_time']
            },
            'interaction_history_summary': {
                subject: len(interactions) 
                for subject, interactions in self.interaction_history.items()
            }
        }
        
        # In a real implementation, this would save to database or file
        # For now, we'll store it as a class attribute for demo purposes
        self._saved_profile = profile_data
        
        return profile_data
    
    def load_student_profile(self):
        """Load student profile from persistent storage"""
        
        # In a real implementation, this would load from database or file
        # For now, we'll check if we have a saved profile
        if hasattr(self, '_saved_profile'):
            profile_data = self._saved_profile
            
            # Restore adaptive engine state
            if 'adaptive_engine_state' in profile_data:
                self.adaptive_engine.load_state(profile_data['adaptive_engine_state'])
            
            # Restore session stats
            if 'session_stats' in profile_data:
                saved_stats = profile_data['session_stats']
                self.session_stats.update(saved_stats)
                self.session_stats['subjects_covered'] = set(saved_stats.get('subjects_covered', []))
            
            print(f"Loaded profile for student {self.student_id}")
        else:
            print(f"No existing profile found for student {self.student_id}")

# Example usage and testing
if __name__ == "__main__":
    # Test the integrated system
    tutor = AdaptiveTutorSystem(student_id="test_student_001")
    tutor.start_session()
    
    # Simulate a learning session
    subjects = ['frontend_web_dev', 'backend_web_dev']
    
    for i in range(15):
        subject = subjects[i % 2]
        
        # Get next question difficulty
        recommendation = tutor.get_next_question_difficulty(subject)
        difficulty = recommendation['recommended_difficulty']
        
        print(f"\nQuestion {i+1} ({subject}):")
        print(f"Recommended difficulty: {difficulty}")
        print(f"Reasoning: {recommendation['reasoning']}")
        
        # Simulate question and response
        question_data = {
            'question_id': i + 1,
            'subject': subject,
            'difficulty_level': difficulty,
            'correct_answer': 'A'
        }
        
        # Simulate student performance (better on easier questions)
        is_correct = np.random.random() < (0.9 - (difficulty - 1) * 0.08)
        student_response = 'A' if is_correct else 'B'
        response_time = 15 + difficulty * 2 + np.random.normal(0, 3)
        
        # Submit answer
        feedback = tutor.submit_answer(question_data, student_response, response_time)
        print(f"Result: {'Correct' if feedback['is_correct'] else 'Incorrect'}")
        print(f"Feedback: {feedback['feedback']}")
    
    # Show final dashboard
    dashboard = tutor.get_student_dashboard()
    print(f"\n=== Final Dashboard ===")
    print(f"Overall accuracy: {dashboard['overall_stats']['accuracy_rate']:.1%}")
    print(f"Average response time: {dashboard['overall_stats']['average_response_time']:.1f}s")
    
    for subject, profile in dashboard['subject_profiles'].items():
        print(f"{subject}: Knowledge {profile['knowledge_level']:.2f}, Trend: {profile['performance_trend']}")
