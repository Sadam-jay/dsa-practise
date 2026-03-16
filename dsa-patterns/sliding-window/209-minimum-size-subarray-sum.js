//? 209. Minimum Size Subarray Sum

//! Pattern: Sliding Window
//! Companies: Microsoft, Meta, Amazon, Goldman Sachs
//! Difficulty: Medium

//* This problem teaches the variable shrinking window technique looking for a MINIMUM length.
//* We expand 'right' pointer to add elements to our sum.
//* Once our sum is >= target, we have a valid window. We record the minimum length,
//* then aggressively try to shrink from the 'left' to see if a shorter valid subarray exists.
//* Because numbers are positive, removing from left strictly decreases the sum.

// Time: O(n)
// Space: O(1)

function minSubArrayLen(target, nums) {
    let minLen = Infinity;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        // Expand window
        windowSum += nums[right];

        // Shrink window while valid
        while (windowSum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            
            // Subtract the outgoing element
            windowSum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

// const target = 7;
// const nums = [2,3,1,2,4,3];
// console.log(minSubArrayLen(target, nums));
// Output: 2
