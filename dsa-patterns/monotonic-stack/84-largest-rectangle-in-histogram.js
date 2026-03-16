//? 84. Largest Rectangle in Histogram

//! Pattern: Monotonic Stack (Increasing)
//! Companies: Amazon, Meta, ByteDance
//! Difficulty: Hard

//* This is the pinnacle Monotonic Stack problem.
//* We want to find the largest contiguous rectangular area.
//* The height of any rectangle is strictly limited by the SHORTEST bar involved.
//* When we encounter a bar that is SHORTER than the top of our stack, the top of our stack's 
//* theoretical "maximum rightward expansion" is definitively over!
//* Its right boundary is the current index. Its left boundary is the element below it in the stack.
//* So we explicitly pop it and calculate its absolute maximum possible area.

// Time: O(n) - Every element pushed and popped once
// Space: O(n)

function largestRectangleArea(heights) {
    let maxArea = 0;
    // Stack stores indices of the heights
    const stack = [];

    for (let i = 0; i <= heights.length; i++) {
        // We simulate a '0' height bar at the very end to forcefully flush out 
        // any remaining bars in the stack.
        const currentHeight = i === heights.length ? 0 : heights[i];

        // While current bar is SHORTER than the bar at the top of the stack...
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            // This top bar's rightward expansion has officially been bottlenecked!
            const poppedHeightIndex = stack.pop();
            const heightLimit = heights[poppedHeightIndex];

            // Where was this popped bar's left boundary?
            // If the stack is empty, it extended all the way to index 0 (width = i)
            // If not, it extended specifically to the index just below it in the stack (width = i - stackTop - 1)
            const width = stack.length === 0 ? i : (i - stack[stack.length - 1] - 1);
            
            // Calculate absolute max area strictly limited by the popped bar's height
            maxArea = Math.max(maxArea, heightLimit * width);
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    return maxArea;
}

// const heights = [2,1,5,6,2,3];
// console.log(largestRectangleArea(heights));
// Output: 10
