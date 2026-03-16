//? 704. Binary Search

//! Pattern: Binary Search
//! Companies: Microsoft, Apple, Amazon, Google
//! Difficulty: Easy

//* This is the fundamental implementation of Binary Search.
//* The array is sorted. We define a 'left' and 'right' pointer.
//* We calculate a 'mid' index. If the mid value is the target, we found it.
//* If the mid value is too small, we search the right half (left = mid + 1).
//* If the mid value is too large, we search the left half (right = mid - 1).

// Time: O(log n) - The search space is halved at each step
// Space: O(1)

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // Use <= to include the element when left and right converge
    while (left <= right) {
        // Prevent potential integer overflow compared to (left+right)/2
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            // Target must be purely in the right half
            left = mid + 1;
        } else {
            // Target must be purely in the left half
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

// const nums = [-1,0,3,5,9,12];
// const target = 9;
// console.log(search(nums, target));
// Output: 4
