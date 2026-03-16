//? 16. 3Sum Closest

//! Pattern: Two Pointers
//! Companies: Amazon, Meta, Microsoft, Oracle
//! Difficulty: Medium

//* Similar to 3Sum, we must find a triplet, but instead of tracking exact sum=target,
//* we want the sum mathematically closest to target.
//* By fixing one pointer, and using Two Pointers on the remaining sorted sub-array,
//* we keep track of our smallest difference so far.

// Time: O(n^2) - O(n log n) sorting + O(n^2) iteration
// Space: O(1) or O(n) depending on sort implementation

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // If we found the exact target, we can return immediately
            if (currentSum === target) {
                return currentSum;
            }

            // Update our closest sum if the absolute difference is smaller
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            // Move pointers depending on their relative value to target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

// const nums = [-1,2,1,-4];
// const target = 1;
// console.log(threeSumClosest(nums, target));
// Output: 2
