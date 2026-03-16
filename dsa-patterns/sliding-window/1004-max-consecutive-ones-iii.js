//? 1004. Max Consecutive Ones III

//! Pattern: Sliding Window
//! Companies: Meta, Amazon, Microsoft, Yandex
//! Difficulty: Medium

//* Translating the problem requirement: 
//* We want to find the longest subarray that contains At Most K '0's.
//* If we view '0' as an anomaly that we can "flip", we just track how many '0's are in our current window.
//* If zeroesCount > K, our window is invalid, and we must shrink from the left until we expel a '0'.
//* The length of the window at any valid state is candidate for our max length.

// Time: O(n)
// Space: O(1)

function longestOnes(nums, k) {
    let left = 0;
    let maxOnes = 0;
    let zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        // Window is invalid, shrink from left
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Current window is valid, record best length
        maxOnes = Math.max(maxOnes, right - left + 1);
    }

    return maxOnes;
}

// const nums = [1,1,1,0,0,0,1,1,1,1,0];
// const k = 2;
// console.log(longestOnes(nums, k));
// Output: 6
