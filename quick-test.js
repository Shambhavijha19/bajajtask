// Simple test to verify the logic
const testData = ["a","1","334","4","R", "$"];

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

console.log('🧪 Testing with Example A: ["a","1","334","4","R", "$"]');

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
    user_id: "shambhavi_jha_22082003",
    email: "shambhavi.jha2022@vitbhopal.ac.in",
    roll_number: "22BCE11413",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
    special_characters: specialCharacters,
    sum: String(sum),
    concat_string: concatString
};

console.log('\n📊 Result:');
console.log(JSON.stringify(result, null, 2));

// Verify against expected output
const expected = {
    odd_numbers: ["1"],
    even_numbers: ["334","4"],
    alphabets: ["A","R"],
    special_characters: ["$"],
    sum: "339",
    concat_string: "Ra"
};

console.log('\n✅ Verification:');
console.log('Odd numbers match:', JSON.stringify(oddNumbers) === JSON.stringify(expected.odd_numbers));
console.log('Even numbers match:', JSON.stringify(evenNumbers) === JSON.stringify(expected.even_numbers));
console.log('Alphabets match:', JSON.stringify(alphabets) === JSON.stringify(expected.alphabets));
console.log('Special chars match:', JSON.stringify(specialCharacters) === JSON.stringify(expected.special_characters));
console.log('Sum matches:', String(sum) === expected.sum);
console.log('Concat string matches:', concatString === expected.concat_string);
