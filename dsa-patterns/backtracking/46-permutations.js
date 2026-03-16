//? 46. Permutations

//! Pattern: Backtracking
//! Companies: Microsoft, Amazon, Meta, Apple
//! Difficulty: Medium

//* This is the fundamental permutation problem.
//* A permutation is an arrangement of ALL numbers in different orders.
//* We use a recursive function `backtrack(path)` to build the permutation step by step.
//* At each step, we iterate through the given numbers. If a number is NOT already in our `path`,
//* we add it, recursively call `backtrack` to continue building, and then REMOVE it (backtrack)
//* so the next recursive branch can try a different order.

// Time: O(n * n!) - n choices for first, n-1 for second... = n! paths, and copying the path takes O(n)
// Space: O(n) - the depth of the recursion tree is exactly n

function permute(nums) {
    const result = [];

    const backtrack = (currentPath) => {
        // Base case: If the path length equals nums length, we formed a valid permutation
        if (currentPath.length === nums.length) {
            result.push([...currentPath]); // Push a COPY, not a reference
            return;
        }

        for (const num of nums) {
            // Because elements are unique, we can check if it's already used
            // Optimization: use a boolean 'visited' array for O(1) checks instead of .includes() O(n)
            if (currentPath.includes(num)) continue;

            // 1. Choose
            currentPath.push(num);
            
            // 2. Explore
            backtrack(currentPath);
            
            // 3. Un-choose (Backtrack)
            currentPath.pop();
        }
    };

    backtrack([]);
    return result;
}

// const nums = [1,2,3];
// console.log(permute(nums));
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
