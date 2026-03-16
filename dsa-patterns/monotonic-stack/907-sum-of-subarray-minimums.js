//? 907. Sum of Subarray Minimums

//! Pattern: Monotonic Stack (Increasing)
//! Companies: Amazon, Microsoft, Meta
//! Difficulty: Medium

//* Find the sum of the minimums of EVERY possible contiguous subarray.
//* A naive $O(N^2)$ counts every subarray. 
//* Instead of saying "For this subarray, what is the minimum?", we ask the inverse:
//* "For this specific NUMBER nums[i], exactly HOW MANY subarrays is it the absolute minimum for?"
//* It is the minimum going LEFT until we hit a strictly smaller number.
//* It is the minimum going RIGHT until we hit a strictly smaller number.
//* We use an Increasing Monotonic Stack to efficiently find these "Next Smaller Number" bounds for ALL elements in $O(N)$.
//* Total subarrays where $nums[i]$ dominates = `(left_reach) * (right_reach)`.

// Time: O(n)
// Space: O(n)

function sumSubarrayMins(arr) {
    const MOD = 1e9 + 7;
    const n = arr.length;
    let totalSum = 0;
    
    // Stack specifically stores indices
    const stack = [];

    // We pad with an imaginary '0' bounds limit at the end.
    // This forcibly flushes all remaining elements inside the stack 
    // exactly how "Largest Rectangle in Histogram" does.
    for (let i = 0; i <= n; i++) {
        // If i matches n, simulate a "-Infinity" boundary that triggers everything to pop
        const currentElem = i === n ? 0 : arr[i];

        // While the current element is strictly SMALLER, the item on top of the stack 
        // has finally hit its absolute rightward bottleneck bound.
        while (stack.length > 0 && currentElem < arr[stack[stack.length - 1]]) {
            const poppedIndex = stack.pop();
            const evaluatedValue = arr[poppedIndex];

            // Rightward extent: The distance between the popped element and the newly discovered smaller element that triggered it
            const rightConstraint = i - poppedIndex;
            
            // Leftward extent: The distance to the element resting BELOW it in the stack (which naturally is its leftward closest smaller element)
            // If the stack is empty, it means there are no smaller numbers to its left! It extends all the way to index 0.
            const leftConstraint = stack.length === 0 ? (poppedIndex + 1) : (poppedIndex - stack[stack.length - 1]);

            // The absolute mathematical combination of all subarrays crossing this dominant 'evaluatedValue'
            const numDominatedSubarrays = leftConstraint * rightConstraint;

            // Total contribution formula using BigInt/Modulo math handling
            const sumContribution = (evaluatedValue * numDominatedSubarrays);
            totalSum = (totalSum + sumContribution) % MOD;
        }

        stack.push(i);
    }

    return totalSum;
}

// const arr = [3,1,2,4];
// console.log(sumSubarrayMins(arr));
// Output: 17
