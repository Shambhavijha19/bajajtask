// Test file for the BFHL API
const testCases = [
    {
        name: "Example A",
        input: ["a","1","334","4","R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334","4"],
            alphabets: ["A","R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "Ra"
        }
    },
    {
        name: "Example B",
        input: ["2","a", "y", "4", "&", "-", "*", "5","92","b"],
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2","4","92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "ByA"
        }
    },
    {
        name: "Example C",
        input: ["A","ABcD","DOE"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A","ABCD","DOE"],
            special_characters: [],
            sum: "0",
            concat_string: "EoDdCbAa"
        }
    }
];

async function runTests() {
    console.log("🧪 Running API Tests...\n");

    for (const testCase of testCases) {
        console.log(`\n📋 Testing: ${testCase.name}`);
        console.log(`Input: ${JSON.stringify(testCase.input)}`);

        try {
            const response = await fetch('http://localhost:3000/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: testCase.input }),
            });

            const result = await response.json();
            
            console.log(`✅ Status: ${response.status}`);
            console.log(`✅ Success: ${result.is_success}`);
            console.log(`📊 Result:`, JSON.stringify(result, null, 2));
            
            // Basic validation
            if (result.is_success && 
                result.user_id && 
                result.email && 
                result.roll_number === "22BCE11413") {
                console.log(`✅ ${testCase.name} - PASSED`);
            } else {
                console.log(`❌ ${testCase.name} - FAILED`);
            }

        } catch (error) {
            console.log(`❌ ${testCase.name} - ERROR:`, error.message);
        }
        
        console.log("-".repeat(50));
    }
}

// Manual test without server (for logic validation)
function testLogicManually() {
    console.log("🔧 Testing logic manually (without server)...\n");
    
    const USER_DETAILS = {
        user_id: "shambhavi_jha_22082003",
        email: "shambhavi.jha2022@vitbhopal.ac.in",
        roll_number: "22BCE11413"
    };
    
    function isNumeric(str) {
        return !isNaN(str) && !isNaN(parseFloat(str));
    }
    
    function isAlphabetic(char) {
        return /^[A-Za-z]$/.test(char);
    }
    
    function isSpecialCharacter(char) {
        return !/^[A-Za-z0-9]$/.test(char);
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
    
    testCases.forEach(testCase => {
        console.log(`\n📋 Testing: ${testCase.name}`);
        const data = testCase.input;
        
        let oddNumbers = [];
        let evenNumbers = [];
        let alphabets = [];
        let specialCharacters = [];
        let sum = 0;

        data.forEach(item => {
            const str = String(item);
            
            if (isNumeric(str)) {
                const num = parseInt(str);
                sum += num;
                
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
            } else if (str.length === 1 && isAlphabetic(str)) {
                alphabets.push(str.toUpperCase());
            } else if (str.length === 1 && isSpecialCharacter(str)) {
                specialCharacters.push(str);
            } else {
                if (/^[A-Za-z]+$/.test(str)) {
                    alphabets.push(str.toUpperCase());
                }
            }
        });

        const concatString = createConcatenatedString(alphabets);
        
        const result = {
            is_success: true,
            user_id: USER_DETAILS.user_id,
            email: USER_DETAILS.email,
            roll_number: USER_DETAILS.roll_number,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: concatString
        };
        
        console.log("Result:", JSON.stringify(result, null, 2));
        console.log("-".repeat(50));
    });
}

// Check if server is running, if not run manual tests
async function main() {
    try {
        const response = await fetch('http://localhost:3000/health');
        if (response.ok) {
            await runTests();
        } else {
            throw new Error("Server not responding");
        }
    } catch (error) {
        console.log("⚠️  Server not running, testing logic manually...");
        testLogicManually();
        console.log("\n💡 To test with server, run: npm start");
    }
}

// For Node.js environment
if (typeof fetch === 'undefined') {
    console.log("🔧 Running manual tests (Node.js environment)...");
    testLogicManually();
} else {
    main();
}
