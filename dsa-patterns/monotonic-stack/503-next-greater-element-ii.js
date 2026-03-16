//? 503. Next Greater Element II

//! Pattern: Monotonic Stack (Decreasing + Circular Array)
//! Companies: Amazon, Tencent, Microsoft
//! Difficulty: Medium

//* This problem is identical to standard "Next Greater Element", but the array is CIRCULAR.
//* This means after reaching the end of the array, we can wrap around to index 0 to find a greater element.
//* The classic trick for handling a circular array logically without actually modifying the data structure is:
//* Loop TWICE! (Iterate from `0` to `2*N - 1`).
//* We use modulo arithmetic (`i % n`) to map the index back to the bounds of the original array.

// Time: O(n) - We iterate 2N times, but every element is pushed/popped at most once
// Space: O(n) - Result array and Stack

function nextGreaterElements(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    // Stack strictly stores INDICES, not values (since values might not be unique)
    const stack = [];

    // Loop exactly twice the length of the array
    for (let i = 0; i < n * 2; i++) {
        // Map abstract index 'i' into the real array index
        const currentIndex = i % n;
        const currentNum = nums[currentIndex];

        // While current number is GREATER than the number at the index on top of the stack
        while (stack.length > 0 && currentNum > nums[stack[stack.length - 1]]) {
            // We found the next greater element!
            const poppedIndex = stack.pop();
            result[poppedIndex] = currentNum;
        }

        // Optimization: Only push indices onto the stack during the FIRST pass.
        // During the second pass, we only want to resolve pending elements in the stack!
        if (i < n) {
            stack.push(currentIndex);
        }
    }

    return result;
}

// const nums = [1,2,1];
// console.log(nextGreaterElements(nums));
// Output: [2,-1,2]
