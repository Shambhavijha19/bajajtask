#!/bin/bash

# Bajaj Finserv Health - Setup and Test Script
# Student: Shambhavi Jha (22BCE11413)

echo "🚀 Bajaj Finserv Health - Full Stack Developer Task"
echo "👤 Student: Shambhavi Jha"
echo "🎓 Roll Number: 22BCE11413"
echo "🏫 University: VIT Bhopal University"
echo "=" 

echo "📋 Project Structure:"
ls -la

echo ""
echo "📦 Available implementations:"
echo "1. Node.js + Express (server.js)"
echo "2. Python + Flask (app.py)"

echo ""
echo "📝 API Specifications:"
echo "- Endpoint: /bfhl"
echo "- Method: POST"
echo "- Expected Status: 200"

echo ""
echo "🧪 Test Data Examples:"
echo 'Example A: {"data": ["a","1","334","4","R", "$"]}'
echo 'Example B: {"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'
echo 'Example C: {"data": ["A","ABcD","DOE"]}'

echo ""
echo "🔧 Setup Instructions:"
echo ""
echo "For Node.js version:"
echo "1. npm install"
echo "2. npm start"
echo "3. Test with: curl -X POST http://localhost:3000/bfhl -H \"Content-Type: application/json\" -d '{\"data\": [\"a\",\"1\",\"334\",\"4\",\"R\", \"$\"]}'"
echo ""
echo "For Python version:"
echo "1. pip install -r requirements.txt"
echo "2. python3 app.py"
echo "3. Test with: curl -X POST http://localhost:5000/bfhl -H \"Content-Type: application/json\" -d '{\"data\": [\"a\",\"1\",\"334\",\"4\",\"R\", \"$\"]}'"

echo ""
echo "☁️ Deployment ready for:"
echo "- Vercel (Node.js)"
echo "- Heroku (Both)"
echo "- Railway (Both)"  
echo "- Render (Both)"

echo ""
echo "✅ All files created successfully!"
echo "📁 Project ready for submission!"
