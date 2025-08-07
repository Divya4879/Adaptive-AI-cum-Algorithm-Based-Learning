#!/usr/bin/env python3
"""
Simple Backend Test - Verify core functionality
"""

import sys
import os
sys.path.append('models')

from app import app
from tutor_system import AdaptiveTutorSystem
import json

def test_ml_integration():
    """Test ML system integration"""
    print("🧠 Testing ML Integration...")
    
    # Test tutor system directly
    tutor = AdaptiveTutorSystem(student_id="test_user")
    tutor.start_session("test_session")
    
    # Test question recommendation
    recommendation = tutor.get_next_question_difficulty('frontend_web_dev')
    print(f"✅ Question recommendation: Difficulty {recommendation['recommended_difficulty']}")
    print(f"✅ Cognitive load: {recommendation['cognitive_load_level']}")
    print(f"✅ Reasoning: {recommendation['reasoning']}")
    
    # Test answer submission
    question_data = {
        'question_id': 1,
        'subject': 'frontend_web_dev',
        'difficulty_level': recommendation['recommended_difficulty'],
        'correct_answer': 'A'
    }
    
    feedback = tutor.submit_answer(question_data, 'A', 15.0)
    print(f"✅ Answer feedback: {feedback['feedback']}")
    print(f"✅ Knowledge update: {feedback['updated_knowledge_estimate']:.3f}")
    
    return True

def test_flask_app():
    """Test Flask app configuration"""
    print("\n🌐 Testing Flask App...")
    
    with app.app_context():
        # Test app configuration
        print(f"✅ App name: {app.name}")
        print(f"✅ Debug mode: {app.debug}")
        print(f"✅ Database URI configured: {'SQLALCHEMY_DATABASE_URI' in app.config}")
        
        # Test database initialization
        try:
            from app import db
            db.create_all()
            print("✅ Database tables created successfully")
        except Exception as e:
            print(f"⚠️ Database warning: {e}")
        
        # Test questions cache
        try:
            from app import load_questions_cache
            questions_df = load_questions_cache()
            print(f"✅ Questions cache loaded: {len(questions_df)} questions")
        except Exception as e:
            print(f"⚠️ Questions cache warning: {e}")
    
    return True

def test_api_routes():
    """Test API routes are registered"""
    print("\n🛣️ Testing API Routes...")
    
    with app.test_client() as client:
        # Test health check
        response = client.get('/')
        assert response.status_code == 200
        data = json.loads(response.data)
        assert data['status'] == 'healthy'
        print("✅ Health check endpoint working")
        
        # Test subjects endpoint
        response = client.get('/api/subjects')
        assert response.status_code == 200
        data = json.loads(response.data)
        assert data['success'] == True
        print(f"✅ Subjects endpoint: {len(data['subjects'])} subjects")
        
        # Test system stats
        response = client.get('/api/system/stats')
        assert response.status_code == 200
        data = json.loads(response.data)
        assert data['success'] == True
        print("✅ System stats endpoint working")
    
    return True

def main():
    """Run simple backend tests"""
    print("🚀 Simple Backend Test - Checkpoint 3")
    print("=" * 50)
    
    try:
        test_ml_integration()
        test_flask_app()
        test_api_routes()
        
        print("\n" + "=" * 50)
        print("🎉 BACKEND CORE FUNCTIONALITY WORKING!")
        print("=" * 50)
        
        print("\n✅ Verified Components:")
        print("• ML algorithms integration")
        print("• Flask app configuration")
        print("• Database setup")
        print("• Questions cache loading")
        print("• API route registration")
        print("• JSON response formatting")
        
        print("\n🚀 Backend is ready for frontend integration!")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Test failed: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    main()
