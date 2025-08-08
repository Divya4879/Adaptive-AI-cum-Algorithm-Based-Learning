#!/bin/bash
echo "🚀 Starting Adaptive AI Tutor - AlgoFest 2025 (Frontend-Only)"
echo ""

# Start frontend server only
echo "Starting frontend server..."
nohup python3 -m http.server 3000 > frontend.log 2>&1 &
echo "Frontend PID: $!"

sleep 2
echo ""
echo "✅ Adaptive AI Tutor is running!"
echo ""
echo "🌐 Open in browser:"
echo "   http://localhost:3000/dashboard.html"
echo ""
echo "🏆 AlgoFest Features (Frontend-Only):"
echo "   • Modified Leitner System (Pure JavaScript)"
echo "   • Adaptive Level Progression (Client-side)"
echo "   • 200 Questions Embedded"
echo "   • No Backend Required!"
