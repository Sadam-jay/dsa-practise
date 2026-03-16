//? 35. Search Insert Position

//! Pattern: Binary Search
//! Companies: Google, Meta, Apple
//! Difficulty: Easy

//* This problem is identical to basic Binary Search, but instead of returning -1 
//* when the element is not found, we must return the index where it *would* be.
//* Because of the `left <= right` logic, when the loop terminates, the `left` pointer 
//* will always rest at the exact index where the target *should* be inserted to maintain sorted order.

// Time: O(log n)
// Space: O(1)

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // The left pointer inherently forms the insertion bounds
    return left;
}

// const nums = [1,3,5,6];
// const target = 5;
// console.log(searchInsert(nums, target));
// Output: 2
