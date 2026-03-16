//? 1143. Longest Common Subsequence

//! Pattern: Dynamic Programming (2D Substrings)
//! Companies: Amazon, Meta, Microsoft, Apple
//! Difficulty: Medium

//* The most fundamental 2D Dynamic Programming problem.
//* We compare strings `text1` and `text2` to find the longest subsequence they share.
//* We build a 2D matrix DP table initialized to 0. Rows = text1 chars, Cols = text2 chars.
//* Moving bottom-up or top-down, we check:
//* If characters MATCH: dp[r][c] = 1 + dp[r+1][c+1] (length grows, move both pointers diagonally)
//* If characters DO NOT MATCH: dp[r][c] = max(dp[r+1][c], dp[r][c+1]) (shift one text, finding the best path without current char)

// Time: O(m * n) - Exploring an M x N grid
// Space: O(m * n) - A 2D array. (Can be optimized to O(min(m,n)) using 1D row array)

function longestCommonSubsequence(text1, text2) {
    // Create an implicitly 0-filled 2D matrix padded with +1 length
    const m = text1.length;
    const n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // Fill table backwards (Bottom-Up interpretation)
    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            // Characters match exactly!
            if (text1[r] === text2[c]) {
                // Diagonal accumulation: length of shared sequence up to the next indices + 1
                dp[r][c] = 1 + dp[r + 1][c + 1];
            } else {
                // Characters don't match. 
                // We inherit the maximum sequence length found by either skipping text1's char or text2's char
                dp[r][c] = Math.max(dp[r + 1][c], dp[r][c + 1]);
            }
        }
    }

    // The answer bubbles all the way back up to the exact start of both strings
    return dp[0][0];
}

// const text1 = &quot;abcde&quot;;
// const text2 = &quot;ace&quot;;
// console.log(longestCommonSubsequence(text1, text2));
// Output: 3
