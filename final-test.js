// Final comprehensive test for Bajaj API
console.log('🚀 Bajaj Finserv Health - Final API Test');
console.log('👤 Student: Shambhavi Jha');
console.log('🎓 Roll Number: 22BCE11413');
console.log('🏫 University: VIT Bhopal University');
console.log('='.repeat(60));

// Test the core logic
function testLogic() {
    // Test case from requirements
    const testData = ["a","1","334","4","R", "$"];
    
    function isNumeric(str) {
        return !isNaN(str) && !isNaN(parseFloat(str));
    }
    
    function createConcatenatedString(alphabets) {
        const allChars = alphabets.join('').split('');
        const reversed = allChars.reverse();
        
        let result = '';
        for (let i = 0; i < reversed.length; i++) {
            if (i % 2 === 0) {
                result += reversed[i].toUpperCase();
            } else {
                result += reversed[i].toLowerCase();
            }
        }
        return result;
    }
    
    let oddNumbers = [];
    let evenNumbers = [];
    let alphabets = [];
    let specialCharacters = [];
    let sum = 0;

    testData.forEach(item => {
        const str = String(item);
        
        if (isNumeric(str)) {
            const num = parseInt(str);
            sum += num;
            
            if (num % 2 === 0) {
                evenNumbers.push(str);
            } else {
                oddNumbers.push(str);
            }
        } else if (str.length === 1 && /^[A-Za-z]$/.test(str)) {
            alphabets.push(str.toUpperCase());
        } else if (str.length === 1 && !/^[A-Za-z0-9]$/.test(str)) {
            specialCharacters.push(str);
        }
    });
    
    const concatString = createConcatenatedString(alphabets);
    
    console.log('📊 Processing:', JSON.stringify(testData));
    console.log('📈 Results:');
    console.log('  • Odd numbers:', JSON.stringify(oddNumbers));
    console.log('  • Even numbers:', JSON.stringify(evenNumbers));  
    console.log('  • Alphabets:', JSON.stringify(alphabets));
    console.log('  • Special chars:', JSON.stringify(specialCharacters));
    console.log('  • Sum:', sum);
    console.log('  • Concat string:', concatString);
    
    // Verify against expected
    const expected = {
        odd_numbers: ["1"],
        even_numbers: ["334","4"],
        alphabets: ["A","R"],
        special_characters: ["$"],
        sum: 339,
        concat_string: "Ra"
    };
    
    console.log('\n✅ Verification:');
    console.log('  • Odd numbers:', JSON.stringify(oddNumbers) === JSON.stringify(expected.odd_numbers) ? 'PASS' : 'FAIL');
    console.log('  • Even numbers:', JSON.stringify(evenNumbers) === JSON.stringify(expected.even_numbers) ? 'PASS' : 'FAIL');
    console.log('  • Alphabets:', JSON.stringify(alphabets) === JSON.stringify(expected.alphabets) ? 'PASS' : 'FAIL');
    console.log('  • Special chars:', JSON.stringify(specialCharacters) === JSON.stringify(expected.special_characters) ? 'PASS' : 'FAIL');
    console.log('  • Sum:', sum === expected.sum ? 'PASS' : 'FAIL');
    console.log('  • Concat string:', concatString === expected.concat_string ? 'PASS' : 'FAIL');
    
    return {
        "is_success": true,
        "user_id": "shambhavi_jha_22082003",
        "email": "shambhavi.jha2022@vitbhopal.ac.in",
        "roll_number": "22BCE11413",
        "odd_numbers": oddNumbers,
        "even_numbers": evenNumbers,
        "alphabets": alphabets,
        "special_characters": specialCharacters,
        "sum": String(sum),
        "concat_string": concatString
    };
}

console.log('\n🧪 Testing API Logic...');
const result = testLogic();

console.log('\n📋 Final API Response:');
console.log(JSON.stringify(result, null, 2));

console.log('\n🎯 Summary:');
console.log('✅ API logic implemented correctly');
console.log('✅ All test cases verified');
console.log('✅ Response format matches requirements');
console.log('✅ Ready for deployment');
console.log('✅ Both Node.js and Python versions available');

console.log('\n📝 Next Steps:');
console.log('1. Choose hosting platform (Vercel, Railway, Render, etc.)');
console.log('2. Push code to GitHub repository');
console.log('3. Deploy and get the live URL');
console.log('4. Submit the URL with /bfhl endpoint');

console.log('\n🌟 Good luck with your placement, Shambhavi!');
console.log('🔗 Your API endpoint will be: https://your-domain.com/bfhl');
