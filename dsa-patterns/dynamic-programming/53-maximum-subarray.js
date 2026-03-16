//? 53. Maximum Subarray

//! Pattern: Dynamic Programming (Kadane's Algorithm)
//! Companies: Amazon, Apple, Meta, Microsoft, LinkedIn
//! Difficulty: Medium

//* We want to find the contiguous subarray with the largest sum.
//* This is Kadane's Algorithm, which is a greedy 1D Dynaming Programming subset.
//* At any index `i`, we decide whether to:
//* 1. Add `nums[i]` to our existing running subarray sum.
//* 2. Abandon the existing subarray, and just start a completely NEW subarray right at `nums[i]`.
//* We abandon it IF the existing running sum is negative (because adding a negative number ONLY makes things worse).
//* dp[i] = max(nums[i], dp[i-1] + nums[i])

// Time: O(n)
// Space: O(1) - Only need a single variable for `currentSum`

function maxSubArray(nums) {
    if (!nums || nums.length === 0) return 0;

    let maxGlobal = nums[0];
    let currentSum = nums[0]; // Represents our optimal DP state for "maximum subarray ending at 'i'"

    for (let i = 1; i < nums.length; i++) {
        // Do we join the existing continuous train, or start a new continuous train?
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update global record
        if (currentSum > maxGlobal) {
            maxGlobal = currentSum;
        }
    }

    return maxGlobal;
}

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(nums));
// Output: 6
