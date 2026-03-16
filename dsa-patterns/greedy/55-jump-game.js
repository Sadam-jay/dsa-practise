//? 55. Jump Game

//! Pattern: Greedy
//! Companies: Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* You are given an array where each element represents your maximum jump length.
//* Can you reach the last index?
//* The Greedy approach works backwards from the target.
//* Our initial `goal` is the last index.
//* We iterate backward from right-to-left. 
//* If the current index `i` plus its maximum jump `nums[i]` can REACH or EXCEED the `goal`,
//* then reaching `i` guarantees we can reach the original `goal`.
//* We greedily update the `goal` to `i`, and see if we can eventually reach `0`.

// Time: O(n)
// Space: O(1)

function canJump(nums) {
    // the initial goal is reaching the last element
    let goal = nums.length - 1;

    // Iterate backwards from the second-to-last element
    for (let i = nums.length - 2; i >= 0; i--) {
        // Can we jump from 'i' far enough to reach the current goal?
        const maxReachFromHere = i + nums[i];
        
        if (maxReachFromHere >= goal) {
            // Yes! The new goal is simply reaching this 'i' index
            goal = i;
        }
    }

    // If we managed to shift the goal all the way back to the start, we can win
    return goal === 0;
}

// const nums = [2,3,1,1,4];
// console.log(canJump(nums));
// Output: true
