#!/usr/bin/env python3
"""
Checkpoint 3 Validation: Backend API Integration
Tests all API endpoints and ML integration
"""

import requests
import json
import time
import sys
import os

# Test configuration
BASE_URL = "http://localhost:5000"
TEST_STUDENT_ID = "test_checkpoint3_student"

def test_api_health():
    """Test API health check"""
    print("🏥 Testing API Health Check...")
    
    try:
        response = requests.get(f"{BASE_URL}/")
        assert response.status_code == 200
        
        data = response.json()
        assert data['status'] == 'healthy'
        assert 'features' in data
        
        print(f"✅ API Health: {data['message']}")
        print(f"✅ Version: {data['version']}")
        print(f"✅ Features: {len(data['features'])} ML algorithms")
        
        return True
        
    except Exception as e:
        print(f"❌ Health check failed: {e}")
        return False

def test_student_creation():
    """Test student profile creation"""
    print("\n👤 Testing Student Creation...")
    
    try:
        payload = {
            "student_id": TEST_STUDENT_ID,
            "session_id": f"test_session_{int(time.time())}"
        }
        
        response = requests.post(f"{BASE_URL}/api/student/create", json=payload)
        assert response.status_code == 200
        
        data = response.json()
        assert data['success'] == True
        assert data['student']['student_id'] == TEST_STUDENT_ID
        
        print(f"✅ Student created: {data['student']['student_id']}")
        print(f"✅ Session ID: {data['student']['session_id']}")
        
        return True
        
    except Exception as e:
        print(f"❌ Student creation failed: {e}")
        return False

def test_subjects_endpoint():
    """Test available subjects endpoint"""
    print("\n📚 Testing Subjects Endpoint...")
    
    try:
        response = requests.get(f"{BASE_URL}/api/subjects")
        assert response.status_code == 200
        
        data = response.json()
        assert data['success'] == True
        assert 'subjects' in data
        
        subjects = data['subjects']
        expected_subjects = ['frontend_web_dev', 'backend_web_dev', 'software_engineering', 'cloud_computing']
        
        for subject in expected_subjects:
            assert subject in subjects
            assert 'name' in subjects[subject]
            assert 'difficulty_range' in subjects[subject]
        
        print(f"✅ Found {len(subjects)} subjects")
        for subject_id, subject_info in subjects.items():
            print(f"  • {subject_info['name']}: {subject_info['question_count']} questions")
        
        return True
        
    except Exception as e:
        print(f"❌ Subjects endpoint failed: {e}")
        return False

def test_adaptive_question_flow():
    """Test the complete adaptive question flow"""
    print("\n🎯 Testing Adaptive Question Flow...")
    
    try:
        subjects = ['frontend_web_dev', 'backend_web_dev', 'software_engineering']
        results = []
        
        for i, subject in enumerate(subjects * 3):  # 9 questions total
            # Get next question
            question_payload = {
                "student_id": TEST_STUDENT_ID,
                "subject": subject
            }
            
            question_response = requests.post(f"{BASE_URL}/api/question/next", json=question_payload)
            assert question_response.status_code == 200
            
            question_data = question_response.json()
            assert question_data['success'] == True
            assert 'question' in question_data
            assert 'adaptive_info' in question_data
            
            question = question_data['question']
            adaptive_info = question_data['adaptive_info']
            
            print(f"Q{i+1} ({subject}): Difficulty {adaptive_info['recommended_difficulty']}, "
                  f"Cognitive Load: {adaptive_info['cognitive_load_level']}")
            
            # Simulate student answer (alternate correct/incorrect for testing)
            is_correct = i % 2 == 0
            student_answer = question['correct_answer'] if is_correct else (
                question['options'][1] if len(question['options']) > 1 else 'wrong_answer'
            )
            
            # Submit answer
            answer_payload = {
                "student_id": TEST_STUDENT_ID,
                "question_id": question['question_id'],
                "student_answer": student_answer,
                "response_time": 15.0 + i * 2,  # Gradually slower responses
                "question_data": question
            }
            
            answer_response = requests.post(f"{BASE_URL}/api/answer/submit", json=answer_payload)
            assert answer_response.status_code == 200
            
            answer_data = answer_response.json()
            assert answer_data['success'] == True
            assert answer_data['result']['is_correct'] == is_correct
            
            results.append({
                'question_num': i + 1,
                'subject': subject,
                'difficulty': adaptive_info['recommended_difficulty'],
                'correct': is_correct,
                'cognitive_load': adaptive_info['cognitive_load_score'],
                'knowledge_estimate': answer_data['learning_progress']['updated_knowledge_estimate']
            })
            
            # Small delay to simulate realistic usage
            time.sleep(0.1)
        
        # Analyze adaptation
        print(f"\n📊 Adaptation Analysis:")
        early_difficulties = [r['difficulty'] for r in results[:3]]
        late_difficulties = [r['difficulty'] for r in results[-3:]]
        
        print(f"✅ Early difficulties: {early_difficulties} (avg: {sum(early_difficulties)/len(early_difficulties):.1f})")
        print(f"✅ Late difficulties: {late_difficulties} (avg: {sum(late_difficulties)/len(late_difficulties):.1f})")
        
        # Check if system adapted (should show some variation)
        difficulty_range = max([r['difficulty'] for r in results]) - min([r['difficulty'] for r in results])
        assert difficulty_range > 0, "System didn't adapt difficulty levels"
        
        print(f"✅ Difficulty adaptation range: {difficulty_range}")
        
        return True
        
    except Exception as e:
        print(f"❌ Adaptive question flow failed: {e}")
        return False

