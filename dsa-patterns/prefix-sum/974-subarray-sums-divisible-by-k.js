//? 974. Subarray Sums Divisible by K

//! Pattern: Prefix Sum (Modulo Hash Map)
//! Companies: Microsoft, Meta, Amazon, Uber
//! Difficulty: Medium

//* Very similar to "Subarray Sum Equals K", but targeting division.
//* If a subarray from index `i` to `j` is divisible by `k`, mathematically:
//* (prefixSum[j] - prefixSum[i-1]) % k === 0.
//* Which implies: prefixSum[j] % k === prefixSum[i-1] % k.
//* Thus, if we find two prefix sums with the exact same remainder when divided by `k`,
//* the subarray strictly bounded between them is perfectly divisible by `k`.

// Time: O(n)
// Space: O(k) - Map only stores remainders from 0 to k-1

function subarraysDivByK(nums, k) {
    // Map stores: (remainder) -> (frequency seen)
    const remainderCounts = new Map();
    // Base condition: a remainder of 0 exists exactly once at the start (empty prefix)
    remainderCounts.set(0, 1);

    let runningSum = 0;
    let count = 0;

    for (const num of nums) {
        runningSum += num;

        // Calculate positive remainder (JavaScript handling for negative numbers)
        // e.g. -2 % 5 in JS is -2. But mathematically should be 3.
        let remainder = runningSum % k;
        if (remainder < 0) {
            remainder += k;
        }

        // If we have seen this remainder before, adding its frequency 
        // to our count denotes how many valid subarrays end precisely at this step.
        if (remainderCounts.has(remainder)) {
            count += remainderCounts.get(remainder);
        }

        // Log this remainder for the future
        remainderCounts.set(remainder, (remainderCounts.get(remainder) || 0) + 1);
    }

    return count;
}

// const nums = [4,5,0,-2,-3,1];
// const k = 5;
// console.log(subarraysDivByK(nums, k));
// Output: 7
