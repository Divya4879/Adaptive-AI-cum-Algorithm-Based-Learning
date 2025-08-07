from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///adaptive_tutor.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Import models after db initialization
from models.database import StudentInteraction, Student

@app.route('/')
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Adaptive AI Tutor API is running!",
        "version": "1.0.0"
    })

@app.route('/api/next-question', methods=['POST'])
def get_next_question():
    """Get the next adaptive question for a student"""
    data = request.get_json()
    student_id = data.get('student_id')
    session_data = data.get('session_data', {})
    
    # TODO: Implement adaptive question selection
    # For now, return a sample question
    sample_question = {
        "question_id": 1,
        "question_text": "What is the correct HTML tag for the largest heading?",
        "difficulty_level": 3,
        "options": ["<h1>", "<h6>", "<header>", "<head>"],
        "correct_answer": "<h1>",
        "subject": "frontend_web_dev"
    }
    
    return jsonify({
        "success": True,
        "question": sample_question,
        "adaptive_info": {
            "current_difficulty": 3,
            "cognitive_load_estimate": 0.3,
            "recommendation": "moderate_pace"
        }
    })

@app.route('/api/submit-answer', methods=['POST'])
def submit_answer():
    """Submit student answer and update their model"""
    data = request.get_json()
    
    # Extract submission data
    student_id = data.get('student_id')
    question_id = data.get('question_id')
    answer = data.get('answer')
    response_time = data.get('response_time')
    difficulty_level = data.get('difficulty_level')
    
    # TODO: Process answer and update student model
    is_correct = answer == data.get('correct_answer', '')
    
    # TODO: Calculate cognitive load and update difficulty
    cognitive_load_score = min(response_time / 10.0, 1.0)  # Simple calculation for now
    
    return jsonify({
        "success": True,
        "is_correct": is_correct,
        "cognitive_load_score": cognitive_load_score,
        "next_difficulty_recommendation": difficulty_level + (1 if is_correct else -1),
        "feedback": "Great job!" if is_correct else "Let's try an easier question."
    })

@app.route('/api/student-dashboard/<int:student_id>')
def get_student_dashboard(student_id):
    """Get student progress and analytics"""
    # TODO: Fetch real student data from database
    
    sample_dashboard = {
        "student_id": student_id,
        "total_questions": 25,
        "correct_answers": 18,
        "accuracy_rate": 0.72,
        "average_response_time": 8.5,
        "current_difficulty_level": 6,
        "cognitive_load_trend": [0.2, 0.3, 0.4, 0.6, 0.5, 0.3, 0.2],
        "difficulty_progression": [3, 4, 4, 5, 4, 5, 6],
        "session_duration": 1200,  # seconds
        "subjects_covered": ["frontend_web_dev", "backend_web_dev", "software_engineering", "cloud_computing"],
        "recommendations": [
            "Take a 5-minute break to reduce cognitive load",
            "Current difficulty level is optimal for learning"
        ]
    }
    
    return jsonify({
        "success": True,
        "dashboard_data": sample_dashboard
    })

@app.route('/api/students', methods=['POST'])
def create_student():
    """Create a new student session"""
    data = request.get_json()
    
    # TODO: Create student in database
    student_data = {
        "student_id": 1,  # Generate unique ID
        "session_id": data.get('session_id', 'default_session'),
        "created_at": "2025-08-07T13:00:00Z"
    }
    
    return jsonify({
        "success": True,
        "student": student_data
    })

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)
