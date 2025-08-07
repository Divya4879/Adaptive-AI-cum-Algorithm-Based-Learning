from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

# This will be imported from app.py
db = None

class Student(db.Model if db else object):
    """Student model for tracking individual learners"""
    __tablename__ = 'students'
    
    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Student characteristics
    initial_knowledge_level = db.Column(db.Float, default=0.5)  # 0-1 scale
    learning_rate = db.Column(db.Float, default=0.1)
    
    # Relationships
    interactions = db.relationship('StudentInteraction', backref='student', lazy=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'session_id': self.session_id,
            'created_at': self.created_at.isoformat(),
            'initial_knowledge_level': self.initial_knowledge_level,
            'learning_rate': self.learning_rate
        }

class StudentInteraction(db.Model if db else object):
    """Model for storing each student-question interaction"""
    __tablename__ = 'student_interactions'
    
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)
    
    # Question details
    question_id = db.Column(db.Integer, nullable=False)
    question_text = db.Column(db.Text)
    difficulty_level = db.Column(db.Integer, nullable=False)  # 1-10 scale
    subject = db.Column(db.String(50))
    
    # Student response
    student_answer = db.Column(db.String(500))
    correct_answer = db.Column(db.String(500))
    is_correct = db.Column(db.Boolean, nullable=False)
    response_time = db.Column(db.Float, nullable=False)  # seconds
    
    # Cognitive load indicators
    cognitive_load_score = db.Column(db.Float)  # 0-1 scale
    fatigue_indicators = db.Column(db.Text)  # JSON string of various indicators
    
    # Adaptive algorithm data
    selected_difficulty_reason = db.Column(db.String(200))
    algorithm_confidence = db.Column(db.Float)
    
    # Timestamps
    question_presented_at = db.Column(db.DateTime, default=datetime.utcnow)
    answer_submitted_at = db.Column(db.DateTime)
    
    def to_dict(self):
        return {
            'id': self.id,
            'student_id': self.student_id,
            'question_id': self.question_id,
            'difficulty_level': self.difficulty_level,
            'subject': self.subject,
            'is_correct': self.is_correct,
            'response_time': self.response_time,
            'cognitive_load_score': self.cognitive_load_score,
            'question_presented_at': self.question_presented_at.isoformat() if self.question_presented_at else None,
            'answer_submitted_at': self.answer_submitted_at.isoformat() if self.answer_submitted_at else None
        }
    
    def set_fatigue_indicators(self, indicators_dict):
        """Store fatigue indicators as JSON"""
        self.fatigue_indicators = json.dumps(indicators_dict)
    
    def get_fatigue_indicators(self):
        """Retrieve fatigue indicators from JSON"""
        if self.fatigue_indicators:
            return json.loads(self.fatigue_indicators)
        return {}

class Question(db.Model if db else object):
    """Question bank model"""
    __tablename__ = 'questions'
    
    id = db.Column(db.Integer, primary_key=True)
    question_text = db.Column(db.Text, nullable=False)
    subject = db.Column(db.String(50), nullable=False)
    difficulty_level = db.Column(db.Integer, nullable=False)  # 1-10 scale
    correct_answer = db.Column(db.String(500), nullable=False)
    options = db.Column(db.Text)  # JSON string for multiple choice options
    question_type = db.Column(db.String(20), default='multiple_choice')  # multiple_choice, text, numeric
    
    # Metadata
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    tags = db.Column(db.Text)  # JSON string of tags
    
    def to_dict(self):
        return {
            'id': self.id,
            'question_text': self.question_text,
            'subject': self.subject,
            'difficulty_level': self.difficulty_level,
            'correct_answer': self.correct_answer,
            'options': json.loads(self.options) if self.options else [],
            'question_type': self.question_type,
            'tags': json.loads(self.tags) if self.tags else []
        }
    
    def set_options(self, options_list):
        """Store options as JSON"""
        self.options = json.dumps(options_list)
    
    def set_tags(self, tags_list):
        """Store tags as JSON"""
        self.tags = json.dumps(tags_list)
