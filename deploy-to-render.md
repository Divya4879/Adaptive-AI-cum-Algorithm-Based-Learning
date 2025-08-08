# 🚀 One-Click Render Deployment

## **Your project is now Render-ready! Just follow these 3 steps:**

### **Step 1: Push to GitHub**
```bash
git add .
git commit -m "feat: Render-ready deployment configuration"
git push origin main
```

### **Step 2: Deploy on Render**
1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click **"New +"** → **"Blueprint"**
4. Select your `adaptive-ai-tutor` repository
5. Click **"Connect"**

**That's it! Render will automatically:**
- Deploy your backend API
- Deploy your frontend
- Configure all URLs
- Set up CORS
- Handle production settings

### **Step 3: Access Your Live Demo**
After deployment (5-10 minutes), your URLs will be:

- **🌐 Live Demo**: `https://adaptive-ai-tutor-frontend.onrender.com/index.html`
- **🔗 API**: `https://adaptive-ai-tutor-backend.onrender.com/`

## **What's Been Configured:**

✅ **render.yaml** - Automatic deployment configuration
✅ **Production app.py** - Gunicorn server ready
✅ **CORS enabled** - Frontend can talk to backend
✅ **Dynamic API URLs** - Works locally and in production
✅ **Requirements updated** - All dependencies included

## **For AlgoFest Judges:**
Share this URL: `https://adaptive-ai-tutor-frontend.onrender.com/index.html`

**Your Modified Leitner System is ready for the world!** 🏆
