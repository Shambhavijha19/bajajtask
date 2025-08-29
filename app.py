#!/usr/bin/env python3
"""
Bajaj Finserv Health - Full Stack Developer Task
REST API Implementation in Python

Student: Shambhavi Jha
Roll Number: 22BCE11413
University: VIT Bhopal University
"""

from flask import Flask, request, jsonify
import re

app = Flask(__name__)

# User details as per requirement
USER_DETAILS = {
    "user_id": "shambhavi_jha_22082003",  # Assuming DOB as 22/08/2003
    "email": "shambhavi.jha2022@vitbhopal.ac.in",
    "roll_number": "22BCE11413"
}

def is_numeric(s):
    """Check if string is numeric"""
    try:
        float(s)
        return True
    except ValueError:
        return False

def is_alphabetic(char):
    """Check if character is alphabetic"""
    return re.match(r'^[A-Za-z]$', char) is not None

def is_special_character(char):
    """Check if character is special (not alphanumeric)"""
    return not re.match(r'^[A-Za-z0-9]$', char)

def create_concatenated_string(alphabets):
    """Create alternating case concatenated string"""
    all_chars = ''.join(alphabets)
    reversed_chars = all_chars[::-1]  # Reverse the string
    
    result = ""
    for i, char in enumerate(reversed_chars):
        if i % 2 == 0:
            result += char.upper()
        else:
            result += char.lower()
    
    return result

@app.route('/bfhl', methods=['POST'])
def process_data():
    """Main POST endpoint to process data"""
    try:
        data = request.json.get('data', [])
        
        # Validation
        if not isinstance(data, list):
            return jsonify({
                "is_success": False,
                "message": "Invalid input: 'data' should be an array"
            }), 400

        # Initialize arrays
        odd_numbers = []
        even_numbers = []
        alphabets = []
        special_characters = []
        total_sum = 0

        # Process each element in the data array
        for item in data:
            str_item = str(item)
            
            if is_numeric(str_item):
                num = int(float(str_item))
                total_sum += num
                
                if num % 2 == 0:
                    even_numbers.append(str_item)
                else:
                    odd_numbers.append(str_item)
                    
            elif len(str_item) == 1 and is_alphabetic(str_item):
                alphabets.append(str_item.upper())
                
            elif len(str_item) == 1 and is_special_character(str_item):
                special_characters.append(str_item)
                
            else:
                # Multi-character strings (like "ABcD", "DOE") are treated as alphabets
                if re.match(r'^[A-Za-z]+$', str_item):
                    alphabets.append(str_item.upper())

        # Create concatenated string
        concat_string = create_concatenated_string(alphabets)

        # Prepare response
        response = {
            "is_success": True,
            "user_id": USER_DETAILS["user_id"],
            "email": USER_DETAILS["email"],
            "roll_number": USER_DETAILS["roll_number"],
            "odd_numbers": odd_numbers,
            "even_numbers": even_numbers,
            "alphabets": alphabets,
            "special_characters": special_characters,
            "sum": str(total_sum),  # Return sum as string as per requirement
            "concat_string": concat_string
        }

        return jsonify(response), 200

    except Exception as e:
        return jsonify({
            "is_success": False,
            "message": f"Internal server error: {str(e)}"
        }), 500

@app.route('/bfhl', methods=['GET'])
def get_operation_code():
    """GET endpoint for testing"""
    return jsonify({"operation_code": 1}), 200

@app.route('/health')
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "Server is running",
        "user": "Shambhavi Jha",
        "roll_number": "22BCE11413"
    })

@app.route('/')
def root():
    """Root endpoint"""
    return jsonify({
        "message": "Bajaj Finserv Health - Full Stack Developer API",
        "student": "Shambhavi Jha",
        "roll_number": "22BCE11413",
        "endpoint": "/bfhl",
        "method": "POST"
    })

if __name__ == '__main__':
    print("🚀 Server starting...")
    print("📍 API endpoint: http://localhost:5000/bfhl")
    print("👤 Student: Shambhavi Jha (22BCE11413)")
    print("🏫 University: VIT Bhopal")
    
    # Run the Flask application
    app.run(host='0.0.0.0', port=5000, debug=True)
