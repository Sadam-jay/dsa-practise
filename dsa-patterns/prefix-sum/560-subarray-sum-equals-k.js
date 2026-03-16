//? 560. Subarray Sum Equals K

//! Pattern: Prefix Sum (with Hash Map)
//! Companies: Meta, Amazon, Microsoft, Yandex, Google
//! Difficulty: Medium

//* This problem is the cornerstone of advanced Prefix Sum.
//* We cannot use Sliding Window because numbers can be NEGATIVE (sum doesn't monotonically increase).
//* Instead, we calculate a running `prefixSum`.
//* If there is a valid subarray ending at our current index that sums to `k`,
//* it means mathematically: `prefixSum[current] - prefixSum[earlier] = k`.
//* Which rearranges to: `prefixSum[earlier] = prefixSum[current] - k`.
//* So we store every `prefixSum` we've ever seen in a Hash Map, and dynamically look backwards!

// Time: O(n)
// Space: O(n)

function subarraySum(nums, k) {
    // Map stores: (prefixSum value) -> (frequency seen)
    const prefixCounts = new Map();
    // Base case: To handle cases where the entire array strictly from index 0 sums to k
    prefixCounts.set(0, 1);

    let currentSum = 0;
    let count = 0;

    for (const num of nums) {
        currentSum += num;

        // Mathematical check: Have we previously seen a prefix sum that we can chop off
        // from our current run to leave exactly 'k' behind?
        const neededPrefix = currentSum - k;
        
        if (prefixCounts.has(neededPrefix)) {
            count += prefixCounts.get(neededPrefix);
        }

        // Add our current running prefix sum to the map for future indices to use
        prefixCounts.set(currentSum, (prefixCounts.get(currentSum) || 0) + 1);
    }

    return count;
}

// const nums = [1,1,1];
// const k = 2;
// console.log(subarraySum(nums, k));
// Output: 2
