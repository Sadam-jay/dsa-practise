//? 416. Partition Equal Subset Sum

//! Pattern: Dynamic Programming (0/1 Knapsack Target Hash Set / Array)
//! Companies: Amazon, Meta, Microsoft, ByteDance
//! Difficulty: Medium

//* The problem asks if we can split an array into two subsets that have equal sums.
//* This mathematically implies: targetSum = TotalSum / 2.
//* If TotalSum is odd, it's impossible. If even, we just need to find ANY subset that equals targetSum.
//* We build a Set of all dynamically possible sums. 
//* For every new number, we add it to every existing sum in our Set, generating new possible sums.

// Time: O(n * sum) - Specifically, n * (TotalSum / 2) because we iterate the set
// Space: O(sum) - The size of the DP Set storing possible reachable sums

function canPartition(nums) {
    let totalSum = 0;
    for (const num of nums) {
        totalSum += num;
    }

    // A subset sum cannot equal a fraction
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    
    // DP Set storing all possible subset sums we can generate
    let dp = new Set();
    // Base case: An empty subset sums to 0
    dp.add(0);

    for (const i = 0; i < nums.length; i++) {
        // We create a temporary nextSet to avoid mutating the set we are iterating over
        const nextDP = new Set(dp);
        
        for (const possibleSum of dp) {
            const nextSum = possibleSum + nums[i];
            
            // Optimization: If we hit the target exactly, return true immediately!
            if (nextSum === target) return true;
            
            // Optimization: If the sum exceeds target, we don't care to track it
            if (nextSum < target) {
                nextDP.add(nextSum);
            }
        }
        
        dp = nextDP; // Finalize updates for this step
    }

    return dp.has(target);
}

// const nums = [1,5,11,5];
// console.log(canPartition(nums));
// Output: true
