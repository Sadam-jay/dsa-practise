//? 406. Queue Reconstruction by Height

//! Pattern: Greedy (Sorting + Insertion)
//! Companies: Google, Amazon, Microsoft
//! Difficulty: Medium

//* You are given an array of people `[height, k]`, where `k` is the number 
//* of people in front of them who are taller or equal in height.
//* A purely greedy trick: Sort people by HEIGHT DESCENDING.
//* If two people have the same height, sort by `k` ASCENDING.
//* Why? Because when we insert taller people first, inserting shorter people 
//* LATER does NOT affect the `k` value of the taller people! They simply "don't exist" to them.
//* So we can unconditionally just insert people directly at index `k`.

// Time: O(n^2) - Array insertion (splice) takes O(n), done 'n' times
// Space: O(n) - Result array

function reconstructQueue(people) {
    // 1. Sort Greedy Rule:
    // Taller people FIRST (h descending). 
    // If same height, smaller 'k' FIRST (k ascending).
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; // Ascending 'k'
        }
        return b[0] - a[0]; // Descending 'h'
    });

    const result = [];

    // 2. Insert into the result queue
    for (const person of people) {
        const insertIndex = person[1]; // The 'k' value
        
        // Since we are inserting from tallest down to shortest,
        // everyone currently in the array is GUARANTEED to be taller or equal.
        // Therefore, inserting at index 'k' perfectly fulfills the person's 'k' requirement!
        // `splice` pushes existing elements functionally to the right.
        result.splice(insertIndex, 0, person);
    }

    return result;
}

// const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
// console.log(reconstructQueue(people));
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
