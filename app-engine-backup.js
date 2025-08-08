// Complete Adaptive AI Tutor Engine with all functionalities
// Combines all 200 questions from 4 subjects with full algorithm implementation

// Combine all questions from separate files
const ALL_QUESTIONS = [
    ...FRONTEND_QUESTIONS,
    ...BACKEND_QUESTIONS, 
    ...SOFTWARE_QUESTIONS,
    ...CLOUD_QUESTIONS
];

// Enhanced Frontend API with all requested functionalities
class AdaptiveAITutor {
    constructor() {
        this.studentSessions = {};
        this.wrongAnswersPool = {}; // For review section
        this.practicePool = {}; // For spaced repetition
        this.masteredQuestions = {}; // Questions mastered (5 correct answers)
        this.loadFromStorage();
    }

    // Load data from localStorage for persistence
    loadFromStorage() {
        try {
            const saved = localStorage.getItem('adaptiveAITutor');
            if (saved) {
                const data = JSON.parse(saved);
                this.studentSessions = data.studentSessions || {};
                this.wrongAnswersPool = data.wrongAnswersPool || {};
                this.practicePool = data.practicePool || {};
                this.masteredQuestions = data.masteredQuestions || {};
            }
        } catch (e) {
            console.log('No saved data found, starting fresh');
        }
    }

    // Save data to localStorage
    saveToStorage() {
        const data = {
            studentSessions: this.studentSessions,
            wrongAnswersPool: this.wrongAnswersPool,
            practicePool: this.practicePool,
            masteredQuestions: this.masteredQuestions
        };
        localStorage.setItem('adaptiveAITutor', JSON.stringify(data));
    }

    // Health check
    getHealth() {
        return {
            status: "healthy",
            message: "Adaptive AI Tutor - AlgoFest Hackathon (Complete Frontend)",
            version: "5.0.0",
            features: [
                "200 Unique Questions (50 per subject)",
                "Modified Leitner System",
                "Adaptive Level Progression", 
                "Wrong Answer Review",
                "Spaced Repetition Practice",
                "Progress Persistence"
            ],
            timestamp: new Date().toISOString()
        };
    }

    // Get subjects with accurate counts
    getSubjects() {
        const subjects = {
            'frontend_web_dev': {
                'name': 'Frontend Web Development',
                'description': 'HTML, CSS, JavaScript, React, Performance',
                'question_count': 50,
                'levels': 10,
                'icon': '🎨'
            },
            'backend_web_dev': {
                'name': 'Backend Web Development', 
                'description': 'APIs, Databases, Security, Microservices',
                'question_count': 50,
                'levels': 10,
                'icon': '⚙️'
            },
            'software_engineering': {
                'name': 'Software Engineering',
                'description': 'Design Patterns, Architecture, Testing, OOP',
                'question_count': 50,
                'levels': 10,
                'icon': '🏗️'
            },
            'cloud_computing': {
                'name': 'Cloud Computing',
                'description': 'AWS, Containers, Serverless, DevOps',
                'question_count': 50,
                'levels': 10,
                'icon': '☁️'
            }
        };

        return {
            success: true,
            subjects: subjects,
            total_questions: 200
        };
    }

    // Get exactly 5 questions for a specific level
    getQuestionsForLevel(subject, level) {
        const questions = ALL_QUESTIONS.filter(q => 
            q.subject === subject && q.difficulty_level === level
        );

        if (questions.length === 0) {
            return [];
        }

        // Randomize options for each question to prevent memorization
        const shuffledQuestions = questions.map(q => ({
            ...q,
            options: [...q.options].sort(() => Math.random() - 0.5)
        }));

        // Shuffle questions and return exactly 5
        return shuffledQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
    }

