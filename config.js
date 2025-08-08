// Frontend-only configuration - no backend needed!
const API_BASE_URL = null; // Not used in frontend-only mode

// Frontend API wrapper to simulate backend calls
window.apiCall = {
    async get(endpoint) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        switch(endpoint) {
            case '/':
                return { ok: true, json: async () => window.frontendAPI.getHealth() };
            case '/api/subjects':
                return { ok: true, json: async () => window.frontendAPI.getSubjects() };
            default:
                return { ok: false, status: 404 };
        }
    },
    
    async post(endpoint, data) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 200));
        
        switch(endpoint) {
            case '/api/level/start':
                const startResult = window.frontendAPI.startLevel(
                    data.student_id, 
                    data.subject, 
                    data.level
                );
                return { 
                    ok: startResult.success, 
                    json: async () => startResult 
                };
                
            case '/api/level/submit':
                const submitResult = window.frontendAPI.submitLevel(
                    data.student_id,
                    data.subject,
                    data.answers
                );
                return { 
                    ok: submitResult.success, 
                    json: async () => submitResult 
                };
                
            default:
                return { ok: false, status: 404 };
        }
    }
};

console.log('🌐 Frontend-only mode: No backend required!');
