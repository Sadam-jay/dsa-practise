//? 1456. Maximum Number of Vowels in a Substring of Given Length

//! Pattern: Sliding Window
//! Companies: Amazon, Apple, Google
//! Difficulty: Medium

//* This problem is a textbook FIXED Sliding Window problem.
//* We are constrained to checking subarrays exactly size 'k'.
//* Instead of re-evaluating 'k' elements every step, calculate the first window,
//* then when sliding, specifically ADD the incoming right character's condition,
//* and explicitly REMOVE the outgoing left character's condition.

// Time: O(n)
// Space: O(1)

function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let currentVowels = 0;
    let maxVowelsCount = 0;

    // Evaluate the first fixed window of size 'k'
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
    }
    maxVowelsCount = currentVowels;

    // Slide the window forward one element at a time
    for (let i = k; i < s.length; i++) {
        // Add the incoming character
        if (vowels.has(s[i])) {
            currentVowels++;
        }
        
        // Remove the outgoing character at the back of the window
        if (vowels.has(s[i - k])) {
            currentVowels--;
        }

        maxVowelsCount = Math.max(maxVowelsCount, currentVowels);
    }

    return maxVowelsCount;
}

// const s = &quot;abciiidef&quot;;
// const k = 3;
// console.log(maxVowels(s, k));
// Output: 3
