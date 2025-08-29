#!/usr/bin/env python3
"""
Test script for the BFHL API
"""

import json
import requests
import time

# Test cases from the requirements
test_cases = [
    {
        "name": "Example A",
        "input": ["a","1","334","4","R", "$"],
        "expected": {
            "odd_numbers": ["1"],
            "even_numbers": ["334","4"],
            "alphabets": ["A","R"],
            "special_characters": ["$"],
            "sum": "339",
            "concat_string": "Ra"
        }
    },
    {
        "name": "Example B",
        "input": ["2","a", "y", "4", "&", "-", "*", "5","92","b"],
        "expected": {
            "odd_numbers": ["5"],
            "even_numbers": ["2","4","92"],
            "alphabets": ["A", "Y", "B"],
            "special_characters": ["&", "-", "*"],
            "sum": "103",
            "concat_string": "ByA"
        }
    },
    {
        "name": "Example C",
        "input": ["A","ABcD","DOE"],
        "expected": {
            "odd_numbers": [],
            "even_numbers": [],
            "alphabets": ["A","ABCD","DOE"],
            "special_characters": [],
            "sum": "0",
            "concat_string": "EoDdCbAa"
        }
    }
]

def test_api():
    """Test the API with all test cases"""
    base_url = "http://localhost:5000"
    
    print("🧪 Testing BFHL API...")
    print("=" * 60)
    
    # Test health endpoint first
    try:
        response = requests.get(f"{base_url}/health")
        if response.status_code == 200:
            print("✅ Server is running")
        else:
            print("❌ Server health check failed")
            return
    except Exception as e:
        print(f"❌ Cannot connect to server: {e}")
        return
    
    # Test each case
    for test_case in test_cases:
        print(f"\n📋 Testing: {test_case['name']}")
        print(f"Input: {json.dumps(test_case['input'])}")
        
        try:
            response = requests.post(
                f"{base_url}/bfhl",
                json={"data": test_case["input"]},
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                result = response.json()
                print(f"✅ Status: {response.status_code}")
                print(f"✅ Success: {result.get('is_success', False)}")
                
                # Display result
                print("📊 Response:")
                print(json.dumps(result, indent=2))
                
                # Basic validation
                if (result.get('is_success') and 
                    result.get('user_id') and 
                    result.get('roll_number') == "22BCE11413"):
                    print(f"✅ {test_case['name']} - BASIC VALIDATION PASSED")
                else:
                    print(f"❌ {test_case['name']} - BASIC VALIDATION FAILED")
                    
            else:
                print(f"❌ HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            print(f"❌ Error testing {test_case['name']}: {e}")
        
        print("-" * 60)

def test_logic_standalone():
    """Test the logic without server"""
    print("🔧 Testing logic standalone...")
    print("=" * 60)
    
    import re
    
    def is_numeric(s):
        try:
            float(s)
            return True
        except ValueError:
            return False

    def is_alphabetic(char):
        return re.match(r'^[A-Za-z]$', char) is not None

    def is_special_character(char):
        return not re.match(r'^[A-Za-z0-9]$', char)

    def create_concatenated_string(alphabets):
        all_chars = ''.join(alphabets)
        reversed_chars = all_chars[::-1]
        
        result = ""
        for i, char in enumerate(reversed_chars):
            if i % 2 == 0:
                result += char.upper()
            else:
                result += char.lower()
        
        return result
    
    for test_case in test_cases:
        print(f"\n📋 Testing: {test_case['name']}")
        data = test_case["input"]
        
        odd_numbers = []
        even_numbers = []
        alphabets = []
        special_characters = []
        total_sum = 0

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
                if re.match(r'^[A-Za-z]+$', str_item):
                    alphabets.append(str_item.upper())

        concat_string = create_concatenated_string(alphabets)
        
        result = {
            "is_success": True,
            "user_id": "shambhavi_jha_22082003",
            "email": "shambhavi.jha2022@vitbhopal.ac.in",
            "roll_number": "22BCE11413",
            "odd_numbers": odd_numbers,
            "even_numbers": even_numbers,
            "alphabets": alphabets,
            "special_characters": special_characters,
            "sum": str(total_sum),
            "concat_string": concat_string
        }
        
        print("📊 Result:")
        print(json.dumps(result, indent=2))
        
        # Verify against expected
        expected = test_case["expected"]
        print("\n🔍 Verification:")
        print(f"Odd numbers: {odd_numbers == expected['odd_numbers']}")
        print(f"Even numbers: {even_numbers == expected['even_numbers']}")
        print(f"Alphabets: {alphabets == expected['alphabets']}")
        print(f"Special chars: {special_characters == expected['special_characters']}")
        print(f"Sum: {str(total_sum) == expected['sum']}")
        print(f"Concat string: {concat_string == expected['concat_string']}")
        
        if (odd_numbers == expected['odd_numbers'] and
            even_numbers == expected['even_numbers'] and
            alphabets == expected['alphabets'] and
            special_characters == expected['special_characters'] and
            str(total_sum) == expected['sum'] and
            concat_string == expected['concat_string']):
            print(f"✅ {test_case['name']} - ALL TESTS PASSED")
        else:
            print(f"❌ {test_case['name']} - SOME TESTS FAILED")
        
        print("-" * 60)

if __name__ == "__main__":
    # First try to test with server
    try:
        test_api()
    except:
        # If server is not available, test logic standalone
        print("\n⚠️  Server not available, running standalone tests...")
        test_logic_standalone()
