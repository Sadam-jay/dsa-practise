//? 15. 3Sum

//! Pattern: Two Pointers
//! Companies: Amazon, Meta, Microsoft, Apple, Google
//! Difficulty: Medium

//* This problem teaches how to reduce a 3-pointer problem into a 2-pointer problem by sorting.
//* We sort the array first, then iterate through giving us a fixed 'start' number.
//* The remaining sequence now simply becomes the 'Two Sum II' problem where we find 2 numbers 
//* that sum to -start using left and right pointers.
//* Crucial trick: We must skip duplicate elements to ensure we don't return duplicate triplets.

// Time: O(n^2) - O(n log n) for sorting + O(n^2) for nested loops
// Space: O(1) or O(n) depending on the sorting algorithm

function threeSum(nums) {
    const result = [];
    // Sorting allows us to easily skip duplicates and use two pointers
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for our fixed 'i'
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both inward
                left++;
                right--;
            } else if (sum < 0) {
                // We need a larger sum, so move left pointer to right
                left++;
            } else {
                // We need a smaller sum, so move right pointer to left
                right--;
            }
        }
    }

    return result;
}

// const nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums));
// Output: [[-1,-1,2],[-1,0,1]]
