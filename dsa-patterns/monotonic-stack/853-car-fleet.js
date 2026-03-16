//? 853. Car Fleet

//! Pattern: Monotonic Stack (Simulating Merges)
//! Companies: Google, Amazon, Uber
//! Difficulty: Medium

//* There are N cars on a single-lane road (they cannot pass each other).
//* A faster car behind a slower car simply crashes into it and adopts its strictly slower speed.
//* This is a "Rightward-propagating bottleneck" problem.
//* First, mathematically calculate HOW LONG it takes each car to reach the `target` solo.
//* Then sort cars descending by starting position (closest to target FIRST, going backwards).
//* A car behind takes `time_behind`. The car blocking it takes `time_ahead`.
//* If `time_behind <= time_ahead`, the car behind will physically RAM into the car ahead before the target.
//* They merge into ONE fleet. We track the slowest leader times sequentially in our stack.

// Time: O(n log n) - We must sort the cars by starting position
// Space: O(n) - Array to hold sorted pairs and Stack

function carFleet(target, position, speed) {
    // Combine into paired objects for unified sorting
    const cars = [];
    for (let i = 0; i < position.length; i++) {
        cars.push({ pos: position[i], spd: speed[i] });
    }

    // Sort heavily DESCENDING based on position
    // We want the car closest to the target evaluated FIRST
    cars.sort((a, b) => b.pos - a.pos);

    const stack = []; // Specifically holds the "time to arrive" for distinct fleet leaders

    for (const car of cars) {
        // Simple Physics calculation: Time = Distance / Velocity
        const timeToTarget = (target - car.pos) / car.spd;

        // If stack is empty, this car naturally defines our very first fleet leader
        if (stack.length === 0) {
            stack.push(timeToTarget);
            continue;
        }

        const fleetLeaderTime = stack[stack.length - 1];

        // Does this trailing car actually catch up to the current fleet leader?
        // (It catches up if its own required travel time is LESS than or EQUAL to the leader's time)
        if (timeToTarget <= fleetLeaderTime) {
            // It crashes into the slow leader ahead of it.
            // It inherently adopts the structural identity of the leader fleet. Do nothing!
            continue; 
        } else {
            // It is physically too slow to ever catch the fleet ahead of it.
            // It fundamentally becomes the defining bottleneck for a completely NEW fleet behind it!
            stack.push(timeToTarget); 
        }
    }

    // The number of distinct times left in the stack is exactly the number of distinct fleets!
    return stack.length;
}

// const target = 12;
// const position = [10,8,0,5,3];
// const speed = [2,4,1,1,3];
// console.log(carFleet(target, position, speed));
// Output: 3
