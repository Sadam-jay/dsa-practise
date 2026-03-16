//? 131. Palindrome Partitioning

//! Pattern: Backtracking
//! Companies: Amazon, Google, Meta
//! Difficulty: Medium

//* Finding all possible ways to partition a string such that EVERY substring is a palindrome.
//* Our choices are: "Where do we place the partition cut?"
//* We iterate through possible lengths of a substring from our current `start` index.
//* If the substring we cut is a mathematically valid palindrome, we push it to our path,
//* and recursively backtrack to cut the REMAINDER of the string.
//* If the remainder string also entirely consists of palindromes, the base case hits.

// Time: O(N * 2^N) - In the worst case (e.g. "aaaa"), there are 2^N possible partitions. IsPalindrome takes O(N)
// Space: O(N) - Recursion depth up to N 

function partition(s) {
    const result = [];

    // Helper function to verify palindromes
    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    const backtrack = (startIndex, currentPath) => {
        // Base case: If we've successfully partitioned the entire string
        if (startIndex === s.length) {
            result.push([...currentPath]);
            return;
        }

        // Explore possible partition cuts starting from 'startIndex' up to the end of string
        for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
            // If the chunk from startIndex to endIndex is a valid palindrome...
            if (isPalindrome(s, startIndex, endIndex)) {
                // ...Choose it, adding it to our path
                const palindromeSubstring = s.substring(startIndex, endIndex + 1);
                currentPath.push(palindromeSubstring);
                
                // Explore the remaining string AFTER our cut
                backtrack(endIndex + 1, currentPath);
                
                // Backtrack to try a different, longer cut
                currentPath.pop();
            }
        }
    };

    backtrack(0, []);
    return result;
}

// const s = "aab";
// console.log(partition(s));
// Output: [["a","a","b"],["aa","b"]]
