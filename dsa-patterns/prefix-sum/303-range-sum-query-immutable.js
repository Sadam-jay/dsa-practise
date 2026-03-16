//? 303. Range Sum Query - Immutable

//! Pattern: Prefix Sum
//! Companies: Meta, Apple, Amazon, Palantir
//! Difficulty: Easy

//* This is the definition of Prefix Sum arrays.
//* If we query the sum of a subarray from `left` to `right` multiple times,
//* calculating it requires O(N) per query.
//* By precomputing a `prefixSum` array where index `i` stores the sum from `0` to `i`,
//* any query `[left, right]` becomes O(1) by simply doing:
//* prefixSum[right] - prefixSum[left - 1]

// Time: O(n) constructor preprocessing, O(1) per query
// Space: O(n) to store the prefix sum array

class NumArray {
    constructor(nums) {
        this.prefix = new Array(nums.length + 1).fill(0);
        
        // We shift the prefix array by +1 to avoid handling left === 0 edge cases.
        // prefix[i+1] stores the sum of nums[0] to nums[i]
        for (let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    sumRange(left, right) {
        // Because of the +1 shift, right is right + 1, and left naturally subtracts exactly 
        // the sum BEFORE the left index.
        return this.prefix[right + 1] - this.prefix[left];
    }
}
