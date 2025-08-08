#!/usr/bin/env python3
"""
Adaptive AI Tutor - AlgoFest Hackathon
Each level gets its specific 5 questions, shuffled, with randomized options
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import CORS
import json
import time
import random
from datetime import datetime
import pandas as pd

app = Flask(__name__)
sed -i '/app = Flask(__name__)/a from flask_cors import CORS\nCORS(app, origins=["*"], methods=["GET", "POST", "OPTIONS"], allow_headers=["Content-Type"])' app.py
CORS(app, origins=["*"])  # Allow all origins for demo
CORS(app)

# Global state
questions_cache = None
student_sessions = {}

def load_questions():
    """Load questions from CSV"""
    global questions_cache
    try:
        questions_cache = pd.read_csv('data/synthetic_questions.csv')
        print(f"✅ Loaded {len(questions_cache)} questions")
        return True
    except Exception as e:
        print(f"❌ Error loading questions: {e}")
        return False

def get_questions_for_level(subject, level):
    """Get the specific 5 questions for this level - FIXED VERSION"""
    if questions_cache is None:
        return []
    
    print(f"🎯 Getting questions for {subject} Level {level}")
    
    # Get all questions for this subject and level
    subject_level_questions = questions_cache[
        (questions_cache['subject'] == subject) & 
        (questions_cache['difficulty_level'] == level)
    ]
    
    print(f"📊 Found {len(subject_level_questions)} questions for {subject} Level {level}")
    
    if len(subject_level_questions) == 0:
        print(f"❌ No questions found for {subject} Level {level}")
        return []
    
    # Convert to list and shuffle the questions (but always the same 5 for this level)
    questions_list = []
    for _, row in subject_level_questions.iterrows():
        # Parse options
        try:
            options = json.loads(row['options']) if isinstance(row['options'], str) else row['options']
        except:
            options = ['Option A', 'Option B', 'Option C', 'Option D']
        
        # Randomize the options order
        random.shuffle(options)
        
        questions_list.append({
            'question_id': int(row['id']),
            'question_text': row['question_text'],
            'difficulty_level': int(row['difficulty_level']),
            'subject': row['subject'],
            'options': options,
            'correct_answer': row['correct_answer'],
            'question_type': row['question_type']
        })
    
    # Shuffle the questions within this level
    random.shuffle(questions_list)
    
    # Return exactly 5 questions (or all if less than 5)
    result = questions_list[:5]
    print(f"✅ Returning {len(result)} questions for {subject} Level {level}")
    
    return result

@app.route('/')
def health():
    """Health check"""
    return jsonify({
        "status": "healthy",
        "message": "Adaptive AI Tutor - AlgoFest Hackathon",
        "version": "4.0.0",
        "features": ["200 Questions", "Fixed Level Questions", "Shuffled Questions", "Randomized Options"],
        "timestamp": datetime.now().isoformat()
    })

@app.route('/api/subjects')
def get_subjects():
    """Get subjects with question counts"""
    subjects = {
        'frontend_web_dev': {
            'name': 'Frontend Web Development',
            'description': 'HTML, CSS, JavaScript, React',
            'question_count': 50,
            'levels': 10,
            'icon': '🎨'
        },
        'backend_web_dev': {
            'name': 'Backend Web Development',
            'description': 'APIs, databases, server architecture',
            'question_count': 50,
            'levels': 10,
            'icon': '⚙️'
        },
        'software_engineering': {
            'name': 'Software Engineering',
            'description': 'Design patterns, testing, architecture',
            'question_count': 50,
            'levels': 10,
            'icon': '🏗️'
        },
        'cloud_computing': {
            'name': 'Cloud Computing',
            'description': 'AWS, Azure, containerization',
            'question_count': 50,
            'levels': 10,
            'icon': '☁️'
        }
    }
    
    return jsonify({
        "success": True,
        "subjects": subjects,
        "total_questions": 200
    })

@app.route('/api/level/start', methods=['POST'])
def start_level():
    """Start a level quiz - FIXED to return same questions per level"""
    try:
        data = request.get_json()
        student_id = data.get('student_id', f'student_{int(time.time())}')
        subject = data.get('subject')
        level = data.get('level', 1)
        
        if not subject:
            return jsonify({"success": False, "error": "Subject required"}), 400
        
        print(f"🚀 Starting quiz: {student_id}, {subject}, Level {level}")
        
        # Initialize student if needed
        if student_id not in student_sessions:
            student_sessions[student_id] = {
                'subjects': {},
                'used_questions': set()
            }
        
        student_data = student_sessions[student_id]
        
        # Initialize subject if needed
        if subject not in student_data['subjects']:
            student_data['subjects'][subject] = {
                'current_level': 1,
                'questions_answered': 0,
                'total_correct': 0,
                'level_history': []
            }
        
        # Get the specific 5 questions for this level
        questions = get_questions_for_level(subject, level)
        
        if len(questions) == 0:
            return jsonify({
                "success": False,
                "error": f"No questions available for {subject} Level {level}"
            }), 404
        
        # Store current quiz session
        quiz_id = f"{student_id}_{subject}_{level}_{int(time.time())}"
        student_data[f'current_quiz_{subject}'] = {
            'quiz_id': quiz_id,
            'questions': questions,
            'level': level,
            'answers': [],
            'start_time': datetime.now().isoformat()
        }
        
        print(f"✅ Quiz started with {len(questions)} questions")
        
        return jsonify({
            "success": True,
            "quiz_id": quiz_id,
            "level": level,
            "questions": questions,
            "total_questions": len(questions)
        })
        
    except Exception as e:
        print(f"❌ Error starting quiz: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/level/submit', methods=['POST'])
def submit_level():
    """Submit level quiz answers"""
    try:
        data = request.get_json()
        student_id = data.get('student_id')
        subject = data.get('subject')
        answers = data.get('answers', [])
        
        if not all([student_id, subject, answers]):
            return jsonify({"success": False, "error": "Missing required fields"}), 400
        
        student_data = student_sessions[student_id]
        quiz_key = f'current_quiz_{subject}'
        
        if quiz_key not in student_data:
            return jsonify({"success": False, "error": "No active quiz found"}), 404
        
        quiz_data = student_data[quiz_key]
        questions = quiz_data['questions']
        level = quiz_data['level']
        
        # Grade the quiz
        correct_count = 0
        results = []
        
        for answer in answers:
            question_id = answer['question_id']
            student_answer = answer['answer']
            
            # Find the question
            question = next((q for q in questions if q['question_id'] == question_id), None)
            if question:
                is_correct = student_answer == question['correct_answer']
                if is_correct:
                    correct_count += 1
                
                results.append({
                    'question_id': question_id,
                    'question_text': question['question_text'],
                    'student_answer': student_answer,
                    'correct_answer': question['correct_answer'],
                    'is_correct': is_correct
                })
        
        # Level progression logic
        total_questions = len(questions)
        current_level = student_data['subjects'][subject]['current_level']
        
        if correct_count >= 4:  # 4-5 correct: Level up
            new_level = min(10, current_level + 1)
            outcome = "level_up"
            message = f"🚀 EXCELLENT! {correct_count}/{total_questions} correct. Advanced to Level {new_level}!"
        elif correct_count == 3:  # 3 correct: Retry
            new_level = current_level
            outcome = "retry"
            message = f"📚 Good effort! {correct_count}/{total_questions} correct. Try Level {current_level} again."
        else:  # <3 correct: Level down
            new_level = max(1, current_level - 1)
            outcome = "level_down"
            message = f"💪 Keep learning! {correct_count}/{total_questions} correct. Trying Level {new_level}."
        
        # Update student progress
        old_level = current_level
        student_data['subjects'][subject]['current_level'] = new_level
        student_data['subjects'][subject]['questions_answered'] += total_questions
        student_data['subjects'][subject]['total_correct'] += correct_count
        
        # Clean up quiz session
        del student_data[quiz_key]
        
        print(f"✅ Quiz completed: {correct_count}/{total_questions}, Level {old_level} -> {new_level}")
        
        return jsonify({
            "success": True,
            "outcome": outcome,
            "message": message,
            "score": {
                "correct": correct_count,
                "total": total_questions,
                "percentage": (correct_count / total_questions) * 100
            },
            "level_info": {
                "previous_level": old_level,
                "new_level": new_level,
                "level_changed": new_level != old_level
            },
            "results": results
        })
        
    except Exception as e:
        print(f"❌ Error submitting quiz: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/student/progress/<student_id>')
def get_progress(student_id):
    """Get student progress"""
    try:
        if student_id not in student_sessions:
            return jsonify({"success": False, "error": "Student not found"}), 404
        
        student_data = student_sessions[student_id]
        progress = {}
        
        for subject, data in student_data['subjects'].items():
            progress[subject] = {
                'current_level': data['current_level'],
                'questions_answered': data['questions_answered'],
                'total_correct': data['total_correct'],
                'accuracy': (data['total_correct'] / max(data['questions_answered'], 1)) * 100
            }
        
        return jsonify({
            "success": True,
            "progress": progress
        })
        
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    print("🚀 Starting Simple Adaptive AI Tutor...")
    print("✅ Fixed level questions - same 5 questions per level")
    print("✅ Shuffled questions within each level")
    print("✅ Randomized answer options")
    
    if load_questions():
        print("✅ Questions loaded successfully")
    else:
        print("❌ Failed to load questions")
        exit(1)
    
    print("🌐 Server starting on http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)

# Production configuration for Render
if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_ENV') != 'production'
    app.run(host='0.0.0.0', port=port, debug=debug)
