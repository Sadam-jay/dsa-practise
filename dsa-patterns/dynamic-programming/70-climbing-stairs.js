//? 70. Climbing Stairs

//! Pattern: Dynamic Programming (1D)
//! Companies: Amazon, Meta, Apple, Google
//! Difficulty: Easy

//* This is fundamentally the Fibonacci sequence.
//* To reach step `n`, you could only have come from step `n-1` (taking 1 step)
//* or from step `n-2` (taking 2 steps).
//* Therefore, the total number of ways to reach step `n` is exactly:
//* ways(n) = ways(n-1) + ways(n-2).
//* Instead of maintaining a full array O(N) space, we only ever need the last 2 values.

// Time: O(n)
// Space: O(1)

function climbStairs(n) {
    if (n <= 2) return n;

    // Base cases
    let twoStepsBack = 1; // ways to reach step 1
    let oneStepBack = 2;  // ways to reach step 2

    // Iteratively build up to step N
    for (let i = 3; i <= n; i++) {
        let currentStepWays = oneStepBack + twoStepsBack;
        
        // Shift our "last two values" window forward
        twoStepsBack = oneStepBack;
        oneStepBack = currentStepWays;
    }

    return oneStepBack;
}

// const n = 2;
// console.log(climbStairs(n));
// Output: 2
