//? 22. Generate Parentheses

//! Pattern: Backtracking
//! Companies: Amazon, Microsoft, Meta, Apple
//! Difficulty: Medium

//* Finding all well-formed combinations of `n` pairs of parentheses.
//* We use a string to build the path.
//* At any point, we have up to two choices:
//* 1. Add an Open bracket `(` - ONLY valid if we haven't exhausted our `n` limit.
//* 2. Add a Close bracket `)` - ONLY valid if the amount of placed closed brackets strictly < open brackets.
//* The stringent validity rules naturally 'prune' invalid combinations like '())('.

// Time: O(4^n / sqrt(n)) - Mathematically determined by the Nth Catalan number
// Space: O(n) - Maximum recursion depth is 2N (the length of a valid string)

function generateParenthesis(n) {
    const result = [];

    // The backtrack tracks how many open and close brackets we've used so far
    const backtrack = (openCount, closeCount, currentString) => {
        // Base case: Both open and close counts equal 'n' 
        // (Length of string evaluates to 2n)
        if (openCount === n && closeCount === n) {
            result.push(currentString);
            return;
        }

        // Branch 1: We can add an opening bracket
        if (openCount < n) {
            // As with "Letter Combinations", passing `string + '('` inherently
            // copies and isolates the path so we don't need manual `.pop()` logic
            backtrack(openCount + 1, closeCount, currentString + "(");
        }

        // Branch 2: We can add a closing bracket
        // But only if it mathematically matches an unclosed opening bracket
        if (closeCount < openCount) {
            backtrack(openCount, closeCount + 1, currentString + ")");
        }
    };

    backtrack(0, 0, "");
    return result;
}

// const n = 3;
// console.log(generateParenthesis(n));
// Output: ["((()))","(()())","(())()","()(())","()()()"]
