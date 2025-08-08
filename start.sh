#!/bin/bash
echo "🚀 Starting Adaptive AI Tutor - AlgoFest 2025"
echo ""

# Start backend from root
echo "Starting backend server..."
nohup python app.py > server.log 2>&1 &
echo "Backend PID: $!"

# Start frontend
echo "Starting frontend server..."
nohup python3 -m http.server 3000 > frontend.log 2>&1 &
echo "Frontend PID: $!"

sleep 3
echo ""
echo "✅ Adaptive AI Tutor is running!"
echo ""
echo "🌐 Open in browser:"
echo "   http://localhost:3000/dashboard.html"
echo ""
echo "🏆 AlgoFest Hackathon Features:"
echo "   • Modified Leitner System (Spaced Repetition)"
echo "   • Adaptive Level Progression"
echo "   • Continuous Learning Flow"
echo "   • 200 Curated Questions"
