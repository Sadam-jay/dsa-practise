//? 239. Sliding Window Maximum

//! Pattern: Sliding Window (with Monotonic Deque)
//! Companies: Amazon, Google, Meta, Microsoft, Apple
//! Difficulty: Hard

//* This is a complex sliding window problem because we must find the local maximum
//* inside a fixed window 'k' at every step, but O(k) linear scan per step makes it O(n*k).
//* We optimize this to O(n) using a Monotonic Decreasing Deque to store *indices*.
//* The deque keeps the largest element's index at the front.
//* As the window slides, we remove indices from the front that fall out of bounds,
//* and remove indices from the back if they correspond to values smaller than our incoming element.

// Time: O(n)
// Space: O(k)

function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // stores indices

    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the current window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the back of deque that are smaller
        // than the current element (they can never be the maximum)
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add current index
        deque.push(i);

        // If our window has reached size 'k', record the maximum (at the front of deque)
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// const nums = [1,3,-1,-3,5,3,6,7];
// const k = 3;
// console.log(maxSlidingWindow(nums, k));
// Output: [3,3,5,5,6,7]
