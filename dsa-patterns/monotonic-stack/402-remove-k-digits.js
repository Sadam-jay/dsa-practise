//? 402. Remove K Digits

//! Pattern: Monotonic Stack (Increasing)
//! Companies: Microsoft, Meta, Amazon
//! Difficulty: Medium

//* Given a string representing a number, remove exactly 'k' digits to make it as SMALL as possible.
//* To make a number small, we want smaller digits at the most significant (leftmost) places.
//* We iterate left-to-right. If the current digit is SMALLER than the digit on top of the stack,
//* the digit on the stack is a poorly placed large number (e.g., '4' in "143"). 
//* We pop the '4' to allow the smaller '3' to take the more mathematically significant place!
//* We do this greedily while `k > 0`.

// Time: O(n)
// Space: O(n) - Stack for digits

function removeKdigits(num, k) {
    const stack = [];

    for (const digit of num) {
        // While we still can remove digits (k > 0),
        // and the stack isn't empty,
        // and the current digit is strictly LESS than the previous stacked digit...
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            // The previous digit is suboptimal for creating a tiny number. Remove it!
            stack.pop();
            k--;
        }

        // Push current digit
        stack.push(digit);
    }

    // What if all digits were continuously increasing? (e.g., "12345" and k=2)
    // The while loop never triggers. We must manually chop off the biggest digits at the end.
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Convert stack to string and remove any leading zeros
    // (e.g., "0200" becomes "200")
    let result = "";
    let leadingZero = true;

    for (const char of stack) {
        if (leadingZero && char === '0') continue;
        leadingZero = false; // We found the first non-zero!
        result += char;
    }

    return result.length === 0 ? "0" : result;
}

// const num = &quot;1432219&quot;;
// const k = 3;
// console.log(removeKdigits(num, k));
// Output: &quot;1219&quot;
