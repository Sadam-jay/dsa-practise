//? 202. Happy Number

//! Pattern: Fast & Slow Pointers
//! Companies: Google, Amazon, Apple, Microsoft
//! Difficulty: Easy

//* This problem implicitly forms a cycle. 
//* We repeatedly square the digits of a number and sum them. This creates a sequence of numbers.
//* A "cycle" exists if the sequence falls into an infinite loop that doesn't reach 1.
//* Instead of a Hash Set, we can use Fast & Slow pointers conceptually on the generated numbers
//* to detect if we hit a cycle.

// Time: O(log n) - The sum of squares of digits shrinks the number logarithmically
// Space: O(1)

function isHappy(n) {
    // Helper function to calculate sum of squares of digits
    const getNext = (num) => {
        let totalSum = 0;
        while (num > 0) {
            const digit = num % 10;
            totalSum += digit * digit;
            num = Math.floor(num / 10);
        }
        return totalSum;
    };

    let slow = n;
    let fast = getNext(n);

    // If fast reaches 1, it's a happy number.
    // If fast meets slow, we are stuck in a cycle.
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);                // 1 step
        fast = getNext(getNext(fast));       // 2 steps
    }

    return fast === 1;
}

// const n = 19;
// console.log(isHappy(n));
// Output: true
