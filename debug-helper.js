// Debug Helper for Render Deployment Issues
console.log('🔧 Debug Helper Loaded');

// Check if questions are loaded
window.debugQuestions = function() {
    console.log('🔍 DEBUGGING QUESTIONS...');
    
    if (typeof ALL_QUESTIONS !== 'undefined') {
        console.log(`✅ ALL_QUESTIONS loaded: ${ALL_QUESTIONS.length} questions`);
        
        // Check each subject
        const subjects = ['frontend_web_dev', 'backend_web_dev', 'software_engineering', 'cloud_computing'];
        subjects.forEach(subject => {
            const count = ALL_QUESTIONS.filter(q => q.subject === subject).length;
            console.log(`   ${subject}: ${count} questions`);
        });
        
        // Check levels
        for (let level = 1; level <= 10; level++) {
            const levelCount = ALL_QUESTIONS.filter(q => q.difficulty_level === level).length;
            console.log(`   Level ${level}: ${levelCount} questions`);
        }
        
        // Test getting questions for level 1 frontend
        const testQuestions = ALL_QUESTIONS.filter(q => 
            q.subject === 'frontend_web_dev' && q.difficulty_level === 1
        );
        console.log(`🧪 Test - Frontend Level 1: ${testQuestions.length} questions`);
        if (testQuestions.length > 0) {
            console.log('   Sample question:', testQuestions[0].question_text);
        }
        
    } else {
        console.error('❌ ALL_QUESTIONS not defined!');
    }
    
    // Check if engine is loaded
    if (typeof window.adaptiveAITutor !== 'undefined') {
        console.log('✅ AdaptiveAITutor engine loaded');
        
        // Test engine
        try {
            const health = window.adaptiveAITutor.getHealth();
            console.log('✅ Engine health check:', health.status);
            
            const subjects = window.adaptiveAITutor.getSubjects();
            console.log('✅ Subjects loaded:', subjects.success);
            
            // Test getting questions
            const testResult = window.adaptiveAITutor.startLevel('debug_student', 'frontend_web_dev', 1);
            console.log('✅ Test quiz start:', testResult.success);
            if (testResult.success) {
                console.log(`   Got ${testResult.questions.length} questions`);
            } else {
                console.error('   Error:', testResult.error);
            }
            
        } catch (error) {
            console.error('❌ Engine test failed:', error);
        }
        
    } else {
        console.error('❌ AdaptiveAITutor engine not loaded!');
    }
};

// Auto-run debug on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('🚀 Auto-running debug check...');
        window.debugQuestions();
    }, 1000);
});

console.log('🔧 Debug helper ready. Run debugQuestions() to check status.');
