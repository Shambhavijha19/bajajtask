const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// User details as per requirement
const USER_DETAILS = {
    user_id: "shambhavi_jha_22082003", // Assuming DOB as 22/08/2003
    email: "shambhavi.jha2022@vitbhopal.ac.in",
    roll_number: "22BCE11413"
};

// Helper function to check if a string is numeric
function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if a character is alphabetic
function isAlphabetic(char) {
    return /^[A-Za-z]$/.test(char);
}

// Helper function to check if a character is special
function isSpecialCharacter(char) {
    return !/^[A-Za-z0-9]$/.test(char);
}

// Helper function to create alternating case concatenated string
function createConcatenatedString(alphabets) {
    // Get all alphabetic characters, convert to uppercase, reverse order
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

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validation
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input: 'data' should be an array"
            });
        }

        // Initialize arrays
        let oddNumbers = [];
        let evenNumbers = [];
        let alphabets = [];
        let specialCharacters = [];
        let sum = 0;

        // Process each element in the data array
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
                // Multi-character strings (like "ABcD", "DOE") are treated as alphabets
                if (/^[A-Za-z]+$/.test(str)) {
                    alphabets.push(str.toUpperCase());
                }
            }
        });

        // Create concatenated string
        const concatString = createConcatenatedString(alphabets);

        // Prepare response
        const response = {
            is_success: true,
            user_id: USER_DETAILS.user_id,
            email: USER_DETAILS.email,
            roll_number: USER_DETAILS.roll_number,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum), // Return sum as string as per requirement
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
});

// GET endpoint for testing
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "Server is running",
        user: "Shambhavi Jha",
        roll_number: "22BCE11413"
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: "Bajaj Finserv Health - Full Stack Developer API",
        student: "Shambhavi Jha",
        roll_number: "22BCE11413",
        endpoint: "/bfhl",
        method: "POST"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 API endpoint: http://localhost:${PORT}/bfhl`);
    console.log(`👤 Student: Shambhavi Jha (22BCE11413)`);
});

module.exports = app;
