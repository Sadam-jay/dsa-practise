//? 322. Coin Change

//! Pattern: Dynamic Programming (Unbounded Knapsack)
//! Companies: Amazon, Meta, Airbnb
//! Difficulty: Medium

//* Finding the MINIMUM number of coins to make a given amount.
//* We build an array `dp` where `dp[a]` stores the fewest coins needed to make amount `a`.
//* For every amount, we try all available coin denominations.
//* If we use a coin, the new amount remaining is `a - coin`.
//* We look up `dp[a - coin]` to see the fewest coins needed to make that remainder,
//* and add 1 (for the coin we just used).
//* DP Relation: dp[a] = min(dp[a], 1 + dp[a - coin])

// Time: O(amount * coins.length)
// Space: O(amount) - Size of the DP array

function coinChange(coins, amount) {
    // Initialize an array filled with an impossible maximum value
    // (Amount + 1 is guaranteed to be physically impossible since max coin is 1)
    const dp = new Array(amount + 1).fill(amount + 1);

    // Base case: it takes 0 coins to make amount 0
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (const coin of coins) {
            // Can we physically use this coin to reach amount 'a'?
            if (a - coin >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
            }
        }
    }

    // If dp[amount] is still the default impossible value, it means
    // it was mathematically impossible to build the exact amount.
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

// const coins = [1,2,5];
// const amount = 11;
// console.log(coinChange(coins, amount));
// Output: 3
