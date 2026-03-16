//? 17. Letter Combinations of a Phone Number

//! Pattern: Backtracking
//! Companies: Amazon, Microsoft, Apple, Uber
//! Difficulty: Medium

//* Translating digit strings into all possible character combinations based on an old T9 phone keypad.
//* This is a strict permutation problem where the 'choices' at each step `i`
//* are uniquely determined by the mapping of the digit at `digits[i]`.
//* We move strictly forward through `digits`, branching based on the letters available for that digit.

// Time: O(4^n * n) - Up to 4 letters per digit (like '7' or '9'), n is the number of digits
// Space: O(n) - Maximum recursion depth is n, where n is length of digits string

function letterCombinations(digits) {
    if (!digits || digits.length === 0) return [];

    const result = [];
    
    // Hash Map translating digits to character arrays
    const phoneMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const backtrack = (index, currentString) => {
        // Base case: If the built string matches the length of the given digits
        if (index === digits.length) {
            result.push(currentString);
            return;
        }

        // Identify the current digit we are processing
        const currentDigit = digits[index];
        // Identify the possible character choices for this digit
        const letters = phoneMap[currentDigit];

        for (const char of letters) {
            // Choice & Explore
            // We can just append the character to the string in the recursive call itself.
            // Strings in JS are immutable, so `currentString + char` fundamentally passes a NEW string,
            // inherently "backtracking" for other branches since the original `currentString` is untouched!
            backtrack(index + 1, currentString + char);
        }
    };

    backtrack(0, "");
    return result;
}

// const digits = &quot;23&quot;;
// console.log(letterCombinations(digits));
// Output: [&quot;ad&quot;,&quot;ae&quot;,&quot;af&quot;,&quot;bd&quot;,&quot;be&quot;,&quot;bf&quot;,&quot;cd&quot;,&quot;ce&quot;,&quot;cf&quot;]
