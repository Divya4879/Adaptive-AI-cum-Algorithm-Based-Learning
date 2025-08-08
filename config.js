// Enhanced Frontend API wrapper for complete functionality
window.apiCall = {
    async get(endpoint) {
        // Simulate API delay for realistic experience
        await new Promise(resolve => setTimeout(resolve, 100));
        
        switch(endpoint) {
            case '/':
                return { ok: true, json: async () => window.adaptiveAITutor.getHealth() };
                
            case '/api/subjects':
                return { ok: true, json: async () => window.adaptiveAITutor.getSubjects() };
                
            default:
                // Handle dynamic endpoints
                if (endpoint.startsWith('/api/wrong-answers/')) {
                    const parts = endpoint.split('/');
                    const studentId = parts[3];
                    const subject = parts[4] || null;
                    return { 
                        ok: true, 
                        json: async () => window.adaptiveAITutor.getWrongAnswers(studentId, subject) 
                    };
                }
                
                if (endpoint.startsWith('/api/practice/')) {
                    const parts = endpoint.split('/');
                    const studentId = parts[3];
                    const subject = parts[4];
                    const count = parseInt(parts[5]) || 10;
                    return { 
                        ok: true, 
                        json: async () => window.adaptiveAITutor.getPracticeQuestions(studentId, subject, count) 
                    };
                }
                
                if (endpoint.startsWith('/api/progress/')) {
                    const studentId = endpoint.split('/')[3];
                    return { 
                        ok: true, 
                        json: async () => window.adaptiveAITutor.getProgress(studentId) 
                    };
                }
                
                return { ok: false, status: 404 };
        }
    },
    
    async post(endpoint, data) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 200));
        
        switch(endpoint) {
            case '/api/level/start':
                const startResult = window.adaptiveAITutor.startLevel(
                    data.student_id, 
                    data.subject, 
                    data.level
                );
                return { 
                    ok: startResult.success, 
                    json: async () => startResult 
                };
                
            case '/api/level/submit':
                const submitResult = window.adaptiveAITutor.submitLevel(
                    data.student_id,
                    data.subject,
                    data.answers
                );
                return { 
                    ok: submitResult.success, 
                    json: async () => submitResult 
                };
                
            case '/api/practice/submit':
                const practiceResult = window.adaptiveAITutor.submitPracticeAnswer(
                    data.student_id,
                    data.subject,
                    data.question_id,
                    data.answer
                );
                return { 
                    ok: practiceResult.success, 
                    json: async () => practiceResult 
                };
                
            default:
                // Handle dynamic POST endpoints
                if (endpoint.startsWith('/api/wrong-answers/clear/')) {
                    const parts = endpoint.split('/');
                    const studentId = parts[4];
                    const subject = parts[5] || null;
                    const clearResult = window.adaptiveAITutor.clearWrongAnswers(studentId, subject);
                    return { 
                        ok: clearResult.success, 
                        json: async () => clearResult 
                    };
                }
                
                return { ok: false, status: 404 };
        }
    }
};

// Helper functions for common operations
window.apiHelpers = {
    // Get current student ID (create if doesn't exist)
    getStudentId() {
        let studentId = localStorage.getItem('studentId');
        if (!studentId) {
            studentId = `student_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            localStorage.setItem('studentId', studentId);
        }
        return studentId;
    },
    
    // Format subject name for display
    formatSubjectName(subjectId) {
        const names = {
            'frontend_web_dev': 'Frontend Web Development',
            'backend_web_dev': 'Backend Web Development', 
            'software_engineering': 'Software Engineering',
            'cloud_computing': 'Cloud Computing'
        };
        return names[subjectId] || subjectId;
    },
    
    // Get subject icon
    getSubjectIcon(subjectId) {
        const icons = {
            'frontend_web_dev': '🎨',
            'backend_web_dev': '⚙️',
            'software_engineering': '🏗️',
            'cloud_computing': '☁️'
        };
        return icons[subjectId] || '📚';
    },
    
    // Format accuracy percentage
    formatAccuracy(accuracy) {
        return Math.round(accuracy * 100) / 100;
    },
    
    // Get level name
    getLevelName(level) {
        const names = {
            1: 'Beginner', 2: 'Basic', 3: 'Intermediate', 4: 'Intermediate+',
            5: 'Advanced', 6: 'Advanced+', 7: 'Expert', 8: 'Expert+',
            9: 'Master', 10: 'Grandmaster'
        };
        return names[level] || `Level ${level}`;
    }
};

console.log('🌐 Enhanced Frontend API Ready!');
console.log('✅ Features: Quiz, Practice, Review, Progress Tracking');
console.log('🔧 Helper functions available via window.apiHelpers');
