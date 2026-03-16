//? 198. House Robber

//! Pattern: Dynamic Programming (1D)
//! Companies: Google, Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* You want to rob houses to maximize money without robbing adjacent houses.
//* At any house 'i', you have two choices:
//* 1. Rob it: You gain `nums[i]` + the maximum money from robbing up to house `i-2`.
//* 2. Skip it: You keep the maximum money you had from robbing up to house `i-1`.
//* Formula: dp[i] = max(rob_current + dp[i-2], skip_current + dp[i-1])

// Time: O(n)
// Space: O(1) - Because we only need the last 2 calculated max values

function rob(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // Tracks max money robbing up to i-2
    let rob1 = 0;
    // Tracks max money robbing up to i-1
    let rob2 = 0;

    for (let house of nums) {
        // Evaluate the optimal choice for the current house
        const temp = Math.max(house + rob1, rob2);
        
        // Shift variables forward for the next iteration
        rob1 = rob2;
        rob2 = temp;
    }

    return rob2; // The maximum amount after checking the entire street
}

// const nums = [1,2,3,1];
// console.log(rob(nums));
// Output: 4
