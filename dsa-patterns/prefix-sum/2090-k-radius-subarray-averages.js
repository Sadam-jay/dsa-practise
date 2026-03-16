//? 2090. K Radius Subarray Averages

//! Pattern: Prefix Sum (or Fixed Sliding Window)
//! Companies: Amazon, Meta
//! Difficulty: Medium

//* We are asked to calculate the average of all elements within 'k' radius of each index.
//* A 'k' radius means `k` elements to the left, the element itself, and `k` elements to the right.
//* The total elements involved is `windowSize = 2 * k + 1`.
//* If `i` is less than `k` or closer than `k` to the end, it's invalid (-1).
//* A fast way to compute these localized sums is using a standard Prefix Sum array.

// Time: O(n)
// Space: O(n)

function getAverages(nums, k) {
    if (k === 0) return nums;

    const n = nums.length;
    const result = new Array(n).fill(-1);

    const windowSize = 2 * k + 1;
    if (windowSize > n) return result; // Not a single valid average can exist

    // Build Prefix Sum array using big integers in JS just in case 
    // constraints push sums beyond max safe integer.
    const prefix = new Array(n + 1).fill(0n);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + BigInt(nums[i]);
    }

    for (let i = k; i < n - k; i++) {
        // Calculate bounds. 
        // We want sum from index [i - k] to [i + k] inclusively.
        // In +1 padded prefix array: sum = prefix[i + k + 1] - prefix[i - k]
        const leftBound = i - k;
        const rightBoundPlusOne = i + k + 1;

        const sum = prefix[rightBoundPlusOne] - prefix[leftBound];
        
        // Calculate average and convert back to regular Number
        result[i] = Number(sum / BigInt(windowSize));
    }

    return result;
}

// const nums = [7,4,3,9,1,8,5,2,6];
// const k = 3;
// console.log(getAverages(nums, k));
// Output: [-1,-1,-1,5,4,4,-1,-1,-1]
