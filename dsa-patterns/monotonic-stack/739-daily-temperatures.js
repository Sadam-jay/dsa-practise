//? 739. Daily Temperatures

//! Pattern: Monotonic Stack (Decreasing)
//! Companies: Meta, Amazon, Microsoft, Apple
//! Difficulty: Medium

//* We want to find how many days you have to wait until a WARMER temperature.
//* This is the classic "Next Greater Element" problem in disguise.
//* We use a stack to store the INDICES of the days we haven't found a warmer day for yet.
//* If the current temperature is WARMER than the temperature at the index on top of the stack,
//* we found the answer for that day! We pop it, calculate the difference in indices, and record it.
//* Because we strictly pop elements that are smaller, the stack inherently remains Monotonically Decreasing.

// Time: O(n) - Every element is pushed and popped at most once
// Space: O(n) - The stack can hold up to n elements

function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    // Stack strictly stores INDICES, not values
    const stack = []; 

    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i];

        // While stack is not empty AND current temp > temp at the index on top of the stack
        while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
            // We found a warmer day for the day at 'poppedIndex'!
            const poppedIndex = stack.pop();
            
            // The wait time is the difference in indices
            result[poppedIndex] = i - poppedIndex;
        }

        // Push the current index to wait for its future warmer day
        stack.push(i);
    }

    return result;
}

// const temperatures = [73,74,75,71,69,72,76,73];
// console.log(dailyTemperatures(temperatures));
// Output: [1,1,4,2,1,1,0,0]
