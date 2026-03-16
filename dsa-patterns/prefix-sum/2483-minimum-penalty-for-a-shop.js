//? 2483. Minimum Penalty for a Shop

//! Pattern: Prefix Sum (Prefix & Suffix Simulation)
//! Companies: Meta, Amazon, Bloomberg
//! Difficulty: Medium

//* The 'penalty' at any given closing hour configuration is:
//* Total 'N's strictly BEFORE closing hour + Total 'Y's AFTER/ON closing hour.
//* To evaluate this in O(1) for every single hour, we need to pre-know:
//* 1. How many 'Y's exist in the entire string to the right. (Suffix mechanism)
//* 2. How many 'N's exist we've already passed. (Prefix mechanism)

// Time: O(n)
// Space: O(1) - Can be optimized from O(N) arrays into a single pass tracking score

function bestClosingTime(customers) {
    // Instead of full arrays, let's optimize to O(1) space.
    // First, calculate penalty if we close at hour 0 (Penalty = ALL 'Y's)
    let maxPenalty = 0;
    for (const char of customers) {
        if (char === 'Y') maxPenalty++;
    }

    let currentPenalty = maxPenalty;
    let minPenaltyFound = maxPenalty;
    let bestHour = 0;

    // Simulate closing at each subsequent hour from 1 to N
    for (let i = 0; i < customers.length; i++) {
        // If we move the closing line past a 'Y', we save a penalty point 
        // (because it's no longer 'after/on' the closing line, it's 'before', which is a correct decision)
        if (customers[i] === 'Y') {
            currentPenalty--;
        } 
        // If we move the closing line past an 'N', we incur a penalty point
        // (because it's now 'before' the closing line, meaning the shop was open with no customer)
        else {
            currentPenalty++;
        }

        // Did shifting the closing hour improve our situation?
        if (currentPenalty < minPenaltyFound) {
            minPenaltyFound = currentPenalty;
            bestHour = i + 1;
        }
    }

    return bestHour;
}

// const customers = &quot;YYNY&quot;;
// console.log(bestClosingTime(customers));
// Output: 2
