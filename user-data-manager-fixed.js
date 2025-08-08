// User Data Manager - Fixed version with proper data handling
console.log('📊 Loading User Data Manager (Fixed)...');

class UserDataManager {
    constructor() {
        this.studentId = this.getOrCreateStudentId();
        this.userData = this.loadUserData();
        this.initializeDefaultData();
        console.log(`👤 User Data Manager initialized for student: ${this.studentId}`);
        console.log('📊 Initial user data:', this.userData);
    }

    // Get or create student ID
    getOrCreateStudentId() {
        let studentId = localStorage.getItem('studentId');
        if (!studentId) {
            studentId = `student_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            localStorage.setItem('studentId', studentId);
        }
        return studentId;
    }

    // Initialize default data if none exists
    initializeDefaultData() {
        // If user has no data, create default structure
        if (this.userData.totalQuestionsSolved === 0) {
            // Check if there's any existing quiz data in localStorage
            const existingLevels = JSON.parse(localStorage.getItem('subject_levels') || '{}');
            
            // If user has taken quizzes before, initialize with that data
            Object.keys(existingLevels).forEach(subject => {
                if (this.userData.subjects[subject]) {
                    this.userData.subjects[subject].currentLevel = existingLevels[subject];
                }
            });
            
            this.saveUserData();
        }
    }

    // Load user data from localStorage
    loadUserData() {
        try {
            const saved = localStorage.getItem('userData');
            if (saved) {
                const data = JSON.parse(saved);
                // Ensure all required fields exist
                return this.validateUserData(data);
            }
        } catch (e) {
            console.log('No saved user data found, creating new profile');
        }

        // Default user data structure
        return this.createDefaultUserData();
    }

    // Create default user data structure
    createDefaultUserData() {
        return {
            totalQuestionsSolved: 0,
            totalCorrectAnswers: 0,
            totalWrongAnswers: 0,
            subjects: {
                'frontend_web_dev': {
                    name: 'Frontend Web Development',
                    currentLevel: 1,
                    questionsSolved: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    accuracy: 0
                },
                'backend_web_dev': {
                    name: 'Backend Web Development',
                    currentLevel: 1,
                    questionsSolved: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    accuracy: 0
                },
                'software_engineering': {
                    name: 'Software Engineering',
                    currentLevel: 1,
                    questionsSolved: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    accuracy: 0
                },
                'cloud_computing': {
                    name: 'Cloud Computing',
                    currentLevel: 1,
                    questionsSolved: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    accuracy: 0
                }
            },
            wrongQuestions: {},
            practiceProgress: {}
        };
    }

    // Validate and fix user data structure
    validateUserData(data) {
        const defaultData = this.createDefaultUserData();
        
        // Ensure all required fields exist
        const validatedData = {
            totalQuestionsSolved: data.totalQuestionsSolved || 0,
            totalCorrectAnswers: data.totalCorrectAnswers || 0,
            totalWrongAnswers: data.totalWrongAnswers || 0,
            subjects: {},
            wrongQuestions: data.wrongQuestions || {},
            practiceProgress: data.practiceProgress || {}
        };

        // Validate each subject
        Object.keys(defaultData.subjects).forEach(subjectId => {
            validatedData.subjects[subjectId] = {
                name: defaultData.subjects[subjectId].name,
                currentLevel: (data.subjects && data.subjects[subjectId]) ? data.subjects[subjectId].currentLevel || 1 : 1,
                questionsSolved: (data.subjects && data.subjects[subjectId]) ? data.subjects[subjectId].questionsSolved || 0 : 0,
                correctAnswers: (data.subjects && data.subjects[subjectId]) ? data.subjects[subjectId].correctAnswers || 0 : 0,
                wrongAnswers: (data.subjects && data.subjects[subjectId]) ? data.subjects[subjectId].wrongAnswers || 0 : 0,
                accuracy: 0
            };
            
            // Recalculate accuracy
            const total = validatedData.subjects[subjectId].questionsSolved;
            if (total > 0) {
                validatedData.subjects[subjectId].accuracy = (validatedData.subjects[subjectId].correctAnswers / total) * 100;
            }
        });

        return validatedData;
    }

    // Save user data to localStorage
    saveUserData() {
        localStorage.setItem('userData', JSON.stringify(this.userData));
        console.log('💾 User data saved:', this.userData);
    }

    // Update quiz results
    updateQuizResults(subject, results) {
        console.log(`📈 Updating quiz results for ${subject}:`, results);

        const subjectData = this.userData.subjects[subject];
        const { correct, total, level_info, results: questionResults } = results;

        // Update subject stats
        subjectData.questionsSolved += total;
        subjectData.correctAnswers += correct;
        subjectData.wrongAnswers += (total - correct);
        subjectData.currentLevel = level_info.new_level;
        subjectData.accuracy = (subjectData.correctAnswers / subjectData.questionsSolved) * 100;

        // Update global stats
        this.userData.totalQuestionsSolved += total;
        this.userData.totalCorrectAnswers += correct;
        this.userData.totalWrongAnswers += (total - correct);

        // Process wrong questions for review and practice
        this.processWrongQuestions(subject, questionResults);

        this.saveUserData();
        console.log('✅ User data updated successfully');
    }

    // Process wrong questions for review and practice sections
    processWrongQuestions(subject, questionResults) {
        if (!this.userData.wrongQuestions[subject]) {
            this.userData.wrongQuestions[subject] = [];
        }

        questionResults.forEach(result => {
            if (!result.is_correct) {
                // Add to wrong questions for review
                const wrongQuestion = {
                    id: result.question_id,
                    question_text: result.question_text,
                    options: result.options,
                    correct_answer: result.correct_answer,
                    student_answer: result.student_answer,
                    subject: subject,
                    timestamp: new Date().toISOString()
                };

                // Check if question already exists in wrong questions
                const existingIndex = this.userData.wrongQuestions[subject].findIndex(
                    q => q.id === result.question_id
                );

                if (existingIndex === -1) {
                    // New wrong question
                    this.userData.wrongQuestions[subject].push(wrongQuestion);
                    
                    // Initialize practice progress
                    this.userData.practiceProgress[result.question_id] = {
                        correctCount: 0,
                        totalAttempts: 0,
                        subject: subject
                    };
                } else {
                    // Update existing wrong question with latest attempt
                    this.userData.wrongQuestions[subject][existingIndex] = wrongQuestion;
                }
            }
        });
    }

    // Get user statistics for dashboard
    getUserStats() {
        // Ensure data is valid
        const stats = {
            totalQuestionsSolved: this.userData.totalQuestionsSolved || 0,
            totalCorrectAnswers: this.userData.totalCorrectAnswers || 0,
            totalWrongAnswers: this.userData.totalWrongAnswers || 0,
            overallAccuracy: 0,
            subjects: {}
        };

        // Calculate overall accuracy
        if (stats.totalQuestionsSolved > 0) {
            stats.overallAccuracy = (stats.totalCorrectAnswers / stats.totalQuestionsSolved) * 100;
        }

        // Ensure all subjects have valid data
        const subjectIds = ['frontend_web_dev', 'backend_web_dev', 'software_engineering', 'cloud_computing'];
        subjectIds.forEach(subjectId => {
            if (this.userData.subjects[subjectId]) {
                stats.subjects[subjectId] = {
                    ...this.userData.subjects[subjectId]
                };
            } else {
                // Create default subject data if missing
                stats.subjects[subjectId] = {
                    name: this.getSubjectName(subjectId),
                    currentLevel: 1,
                    questionsSolved: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    accuracy: 0
                };
            }
        });

        console.log('📊 Returning user stats:', stats);
        return stats;
    }

    // Get subject name helper
    getSubjectName(subjectId) {
        const names = {
            'frontend_web_dev': 'Frontend Web Development',
            'backend_web_dev': 'Backend Web Development',
            'software_engineering': 'Software Engineering',
            'cloud_computing': 'Cloud Computing'
        };
        return names[subjectId] || subjectId;
    }

    // Get wrong questions for review section
    getWrongQuestions(subject = null) {
        if (subject) {
            return this.userData.wrongQuestions[subject] || [];
        }
        return this.userData.wrongQuestions;
    }

    // Get practice questions (wrong questions only)
    getPracticeQuestions(subject) {
        const wrongQuestions = this.userData.wrongQuestions[subject] || [];
        
        // Add practice progress to each question
        return wrongQuestions.map(question => {
            const progress = this.userData.practiceProgress[question.id] || {
                correctCount: 0,
                totalAttempts: 0
            };
            
            return {
                ...question,
                practiceProgress: progress,
                needsPractice: progress.correctCount < 5
            };
        }).filter(q => q.needsPractice); // Only return questions that need practice
    }

    // Update practice progress (Modified Leitner System)
    updatePracticeProgress(questionId, isCorrect) {
        if (!this.userData.practiceProgress[questionId]) {
            this.userData.practiceProgress[questionId] = {
                correctCount: 0,
                totalAttempts: 0
            };
        }

        const progress = this.userData.practiceProgress[questionId];
        progress.totalAttempts++;
        
        if (isCorrect) {
            progress.correctCount++;
        }

        // Check if question is mastered (5 correct answers)
        if (progress.correctCount >= 5) {
            // Remove from wrong questions list
            Object.keys(this.userData.wrongQuestions).forEach(subject => {
                this.userData.wrongQuestions[subject] = this.userData.wrongQuestions[subject].filter(
                    q => q.id !== questionId
                );
            });
            
            console.log(`🎉 Question ${questionId} mastered and removed from practice!`);
        }

        this.saveUserData();
        return {
            correctCount: progress.correctCount,
            totalAttempts: progress.totalAttempts,
            mastered: progress.correctCount >= 5
        };
    }

    // Get current level for subject
    getCurrentLevel(subject) {
        return this.userData.subjects[subject]?.currentLevel || 1;
    }

    // Update current level for subject
    updateCurrentLevel(subject, level) {
        if (this.userData.subjects[subject]) {
            this.userData.subjects[subject].currentLevel = level;
            this.saveUserData();
        }
    }

    // Get practice statistics
    getPracticeStats(subject) {
        const wrongQuestions = this.userData.wrongQuestions[subject] || [];
        const totalWrongQuestions = wrongQuestions.length;
        
        let questionsNeedingPractice = 0;
        let totalPracticeProgress = 0;

        wrongQuestions.forEach(question => {
            const progress = this.userData.practiceProgress[question.id];
            if (progress && progress.correctCount < 5) {
                questionsNeedingPractice++;
                totalPracticeProgress += progress.correctCount;
            }
        });

        return {
            totalWrongQuestions,
            questionsNeedingPractice,
            averageProgress: questionsNeedingPractice > 0 
                ? (totalPracticeProgress / questionsNeedingPractice) 
                : 0,
            masteredQuestions: totalWrongQuestions - questionsNeedingPractice
        };
    }

    // Reset all data (for testing purposes)
    resetAllData() {
        localStorage.removeItem('userData');
        this.userData = this.loadUserData();
        this.saveUserData();
        console.log('🔄 All user data reset');
    }
}

// Create global instance
window.userDataManager = new UserDataManager();

console.log('✅ User Data Manager (Fixed) loaded successfully');
console.log('📊 Current user stats:', window.userDataManager.getUserStats());
