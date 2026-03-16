//? 344. Reverse String

//! Pattern: Two Pointers
//! Companies: Amazon, Apple, Microsoft, Yahoo
//! Difficulty: Easy

//* This problem is the most essential illustration of the basic Two Pointers swap pattern.
//* We must reverse a string in-place modifying the array.
//* We use a left pointer starting at 0 and a right pointer at the end of the array.
//* We swap the items at these pointers, and step them inward.
//* This process halves the iterations needed compared to naive copying.

// Time: O(n)
// Space: O(1)

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    // Swap elements recursively or iteratively until pointers meet
    while (left < right) {
        // Simple swap logic
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // Move the pointers inward implicitly approaching the middle
        left++;
        right--;
    }
}

// const s = ["h","e","l","l","o"];
// console.log(reverseString(s));
// Output: ["o","l","l","e","h"]
