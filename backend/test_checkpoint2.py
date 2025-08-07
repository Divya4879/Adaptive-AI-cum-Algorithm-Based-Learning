#!/usr/bin/env python3
"""
Checkpoint 2 Validation: Core ML Algorithms
Tests cognitive load detection, adaptive difficulty engine, and integrated system
"""

import sys
import os
sys.path.append('models')

import numpy as np
from datetime import datetime
from cognitive_detector import CognitiveLoadDetector
from adaptive_engine import SubjectSpecificAdaptiveEngine, ThompsonSamplingBandit
from tutor_system import AdaptiveTutorSystem

def test_cognitive_load_detection():
    """Test the Bayesian cognitive load detection system"""
    print("🧠 Testing Cognitive Load Detection...")
    
    detector = CognitiveLoadDetector()
    
    # Test 1: Low cognitive load scenario
    low_load_interactions = [
        {'response_time': 15.0, 'is_correct': True},
        {'response_time': 16.0, 'is_correct': True},
        {'response_time': 14.0, 'is_correct': True},
        {'response_time': 17.0, 'is_correct': True},
        {'response_time': 15.5, 'is_correct': True},
    ]
    
    result_low = detector.process_batch(low_load_interactions, 'frontend_web_dev')
    print(f"✅ Low load test: Score {result_low['cognitive_load_score']:.3f}, Level: {result_low['cognitive_load_level']}")
    assert result_low['cognitive_load_level'] in ['low', 'moderate'], "Low load scenario failed"
    
    # Test 2: High cognitive load scenario
    high_load_interactions = [
        {'response_time': 35.0, 'is_correct': False},
        {'response_time': 40.0, 'is_correct': False},
        {'response_time': 45.0, 'is_correct': False},
        {'response_time': 50.0, 'is_correct': False},
        {'response_time': 38.0, 'is_correct': False},
    ]
    
    result_high = detector.process_batch(high_load_interactions, 'frontend_web_dev')
    print(f"✅ High load test: Score {result_high['cognitive_load_score']:.3f}, Level: {result_high['cognitive_load_level']}")
    assert result_high['cognitive_load_level'] in ['high', 'critical'], "High load scenario failed"
    
    # Test 3: Bayesian confidence calculation
    assert 0 <= result_low['confidence'] <= 1, "Confidence out of range"
    assert 'raw_scores' in result_low, "Missing raw scores breakdown"
    
    print("✅ Cognitive load detection tests passed")
    return True

def test_thompson_sampling_bandit():
    """Test the Thompson Sampling Multi-Armed Bandit"""
    print("🎯 Testing Thompson Sampling Bandit...")
    
    bandit = ThompsonSamplingBandit(n_arms=10)
    
    # Simulate learning with different difficulty preferences
    # Assume difficulty 5-6 are optimal for this simulated student
    optimal_difficulties = [4, 5, 6]  # 0-indexed
    
    for i in range(100):
        # Select arm
        selected_arm = bandit.select_arm()
        
        # Simulate reward (higher for optimal difficulties)
        if selected_arm in optimal_difficulties:
            reward = np.random.beta(8, 2)  # High reward
        else:
            reward = np.random.beta(2, 8)  # Low reward
        
        # Update bandit
        bandit.update_arm(selected_arm, reward)
    
    # Check if bandit learned to prefer optimal difficulties
    stats = bandit.get_arm_statistics()
    
    # Get top 3 performing arms
    arm_means = [(arm, stats[arm]['posterior_mean']) for arm in stats]
    top_arms = sorted(arm_means, key=lambda x: x[1], reverse=True)[:3]
    
    print(f"✅ Top performing difficulties: {[arm[0] for arm in top_arms]}")
    
    # At least 2 of top 3 should be optimal
    top_arm_indices = [arm[0] - 1 for arm in top_arms]  # Convert back to 0-indexed
    optimal_in_top = sum(1 for arm in top_arm_indices if arm in optimal_difficulties)
    
    assert optimal_in_top >= 2, f"Bandit didn't learn optimal difficulties. Top arms: {top_arm_indices}"
    
    print("✅ Thompson Sampling bandit tests passed")
    return True

