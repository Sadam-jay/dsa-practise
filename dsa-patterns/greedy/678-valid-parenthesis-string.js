//? 678. Valid Parenthesis String

//! Pattern: Greedy
//! Companies: Amazon, Meta, Microsoft
//! Difficulty: Medium

//* We are given a string with '(', ')', and '*'. '*' can be either '(', ')', or empty.
//* Because '*' introduces multiple possibilities, maintaining a single counter isn't enough.
//* We greedily maintain a RANGE of possible open parentheses: `[minOpen, maxOpen]`.
//* If we see '(', both min and max increase.
//* If we see ')', both min and max decrease.
//* If we see '*', min decreases (treating it as ')') and max increases (treating it as '(').
//* If maxOpen ever dips below 0, it's invalid universally (too many ')').
//* If minOpen dips below 0, we simply reset it to 0 (we can't have negative open brackets conceptually).

// Time: O(n)
// Space: O(1)

function checkValidString(s) {
    // The strict minimum number of open parentheses required to be valid
    let minOpenReq = 0;
    // The absolute maximum number of open parentheses we *could* have
    let maxOpenPossible = 0;

    for (let char of s) {
        if (char === '(') {
            minOpenReq++;
            maxOpenPossible++;
        } else if (char === ')') {
            minOpenReq--;
            maxOpenPossible--;
        } else if (char === '*') {
            // Because '*' is flexible:
            // It could be ')' -> min decreases
            minOpenReq--;
            // It could be '(' -> max increases
            maxOpenPossible++;
            // It could be empty -> no operation mathematically required for the bounds
        }

        // Is it impossible to ever return to 0? E.g., '))'
        if (maxOpenPossible < 0) {
            return false;
        }

        // Technically minOpenReq can dip below 0 if we treated a '*' as ')'
        // But functionally, if we had too many '*', we would just treat them as "empty".
        // Therefore, minOpenReq physically cannot be negative when representing the true requirement.
        // It's the floor bounding limitation.
        if (minOpenReq < 0) {
            minOpenReq = 0; 
        }
    }

    // Is it possible to have exactly 0 open parentheses at the end?
    // Min == 0 guarantees there's a valid path.
    return minOpenReq === 0;
}

// const s = "()";
// console.log(checkValidString(s));
// Output: true
