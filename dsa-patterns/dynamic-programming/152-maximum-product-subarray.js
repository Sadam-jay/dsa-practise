//? 152. Maximum Product Subarray

//! Pattern: Dynamic Programming (Min/Max Tracking)
//! Companies: LinkedIn, Amazon, Meta, Apple
//! Difficulty: Medium

//* Similar to Maximum Subarray Sum, but tracking multiplication Products.
//* Multiplication complicates things: A massive NEGATIVE number times another NEGATIVE 
//* suddenly erupts into a massive POSITIVE number.
//* Because of this polarity flip, we can't just track the 'Maximum' running product.
//* We MUST ALSO track the 'Minimum' running product at every step!
//* `maxProd = max(nums[i], nums[i] * maxProd, nums[i] * minProd)`
//* `minProd = min(nums[i], nums[i] * minProd, nums[i] * tempMaxProd)` // Ensure you use the old max for the min calculation

// Time: O(n)
// Space: O(1)

function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxGlobal = nums[0];
    let maxRunning = nums[0];
    let minRunning = nums[0]; // Tracks the most negative value built so far (important for polarity flips)

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        
        // Cache the old maxRunning because it's going to mutate, but minRunning needs to evaluate it
        const currentMaxRunning = maxRunning;

        // The absolute largest product ending strictly at i is the max of:
        // 1. The number just by itself (starting fresh)
        // 2. The number * the previous biggest positive chain
        // 3. The number * the previous biggest negative chain (if num is negative, negative * negative = positive)
        maxRunning = Math.max(num, currentMaxRunning * num, minRunning * num);
        
        // The absolute smallest product ending strictly at i is the min of:
        // 1. The number just by itself (starting fresh)
        // 2. The number * the previous biggest negative chain
        // 3. The number * the previous biggest positive chain (if num is negative)
        minRunning = Math.min(num, minRunning * num, currentMaxRunning * num);

        // Update the global result record
        maxGlobal = Math.max(maxGlobal, maxRunning);
    }

    return maxGlobal;
}

// const nums = [2,3,-2,4];
// console.log(maxProduct(nums));
// Output: 6
