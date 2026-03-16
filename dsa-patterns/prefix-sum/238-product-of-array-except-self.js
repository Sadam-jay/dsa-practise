//? 238. Product of Array Except Self

//! Pattern: Prefix Sum (and Suffix Sum)
//! Companies: Amazon, Apple, Microsoft, Meta
//! Difficulty: Medium

//* Technically a "Prefix Product" problem.
//* We need the product of all elements except the current one, WITHOUT using division.
//* The conceptual trick is:
//* productExceptSelf[i] === (product of all elements to the left) * (product of all elements to the right).
//* So we compute a 'Prefix Product' array going left-to-right,
//* and a 'Suffix Product' array going right-to-left.
//* For O(1) space, we just compute the left prefix directly into the output array,
//* and dynamically compute the right suffix on the fly going backwards.

// Time: O(n)
// Space: O(1) - Excluding the output array

function productExceptSelf(nums) {
    const result = new Array(nums.length);

    // Initial pass: Compute Prefix Products
    // result[i] will store the product of all elements strictly to the left of i
    let prefixTemp = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefixTemp;
        prefixTemp *= nums[i]; 
    }

    // Second pass: Compute Suffix Products on the fly
    // Multiply the existing prefix products by the suffix products
    let suffixTemp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffixTemp;
        suffixTemp *= nums[i];
    }

    return result;
}

// const nums = [1,2,3,4];
// console.log(productExceptSelf(nums));
// Output: [24,12,8,6]
