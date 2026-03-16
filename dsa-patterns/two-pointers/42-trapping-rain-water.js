//? 42. Trapping Rain Water

//! Pattern: Two Pointers
//! Companies: Amazon, Meta, Google, Microsoft, Apple
//! Difficulty: Hard

//* This is the pinnacle problem for Two Pointers solving complex bounding constraints.
//* Any given bar can trap water equivalent to: min(max_left_height, max_right_height) - height.
//* Instead of computing max arrays (O(n) space), we can compute it on-the-fly with Two Pointers.
//* We always step the pointer which has the strictly smaller maximum bounding bar height.

// Time: O(n)
// Space: O(1)

function trap(height) {
    if (!height || height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;

    let maxLeft = height[left];
    let maxRight = height[right];

    let totalWater = 0;

    while (left < right) {
        // Process whichever side is bottlenecking the water height
        if (maxLeft < maxRight) {
            left++;
            // Update left max
            maxLeft = Math.max(maxLeft, height[left]);
            // Water trapped is relative to the *max* we have seen on the left
            totalWater += maxLeft - height[left];
        } else {
            right--;
            // Update right max
            maxRight = Math.max(maxRight, height[right]);
            // Water trapped is relative to the *max* we have seen on the right
            totalWater += maxRight - height[right];
        }
    }

    return totalWater;
}

// const height = [0,1,0,2,1,0,1,3,2,1,2,1];
// console.log(trap(height));
// Output: 6
