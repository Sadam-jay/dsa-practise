//? 525. Contiguous Array

//! Pattern: Prefix Sum (Binary Map Translation)
//! Companies: Meta, Amazon, Microsoft, Yandex
//! Difficulty: Medium

//* We want to find the maximum length of a contiguous subarray with an EQUAL number of 0s and 1s.
//* If we treat `0` as `-1`, and `1` as `+1`, the problem translates to:
//* "Find the longest subarray that sums to exactly 0".
//* To sum to 0 between index `i` and `j`, it means `prefixSum[j] === prefixSum[i-1]`.
//* So we just track the FIRST time we see any prefix sum value,
//* and if we see it again at index `j`, the distance between them `j - map.get(prefixSum)`
//* is the length of a balanced subarray.

// Time: O(n)
// Space: O(n)

function findMaxLength(nums) {
    // Stores: (Prefix Sum) -> (Earliest Index Seen)
    const prefixMap = new Map();
    // Base case: to handle subarrays balanced directly from the beginning
    prefixMap.set(0, -1);

    let runningSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        // Treat 0 as -1 for the math to work smoothly
        runningSum += nums[i] === 0 ? -1 : 1;

        if (prefixMap.has(runningSum)) {
            // We've seen this exact ratio difference before!
            // Everything between that first time and NOW perfectly balances out to 0.
            const distance = i - prefixMap.get(runningSum);
            maxLength = Math.max(maxLength, distance);
        } else {
            // ONLY log the earliest index to ensure we get MAXIMUM distance later
            prefixMap.set(runningSum, i);
        }
    }

    return maxLength;
}

// const nums = [0,1];
// console.log(findMaxLength(nums));
// Output: 2
