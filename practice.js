function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i <= heights.length; i++) {
    const currentHeight = i === heights.length ? 0 : heights[i];

    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]]
    ) {
      const poppedIndex = stack.pop();
      const height = heights[poppedIndex];

      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}

const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights)); // Output: 10
