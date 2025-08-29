#!/bin/bash

# 🚀 VERCEL DEPLOYMENT GUIDE
# Student: Shambhavi Jha (22BCE11413)
# Project: Bajaj Finserv Health - Full Stack Developer Task

echo "🚀 VERCEL DEPLOYMENT GUIDE"
echo "👤 Student: Shambhavi Jha"
echo "🎓 Roll Number: 22BCE11413"
echo "================================"
echo

echo "📋 STEP 1: Pre-deployment Checklist"
echo "✅ Checking project files..."

# Check if essential files exist
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json missing"
fi

if [ -f "server.js" ]; then
    echo "✅ server.js found"
else
    echo "❌ server.js missing"
fi

if [ -f "vercel.json" ]; then
    echo "✅ vercel.json found"
else
    echo "❌ vercel.json missing"
fi

echo
echo "📋 STEP 2: Install Vercel CLI"
echo "Run this command in your terminal:"
echo "npm install -g vercel"
echo
echo "📋 STEP 3: Login to Vercel"
echo "Run: vercel login"
echo "Follow the prompts to authenticate with GitHub/Google/Email"
echo
echo "📋 STEP 4: Deploy"
echo "From project directory, run: vercel"
echo "Answer the setup questions:"
echo "- Set up and deploy? [Y/n] -> Y"
echo "- Which scope? -> Select your account"
echo "- Link to existing project? [y/N] -> N"
echo "- Project name -> bajaj-bfhl-shambhavi-jha (or similar)"
echo "- Directory -> ./ (current directory)"
echo "- Auto-detect settings? [Y/n] -> Y"
echo "- Deploy? [Y/n] -> Y"
echo
echo "📋 STEP 5: Get Your URL"
echo "After deployment, Vercel will give you a URL like:"
echo "https://bajaj-bfhl-shambhavi-jha.vercel.app"
echo
echo "📋 STEP 6: Test Your Deployment"
echo "Your API endpoint will be:"
echo "https://your-domain.vercel.app/bfhl"
echo
echo "📋 STEP 7: Submit to Bajaj"
echo "Use the URL with /bfhl endpoint in the form:"
echo "https://forms.office.com/r/ZeVpUYp3zV"
echo
echo "🎉 DEPLOYMENT COMPLETE!"
echo "Good luck with your placement, Shambhavi! 🌟"
