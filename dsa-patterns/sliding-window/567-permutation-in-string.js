//? 567. Permutation in String

//! Pattern: Sliding Window
//! Companies: Microsoft, Amazon, Oracle, Meta
//! Difficulty: Medium

//* This problem teaches the FIXED sliding window technique.
//* We want to find if any permutation of s1 exists in s2.
//* Since a permutation implies exact same character frequencies and exact same length,
//* we maintain a fixed-size window of length s1.length moving through s2.
//* If the frequency maps match, we return true.

// Time: O(n + m) - Creating freq maps and stepping the fixed window linearly
// Space: O(1) - Because English alphabet is 26 characters

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Freq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);

    const charCodeA = 'a'.charCodeAt(0);

    // Populate initial frequencies for the fixed window length
    for (let i = 0; i < s1.length; i++) {
        s1Freq[s1.charCodeAt(i) - charCodeA]++;
        windowFreq[s2.charCodeAt(i) - charCodeA]++;
    }

    // Helper to check if the two frequency arrays match exactly
    const matches = () => {
        for (let i = 0; i < 26; i++) {
            if (s1Freq[i] !== windowFreq[i]) return false;
        }
        return true;
    };

    // Slide the fixed window through s2
    for (let i = s1.length; i < s2.length; i++) {
        if (matches()) return true;

        // Add the incoming character to window
        windowFreq[s2.charCodeAt(i) - charCodeA]++;
        
        // Remove the outgoing character from the window
        windowFreq[s2.charCodeAt(i - s1.length) - charCodeA]--;
    }

    // Check the very last window frame
    return matches();
}

// const s1 = &quot;ab&quot;;
// const s2 = &quot;eidbaooo&quot;;
// console.log(checkInclusion(s1, s2));
// Output: true
