//? 1. Two Sum

//! Pattern: Two Pointers (or Hash Map)
//! Companies: Amazon, Google, Meta, Microsoft, Apple
//! Difficulty: Easy

//* This problem is canonically solved using a Hash Map for O(n) time, but it introduces 
//* the core idea of pairing two elements to reach a target. If the array were sorted, 
//* we could use the classic Two Pointers pattern.
//* We iterate through the array, storing the required complement of each number in a hash map.
//* If we encounter the complement later, we have found our pair.

// Time: O(n)
// Space: O(n)

function twoSum(nums, target) {
    // Stores the value and its index
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if we have already seen the complement
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Otherwise, store the current number and its index
        map.set(nums[i], i);
    }

    return [];
}

// const nums = [2,7,11,15];
// const target = 9;
// console.log(twoSum(nums, target));
// Output: [0,1]
