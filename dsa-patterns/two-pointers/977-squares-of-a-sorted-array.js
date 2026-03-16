//? 977. Squares of a Sorted Array

//! Pattern: Two Pointers
//! Companies: Meta, Apple, Uber
//! Difficulty: Easy

//* This problem highlights the fact that if an array is sorted but includes negative numbers,
//* their squares might be larger than positive numbers' squares.
//* So, the largest squared values must be at either the start (most negative) or the end (most positive).
//* We use Two Pointers starting at both ends, compare absolute values, and fill our result array from right-to-left.

// Time: O(n)
// Space: O(n) (For the result array since we cannot square negative numbers in place simply without shifting)

function sortedSquares(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let insertPos = nums.length - 1; // start putting largest elements at the tail

    while (left <= right) {
        // Compare the absolute values to find the mathematically larger square
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[insertPos] = nums[left] ** 2;
            left++;
        } else {
            result[insertPos] = nums[right] ** 2;
            right--;
        }

        // Decrement our insertion index
        insertPos--;
    }

    return result;
}

// const nums = [-4,-1,0,3,10];
// console.log(sortedSquares(nums));
// Output: [0,1,9,16,100]