def test_dashboard_analytics():
    """Test dashboard and analytics endpoints"""
    print("\n📊 Testing Dashboard & Analytics...")
    
    try:
        # Test main dashboard
        dashboard_response = requests.get(f"{BASE_URL}/api/dashboard/{TEST_STUDENT_ID}")
        assert dashboard_response.status_code == 200
        
        dashboard_data = dashboard_response.json()
        assert dashboard_data['success'] == True
        assert 'dashboard' in dashboard_data
        
        dashboard = dashboard_data['dashboard']
        assert 'overall_stats' in dashboard
        assert 'subject_profiles' in dashboard
        
        print(f"✅ Dashboard loaded")
        print(f"  • Total questions: {dashboard['overall_stats']['total_questions']}")
        print(f"  • Accuracy: {dashboard['overall_stats']['accuracy_rate']:.1%}")
        print(f"  • Subjects: {len(dashboard['subject_profiles'])}")
        
        # Test cognitive load analytics
        cognitive_response = requests.get(f"{BASE_URL}/api/analytics/cognitive-load/{TEST_STUDENT_ID}")
        assert cognitive_response.status_code == 200
        
        cognitive_data = cognitive_response.json()
        assert cognitive_data['success'] == True
        assert 'cognitive_analytics' in cognitive_data
        
        print(f"✅ Cognitive analytics loaded")
        print(f"  • Current load: {cognitive_data['cognitive_analytics']['current_load_level']}")
        print(f"  • Average load: {cognitive_data['cognitive_analytics']['average_load']:.3f}")
        
        # Test performance analytics
        performance_response = requests.get(f"{BASE_URL}/api/analytics/performance/{TEST_STUDENT_ID}")
        assert performance_response.status_code == 200
        
        performance_data = performance_response.json()
        assert performance_data['success'] == True
        assert 'performance_analytics' in performance_data
        
        print(f"✅ Performance analytics loaded")
        
        return True
        
    except Exception as e:
        print(f"❌ Dashboard/analytics failed: {e}")
        return False

def test_system_stats():
    """Test system statistics endpoint"""
    print("\n⚙️ Testing System Statistics...")
    
    try:
        response = requests.get(f"{BASE_URL}/api/system/stats")
        assert response.status_code == 200
        
        data = response.json()
        assert data['success'] == True
        assert 'system_stats' in data
        
        stats = data['system_stats']
        assert 'system_info' in stats
        assert 'ml_algorithms' in stats
        assert 'performance_metrics' in stats
        
        print(f"✅ System stats loaded")
        print(f"  • Version: {stats['system_info']['version']}")
        print(f"  • Active students: {stats['system_info']['active_students']}")
        print(f"  • ML algorithms: {len(stats['ml_algorithms'])}")
        print(f"  • Avg response time: {stats['performance_metrics']['avg_api_response_time']}")
        
        return True
        
    except Exception as e:
        print(f"❌ System stats failed: {e}")
        return False

