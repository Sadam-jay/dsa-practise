//? 316. Remove Duplicate Letters

//! Pattern: Monotonic Stack (Increasing)
//! Companies: Google, Amazon, Microsoft
//! Difficulty: Medium

//* Remove duplicates such that the resulting string is the smallest lexicographical order possible.
//* This is very similar to "Remove K Digits", but we can ONLY pop a sub-optimal character 
//* if we verify that ANOTHER copy of that character exists further down the string!
//* We use a frequency map to track whether characters exist later down the string.
//* We use a 'seen' boolean array to efficiently track what's currently actively residing inside the stack.

// Time: O(n)
// Space: O(1) - The maps/sets store at most 26 characters (O(1) bounds)

function removeDuplicateLetters(s) {
    const stack = [];
    const seen = new Set();
    const lastOccurrence = new Map();

    // 1. Precalculate the ABSOLUTE LAST time any character appears in the string
    for (let i = 0; i < s.length; i++) {
        lastOccurrence.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is already safely secured and active inside our stack sequence, skip it
        if (seen.has(char)) continue;

        // While stack isn't empty, 
        // AND the current char is alphabetically SMALLER than the stack's top char (e.g., 'a' < 'c')
        // AND that suboptimal "larger" stack-top char ACTUALLY APPEARS AGAIN later in the string
        while (
            stack.length > 0 && 
            char < stack[stack.length - 1] && 
            lastOccurrence.get(stack[stack.length - 1]) > i
        ) {
            // We can safely pop the suboptimal larger character! We'll just grab it later.
            const popped = stack.pop();
            seen.delete(popped); // Remove its "secured" status
        }

        // Add the current char, lock it in for now
        stack.push(char);
        seen.add(char);
    }

    return stack.join('');
}

// const s = &quot;bcabc&quot;;
// console.log(removeDuplicateLetters(s));
// Output: &quot;abc&quot;
