//? 139. Word Break

//! Pattern: Dynamic Programming (1D Substrings)
//! Companies: Amazon, Meta, Microsoft, Google
//! Difficulty: Medium

//* We want to know if `s` can be fully segmented into dictionary words.
//* We build a DP array `dp` of length `s.length + 1`.
//* `dp[i]` represents whether the string up to index `i` CAN be successfully segmented.
//* We iterate string length `i` from 1 to N. We check previous cut points `j`.
//* If the string up to `j` is valid (`dp[j] === true`) AND the substring `s[j:i]` is in the dictionary...
//* Then the string up to `i` is ALSO valid (`dp[i] = true`).

// Time: O(n^2 * m) - outer loop * inner loop * Substring comparison (m)
// Space: O(n) - The DP array

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict); // O(1) lookup
    // dp[i] means: Is substring s(0...i) perfectly segmentable?
    const dp = new Array(s.length + 1).fill(false);
    
    // Base case: An empty string requires 0 segments and is technically "valid"
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        // Iterate over all possible backward 'cut' points
        for (let j = 0; j < i; j++) {
            // Is the prefix BEFORE the cut perfectly segmentable?
            // If yes, let's check if the remaining suffix AFTER the cut is a valid dictionary word!
            if (dp[j]) {
                const wordSuffix = s.substring(j, i);
                if (wordSet.has(wordSuffix)) {
                    // Valid! This string from 0 to 'i' can be successfully segmented.
                    dp[i] = true;
                    // No need to keep trying different cut points 'j' for this 'i'
                    break; 
                }
            }
        }
    }

    // Return whether the entire strings is perfectly segmentable
    return dp[s.length];
}

// const s = &quot;leetcode&quot;;
// const wordDict = [&quot;leet&quot;,&quot;code&quot;];
// console.log(wordBreak(s, wordDict));
// Output: true