    // Start level quiz
    startLevel(studentId, subject, level) {
        if (!this.studentSessions[studentId]) {
            this.studentSessions[studentId] = {
                subjects: {},
                usedQuestions: new Set()
            };
        }

        const studentData = this.studentSessions[studentId];
        
        if (!studentData.subjects[subject]) {
            studentData.subjects[subject] = {
                currentLevel: 1,
                questionsAnswered: 0,
                totalCorrect: 0,
                levelHistory: []
            };
        }

        const questions = this.getQuestionsForLevel(subject, level);
        
        if (questions.length === 0) {
            return {
                success: false,
                error: `No questions available for ${subject} Level ${level}`
            };
        }

        const quizId = `${studentId}_${subject}_${level}_${Date.now()}`;
        studentData[`currentQuiz_${subject}`] = {
            quizId: quizId,
            questions: questions,
            level: level,
            answers: [],
            startTime: new Date().toISOString()
        };

        this.saveToStorage();

        return {
            success: true,
            quiz_id: quizId,
            level: level,
            questions: questions,
            total_questions: questions.length
        };
    }

    // Submit level with enhanced functionality
    submitLevel(studentId, subject, answers) {
        const studentData = this.studentSessions[studentId];
        const quizKey = `currentQuiz_${subject}`;
        
        if (!studentData || !studentData[quizKey]) {
            return {
                success: false,
                error: "No active quiz found"
            };
        }

        const quizData = studentData[quizKey];
        const questions = quizData.questions;
        const level = quizData.level;

        let correctCount = 0;
        const results = [];
        const wrongAnswers = [];

        // Grade each answer
        for (const answer of answers) {
            const questionId = answer.question_id;
            const studentAnswer = answer.answer;
            
            const question = questions.find(q => q.id === questionId);
            if (question) {
                const isCorrect = studentAnswer === question.correct_answer;
                if (isCorrect) {
                    correctCount++;
                } else {
                    // Add wrong answers to review pool
                    wrongAnswers.push({
                        ...question,
                        student_answer: studentAnswer,
                        timestamp: new Date().toISOString()
                    });
                }
                
                results.push({
                    question_id: questionId,
                    question_text: question.question_text,
                    student_answer: studentAnswer,
                    correct_answer: question.correct_answer,
                    is_correct: isCorrect,
                    options: question.options
                });
            }
        }

        // Add wrong answers to review pool
        if (wrongAnswers.length > 0) {
            if (!this.wrongAnswersPool[studentId]) {
                this.wrongAnswersPool[studentId] = {};
            }
            if (!this.wrongAnswersPool[studentId][subject]) {
                this.wrongAnswersPool[studentId][subject] = [];
            }
            this.wrongAnswersPool[studentId][subject].push(...wrongAnswers);
        }

        // Add all questions to practice pool for spaced repetition
        if (!this.practicePool[studentId]) {
            this.practicePool[studentId] = {};
        }
        if (!this.practicePool[studentId][subject]) {
            this.practicePool[studentId][subject] = [];
        }

        // Add questions to practice pool with correct count tracking
        questions.forEach(q => {
            const existingIndex = this.practicePool[studentId][subject].findIndex(pq => pq.id === q.id);
            if (existingIndex === -1) {
                // New question in practice pool
                this.practicePool[studentId][subject].push({
                    ...q,
                    correct_count: results.find(r => r.question_id === q.id)?.is_correct ? 1 : 0,
                    total_attempts: 1,
                    last_attempt: new Date().toISOString()
                });
            } else {
                // Update existing question
                const practiceQ = this.practicePool[studentId][subject][existingIndex];
                const wasCorrect = results.find(r => r.question_id === q.id)?.is_correct;
                if (wasCorrect) {
                    practiceQ.correct_count++;
                }
                practiceQ.total_attempts++;
                practiceQ.last_attempt = new Date().toISOString();

                // Check if mastered (5 correct answers)
                if (practiceQ.correct_count >= 5) {
                    // Move to mastered questions
                    if (!this.masteredQuestions[studentId]) {
                        this.masteredQuestions[studentId] = {};
                    }
                    if (!this.masteredQuestions[studentId][subject]) {
                        this.masteredQuestions[studentId][subject] = [];
                    }
                    this.masteredQuestions[studentId][subject].push({
                        ...practiceQ,
                        mastered_at: new Date().toISOString()
                    });
                    
                    // Remove from practice pool
                    this.practicePool[studentId][subject].splice(existingIndex, 1);
                }
            }
        });

        // Adaptive Level Progression Algorithm
        const totalQuestions = questions.length;
        const currentLevel = studentData.subjects[subject].currentLevel;
        let newLevel, outcome, message;

        if (correctCount >= 4) { // 80-100% correct
            newLevel = Math.min(10, currentLevel + 1);
            outcome = "level_up";
            message = `🚀 EXCELLENT! ${correctCount}/${totalQuestions} correct. Advanced to Level ${newLevel}!`;
        } else if (correctCount === 3) { // 60% correct
            newLevel = currentLevel;
            outcome = "retry";
            message = `📚 Good effort! ${correctCount}/${totalQuestions} correct. Try Level ${currentLevel} again.`;
        } else { // 0-40% correct
            newLevel = Math.max(1, currentLevel - 1);
            outcome = "level_down";
            message = `💪 Keep learning! ${correctCount}/${totalQuestions} correct. Trying Level ${newLevel}.`;
        }

        // Update student progress
        const oldLevel = currentLevel;
        studentData.subjects[subject].currentLevel = newLevel;
        studentData.subjects[subject].questionsAnswered += totalQuestions;
        studentData.subjects[subject].totalCorrect += correctCount;
        studentData.subjects[subject].levelHistory.push({
            level: currentLevel,
            score: correctCount,
            total: totalQuestions,
            timestamp: new Date().toISOString()
        });

        // Clean up quiz session
        delete studentData[quizKey];
        
        this.saveToStorage();

        return {
            success: true,
            outcome: outcome,
            message: message,
            score: {
                correct: correctCount,
                total: totalQuestions,
                percentage: (correctCount / totalQuestions) * 100
            },
            level_info: {
                previous_level: oldLevel,
                new_level: newLevel,
                level_changed: newLevel !== oldLevel
            },
            results: results,
            wrong_answers_added: wrongAnswers.length,
            practice_pool_size: this.practicePool[studentId]?.[subject]?.length || 0
        };
    }

