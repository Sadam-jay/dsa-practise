//? 75. Sort Colors

//! Pattern: Two Pointers (Dutch National Flag Algorithm)
//! Companies: Meta, Microsoft, Amazon, Apple
//! Difficulty: Medium

//* This problem aims to sort an array containing 0s, 1s, and 2s in-place in a single pass.
//* This is Dijkstra's classic Dutch National Flag algorithm.
//* We use three pointers:
//* 'low' tracks the boundary of 0s, 'high' tracks boundary of 2s, and 'i' evaluates the sequence.
//* If iterating value is 0, we swap the low pointer values (pushing 0s left).
//* If iterating value is 2, we swap the high pointer values (pushing 2s right).

// Time: O(n)
// Space: O(1)

function sortColors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let i = 0;

    // Use loop up to 'high', because everything past high is perfectly sorted 2s
    while (i <= high) {
        if (nums[i] === 0) {
            // Swap explicitly to push 0s to the start boundary
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
            // We can step 'i' here because whatever was at 'low' must have been a 0 or 1
            i++;
        } else if (nums[i] === 2) {
            // Swap to push 2s to the end boundary
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
            // We do NOT increment 'i' here, because the element we swapped back
            // could be a 0, 1, or another 2, and needs to be evaluated next step.
        } else {
            // It is a 1, so simply increment 'i' keeping the 1s in the middle.
            i++;
        }
    }
}

// const nums = [2,0,2,1,1,0];
// console.log(sortColors(nums));
// Output: [0,0,1,1,2,2]
