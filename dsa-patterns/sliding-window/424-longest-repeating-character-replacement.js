//? 424. Longest Repeating Character Replacement

//! Pattern: Sliding Window
//! Companies: Google, Amazon, Meta, Microsoft
//! Difficulty: Medium

//* This problem teaches you to track properties logically within a variable window.
//* The goal is to maximize the length of a substring containing identical characters,
//* while allowing up to 'k' character replacements.
//* Window validity condition is: (window_length - max_frequency_character_in_window) <= k.
//* We don't need to decrement max frequency logically upon shrinking because a smaller max freq
//* won't yield a larger valid window anyway.

// Time: O(n)
// Space: O(1) - Only 26 uppercase English letters

function characterReplacement(s, k) {
    const count = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Add the current character to the window's frequency map
        const charRight = s[right];
        count.set(charRight, (count.get(charRight) || 0) + 1);

        // Keep track of the most frequent character in the current window
        maxFreq = Math.max(maxFreq, count.get(charRight));

        // If the number of characters we need to replace exceeds k, shrink window
        const windowLen = right - left + 1;
        if (windowLen - maxFreq > k) {
            const charLeft = s[left];
            count.set(charLeft, count.get(charLeft) - 1);
            left++;
        }

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// const s = &quot;ABAB&quot;;
// const k = 2;
// console.log(characterReplacement(s, k));
// Output: 4
