//? 33. Search in Rotated Sorted Array

//! Pattern: Binary Search
//! Companies: Amazon, Microsoft, Meta, Google, LinkedIn
//! Difficulty: Medium

//* The array is sorted but rotated at some pivot.
//* Even though it's rotated, at least ONE half of the array (left or right) will ALWAYS be perfectly sorted.
//* We first check which half is sorted by comparing nums[left] and nums[mid].
//* Once we know which half is sorted, we can easily check if the target lies within that half's boundaries.
//* If it does, we search that half. If it doesn't, we search the *other* half.

// Time: O(log n)
// Space: O(1)

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;

        // Check if the Left portion is strictly sorted
        if (nums[left] <= nums[mid]) {
            // Is target within this perfectly sorted Left portion bounds?
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Yes, search left half
            } else {
                left = mid + 1; // No, it must be in the right half
            }
        } 
        // Otherwise, the Right portion must be strictly sorted
        else {
            // Is target within this perfectly sorted Right portion bounds?
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // Yes, search right half
            } else {
                right = mid - 1; // No, it must be in the left half
            }
        }
    }

    return -1;
}

// const nums = [4,5,6,7,0,1,2];
// const target = 0;
// console.log(search(nums, target));
// Output: 4
