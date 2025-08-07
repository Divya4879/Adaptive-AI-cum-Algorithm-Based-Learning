#!/usr/bin/env python3
"""
Demo Script - Shows Adaptive Behavior Patterns
Simulates different student scenarios to demonstrate adaptation
"""

import sys
import os
sys.path.append('models')

import numpy as np
from tutor_system import AdaptiveTutorSystem
import pandas as pd

def demo_scenario(scenario_name, student_behavior, num_questions=15):
    """
    Demonstrate a specific learning scenario
    
    Args:
        scenario_name: Name of the scenario
        student_behavior: Function that determines student performance
        num_questions: Number of questions to simulate
    """
    print(f"\n{'='*60}")
    print(f"📚 SCENARIO: {scenario_name}")
    print(f"{'='*60}")
    
    tutor = AdaptiveTutorSystem(student_id=f"demo_{scenario_name.lower().replace(' ', '_')}")
    tutor.start_session(f"{scenario_name}_demo")
    
    subjects = ['frontend_web_dev', 'backend_web_dev', 'software_engineering', 'cloud_computing']
    subject_names = {
        'frontend_web_dev': 'Frontend',
        'backend_web_dev': 'Backend', 
        'software_engineering': 'Software Eng',
        'cloud_computing': 'Cloud'
    }
    
    print(f"{'Q#':<3} {'Subject':<12} {'Diff':<4} {'Correct':<7} {'Time':<6} {'CogLoad':<8} {'Knowledge':<9} {'Reasoning'}")
    print("-" * 80)
    
    for i in range(num_questions):
        subject = subjects[i % len(subjects)]
        
        # Get AI recommendation
        recommendation = tutor.get_next_question_difficulty(subject)
        difficulty = recommendation['recommended_difficulty']
        
        # Simulate question
        question_data = {
            'question_id': i + 1,
            'subject': subject,
            'difficulty_level': difficulty,
            'correct_answer': 'A'
        }
        
        # Get student performance from behavior function
        is_correct, response_time = student_behavior(i, difficulty, subject)
        student_answer = 'A' if is_correct else 'B'
        
        # Submit answer
        feedback = tutor.submit_answer(question_data, student_answer, response_time)
        
        # Display results
        print(f"{i+1:<3} {subject_names[subject]:<12} {difficulty:<4} {'✅' if is_correct else '❌':<7} "
              f"{response_time:<6.1f} {recommendation['cognitive_load_score']:<8.3f} "
              f"{feedback['updated_knowledge_estimate']:<9.3f} {recommendation['reasoning'][:40]}...")
    
    # Show final dashboard
    dashboard = tutor.get_student_dashboard()
    
    print(f"\n📊 FINAL RESULTS:")
    print(f"Overall Accuracy: {dashboard['overall_stats']['accuracy_rate']:.1%}")
    print(f"Average Response Time: {dashboard['overall_stats']['average_response_time']:.1f}s")
    
    print(f"\n📚 Subject Knowledge Levels:")
    for subject, profile in dashboard['subject_profiles'].items():
        print(f"  • {subject_names[subject]}: {profile['knowledge_level']:.3f} "
              f"(Optimal Difficulty: {profile['optimal_difficulty']:.1f})")
    
    if dashboard['learning_recommendations']:
        print(f"\n💡 AI Recommendations:")
        for rec in dashboard['learning_recommendations']:
            print(f"  • {rec}")
    
    return dashboard

def strong_student_behavior(question_num, difficulty, subject):
    """Simulate a strong student who performs well consistently"""
    # Strong students get most questions right, respond quickly
    base_accuracy = 0.85
    difficulty_penalty = (difficulty - 5) * 0.05
    accuracy = max(0.6, base_accuracy - difficulty_penalty)
    
    is_correct = np.random.random() < accuracy
    response_time = 12 + difficulty * 1.5 + np.random.normal(0, 2)
    response_time = max(5, response_time)
    
    return is_correct, response_time

