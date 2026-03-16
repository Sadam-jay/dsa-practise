//? 875. Koko Eating Bananas

//! Pattern: Binary Search (on Answer Range)
//! Companies: Google, Amazon, Meta, Airbnb
//! Difficulty: Medium

//* This is a classic "Binary Search on Answer" problem.
//* We aren't searching for a value in an array. We are searching for an optimal rate 'k'.
//* The possible answer 'k' ranges from 1 to the maximum pile size (worst case speed).
//* Since speed is monotonically related to time (faster eating = less time),
//* we can binary search the speed 'k', check if Koko can finish within 'h' hours,
//* and continuously try to minimize 'k' while still satisfying the 'h' constraint.

// Time: O(n log(max_pile)) - n is piles array length, max_pile is the largest pile
// Space: O(1)

function minEatingSpeed(piles, h) {
    let left = 1; // Minimum possible eating speed is 1 banana/hour
    let right = Math.max(...piles); // Maximum speed needed is eating the largest pile in 1 hour

    // Helper function to calculate total hours needed at speed 'k'
    const hoursNeeded = (k) => {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        return hours;
    };

    let optimalK = right;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (hoursNeeded(mid) <= h) {
            // Can finish in time. Is there a slower, better optimal speed?
            optimalK = mid; // Record this valid speed
            right = mid - 1; // Try to find a smaller speed
        } else {
            // Cannot finish in time, need to eat faster
            left = mid + 1;
        }
    }

    return optimalK;
}

// const piles = [3,6,7,11];
// const h = 8;
// console.log(minEatingSpeed(piles, h));
// Output: 4
