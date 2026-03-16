//? 287. Find the Duplicate Number

//! Pattern: Fast & Slow Pointers (Floyd's Cycle Detection)
//! Companies: Microsoft, Meta, Amazon, Apple
//! Difficulty: Medium

//* This problem is conceptually identical to Linked List Cycle II, but operates on an array.
//* Because the array contains strictly values between 1 and n, and length is n+1,
//* they implicitly form pointers (index points to value -> value points to next index).
//* A duplicate number means two indices point to the same index, forming a cycle.
//* The entry point to that cycle IS the duplicate number.

// Time: O(n)
// Space: O(1) - The problem strictly forbids modifying the array or using extra space

function findDuplicate(nums) {
    // Phase 1: Find intersection point of the two runners.
    let slow = nums[0];
    let fast = nums[nums[0]];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    // Phase 2: Find the "entrance" to the cycle.
    let ptr1 = 0;
    let ptr2 = slow;

    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
}

// const nums = [1,3,4,2,2];
// console.log(findDuplicate(nums));
// Output: 2
