#!/bin/bash

echo "🚀 Starting Bajaj BFHL API Server..."
echo "👤 Student: Shambhavi Jha (22BCE11413)"
echo "🏫 VIT Bhopal University"
echo

# Kill any existing server
pkill -f "node server.js" 2>/dev/null

# Start server in background
cd "/media/theoldregime/New Volume/PARA/Projects/Active/22BCE11413_Bajaj"
PORT=3001 node server.js &
SERVER_PID=$!

# Wait for server to start
sleep 3

echo "🧪 Testing API Endpoints..."
echo

# Test Example A
echo "📋 Testing Example A:"
echo "Input: [\"a\",\"1\",\"334\",\"4\",\"R\", \"\$\"]"
curl -s -X POST http://localhost:3001/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}' | python3 -m json.tool
echo
echo "✅ Expected: odd_numbers=[\"1\"], even_numbers=[\"334\",\"4\"], sum=\"339\""
echo

# Test Example B  
echo "📋 Testing Example B:"
echo "Input: [\"2\",\"a\", \"y\", \"4\", \"&\", \"-\", \"*\", \"5\",\"92\",\"b\"]"
curl -s -X POST http://localhost:3001/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}' | python3 -m json.tool
echo
echo "✅ Expected: odd_numbers=[\"5\"], even_numbers=[\"2\",\"4\",\"92\"], sum=\"103\""
echo

# Test Example C
echo "📋 Testing Example C:"
echo "Input: [\"A\",\"ABcD\",\"DOE\"]"
curl -s -X POST http://localhost:3001/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}' | python3 -m json.tool
echo
echo "✅ Expected: odd_numbers=[], even_numbers=[], sum=\"0\""
echo

# Test health endpoint
echo "📋 Testing Health Endpoint:"
curl -s http://localhost:3001/health | python3 -m json.tool
echo

# Test root endpoint  
echo "📋 Testing Root Endpoint:"
curl -s http://localhost:3001/ | python3 -m json.tool
echo

echo "🎯 API is ready for deployment!"
echo "📝 Submit this URL: https://your-domain.vercel.app/bfhl"
echo
echo "🛑 Stopping test server..."
kill $SERVER_PID 2>/dev/null

echo "✅ All tests completed!"