    // Get wrong answers for review section
    getWrongAnswers(studentId, subject = null) {
        if (!this.wrongAnswersPool[studentId]) {
            return {
                success: true,
                wrong_answers: {},
                total_count: 0
            };
        }

        if (subject) {
            return {
                success: true,
                wrong_answers: {
                    [subject]: this.wrongAnswersPool[studentId][subject] || []
                },
                total_count: this.wrongAnswersPool[studentId][subject]?.length || 0
            };
        }

        const totalCount = Object.values(this.wrongAnswersPool[studentId])
            .reduce((sum, arr) => sum + arr.length, 0);

        return {
            success: true,
            wrong_answers: this.wrongAnswersPool[studentId],
            total_count: totalCount
        };
    }

    // Get practice questions for spaced repetition
    getPracticeQuestions(studentId, subject, count = 10) {
        if (!this.practicePool[studentId] || !this.practicePool[studentId][subject]) {
            return {
                success: true,
                practice_questions: [],
                total_in_pool: 0,
                mastered_count: this.masteredQuestions[studentId]?.[subject]?.length || 0
            };
        }

        const practiceQuestions = this.practicePool[studentId][subject];
        
        // Sort by priority (least correct answers first, then by last attempt time)
        const sortedQuestions = practiceQuestions.sort((a, b) => {
            if (a.correct_count !== b.correct_count) {
                return a.correct_count - b.correct_count; // Least correct first
            }
            return new Date(a.last_attempt) - new Date(b.last_attempt); // Oldest first
        });

        // Return requested number of questions with shuffled options
        const selectedQuestions = sortedQuestions.slice(0, count).map(q => ({
            ...q,
            options: [...q.options].sort(() => Math.random() - 0.5)
        }));

        return {
            success: true,
            practice_questions: selectedQuestions,
            total_in_pool: practiceQuestions.length,
            mastered_count: this.masteredQuestions[studentId]?.[subject]?.length || 0
        };
    }

