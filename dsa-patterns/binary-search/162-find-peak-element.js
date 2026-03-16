//? 162. Find Peak Element

//! Pattern: Binary Search (on Unsorted Array)
//! Companies: Meta, Google, Amazon, Apple
//! Difficulty: Medium

//* Surprisingly, Binary Search can work on UNSORTED arrays if there is a local monotonicity.
//* A peak is an element strictly greater than its neighbors.
//* If we randomly check index 'mid' and find nums[mid] < nums[mid + 1], 
//* it implies the array is locally rising towards the right. 
//* Thus, there MUST be at least one peak on the right side.
//* We can discard the left side entirely. This halving process is exactly Binary Search.

// Time: O(log n)
// Space: O(1)

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    // Notice left < right, we want to converge exactly on the peak index
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        // If the slope is rising to the right, a peak must be to the right
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } 
        // If the slope is falling (or flat relative to constraints), 
        // a peak must be at mid or to the left
        else {
            right = mid;
        }
    }

    // left and right converge on the peak
    return left;
}

// const nums = [1,2,3,1];
// console.log(findPeakElement(nums));
// Output: 2
