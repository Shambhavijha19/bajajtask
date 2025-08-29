# Bajaj Finserv Health - Full Stack Developer Task

**Student**: Shambhavi Jha  
**Roll Number**: 22BCE11413  
**University**: VIT Bhopal University

## Task Overview
Build and host a REST API (POST method) that processes an array and returns categorized data.

## API Specification
- **Endpoint**: `/bfhl`
- **Method**: POST
- **Status Code**: 200 (success)

## Implementation Steps
1. ✅ Project setup with Node.js & Python
2. ✅ API implementation (both versions)
3. ✅ Input validation
4. ✅ Data processing logic
5. ✅ Response formatting
6. ✅ Error handling
7. ✅ Testing (all examples verified)
8. ✅ Deployment ready

## Tech Stack
- **Primary**: Node.js + Express.js
- **Alternative**: Python + Flask  
- **Hosting**: Vercel, Railway, Render, Heroku (ready for any platform)

## Quick Start

### Node.js Version (Recommended):
```bash
npm install
npm start
# API available at: http://localhost:3000/bfhl
```

### Python Version (Alternative):
```bash
pip install -r requirements.txt
python3 app.py
# API available at: http://localhost:5000/bfhl
```

## API Usage
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

## Auto Deployment
This project is configured for automatic deployment on Vercel. Ensure that the `vercel.json` file is correctly set up to handle the build and routing for seamless deployment. 

### Vercel Configuration
The `vercel.json` file contains the necessary settings to deploy the Node.js application without manual intervention. Make sure to link your Vercel account to this repository for automatic deployments on push.