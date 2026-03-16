//? 76. Minimum Window Substring

//! Pattern: Sliding Window
//! Companies: Meta, Amazon, LinkedIn, Uber, Microsoft
//! Difficulty: Hard

//* This is the quintessential Hard sliding window problem.
//* We need to find the shortest substring in 's' that contains all characters of 't'.
//* We use a frequency map to track required characters.
//* We expand our window uniformly. Once we have all required characters (valid window),
//* we try to aggressively shrink it from the left to find the absolute minimum length that is still valid.

// Time: O(n + m) - Where n is length of s, m is length of t
// Space: O(1) - Frequency maps contain at most 52 characters (uppercase + lowercase)

function minWindow(s, t) {
    if (!s || !t || s.length < t.length) return "";

    const targetMap = new Map();
    for (let char of t) {
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }

    let required = targetMap.size;
    let formed = 0; // Number of unique characters whose requirements have been met

    const windowMap = new Map();
    let left = 0;
    let minLen = Infinity;
    let minStart = 0; // The start index of our best substring

    for (let right = 0; right < s.length; right++) {
        const charRight = s[right];
        windowMap.set(charRight, (windowMap.get(charRight) || 0) + 1);

        // If this character's frequency perfectly reached the target requirement
        if (targetMap.has(charRight) && windowMap.get(charRight) === targetMap.get(charRight)) {
            formed++;
        }

        // While our window is completely valid, try to squeeze it smaller
        while (left <= right && formed === required) {
            const currentLen = right - left + 1;

            if (currentLen < minLen) {
                minLen = currentLen;
                minStart = left;
            }

            // Remove the left character from our window
            const charLeft = s[left];
            windowMap.set(charLeft, windowMap.get(charLeft) - 1);

            // If a required character fell below its target count, the window is invalid
            if (targetMap.has(charLeft) && windowMap.get(charLeft) < targetMap.get(charLeft)) {
                formed--;
            }

            left++; // Shrink
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// const s = &quot;ADOBECODEBANC&quot;;
// const t = &quot;ABC&quot;;
// console.log(minWindow(s, t));
// Output: &quot;BANC&quot;
