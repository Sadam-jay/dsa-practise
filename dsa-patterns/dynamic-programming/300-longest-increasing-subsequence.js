//? 300. Longest Increasing Subsequence

//! Pattern: Dynamic Programming (1D Array Scanning)
//! Companies: Microsoft, Meta, Amazon, ByteDance
//! Difficulty: Medium

//* We want the length of the longest strictly increasing SUBSEQUENCE (not necessarily contiguous).
//* We build an array `dp` where `dp[i]` is the length of the LIS ENDING EXACTLY at `nums[i]`.
//* To fill `dp[i]`, we look backwards at all earlier elements `j, where j < i`.
//* If `nums[i] > nums[j]`, we can extend the strictly increasing sequence ending at `j` by 1.
//* So, `dp[i] = max(dp[i], dp[j] + 1)`.

// Time: O(n^2) - Nested loop iterating backwards. (Note: An O(n log n) solution exists using Binary Search)
// Space: O(n) - The DP array tracking sequence lengths

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    // Every single number acts as its own strictly increasing sequence of length 1
    const dp = new Array(nums.length).fill(1);
    let maxLIS = 1;

    for (let i = 1; i < nums.length; i++) {
        // Look back at earlier numbers
        for (let j = 0; j < i; j++) {
            // Can we mathematically append nums[i] to the sequence ending at nums[j]?
            if (nums[i] > nums[j]) {
                // If yes, does it create a longer sequence than what we already have for nums[i]?
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        
        // Track the absolute maximum length found across the entire array computation
        maxLIS = Math.max(maxLIS, dp[i]);
    }

    return maxLIS;
}

// const nums = [10,9,2,5,3,7,101,18];
// console.log(lengthOfLIS(nums));
// Output: 4
