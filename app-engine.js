// Enhanced Adaptive AI Tutor Engine with User Data Integration
console.log('🧠 Loading Enhanced Adaptive AI Tutor Engine...');

class AdaptiveAITutor {
    constructor() {
        this.studentSessions = {};
        
        // Wait for user data manager to be available
        this.waitForUserDataManager();
        
        // Verify questions are loaded
        if (typeof ALL_QUESTIONS !== 'undefined') {
            console.log(`✅ Engine initialized with ${ALL_QUESTIONS.length} questions`);
        } else {
            console.error('❌ ALL_QUESTIONS not available to engine');
        }
    }

    // Wait for user data manager to be available
    async waitForUserDataManager() {
        while (typeof window.userDataManager === 'undefined') {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        console.log('✅ User Data Manager connected to engine');
    }

    // Health check
    getHealth() {
        return {
            status: "healthy",
            message: "Adaptive AI Tutor - AlgoFest Hackathon (Enhanced with User Tracking)",
            version: "6.0.0",
            features: [
                "200 Unique Questions (50 per subject)",
                "Modified Leitner System Algorithm",
                "Adaptive Level Progression", 
                "Comprehensive User Data Tracking",
                "Wrong Answer Review System",
                "Spaced Repetition Practice",
                "Progress Persistence"
            ],
            timestamp: new Date().toISOString(),
            questions_loaded: typeof ALL_QUESTIONS !== 'undefined' ? ALL_QUESTIONS.length : 0
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
            total_questions: typeof ALL_QUESTIONS !== 'undefined' ? ALL_QUESTIONS.length : 0
        };
    }

    // Get exactly 5 questions for a specific level
    getQuestionsForLevel(subject, level) {
        if (typeof ALL_QUESTIONS === 'undefined') {
            console.error('❌ ALL_QUESTIONS not available');
            return [];
        }

        const questions = ALL_QUESTIONS.filter(q => 
            q.subject === subject && q.difficulty_level === level
        );

        console.log(`🔍 Found ${questions.length} questions for ${subject} level ${level}`);

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
        console.log(`🎯 Starting level: ${studentId}, ${subject}, ${level}`);
        
        if (!this.studentSessions[studentId]) {
            this.studentSessions[studentId] = {};
        }

        // Get current level from user data manager if available
        if (window.userDataManager) {
            level = window.userDataManager.getCurrentLevel(subject);
        }

        const questions = this.getQuestionsForLevel(subject, level);
        
        if (questions.length === 0) {
            console.error(`❌ No questions found for ${subject} Level ${level}`);
            return {
                success: false,
                error: `No questions available for ${subject} Level ${level}`
            };
        }

        const quizId = `${studentId}_${subject}_${level}_${Date.now()}`;
        this.studentSessions[studentId][`currentQuiz_${subject}`] = {
            quizId: quizId,
            questions: questions,
            level: level,
            subject: subject,
            answers: [],
            startTime: new Date().toISOString()
        };

        console.log(`✅ Quiz started successfully with ${questions.length} questions`);
        return {
            success: true,
            quiz_id: quizId,
            level: level,
            questions: questions,
            total_questions: questions.length
        };
    }

    // Submit level with enhanced user data tracking
    submitLevel(studentId, subject, answers) {
        const quizKey = `currentQuiz_${subject}`;
        
        if (!this.studentSessions[studentId] || !this.studentSessions[studentId][quizKey]) {
            return {
                success: false,
                error: "No active quiz found"
            };
        }

        const quizData = this.studentSessions[studentId][quizKey];
        const questions = quizData.questions;
        const level = quizData.level;

        let correctCount = 0;
        const results = [];

        // Grade each answer
        for (const answer of answers) {
            const questionId = answer.question_id;
            const studentAnswer = answer.answer;
            
            const question = questions.find(q => q.id === questionId);
            if (question) {
                const isCorrect = studentAnswer === question.correct_answer;
                if (isCorrect) {
                    correctCount++;
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

        // Adaptive Level Progression Algorithm
        const totalQuestions = questions.length;
        let newLevel, outcome, message;

        if (correctCount >= 4) { // 80-100% correct
            newLevel = Math.min(10, level + 1);
            outcome = "level_up";
            message = `🚀 EXCELLENT! ${correctCount}/${totalQuestions} correct. Advanced to Level ${newLevel}!`;
        } else if (correctCount === 3) { // 60% correct
            newLevel = level;
            outcome = "retry";
            message = `📚 Good effort! ${correctCount}/${totalQuestions} correct. Try Level ${level} again.`;
        } else { // 0-40% correct
            newLevel = Math.max(1, level - 1);
            outcome = "level_down";
            message = `💪 Keep learning! ${correctCount}/${totalQuestions} correct. Trying Level ${newLevel}.`;
        }

        const result = {
            success: true,
            outcome: outcome,
            message: message,
            score: {
                correct: correctCount,
                total: totalQuestions,
                percentage: (correctCount / totalQuestions) * 100
            },
            level_info: {
                previous_level: level,
                new_level: newLevel,
                level_changed: newLevel !== level
            },
            results: results
        };

        // Update user data through user data manager
        if (window.userDataManager) {
            window.userDataManager.updateQuizResults(subject, result);
            window.userDataManager.updateCurrentLevel(subject, newLevel);
        }

        // Clean up quiz session
        delete this.studentSessions[studentId][quizKey];

        console.log(`✅ Quiz completed: ${correctCount}/${totalQuestions}, Level ${level} -> ${newLevel}`);
        return result;
    }

    // Get wrong answers for review (delegated to user data manager)
    getWrongAnswers(studentId, subject = null) {
        if (window.userDataManager) {
            const wrongQuestions = window.userDataManager.getWrongQuestions(subject);
            return {
                success: true,
                wrong_answers: subject ? { [subject]: wrongQuestions } : wrongQuestions,
                total_count: subject ? wrongQuestions.length : 
                    Object.values(wrongQuestions).reduce((sum, arr) => sum + arr.length, 0)
            };
        }
        
        return {
            success: true,
            wrong_answers: {},
            total_count: 0
        };
    }

    // Get practice questions (delegated to user data manager)
    getPracticeQuestions(studentId, subject, count = 10) {
        if (window.userDataManager) {
            const practiceQuestions = window.userDataManager.getPracticeQuestions(subject);
            const stats = window.userDataManager.getPracticeStats(subject);
            
            return {
                success: true,
                practice_questions: practiceQuestions.slice(0, count),
                total_in_pool: practiceQuestions.length,
                mastered_count: stats.masteredQuestions,
                stats: stats
            };
        }
        
        return {
            success: true,
            practice_questions: [],
            total_in_pool: 0,
            mastered_count: 0
        };
    }

    // Submit practice answer (Modified Leitner System)
    submitPracticeAnswer(studentId, subject, questionId, answer) {
        if (!window.userDataManager) {
            return {
                success: false,
                error: "User data manager not available"
            };
        }

        // Find the question to check correct answer
        const practiceQuestions = window.userDataManager.getPracticeQuestions(subject);
        const question = practiceQuestions.find(q => q.id === questionId);
        
        if (!question) {
            return {
                success: false,
                error: "Question not found in practice pool"
            };
        }

        const isCorrect = answer === question.correct_answer;
        const progress = window.userDataManager.updatePracticeProgress(questionId, isCorrect);

        return {
            success: true,
            is_correct: isCorrect,
            correct_answer: question.correct_answer,
            question_text: question.question_text,
            progress: progress,
            message: progress.mastered 
                ? `🎉 Question mastered! Removed from practice pool.`
                : `${isCorrect ? '✅ Correct!' : '❌ Incorrect.'} Progress: ${progress.correctCount}/5 correct answers.`
        };
    }

    // Get student progress (delegated to user data manager)
    getProgress(studentId) {
        if (window.userDataManager) {
            const stats = window.userDataManager.getUserStats();
            return {
                success: true,
                progress: stats
            };
        }
        
        return {
            success: false,
            error: "User data manager not available"
        };
    }
}

// Create global instance
window.adaptiveAITutor = new AdaptiveAITutor();

console.log('🎉 Enhanced Adaptive AI Tutor Engine Loaded!');
console.log('📊 Features: User Data Tracking, Modified Leitner System, Adaptive Progression');
console.log('🏆 AlgoFest Ready: Algorithm-focused educational platform');
