//? 134. Gas Station

//! Pattern: Greedy
//! Companies: Amazon, Microsoft, Meta
//! Difficulty: Medium

//* You have to travel a circular route.
//* 1. Is completing the circuit theoretically mathematically possible?
//*    (Total gas MUST be >= Total cost). If not, return -1 immediately.
//* 2. If it is possible, where does it start?
//* We maintain a `running_gas` tank. 
//* If `running_gas` dips below 0 at station `i`, it means ANY station from `start` to `i`
//* CANNOT physically be the starting station. 
//* We greedily reset `start = i + 1` and reset our tank to 0.

// Time: O(n)
// Space: O(1)

function canCompleteCircuit(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    // 1. Theoretical mathematical validity check
    if (totalGas < totalCost) return -1;

    // 2. Greedy starting point calculation
    let currentTank = 0;
    let greedyStart = 0;

    for (let i = 0; i < gas.length; i++) {
        const netChange = gas[i] - cost[i];
        currentTank += netChange;

        // If my tank goes negative reaching the next station...
        if (currentTank < 0) {
            // ...this current starting point logic fails universally.
            // A working path MUST start AFTER this bottleneck station!
            greedyStart = i + 1;
            
            // Re-evaluate a fresh trip
            currentTank = 0;
        }
    }

    // Since we definitively passed the theoretical total validity check,
    // whatever start point survived without going negative MUST be the valid answer.
    return greedyStart;
}

// const gas = [1,2,3,4,5];
// const cost = [3,4,5,1,2];
// console.log(canCompleteCircuit(gas, cost));
// Output: 3
