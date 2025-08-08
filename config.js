
cat > config.js << 'EOF'
// Auto-detect API URL for local and production environments
const API_BASE_URL = (() => {
    const hostname = window.location.hostname;

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'http://localhost:5000';
    } else {
        // Replace with your ACTUAL backend URL from Render
        return 'https://adaptive-ai-tutor-backend.onrender.com';
    }
})();

console.log('🌐 API Base URL:', API_BASE_URL);
EOF