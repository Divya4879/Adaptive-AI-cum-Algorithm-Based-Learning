#!/usr/bin/env python3
"""
Generate 200 COMPLETELY UNIQUE Questions from separate subject files
"""

import pandas as pd
import json
import random
from frontend_unique_questions import FRONTEND_UNIQUE_QUESTIONS
from backend_unique_questions import BACKEND_UNIQUE_QUESTIONS
from software_engineering_unique_questions import SOFTWARE_ENGINEERING_UNIQUE_QUESTIONS
from cloud_computing_unique_questions import CLOUD_COMPUTING_UNIQUE_QUESTIONS

def generate_unique_questions():
    """Generate 200 completely unique questions"""
    
    all_questions = []
    question_id = 1
    
    # Process each subject with its unique questions
    subjects = [
        ('frontend_web_dev', FRONTEND_UNIQUE_QUESTIONS),
        ('backend_web_dev', BACKEND_UNIQUE_QUESTIONS),
        ('software_engineering', SOFTWARE_ENGINEERING_UNIQUE_QUESTIONS),
        ('cloud_computing', CLOUD_COMPUTING_UNIQUE_QUESTIONS)
    ]
    
    for subject_id, questions in subjects:
        print(f"Processing {subject_id}: {len(questions)} unique questions")
        
        for q in questions:
            # Randomize options to prevent pattern recognition
            options = [q['correct']] + q['wrong']
            random.shuffle(options)
            
            # Create question record
            question_record = {
                'id': question_id,
                'subject': subject_id,
                'difficulty_level': q['level'],
                'question_text': q['question'],
                'correct_answer': q['correct'],
                'options': json.dumps(options),
                'question_type': 'multiple_choice',
                'tags': json.dumps([subject_id, f"difficulty_{q['level']}"])
            }
            
            all_questions.append(question_record)
            question_id += 1
    
    return all_questions

def main():
    """Generate and save unique questions"""
    print("🔄 Generating 200 COMPLETELY UNIQUE questions...")
    
    questions = generate_unique_questions()
    
    # Save to CSV
    df = pd.DataFrame(questions)
    df.to_csv('synthetic_questions.csv', index=False)
    
    # Verify uniqueness
    unique_questions = df['question_text'].nunique()
    total_questions = len(df)
    
    print(f"✅ Generated {total_questions} questions")
    print(f"✅ Unique questions: {unique_questions}/{total_questions}")
    
    if unique_questions == total_questions:
        print("🎉 ALL QUESTIONS ARE COMPLETELY UNIQUE!")
    else:
        print(f"⚠️  Found {total_questions - unique_questions} duplicate questions")
    
    # Check answer balance
    obvious_count = 0
    for _, row in df.iterrows():
        options = json.loads(row['options'])
        correct = row['correct_answer']
        lengths = [len(opt) for opt in options]
        if len(correct) == max(lengths):
            obvious_count += 1
    
    print(f"📊 Obvious answers: {obvious_count}/{total_questions} ({obvious_count/total_questions*100:.1f}%)")
    
    # Show distribution
    subject_counts = df['subject'].value_counts()
    print("\n📊 Questions per subject:")
    for subject, count in subject_counts.items():
        print(f"   • {subject}: {count} questions")

if __name__ == "__main__":
    main()