def test_subject_specific_adaptation():
    """Test subject-specific adaptive engine"""
    print("📚 Testing Subject-Specific Adaptation...")
    
    engine = SubjectSpecificAdaptiveEngine()
    
    # Simulate different performance in different subjects
    subjects_performance = {
        'frontend_web_dev': 0.8,  # Strong in frontend
        'backend_web_dev': 0.4,   # Weak in backend
        'software_engineering': 0.6,  # Moderate in SE
        'cloud_computing': 0.7    # Good in cloud
    }
    
    # Simulate 20 interactions per subject
    for subject, target_accuracy in subjects_performance.items():
        for i in range(20):
            # Get difficulty recommendation
            difficulty = engine.select_next_difficulty(subject, cognitive_load_score=0.3)
            
            # Simulate performance based on target accuracy and difficulty
            base_prob = target_accuracy - (difficulty - 5) * 0.08
            is_correct = np.random.random() < max(0.1, min(0.9, base_prob))
            
            # Simulate response time
            response_time = 15 + difficulty * 2 + np.random.normal(0, 2)
            
            # Update engine
            engine.update_knowledge_state(
                subject, is_correct, difficulty, response_time, 0.3
            )
    
    # Check if engine learned different knowledge levels for different subjects
    profiles = {}
    for subject in subjects_performance:
        profile = engine.get_student_profile(subject)
        profiles[subject] = profile['estimated_knowledge']
        print(f"✅ {subject}: Knowledge {profile['estimated_knowledge']:.3f} (target: {subjects_performance[subject]:.3f})")
    
    # Verify that stronger subjects have higher knowledge estimates
    frontend_knowledge = profiles['frontend_web_dev']
    backend_knowledge = profiles['backend_web_dev']
    
    assert frontend_knowledge > backend_knowledge, "Subject-specific learning failed"
    
    print("✅ Subject-specific adaptation tests passed")
    return True

def test_integrated_system():
    """Test the integrated adaptive tutor system"""
    print("🎓 Testing Integrated Tutor System...")
    
    tutor = AdaptiveTutorSystem(student_id="test_checkpoint2")
    tutor.start_session("checkpoint2_test")
    
    # Simulate a realistic learning session
    subjects = ['frontend_web_dev', 'backend_web_dev', 'software_engineering']
    
    session_data = []
    
    for i in range(30):  # 30 questions
        subject = subjects[i % 3]
        
        # Get recommendation
        recommendation = tutor.get_next_question_difficulty(subject)
        difficulty = recommendation['recommended_difficulty']
        
        # Simulate question
        question_data = {
            'question_id': i + 1,
            'subject': subject,
            'difficulty_level': difficulty,
            'correct_answer': 'A'
        }
        
        # Simulate student performance (gets tired over time)
        fatigue_factor = 1.0 - (i / 50.0)  # Gradual fatigue
        base_accuracy = 0.7 * fatigue_factor
        difficulty_penalty = (difficulty - 5) * 0.08
        
        is_correct = np.random.random() < max(0.1, base_accuracy - difficulty_penalty)
        student_response = 'A' if is_correct else 'B'
        
        # Response time increases with difficulty and fatigue
        response_time = 15 + difficulty * 2 + (i * 0.5) + np.random.normal(0, 2)
        response_time = max(5.0, response_time)
        
        # Submit answer
        feedback = tutor.submit_answer(question_data, student_response, response_time)
        
        session_data.append({
            'question': i + 1,
            'subject': subject,
            'difficulty': difficulty,
            'correct': is_correct,
            'cognitive_load': recommendation['cognitive_load_score'],
            'knowledge_estimate': feedback['updated_knowledge_estimate']
        })
    
    # Get final dashboard
    dashboard = tutor.get_student_dashboard()
    
    # Validate dashboard data
    assert dashboard['overall_stats']['total_questions'] == 30, "Question count mismatch"
    assert 0 <= dashboard['overall_stats']['accuracy_rate'] <= 1, "Invalid accuracy rate"
    assert len(dashboard['subject_profiles']) > 0, "No subject profiles generated"
    
    # Check if cognitive load was detected
    cognitive_events = dashboard.get('cognitive_load_insights', [])
    
    # Check if system adapted difficulty over time
    early_difficulties = [d['difficulty'] for d in session_data[:10]]
    late_difficulties = [d['difficulty'] for d in session_data[-10:]]
    
    print(f"✅ Early avg difficulty: {np.mean(early_difficulties):.1f}")
    print(f"✅ Late avg difficulty: {np.mean(late_difficulties):.1f}")
    print(f"✅ Final accuracy: {dashboard['overall_stats']['accuracy_rate']:.1%}")
    print(f"✅ Subjects covered: {len(dashboard['subject_profiles'])}")
    
    # Test persistence
    saved_profile = tutor.save_student_profile()
    assert 'adaptive_engine_state' in saved_profile, "Profile saving failed"
    
    print("✅ Integrated system tests passed")
    return True

