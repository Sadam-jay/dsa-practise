//? 153. Find Minimum in Rotated Sorted Array

//! Pattern: Binary Search
//! Companies: Meta, Amazon, Microsoft, Apple
//! Difficulty: Medium

//* Finding the minimum element in a rotated sorted array.
//* We want to find the pivot point where the shift happens. 
//* If nums[mid] > nums[right], the left half is predictably increasing, so the minimum MUST be in the right half.
//* Otherwise, the minimum must be in the left half (including mid).
//* Crucial distinction: We use 'left < right' instead of '<=' because we are converging on a single element.

// Time: O(log n)
// Space: O(1)

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    // Loop until left and right pointers converge to the minimum
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        // If mid is greater than rightmost element, 
        // the transition (minimum) MUST be to the right.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the right side is sorted, meaning the transition 
        // could be 'mid' itself, or somewhere to the left.
        else {
            right = mid; 
        }
    }

    // left and right point to the same minimum element
    return nums[left];
}

// const nums = [3,4,5,1,2];
// console.log(findMin(nums));
// Output: 1
