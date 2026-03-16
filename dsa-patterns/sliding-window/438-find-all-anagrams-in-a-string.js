//? 438. Find All Anagrams in a String

//! Pattern: Sliding Window
//! Companies: Amazon, Meta, Microsoft, Snap, Uber
//! Difficulty: Medium

//* Very similar to "Permutation in String" (567), but instead of returning a boolean,
//* we want the index configuration of EVERY valid fixed-sized frequency window.
//* We start counting and matching character maps, if they match exactly array-wise,
//* we store the `left` starting index.

// Time: O(n)
// Space: O(1) - Only an auxiliary array of 26 size

function findAnagrams(s, p) {
    const result = [];
    if (p.length > s.length) return result;

    const pFreq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);
    const charCodeA = 'a'.charCodeAt(0);

    // Initialize first window
    for (let i = 0; i < p.length; i++) {
        pFreq[p.charCodeAt(i) - charCodeA]++;
        windowFreq[s.charCodeAt(i) - charCodeA]++;
    }

    const matches = () => {
        for (let i = 0; i < 26; i++) {
            if (pFreq[i] !== windowFreq[i]) return false;
        }
        return true;
    };

    for (let i = p.length; i < s.length; i++) {
        if (matches()) {
            // Add the start index of the matched window
            result.push(i - p.length);
        }

        // Add new char
        windowFreq[s.charCodeAt(i) - charCodeA]++;
        // Remove old char
        windowFreq[s.charCodeAt(i - p.length) - charCodeA]--;
    }

    // Don't forget checking the final window step
    if (matches()) {
        result.push(s.length - p.length);
    }

    return result;
}

// const s = &quot;cbaebabacd&quot;;
// const p = &quot;abc&quot;;
// console.log(findAnagrams(s, p));
// Output: [0,6]
