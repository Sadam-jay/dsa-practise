//? 523. Continuous Subarray Sum

//! Pattern: Prefix Sum (Modulo Hash Map with Indices)
//! Companies: Meta, Amazon, Apple, Microsoft
//! Difficulty: Medium

//* Conceptually identical to "Subarray Sums Divisible by K".
//* Difference 1: We don't want the total count, we just want to return True/False if ONE exists.
//* Difference 2: The subarray length MUST be at least 2.
//* To satisfy the length constraint, our map must store the (remainder -> index) instead of frequency.
//* We then check: `currentIndex - map.get(remainder) >= 2`.

// Time: O(n)
// Space: O(min(n, k))

function checkSubarraySum(nums, k) {
    // Stores: (remainder) -> (earliest index seen)
    const remainderMap = new Map();
    // Base case: To allow a valid subarray starting exactly from index 0
    // We imagine an index '-1' handling a 0 remainder.
    remainderMap.set(0, -1);

    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        // Ensure proper positive modulo handling
        let remainder = runningSum % k;
        if (remainder < 0) {
            remainder += k;
        }

        if (remainderMap.has(remainder)) {
            // Is the subarray length at least 2?
            if (i - remainderMap.get(remainder) >= 2) {
                return true;
            }
        } else {
            // ONLY log the earliest index we saw this remainder
            // So we guarantee the maximum potential distance for future checks
            remainderMap.set(remainder, i);
        }
    }

    return false;
}

// const nums = [23,2,4,6,7];
// const k = 6;
// console.log(checkSubarraySum(nums, k));
// Output: true
