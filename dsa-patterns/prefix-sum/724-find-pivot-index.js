//? 724. Find Pivot Index

//! Pattern: Prefix Sum
//! Companies: Amazon, Meta, Microsoft, Apple
//! Difficulty: Easy

//* We need to find an index where the sum of numbers to its strictly Left
//* equals the sum of numbers to its strictly Right.
//* Total Sum = Left Sum + Pivot Value + Right Sum.
//* Therefore, if `Left Sum === Right Sum`, then mathematically:
//* `Left Sum === Total Sum - Left Sum - Pivot Value`.
//* We just calculate the total mathematical sum once, then iterate, keeping a running Left Sum.

// Time: O(n)
// Space: O(1)

function pivotIndex(nums) {
    let totalSum = 0;
    for (const num of nums) {
        totalSum += num;
    }

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        // If the sum to the left exactly mathematically balances the right...
        // rightSum = totalSum - leftSum - nums[i]
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }

        // Add the current number to the left running sum for the next iteration
        leftSum += nums[i];
    }

    // No pivot found
    return -1;
}

// const nums = [1,7,3,6,5,6];
// console.log(pivotIndex(nums));
// Output: 3
