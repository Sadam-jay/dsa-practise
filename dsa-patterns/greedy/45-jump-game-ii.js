//? 45. Jump Game II

//! Pattern: Greedy (BFS conceptually)
//! Companies: Amazon, Google, Meta, Apple
//! Difficulty: Medium

//* You are guaranteed to reach the end, but you must do it in the MINIMUM number of jumps.
//* This is implicitly a level-order BFS traversal on an array!
//* We maintain a `current_window` (`left` to `right`) representing the reachable area for the current jump.
//* We iterate through this window to dynamically calculate the `farthest` point reachable for our NEXT jump.
//* When we finish evaluating the current window, we increment `jumps`, 
//* and strictly bound the upcoming window to `left = right + 1` and `right = farthest`.

// Time: O(n)
// Space: O(1)

function jump(nums) {
    let jumps = 0;
    
    // Defines the strict boundaries of our current "jump level window"
    let windowLeft = 0;
    let windowRight = 0;

    let farthestReachable = 0;

    // Loop until our window's right edge touches the very end
    while (windowRight < nums.length - 1) {
        
        // Scan the entire current window to identify what the absolute FARTHEST
        // possible reaching point is for the upcoming jump step
        for (let i = windowLeft; i <= windowRight; i++) {
            farthestReachable = Math.max(farthestReachable, i + nums[i]);
        }

        // We finished the current level. Advance to the newly discovered bounds.
        windowLeft = windowRight + 1;       // New left bound starts right after old right bound
        windowRight = farthestReachable;    // New right bound extends to our best discovery
        
        jumps++;
    }

    return jumps;
}

// const nums = [2,3,1,1,4];
// console.log(jump(nums));
// Output: 2
