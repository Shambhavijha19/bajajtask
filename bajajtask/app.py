from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['POST'])
def categorize_data():
    data = request.json.get('data', [])
    
    # Categorization logic
    categorized = {
        'letters': [],
        'numbers': [],
        'others': []
    }
    
    for item in data:
        if item.isalpha():
            categorized['letters'].append(item)
        elif item.isdigit():
            categorized['numbers'].append(item)
        else:
            categorized['others'].append(item)
    
    return jsonify(categorized), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)