def test_error_handling():
    """Test API error handling"""
    print("\n🚨 Testing Error Handling...")
    
    try:
        # Test invalid subject
        invalid_subject_payload = {
            "student_id": TEST_STUDENT_ID,
            "subject": "invalid_subject"
        }
        
        response = requests.post(f"{BASE_URL}/api/question/next", json=invalid_subject_payload)
        assert response.status_code == 400
        
        data = response.json()
        assert data['success'] == False
        assert 'error' in data
        
        print(f"✅ Invalid subject error handled correctly")
        
        # Test missing required fields
        incomplete_payload = {"student_id": TEST_STUDENT_ID}
        
        response = requests.post(f"{BASE_URL}/api/question/next", json=incomplete_payload)
        assert response.status_code == 400
        
        data = response.json()
        assert data['success'] == False
        
        print(f"✅ Missing fields error handled correctly")
        
        # Test invalid response time
        invalid_time_payload = {
            "student_id": TEST_STUDENT_ID,
            "question_id": 1,
            "student_answer": "A",
            "response_time": -5,  # Invalid negative time
            "question_data": {"correct_answer": "A", "question_type": "multiple_choice"}
        }
        
        response = requests.post(f"{BASE_URL}/api/answer/submit", json=invalid_time_payload)
        assert response.status_code == 400
        
        print(f"✅ Invalid response time error handled correctly")
        
        return True
        
    except Exception as e:
        print(f"❌ Error handling test failed: {e}")
        return False

def test_performance_benchmarks():
    """Test API performance benchmarks"""
    print("\n⚡ Testing Performance Benchmarks...")
    
    try:
        # Test response time for question generation
        start_time = time.time()
        
        for i in range(10):
            payload = {
                "student_id": f"perf_test_{i}",
                "subject": "frontend_web_dev"
            }
            response = requests.post(f"{BASE_URL}/api/question/next", json=payload)
            assert response.status_code == 200
        
        end_time = time.time()
        avg_time_ms = (end_time - start_time) * 1000 / 10
        
        print(f"✅ Average question generation time: {avg_time_ms:.2f}ms")
        assert avg_time_ms < 100, f"Performance too slow: {avg_time_ms:.2f}ms > 100ms"
        
        # Test dashboard loading time
        start_time = time.time()
        response = requests.get(f"{BASE_URL}/api/dashboard/{TEST_STUDENT_ID}")
        end_time = time.time()
        
        dashboard_time_ms = (end_time - start_time) * 1000
        print(f"✅ Dashboard loading time: {dashboard_time_ms:.2f}ms")
        assert dashboard_time_ms < 200, f"Dashboard too slow: {dashboard_time_ms:.2f}ms > 200ms"
        
        return True
        
    except Exception as e:
        print(f"❌ Performance benchmark failed: {e}")
        return False

def main():
    """Run all Checkpoint 3 tests"""
    print("🚀 Running Checkpoint 3 Validation Tests")
    print("=" * 60)
    print("Testing Backend API Integration with ML Algorithms")
    print("=" * 60)
    
    # Check if server is running
    try:
        requests.get(f"{BASE_URL}/", timeout=5)
    except requests.exceptions.RequestException:
        print("❌ Server not running! Please start the Flask app first:")
        print("   cd backend && python app.py")
        return False
    
    tests = [
        test_api_health,
        test_student_creation,
        test_subjects_endpoint,
        test_adaptive_question_flow,
        test_dashboard_analytics,
        test_system_stats,
        test_error_handling,
        test_performance_benchmarks
    ]
    
    passed = 0
    failed = 0
    
    for test_func in tests:
        try:
            if test_func():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ {test_func.__name__} failed with exception: {e}")
            failed += 1
        
        print()  # Add spacing between tests
    
    print("=" * 60)
    if failed == 0:
        print("🎉 CHECKPOINT 3 COMPLETED SUCCESSFULLY!")
        print("=" * 60)
        
        print("\n🌐 Backend API Features:")
        print("• RESTful JSON endpoints - ✅ Working")
        print("• ML algorithm integration - ✅ Working") 
        print("• Database persistence - ✅ Working")
        print("• Real-time analytics - ✅ Working")
        print("• Error handling & validation - ✅ Working")
        print("• Performance optimization - ✅ Working")
        
        print("\n📊 API Endpoints Tested:")
        print("• GET  / - Health check")
        print("• POST /api/student/create - Student creation")
        print("• POST /api/question/next - Adaptive question generation")
        print("• POST /api/answer/submit - Answer processing")
        print("• GET  /api/dashboard/<id> - Student dashboard")
        print("• GET  /api/analytics/* - Real-time analytics")
        print("• GET  /api/subjects - Available subjects")
        print("• GET  /api/system/stats - System statistics")
        
        print("\n⚡ Performance Achieved:")
        print("• <100ms question generation")
        print("• <200ms dashboard loading")
        print("• Real-time ML adaptation")
        print("• Comprehensive error handling")
        
        print("\n✅ Ready for Checkpoint 4: Frontend Development")
        
    else:
        print(f"❌ CHECKPOINT 3 FAILED!")
        print(f"Passed: {passed}, Failed: {failed}")
    
    return failed == 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
