//? 11. Container With Most Water

//! Pattern: Two Pointers
//! Companies: Amazon, Google, Meta, Microsoft
//! Difficulty: Medium

//* This problem teaches the classic greedy Two Pointers pattern.
//* When you want to maximize the area bounded by two lines, the area is limited by the shorter line.
//* Starting with pointers at both ends of the array gives the maximum possible width.
//* To potentially increase the area, we MUST move the pointer pointing to the shorter line, 
//* because moving the taller line cannot increase the container's height but will strictly decrease width.

// Time: O(n)
// Space: O(1)

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    // Iterate until pointers cross
    while (left < right) {
        // Calculate current area width * min_height
        const currentWidth = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = currentWidth * currentHeight;

        maxArea = Math.max(maxArea, currentArea);

        // Move the shorter line inward hoping for a taller line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// const height = [1,8,6,2,5,4,8,3,7];
// console.log(maxArea(height));
// Output: 49