    // Submit practice answer (Modified Leitner System)
    submitPracticeAnswer(studentId, subject, questionId, answer) {
        if (!this.practicePool[studentId] || !this.practicePool[studentId][subject]) {
            return {
                success: false,
                error: "No practice pool found"
            };
        }

        const practiceQuestions = this.practicePool[studentId][subject];
        const questionIndex = practiceQuestions.findIndex(q => q.id === questionId);
        
        if (questionIndex === -1) {
            return {
                success: false,
                error: "Question not found in practice pool"
            };
        }

        const question = practiceQuestions[questionIndex];
        const isCorrect = answer === question.correct_answer;

        // Update question stats
        if (isCorrect) {
            question.correct_count++;
        }
        question.total_attempts++;
        question.last_attempt = new Date().toISOString();

        let result = {
            success: true,
            is_correct: isCorrect,
            correct_answer: question.correct_answer,
            question_text: question.question_text,
            correct_count: question.correct_count,
            mastered: false
        };

        // Check if mastered (Modified Leitner System: 5 correct answers)
        if (question.correct_count >= 5) {
            // Move to mastered
            if (!this.masteredQuestions[studentId]) {
                this.masteredQuestions[studentId] = {};
            }
            if (!this.masteredQuestions[studentId][subject]) {
                this.masteredQuestions[studentId][subject] = [];
            }
            
            this.masteredQuestions[studentId][subject].push({
                ...question,
                mastered_at: new Date().toISOString()
            });
            
            // Remove from practice pool
            practiceQuestions.splice(questionIndex, 1);
            
            result.mastered = true;
            result.message = `🎉 Question mastered! Removed from practice pool.`;
        } else {
            result.message = `${isCorrect ? '✅ Correct!' : '❌ Incorrect.'} ${5 - question.correct_count} more correct answers needed to master.`;
        }

        this.saveToStorage();
        return result;
    }

    // Clear wrong answers (for review section)
    clearWrongAnswers(studentId, subject = null) {
        if (!this.wrongAnswersPool[studentId]) {
            return { success: true, cleared: 0 };
        }

        let cleared = 0;
        if (subject) {
            cleared = this.wrongAnswersPool[studentId][subject]?.length || 0;
            this.wrongAnswersPool[studentId][subject] = [];
        } else {
            cleared = Object.values(this.wrongAnswersPool[studentId])
                .reduce((sum, arr) => sum + arr.length, 0);
            this.wrongAnswersPool[studentId] = {};
        }

        this.saveToStorage();
        return { success: true, cleared: cleared };
    }

    // Get student progress with detailed stats
    getProgress(studentId) {
        if (!this.studentSessions[studentId]) {
            return {
                success: false,
                error: "Student not found"
            };
        }

        const studentData = this.studentSessions[studentId];
        const progress = {};

        for (const [subject, data] of Object.entries(studentData.subjects)) {
            const wrongCount = this.wrongAnswersPool[studentId]?.[subject]?.length || 0;
            const practiceCount = this.practicePool[studentId]?.[subject]?.length || 0;
            const masteredCount = this.masteredQuestions[studentId]?.[subject]?.length || 0;

            progress[subject] = {
                current_level: data.currentLevel,
                questions_answered: data.questionsAnswered,
                total_correct: data.totalCorrect,
                accuracy: (data.totalCorrect / Math.max(data.questionsAnswered, 1)) * 100,
                wrong_answers_count: wrongCount,
                practice_pool_count: practiceCount,
                mastered_count: masteredCount,
                level_history: data.levelHistory || []
            };
        }

        return {
            success: true,
            progress: progress
        };
    }
}

// Create global instance
window.adaptiveAITutor = new AdaptiveAITutor();

console.log('🎉 Adaptive AI Tutor Engine Loaded!');
console.log('📊 Features: 200 Questions, Modified Leitner System, Adaptive Progression, Review System');
console.log('🧠 Algorithms: Spaced Repetition, Level Progression, Progress Persistence');
