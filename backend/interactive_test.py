#!/usr/bin/env python3
"""
Interactive Test Script - Experience the Adaptive AI Tutor
Test the system manually to see how it adapts to your responses
"""

import sys
import os
sys.path.append('models')

import time
from tutor_system import AdaptiveTutorSystem
import pandas as pd

class InteractiveTutorTest:
    def __init__(self):
        self.tutor = AdaptiveTutorSystem(student_id="interactive_test_user")
        self.tutor.start_session("manual_test_session")
        
        # Load some real questions from our synthetic data
        self.questions_df = pd.read_csv('data/synthetic_questions.csv')
        self.question_count = 0
        
        # Subject mapping for display
        self.subject_names = {
            'frontend_web_dev': 'Frontend Web Development',
            'backend_web_dev': 'Backend Web Development', 
            'software_engineering': 'Software Engineering',
            'cloud_computing': 'Cloud Computing'
        }
    
    def get_question_by_difficulty(self, subject, difficulty):
        """Get a question matching the subject and difficulty"""
        matching_questions = self.questions_df[
            (self.questions_df['subject'] == subject) & 
            (self.questions_df['difficulty_level'] == difficulty)
        ]
        
        if len(matching_questions) > 0:
            question = matching_questions.iloc[0]
            return {
                'question_id': int(question['id']),
                'question_text': question['question_text'],
                'difficulty_level': difficulty,
                'subject': subject,
                'options': eval(question['options']),  # Convert string back to list
                'correct_answer': question['correct_answer']
            }
        else:
            # Fallback generic question
            return {
                'question_id': self.question_count + 1,
                'question_text': f"Sample {self.subject_names[subject]} question (Difficulty {difficulty})",
                'difficulty_level': difficulty,
                'subject': subject,
                'options': ['Option A', 'Option B', 'Option C', 'Option D'],
                'correct_answer': 'Option A'
            }
    
    def display_question(self, question_data, recommendation):
        """Display question with context"""
        print("\n" + "="*60)
        print(f"📚 SUBJECT: {self.subject_names[question_data['subject']]}")
        print(f"🎯 DIFFICULTY: {question_data['difficulty_level']}/10")
        print(f"🧠 COGNITIVE LOAD: {recommendation['cognitive_load_level'].upper()} ({recommendation['cognitive_load_score']:.2f})")
        print(f"📊 KNOWLEDGE ESTIMATE: {recommendation['student_knowledge_estimate']:.2f}")
        print("="*60)
        
        print(f"\nQUESTION {self.question_count + 1}:")
        print(f"{question_data['question_text']}")
        
        if question_data['options']:
            print("\nOPTIONS:")
            for i, option in enumerate(question_data['options']):
                print(f"  {chr(65+i)}. {option}")
        
        print(f"\n💡 REASONING: {recommendation['reasoning']}")
        
        if recommendation['recommendations']:
            print(f"🔍 RECOMMENDATIONS:")
            for rec in recommendation['recommendations']:
                print(f"  • {rec}")
    
    def get_user_response(self, question_data):
        """Get user's answer and response time"""
        start_time = time.time()
        
        print(f"\nYour answer (A/B/C/D or type your answer): ", end="")
        user_input = input().strip().upper()
        
        end_time = time.time()
        response_time = end_time - start_time
        
        # Map letter to actual option if applicable
        if user_input in ['A', 'B', 'C', 'D'] and question_data['options']:
            option_index = ord(user_input) - ord('A')
            if option_index < len(question_data['options']):
                user_answer = question_data['options'][option_index]
            else:
                user_answer = user_input
        else:
            user_answer = user_input
        
        return user_answer, response_time
    
    def show_feedback(self, feedback, question_data):
        """Display feedback and system analysis"""
        print(f"\n{'✅ CORRECT!' if feedback['is_correct'] else '❌ INCORRECT'}")
        print(f"Correct answer was: {question_data['correct_answer']}")
        print(f"💬 FEEDBACK: {feedback['feedback']}")
        
        if feedback['cognitive_load_analysis']:
            cla = feedback['cognitive_load_analysis']
            print(f"🧠 COGNITIVE ANALYSIS:")
            print(f"  • Load Score: {cla['cognitive_load_score']:.3f}")
            print(f"  • Load Level: {cla['cognitive_load_level']}")
            print(f"  • Confidence: {cla['confidence']:.3f}")
        
        print(f"📈 UPDATED KNOWLEDGE: {feedback['updated_knowledge_estimate']:.3f}")
        
        session_progress = feedback['session_progress']
        print(f"📊 SESSION STATS:")
        print(f"  • Questions: {session_progress['questions_answered']}")
        print(f"  • Accuracy: {session_progress['accuracy_rate']:.1%}")
        print(f"  • Avg Time: {session_progress['average_response_time']:.1f}s")
    
    def show_dashboard(self):
        """Show comprehensive dashboard"""
        dashboard = self.tutor.get_student_dashboard()
        
        print("\n" + "="*60)
        print("📊 STUDENT DASHBOARD")
        print("="*60)
        
        stats = dashboard['overall_stats']
        print(f"📈 OVERALL PERFORMANCE:")
        print(f"  • Total Questions: {stats['total_questions']}")
        print(f"  • Accuracy Rate: {stats['accuracy_rate']:.1%}")
        print(f"  • Average Response Time: {stats['average_response_time']:.1f}s")
        print(f"  • Subjects Covered: {len(stats['subjects_covered'])}")
        
        if dashboard['subject_profiles']:
            print(f"\n📚 SUBJECT BREAKDOWN:")
            for subject, profile in dashboard['subject_profiles'].items():
                print(f"  • {self.subject_names[subject]}:")
                print(f"    - Knowledge Level: {profile['knowledge_level']:.2f}")
                print(f"    - Interactions: {profile['interactions']}")
                print(f"    - Recent Accuracy: {profile['recent_accuracy']:.1%}")
                print(f"    - Optimal Difficulty: {profile['optimal_difficulty']:.1f}")
                print(f"    - Trend: {profile['performance_trend']}")
        
        if dashboard['learning_recommendations']:
            print(f"\n💡 LEARNING RECOMMENDATIONS:")
            for rec in dashboard['learning_recommendations']:
                print(f"  • {rec}")
        
        if dashboard['cognitive_load_insights']:
            print(f"\n🧠 COGNITIVE LOAD INSIGHTS:")
            for insight in dashboard['cognitive_load_insights']:
                print(f"  • {insight}")
    
    def run_interactive_session(self):
        """Run the interactive testing session"""
        print("🚀 ADAPTIVE AI TUTOR - INTERACTIVE TEST")
        print("="*60)
        print("This will let you experience how the system adapts to your responses.")
        print("Answer questions and see how difficulty and recommendations change!")
        print("\nAvailable subjects:")
        for key, name in self.subject_names.items():
            print(f"  • {name}")
        
        subjects = list(self.subject_names.keys())
        current_subject_index = 0
        
        while True:
            # Get current subject
            current_subject = subjects[current_subject_index]
            
            # Get AI recommendation
            recommendation = self.tutor.get_next_question_difficulty(current_subject)
            
            # Get appropriate question
            question_data = self.get_question_by_difficulty(
                current_subject, 
                recommendation['recommended_difficulty']
            )
            
            # Display question
            self.display_question(question_data, recommendation)
            
            # Get user response
            user_answer, response_time = self.get_user_response(question_data)
            
            # Process answer
            feedback = self.tutor.submit_answer(question_data, user_answer, response_time)
            
            # Show feedback
            self.show_feedback(feedback, question_data)
            
            self.question_count += 1
            
            # Ask what to do next
            print(f"\nWhat would you like to do?")
            print("1. Continue with same subject")
            print("2. Switch to different subject")
            print("3. Show dashboard")
            print("4. Exit")
            
            choice = input("Choice (1-4): ").strip()
            
            if choice == '1':
                continue
            elif choice == '2':
                print("\nChoose subject:")
                for i, (key, name) in enumerate(self.subject_names.items()):
                    print(f"{i+1}. {name}")
                
                try:
                    subject_choice = int(input("Subject (1-4): ").strip()) - 1
                    if 0 <= subject_choice < len(subjects):
                        current_subject_index = subject_choice
                    else:
                        print("Invalid choice, keeping current subject")
                except:
                    print("Invalid input, keeping current subject")
            elif choice == '3':
                self.show_dashboard()
                input("\nPress Enter to continue...")
            elif choice == '4':
                break
            else:
                print("Invalid choice, continuing...")
            
            # Rotate subject for variety if continuing
            if choice == '1':
                current_subject_index = (current_subject_index + 1) % len(subjects)
        
        # Final dashboard
        print("\n🎉 SESSION COMPLETE!")
        self.show_dashboard()
        
        print(f"\nThanks for testing the Adaptive AI Tutor!")
        print(f"The system learned your patterns across {self.question_count} questions.")

def main():
    """Run the interactive test"""
    try:
        tester = InteractiveTutorTest()
        tester.run_interactive_session()
    except KeyboardInterrupt:
        print("\n\n👋 Test interrupted. Thanks for trying the system!")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