def struggling_student_behavior(question_num, difficulty, subject):
    """Simulate a struggling student with low accuracy and slow responses"""
    base_accuracy = 0.4
    difficulty_penalty = (difficulty - 3) * 0.08
    accuracy = max(0.1, base_accuracy - difficulty_penalty)
    
    is_correct = np.random.random() < accuracy
    response_time = 25 + difficulty * 3 + np.random.normal(0, 4)
    response_time = max(8, response_time)
    
    return is_correct, response_time

def fatiguing_student_behavior(question_num, difficulty, subject):
    """Simulate a student who starts strong but gets tired over time"""
    fatigue_factor = 1.0 - (question_num / 20.0)  # Gradual decline
    
    base_accuracy = 0.75 * fatigue_factor
    difficulty_penalty = (difficulty - 4) * 0.06
    accuracy = max(0.2, base_accuracy - difficulty_penalty)
    
    is_correct = np.random.random() < accuracy
    
    # Response time increases with fatigue
    base_time = 15 + (question_num * 0.8)  # Gets slower over time
    response_time = base_time + difficulty * 2 + np.random.normal(0, 3)
    response_time = max(6, response_time)
    
    return is_correct, response_time

def subject_specialist_behavior(question_num, difficulty, subject):
    """Simulate a student who's great at frontend but weak at backend"""
    if subject == 'frontend_web_dev':
        # Strong in frontend
        base_accuracy = 0.85
        base_time = 12
    elif subject == 'backend_web_dev':
        # Weak in backend
        base_accuracy = 0.35
        base_time = 28
    else:
        # Moderate in others
        base_accuracy = 0.6
        base_time = 18
    
    difficulty_penalty = (difficulty - 5) * 0.07
    accuracy = max(0.1, base_accuracy - difficulty_penalty)
    
    is_correct = np.random.random() < accuracy
    response_time = base_time + difficulty * 2 + np.random.normal(0, 2)
    response_time = max(5, response_time)
    
    return is_correct, response_time

def main():
    """Run all demo scenarios"""
    print("🚀 ADAPTIVE AI TUTOR - BEHAVIOR DEMONSTRATION")
    print("This shows how the system adapts to different student patterns")
    
    scenarios = [
        ("Strong Student", strong_student_behavior),
        ("Struggling Student", struggling_student_behavior), 
        ("Fatiguing Student", fatiguing_student_behavior),
        ("Subject Specialist", subject_specialist_behavior)
    ]
    
    results = {}
    
    for scenario_name, behavior_func in scenarios:
        results[scenario_name] = demo_scenario(scenario_name, behavior_func, 15)
        input(f"\nPress Enter to continue to next scenario...")
    
    # Summary comparison
    print(f"\n{'='*60}")
    print(f"📊 SCENARIO COMPARISON")
    print(f"{'='*60}")
    
    print(f"{'Scenario':<20} {'Accuracy':<10} {'Avg Time':<10} {'Frontend':<10} {'Backend':<10}")
    print("-" * 60)
    
    for scenario_name, dashboard in results.items():
        stats = dashboard['overall_stats']
        profiles = dashboard['subject_profiles']
        
        frontend_knowledge = profiles.get('frontend_web_dev', {}).get('knowledge_level', 0)
        backend_knowledge = profiles.get('backend_web_dev', {}).get('knowledge_level', 0)
        
        print(f"{scenario_name:<20} {stats['accuracy_rate']:<10.1%} "
              f"{stats['average_response_time']:<10.1f} "
              f"{frontend_knowledge:<10.3f} {backend_knowledge:<10.3f}")
    
    print(f"\n🎯 KEY OBSERVATIONS:")
    print("• Strong students get harder questions over time")
    print("• Struggling students get easier questions and more support")
    print("• Fatiguing students get cognitive load warnings")
    print("• Subject specialists get different difficulty per subject")
    print("• System maintains separate knowledge estimates per subject")
    
    print(f"\n✅ The system successfully adapts to different learning patterns!")

if __name__ == "__main__":
    main()
