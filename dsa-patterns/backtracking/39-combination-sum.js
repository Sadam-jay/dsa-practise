//? 39. Combination Sum

//! Pattern: Backtracking
//! Companies: Amazon, Meta, Airbnb
//! Difficulty: Medium

//* We want to find all unique combinations that sum to exactly 'target'.
//* A key difference here is that we can reuse the SAME number an unlimited amount of times.
//* Because we can reuse numbers, when we recursive, we do NOT strictly increment the `index`.
//* We pass `i` instead of `i+1` so the algorithm can keep picking `nums[i]` until the sum exceeds target.
//* To prevent duplicate combinations (e.g., [2,2,3] vs [2,3,2]), the `start_index` parameter
//* strictly limits choices to the current element or elements further along the array.

// Time: O(N^(T/M + 1)) - N numbers, T target, M min value. Tree branching is large.
// Space: O(T/M) - Maximum recursion depth is when we continuously pick the smallest element

function combinationSum(candidates, target) {
    const result = [];

    const backtrack = (index, currentPath, currentSum) => {
        // Base case 1: Found the exact target
        if (currentSum === target) {
            result.push([...currentPath]);
            return;
        }

        // Base case 2: Exceeded target, this path is dead, stop exploring
        if (currentSum > target) {
            return;
        }

        // Options: Pick from available candidates starting from 'index'
        for (let i = index; i < candidates.length; i++) {
            currentPath.push(candidates[i]);
            
            // Look here: We pass 'i', not 'i + 1'. This allows reusing the same candidate!
            backtrack(i, currentPath, currentSum + candidates[i]);
            
            // Backtrack to try other combinations
            currentPath.pop();
        }
    };

    backtrack(0, [], 0);
    return result;
}

// const candidates = [2,3,6,7];
// const target = 7;
// console.log(combinationSum(candidates, target));
// Output: [[2,2,3],[7]]
