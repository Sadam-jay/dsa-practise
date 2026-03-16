//? 122. Best Time to Buy and Sell Stock II

//! Pattern: Greedy
//! Companies: Amazon, Microsoft, Apple, Bloomberg
//! Difficulty: Medium

//* Finding the absolute maximum profit if you can buy/sell multiple times across days.
//* If we plot prices on a graph, profit comes from the upwards slopes.
//* The Greedy trick: Why time the absolute bottom and absolute top?
//* Just iteratively capture EVERY SINGLE strictly positive daily difference!
//* The sum of piecewise positive daily increments strictly equals the total peak-to-trough sequence difference!
//* i.e. (10 - 1) === (5 - 1) + (10 - 5)

// Time: O(n)
// Space: O(1)

function maxProfit(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If today's price is higher than yesterday's, greedily capture the profit!
        // We're acting as if we implicitly bought yesterday and sold today.
        if (prices[i] > prices[i - 1]) {
            totalProfit += (prices[i] - prices[i - 1]);
        }
    }

    return totalProfit;
}

// const prices = [7,1,5,3,6,4];
// console.log(maxProfit(prices));
// Output: 7
