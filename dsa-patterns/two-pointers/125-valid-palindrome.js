//? 125. Valid Palindrome

//! Pattern: Two Pointers
//! Companies: Meta, Microsoft, Apple, Spotify
//! Difficulty: Easy

//* This problem teaches the classic "meet-in-the-middle" Two Pointers pattern.
//* We define left at the beginning and right at the end of the string.
//* We move them toward each other, skipping any non-alphanumeric characters.
//* At each valid step, the characters should match (ignoring case), otherwise it's not a palindrome.

// Time: O(n)
// Space: O(1)

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    // Helper function to check alphanumeric char
    const isAlphanumeric = (char) => /^[a-z0-9]$/i.test(char);

    while (left < right) {
        // Skip non-alphanumeric on left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric on right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare ignoring case
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// const s = &quot;A man, a plan, a canal: Panama&quot;;
// console.log(isPalindrome(s));
// Output: true
