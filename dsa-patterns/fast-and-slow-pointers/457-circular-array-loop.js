//? 457. Circular Array Loop

//! Pattern: Fast & Slow Pointers
//! Companies: Google, Postmates
//! Difficulty: Medium

//* This problem requires detecting a cycle in an array where values represent relative jump steps.
//* Fast & Slow pointers can detect the cycle.
//* The tricky part: A valid cycle must only go in one direction (all positive or all negative steps),
//* and its length must be > 1.
//* For each unvisited element, we send a slow and fast pointer to see if they meet.

// Time: O(n) - We mark visited nodes as 0 to ensure we don't process them again
// Space: O(1) 

function circularArrayLoop(nums) {
    const nextIndex = (i) => {
        const n = nums.length;
        // Calculate next index, handling negative wrapping
        let next = (i + nums[i]) % n;
        if (next < 0) next += n;
        return next;
    };

    for (let i = 0; i < nums.length; i++) {
        // Skip elements we already processed or zero-steps
        if (nums[i] === 0) continue;

        let slow = i;
        let fast = i;
        // Direction is based on whether the start number is positive or negative
        let isForward = nums[i] > 0;

        while (true) {
            let nextSlow = nextIndex(slow);
            
            // Check if slow changes direction or hits a 1-element cycle
            if ((nums[nextSlow] > 0) !== isForward || nextSlow === slow) break;

            let nextFast = nextIndex(fast);
            // Check fast step 1
            if ((nums[nextFast] > 0) !== isForward || nextFast === fast) break;
            
            let nextNextFast = nextIndex(nextFast);
            // Check fast step 2
            if ((nums[nextNextFast] > 0) !== isForward || nextNextFast === nextFast) break;

            slow = nextSlow;
            fast = nextNextFast;

            if (slow === fast) return true; // Cycle detected
        }

        // Cycle not found. Mark all nodes along this path as visited (0)
        let curr = i;
        let val = nums[i];
        while (nums[curr] !== 0 && (nums[curr] > 0) === isForward) {
            let next = nextIndex(curr);
            nums[curr] = 0;
            curr = next;
        }
    }

    return false;
}

// const nums = [2,-1,1,2,2];
// console.log(circularArrayLoop(nums));
// Output: true
