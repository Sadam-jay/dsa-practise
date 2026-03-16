//? 85. Maximal Rectangle

//! Pattern: Monotonic Stack (2D Histogram)
//! Companies: Amazon, Microsoft, ByteDance
//! Difficulty: Hard

//* We are given a 2D binary matrix of 1s and 0s.
//* We want the largest rectangle containing only 1s.
//* This is exactly "Largest Rectangle in Histogram" (84) applied iteratively!
//* We treat every ROW as the base of a histogram. 
//* If a cell is '1', the histogram height at that column grows by 1.
//* If a cell is '0', the histogram height at that column collapses to 0.
//* For each row, we run the completely identical O(N) Monotonic Stack logic from Problem 84.

// Time: O(rows * cols) - We iterate every cell once, and running the stack takes O(cols)
// Space: O(cols) - The height array and the stack

function maximalRectangle(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

    const cols = matrix[0].length;
    // This array will act as the dynamic 'heights' for our histogram
    const heights = new Array(cols).fill(0);
    let maxGlobalArea = 0;

    // Standard Largest Rectangle in Histogram logic
    const getLargestRectangle = (h) => {
        let maxArea = 0;
        const stack = []; // Stores indices
        
        for (let c = 0; c <= h.length; c++) {
            const currentHeight = c === h.length ? 0 : h[c];
            
            while (stack.length > 0 && currentHeight < h[stack[stack.length - 1]]) {
                const heightLimit = h[stack.pop()];
                const width = stack.length === 0 ? c : (c - stack[stack.length - 1] - 1);
                maxArea = Math.max(maxArea, heightLimit * width);
            }
            stack.push(c);
        }
        return maxArea;
    };

    // Iterate through every row, building the histogram
    for (const row of matrix) {
        for (let c = 0; c < cols; c++) {
            // If 1, increase building height. If 0, the building collapses flat to the ground.
            if (row[c] === '1') {
                heights[c] += 1;
            } else {
                heights[c] = 0; 
            }
        }

        // Evaluate the maximum possible rectangle sitting on this specific row's "ground"
        maxGlobalArea = Math.max(maxGlobalArea, getLargestRectangle(heights));
    }

    return maxGlobalArea;
}

// const matrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]];
// console.log(maximalRectangle(matrix));
// Output: 6
