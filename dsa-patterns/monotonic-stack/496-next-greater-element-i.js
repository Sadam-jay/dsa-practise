//? 496. Next Greater Element I

//! Pattern: Monotonic Stack (Decreasing)
//! Companies: Amazon, Meta, Bloomberg
//! Difficulty: Easy

//* We have two arrays. We need to find the "Next Greater Element" for elements in nums1.
//* All elements in nums1 are present in nums2.
//* We use a Monotonic Stack to scan `nums2` and find the Next Greater Element for EVERY number in it.
//* We store these answers in a Hash Map: Map(number -> its next greater element).
//* Then we just iterate through `nums1` and retrieve the answers from the Map in O(1) time.

// Time: O(n + m) - Scanning nums2 once, and iterating nums1 once.
// Space: O(n) - Space for the HashMap and the Stack

function nextGreaterElement(nums1, nums2) {
    const nextGreaterMap = new Map();
    // Stack stores VALUES, not indices (since values are strictly unique and we just map them)
    const stack = [];

    // Process nums2 using Monotonic Stack
    for (const num of nums2) {
        // While current num is GREATER than the top of the stack
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            // We found the Next Greater Element for the popped element!
            const smallerNum = stack.pop();
            nextGreaterMap.set(smallerNum, num);
        }
        
        // Push current num onto the stack to wait for its NGE
        stack.push(num);
    }

    // Translate nums1 into the final result array
    const result = [];
    for (const num of nums1) {
        // If it doesn't exist in the map, it never found a Next Greater Element
        result.push(nextGreaterMap.has(num) ? nextGreaterMap.get(num) : -1);
    }

    return result;
}

// const nums1 = [4,1,2];
// const nums2 = [1,3,4,2];
// console.log(nextGreaterElement(nums1, nums2));
// Output: [-1,3,-1]
