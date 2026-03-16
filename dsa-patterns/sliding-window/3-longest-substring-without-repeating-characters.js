//? 3. Longest Substring Without Repeating Characters

//! Pattern: Sliding Window
//! Companies: Amazon, Google, Meta, Microsoft, Apple
//! Difficulty: Medium

//* This problem teaches the variable sliding window technique.
//* We expand the window with the right pointer to include new characters.
//* If we encounter a duplicate character, we must shrink the window from the left
//* until that duplicate is removed from our valid window.
//* We track the maximum valid window size at each step.

// Time: O(n) - Each character is processed at most twice (added then possibly removed)
// Space: O(min(m, n)) - Space for the set, bounded by vocabulary size

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Shrink the window if duplicate found
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Add the new unique character to our window
        set.add(s[right]);

        // Update the max window length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// const s = &quot;abcabcbb&quot;;
// console.log(lengthOfLongestSubstring(s));
// Output: 3
