//? 763. Partition Labels

//! Pattern: Greedy
//! Companies: Amazon, Meta, Microsoft
//! Difficulty: Medium

//* We want to partition a string into as many parts as possible, 
//* ensuring that EACH English letter appears in at most ONE single part.
//* The Greedy trick: we first find the ABSOLUTE LAST INDEX occurrence of every character.
//* Then we iterate through the string.
//* Our substring partition MUST encompass the furthest index of EVERY character contained within it!
//* `partition_end = max(partition_end, last_index_of(current_char))`

// Time: O(n)
// Space: O(1) - Only 26 lowercase English letters

function partitionLabels(s) {
    // 1. Precompute the last index of every character
    const lastIndexMap = new Map();
    for (let i = 0; i < s.length; i++) {
        lastIndexMap.set(s[i], i);
    }

    const result = [];
    let partitionStart = 0;
    let partitionEnd = 0;

    // 2. Make greedy cuts mapping strictly to bounding ends
    for (let i = 0; i < s.length; i++) {
        // As we encounter each character, does it demand we push our partition further right?
        const charEnd = lastIndexMap.get(s[i]);
        partitionEnd = Math.max(partitionEnd, charEnd);

        // If our current iteration reaches the absolute maximum bounding requirement...
        // ...we successfully isolated a chunk where NO character inside it exists further right!
        if (i === partitionEnd) {
            // Record partition length
            const length = partitionEnd - partitionStart + 1;
            result.push(length);
            
            // Advance the start pointer for the very next character
            partitionStart = i + 1;
        }
    }

    return result;
}

// const s = &quot;ababcbacadefegdehijhklij&quot;;
// console.log(partitionLabels(s));
// Output: [9,7,8]
