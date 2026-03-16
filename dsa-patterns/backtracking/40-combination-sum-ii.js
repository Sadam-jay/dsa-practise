//? 40. Combination Sum II

//! Pattern: Backtracking
//! Companies: Amazon, Microsoft, Snap
//! Difficulty: Medium

//* This problem merges the concepts of "Combination Sum" and "Subsets II".
//* We want to sum exactly to a target.
//* The array contains duplicates.
//* A mathematical number from the array can only be used ONCE per combination path.
//* We sort the array first skipping duplicate siblings branches to avoid duplicate results.

// Time: O(2^n) - In the worst case we explore all subsets
// Space: O(n) - Maximum recursion depth is N

function combinationSum2(candidates, target) {
    const result = [];

    // 1. Sort to easily skip siblings that evaluate to the same prefix subset
    candidates.sort((a, b) => a - b);

    const backtrack = (index, currentPath, currentSum) => {
        // Base case: Valid combination
        if (currentSum === target) {
            result.push([...currentPath]);
            return;
        }

        // Base case: Invalid
        if (currentSum > target) {
            return; 
        }

        for (let i = index; i < candidates.length; i++) {
            // 2. Skip duplicates to prevent duplicate combinations
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Optimization loop cutoff:
            // Since candidates are sorted, if the current element EXCEEDS the remaining target,
            // all subsequent elements will ALSO exceed it.
            if (currentSum + candidates[i] > target) {
                break; // We can break entirely instead of continue!
            }

            currentPath.push(candidates[i]);
            
            // We use 'i + 1' because each element can only be used exactly once.
            backtrack(i + 1, currentPath, currentSum + candidates[i]);
            
            currentPath.pop();
        }
    };

    backtrack(0, [], 0);
    return result;
}
