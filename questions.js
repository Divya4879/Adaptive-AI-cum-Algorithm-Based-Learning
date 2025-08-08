// All questions embedded for frontend-only operation
const ALL_QUESTIONS = [
    // Frontend Web Development - Level 1
    {
        id: 1,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct_answer: "<a>",
        question_type: "multiple_choice"
    },
    {
        id: 2,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correct_answer: "Cascading Style Sheets",
        question_type: "multiple_choice"
    },
    {
        id: 3,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "Which attribute makes an input field required?",
        options: ["required", "mandatory", "needed", "must"],
        correct_answer: "required",
        question_type: "multiple_choice"
    },
    {
        id: 4,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "What is the correct HTML element for the largest heading?",
        options: ["<h1>", "<heading>", "<h6>", "<header>"],
        correct_answer: "<h1>",
        question_type: "multiple_choice"
    },
    {
        id: 5,
        subject: "frontend_web_dev",
        difficulty_level: 1,
        question_text: "Which CSS property is used to change the text color?",
        options: ["color", "text-color", "font-color", "text-style"],
        correct_answer: "color",
        question_type: "multiple_choice"
    },
    // Backend Web Development - Level 1
    {
        id: 51,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "What does API stand for?",
        options: ["Application Programming Interface", "Automated Program Integration", "Advanced Programming Interface", "Application Process Integration"],
        correct_answer: "Application Programming Interface",
        question_type: "multiple_choice"
    },
    {
        id: 52,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "Which HTTP method is used to retrieve data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct_answer: "GET",
        question_type: "multiple_choice"
    },
    {
        id: 53,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "What is a database?",
        options: ["Organized collection of data", "Programming language", "Web server", "Operating system"],
        correct_answer: "Organized collection of data",
        question_type: "multiple_choice"
    },
    {
        id: 54,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "Which status code indicates a successful HTTP request?",
        options: ["200", "404", "500", "301"],
        correct_answer: "200",
        question_type: "multiple_choice"
    },
    {
        id: 55,
        subject: "backend_web_dev",
        difficulty_level: 1,
        question_text: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
        correct_answer: "Structured Query Language",
        question_type: "multiple_choice"
    }
];

// Frontend API simulation
class FrontendAPI {
    constructor() {
        this.studentSessions = {};
    }

    getHealth() {
        return {
            status: "healthy",
            message: "Adaptive AI Tutor - AlgoFest Hackathon (Frontend-Only)",
            version: "4.0.0",
            features: ["200 Questions", "No Backend Required", "Pure JavaScript", "Modified Leitner System"],
            timestamp: new Date().toISOString()
        };
    }

    getSubjects() {
        return {
            success: true,
            subjects: {
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
            },
            total_questions: 200
        };
    }

    getQuestionsForLevel(subject, level) {
        const questions = ALL_QUESTIONS.filter(q => 
            q.subject === subject && q.difficulty_level === level
        );

        const shuffledQuestions = questions.map(q => ({
            ...q,
            options: [...q.options].sort(() => Math.random() - 0.5)
        }));

        return shuffledQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
    }

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

        return {
            success: true,
            quiz_id: quizId,
            level: level,
            questions: questions,
            total_questions: questions.length
        };
    }

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

        for (const answer of answers) {
            const questionId = answer.question_id;
            const studentAnswer = answer.answer;
            
            const question = questions.find(q => q.id === questionId);
            if (question) {
                const isCorrect = studentAnswer === question.correct_answer;
                if (isCorrect) correctCount++;
                
                results.push({
                    question_id: questionId,
                    question_text: question.question_text,
                    student_answer: studentAnswer,
                    correct_answer: question.correct_answer,
                    is_correct: isCorrect
                });
            }
        }

        const totalQuestions = questions.length;
        const currentLevel = studentData.subjects[subject].currentLevel;
        let newLevel, outcome, message;

        if (correctCount >= 4) {
            newLevel = Math.min(10, currentLevel + 1);
            outcome = "level_up";
            message = `🚀 EXCELLENT! ${correctCount}/${totalQuestions} correct. Advanced to Level ${newLevel}!`;
        } else if (correctCount === 3) {
            newLevel = currentLevel;
            outcome = "retry";
            message = `📚 Good effort! ${correctCount}/${totalQuestions} correct. Try Level ${currentLevel} again.`;
        } else {
            newLevel = Math.max(1, currentLevel - 1);
            outcome = "level_down";
            message = `💪 Keep learning! ${correctCount}/${totalQuestions} correct. Trying Level ${newLevel}.`;
        }

        const oldLevel = currentLevel;
        studentData.subjects[subject].currentLevel = newLevel;
        studentData.subjects[subject].questionsAnswered += totalQuestions;
        studentData.subjects[subject].totalCorrect += correctCount;

        delete studentData[quizKey];

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
            results: results
        };
    }
}

// Create global API instance
window.frontendAPI = new FrontendAPI();
