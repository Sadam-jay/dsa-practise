//? 78. Subsets

//! Pattern: Backtracking
//! Companies: Meta, Amazon, Microsoft, Bloomberg
//! Difficulty: Medium

//* Finding all subsets (the power set) of an array of unique numbers.
//* Unlike permutations where order matters, subsets simply represent inclusion vs exclusion.
//* For every element, we literally have two choices:
//* 1. Include this element in the current subset.
//* 2. Exclude this element from the current subset.
//* We branch our recursion twice per element, leading to 2^n total subsets.

// Time: O(n * 2^n) - 2^n subsets, and copying each takes up to O(n)
// Space: O(n) - recursion depth is max length of nums

function subsets(nums) {
    const result = [];

    const backtrack = (index, currentPath) => {
        // Since we want ALL subsets, we push the current path immediately at every node
        // (including the empty array at the start)
        result.push([...currentPath]);

        // Iterate starting strictly from 'index' to ensure we only move FORWARD.
        // Moving forward prevents generating duplicate subsets like [1,2] and [2,1]
        for (let i = index; i < nums.length; i++) {
            // Choice: Include nums[i]
            currentPath.push(nums[i]);
            
            // Explore: move to the next index to avoid reusing the same element
            backtrack(i + 1, currentPath);
            
            // Backtrack: Remove nums[i] to explore the "Exclude" branch in the next loop iteration
            currentPath.pop();
        }
    };

    backtrack(0, []);
    return result;
}

// const nums = [1,2,3];
// console.log(subsets(nums));
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
