#!/bin/bash
echo "📊 Adaptive AI Tutor Status:"
echo ""

if [ -f backend.pid ] && kill -0 $(cat backend.pid) 2>/dev/null; then
    echo "✅ Backend: Running (PID: $(cat backend.pid))"
    echo "   📡 API: http://localhost:5000"
else
    echo "❌ Backend: Not running"
fi

if [ -f frontend.pid ] && kill -0 $(cat frontend.pid) 2>/dev/null; then
    echo "✅ Frontend: Running (PID: $(cat frontend.pid))"
    echo "   🌐 Web: http://localhost:3000"
else
    echo "❌ Frontend: Not running"
fi

echo ""
echo "🏆 AlgoFest Demo URLs:"
echo "   📊 Dashboard: http://localhost:3000/index.html"
echo "   🧠 Practice: http://localhost:3000/spaced-repetition.html"
