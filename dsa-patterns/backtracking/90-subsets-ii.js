//? 90. Subsets II

//! Pattern: Backtracking
//! Companies: Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* Finding all subsets, but the array CAN contain duplicates.
//* If we just run the normal Subsets backtrack, we will generate identical subset arrays.
//* The standard trick for Backtracking with Duplicates:
//* 1. ALWAYS Sort the array first so duplicates are adjacent.
//* 2. In your For Loop predicting branches, if `nums[i] === nums[i-1]`, skip it! 
//*    (But only if `i > start_index` to allow duplicate values INSIDE the same path, just not sibling branches).

// Time: O(n * 2^n)
// Space: O(n)

function subsetsWithDup(nums) {
    const result = [];
    
    // Crucial step: Sort to group duplicates together
    nums.sort((a, b) => a - b);

    const backtrack = (index, currentPath) => {
        result.push([...currentPath]);

        for (let i = index; i < nums.length; i++) {
            // Duplicate Skipping Logic:
            // If i is strictly greater than the loop's starting index, 
            // and the element is identical to the previous one, skip this branch.
            // This prevents building the exact same subset tree structure twice.
            if (i > index && nums[i] === nums[i - 1]) {
                continue; // Skip!
            }

            currentPath.push(nums[i]);
            backtrack(i + 1, currentPath); // Move strictly forward
            currentPath.pop();
        }
    };

    backtrack(0, []);
    return result;
}

// const nums = [1,2,2];
// console.log(subsetsWithDup(nums));
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
