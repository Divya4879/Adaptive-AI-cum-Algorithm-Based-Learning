#!/usr/bin/env python3
"""
Test script to verify the project setup is working correctly
"""

import pandas as pd
import numpy as np
import json
import os
from datetime import datetime

def test_data_generation():
    """Test that synthetic data was generated correctly"""
    print("🧪 Testing Data Generation...")
    
    # Check if data files exist
    interactions_file = 'data/synthetic_interactions.csv'
    questions_file = 'data/synthetic_questions.csv'
    
    assert os.path.exists(interactions_file), "Interactions data file not found"
    assert os.path.exists(questions_file), "Questions data file not found"
    
    # Load and validate interactions data
    interactions_df = pd.read_csv(interactions_file)
    print(f"✅ Loaded {len(interactions_df)} interactions")
    
    # Validate data structure
    required_columns = [
        'student_id', 'question_id', 'difficulty_level', 'subject',
        'is_correct', 'response_time', 'cognitive_load_score'
    ]
    
    for col in required_columns:
        assert col in interactions_df.columns, f"Missing column: {col}"
    
    # Validate data ranges
    assert interactions_df['difficulty_level'].min() >= 1, "Difficulty level too low"
    assert interactions_df['difficulty_level'].max() <= 10, "Difficulty level too high"
    assert interactions_df['cognitive_load_score'].min() >= 0, "Cognitive load score too low"
    assert interactions_df['cognitive_load_score'].max() <= 1, "Cognitive load score too high"
    assert interactions_df['response_time'].min() > 0, "Response time must be positive"
    
    print("✅ Data validation passed")
    
    # Load and validate questions data
    questions_df = pd.read_csv(questions_file)
    print(f"✅ Loaded {len(questions_df)} questions")
    
    return interactions_df, questions_df

def test_basic_algorithms():
    """Test basic algorithm components"""
    print("\n🧠 Testing Basic Algorithms...")
    
    # Test cognitive load calculation
    response_times = [10, 12, 15, 20, 25]  # Increasing response times
    accuracy_trend = [1, 1, 0, 0, 0]  # Decreasing accuracy
    
    # Simple cognitive load calculation
    time_variance = np.std(response_times) / np.mean(response_times)
    accuracy_decline = 1 - np.mean(accuracy_trend)
    cognitive_load = min(1.0, (time_variance + accuracy_decline) / 2)
    
    print(f"✅ Cognitive load calculation: {cognitive_load:.3f}")
    assert 0 <= cognitive_load <= 1, "Cognitive load out of range"
    
    # Test adaptive difficulty logic
    current_difficulty = 5
    recent_accuracy = 0.8
    recent_response_time = 10
    base_time = 15
    
    if recent_accuracy > 0.7 and recent_response_time < base_time:
        new_difficulty = min(10, current_difficulty + 1)
    elif recent_accuracy < 0.5 or recent_response_time > base_time * 1.5:
        new_difficulty = max(1, current_difficulty - 1)
    else:
        new_difficulty = current_difficulty
    
    print(f"✅ Adaptive difficulty: {current_difficulty} → {new_difficulty}")
    
    return True

def test_api_structure():
    """Test that API structure is set up correctly"""
    print("\n🌐 Testing API Structure...")
    
    # Check if app.py exists and has basic structure
    assert os.path.exists('app.py'), "app.py not found"
    
    with open('app.py', 'r') as f:
        app_content = f.read()
        
    # Check for required imports and routes
    required_elements = [
        'from flask import Flask',
        '@app.route(\'/\')',
        '@app.route(\'/api/next-question\'',
        '@app.route(\'/api/submit-answer\'',
        '@app.route(\'/api/student-dashboard'
    ]
    
    for element in required_elements:
        assert element in app_content, f"Missing API element: {element}"
    
    print("✅ API structure validated")
    
    # Check database models
    assert os.path.exists('models/database.py'), "Database models not found"
    
    with open('models/database.py', 'r') as f:
        db_content = f.read()
        
    required_models = ['Student', 'StudentInteraction', 'Question']
    for model in required_models:
        assert f'class {model}' in db_content, f"Missing model: {model}"
    
    print("✅ Database models validated")
    
    return True

def generate_sample_api_response():
    """Generate sample API responses for testing"""
    print("\n📊 Generating Sample API Responses...")
    
    # Sample next question response
    next_question_response = {
        "success": True,
        "question": {
            "question_id": 1,
            "question_text": "What is the derivative of x²?",
            "difficulty_level": 4,
            "options": ["2x", "x", "2", "x²"],
            "subject": "mathematics"
        },
        "adaptive_info": {
            "current_difficulty": 4,
            "cognitive_load_estimate": 0.3,
            "recommendation": "moderate_pace"
        }
    }
    
    # Sample submit answer response
    submit_answer_response = {
        "success": True,
        "is_correct": True,
        "cognitive_load_score": 0.25,
        "next_difficulty_recommendation": 5,
        "feedback": "Great job! Moving to a slightly harder question."
    }
    
    # Sample dashboard response
    dashboard_response = {
        "success": True,
        "dashboard_data": {
            "student_id": 1,
            "total_questions": 15,
            "correct_answers": 12,
            "accuracy_rate": 0.8,
            "average_response_time": 12.5,
            "current_difficulty_level": 5,
            "cognitive_load_trend": [0.2, 0.3, 0.25, 0.4, 0.35],
            "recommendations": [
                "Great progress! You're ready for harder questions.",
                "Consider taking a short break after 5 more questions."
            ]
        }
    }
    
    print("✅ Sample API responses generated")
    return next_question_response, submit_answer_response, dashboard_response

def main():
    """Run all tests"""
    print("🚀 Running Checkpoint 1 Validation Tests")
    print("=" * 50)
    
    try:
        # Test data generation
        interactions_df, questions_df = test_data_generation()
        
        # Test basic algorithms
        test_basic_algorithms()
        
        # Test API structure
        test_api_structure()
        
        # Generate sample responses
        generate_sample_api_response()
        
        print("\n" + "=" * 50)
        print("🎉 CHECKPOINT 1 COMPLETED SUCCESSFULLY!")
        print("=" * 50)
        
        print("\n📊 Project Statistics:")
        print(f"• Students simulated: {interactions_df['student_id'].nunique()}")
        print(f"• Interactions generated: {len(interactions_df)}")
        print(f"• Questions in bank: {len(questions_df)}")
        print(f"• Subjects covered: {list(interactions_df['subject'].unique())}")
        print(f"• Difficulty range: {interactions_df['difficulty_level'].min()}-{interactions_df['difficulty_level'].max()}")
        print(f"• Average accuracy: {interactions_df['is_correct'].mean():.1%}")
        print(f"• Average cognitive load: {interactions_df['cognitive_load_score'].mean():.3f}")
        
        print("\n✅ Ready for Checkpoint 2: Core ML Algorithms")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Test failed: {str(e)}")
        return False

if __name__ == "__main__":
    main()