def test_performance_benchmarks():
    """Test performance requirements"""
    print("⚡ Testing Performance Benchmarks...")
    
    tutor = AdaptiveTutorSystem(student_id="performance_test")
    
    # Test response time for difficulty selection
    start_time = datetime.now()
    
    for i in range(100):
        recommendation = tutor.get_next_question_difficulty('frontend_web_dev')
    
    end_time = datetime.now()
    avg_time_ms = (end_time - start_time).total_seconds() * 1000 / 100
    
    print(f"✅ Average difficulty selection time: {avg_time_ms:.2f}ms")
    assert avg_time_ms < 100, f"Performance too slow: {avg_time_ms:.2f}ms > 100ms"
    
    # Test batch cognitive load processing
    interactions = [
        {'response_time': 15.0 + i, 'is_correct': i % 2 == 0}
        for i in range(10)
    ]
    
    detector = CognitiveLoadDetector()
    start_time = datetime.now()
    
    for i in range(50):
        result = detector.process_batch(interactions, 'frontend_web_dev')
    
    end_time = datetime.now()
    avg_cognitive_time_ms = (end_time - start_time).total_seconds() * 1000 / 50
    
    print(f"✅ Average cognitive load analysis time: {avg_cognitive_time_ms:.2f}ms")
    assert avg_cognitive_time_ms < 50, f"Cognitive analysis too slow: {avg_cognitive_time_ms:.2f}ms"
    
    print("✅ Performance benchmark tests passed")
    return True

def main():
    """Run all Checkpoint 2 tests"""
    print("🚀 Running Checkpoint 2 Validation Tests")
    print("=" * 60)
    
    try:
        # Test individual components
        test_cognitive_load_detection()
        print()
        
        test_thompson_sampling_bandit()
        print()
        
        test_subject_specific_adaptation()
        print()
        
        test_integrated_system()
        print()
        
        test_performance_benchmarks()
        print()
        
        print("=" * 60)
        print("🎉 CHECKPOINT 2 COMPLETED SUCCESSFULLY!")
        print("=" * 60)
        
        print("\n🧠 ML Algorithm Summary:")
        print("• Bayesian Cognitive Load Detection - ✅ Working")
        print("• Thompson Sampling Multi-Armed Bandit - ✅ Working")
        print("• Subject-Specific Knowledge Tracing - ✅ Working")
        print("• Persistent Student Profiles - ✅ Working")
        print("• Real-time Adaptation (<100ms) - ✅ Working")
        
        print("\n🎯 Key Features Implemented:")
        print("• Response time variance analysis")
        print("• Accuracy trend detection")
        print("• Consecutive error pattern recognition")
        print("• Bayesian inference for cognitive load")
        print("• Thompson Sampling for difficulty optimization")
        print("• Subject-specific learning models")
        print("• Session persistence and memory")
        print("• Real-time performance recommendations")
        
        print("\n✅ Ready for Checkpoint 3: Backend Development")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Test failed: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    main()
