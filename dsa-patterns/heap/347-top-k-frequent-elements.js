//? 347. Top K Frequent Elements

//! Pattern: Heap / Priority Queue (or Bucket Sort)
//! Companies: Meta, Amazon, Apple, Microsoft, Google
//! Difficulty: Medium

//* We want the K MOST frequent elements.
//* Using a Heap: Count frequencies in a Hash Map. Then push entries into a Min-Heap of size K based on frequency.
//* Time: O(N log K).
//* Alternatively, we can use BUCKET SORT to achieve pure O(N)!
//* The maximum frequency ANY number can have is exactly `array.length`.
//* We create an array `buckets` where the index represents "frequency count", 
//* and the value is a list of numbers that share that exact freq count.
//* We scan from the highest possible frequency backwards to find our top K!

// Time: O(n)
// Space: O(n)

function topKFrequent(nums, k) {
    // 1. Map values to their occurrence counts
    const countMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // 2. Setup Bucket Sort structural array
    // Length is nums.length + 1 because freq can perfectly equal length (e.g. [1,1,1] freq is 3)
    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    // 3. Populate buckets: Let frequency act as the Bucket INDEX
    for (const [num, count] of countMap.entries()) {
        buckets[count].push(num);
    }

    const result = [];

    // 4. Extract top K items starting objectively from the HIGHEST absolute frequencies
    for (let i = buckets.length - 1; i >= 0; i--) {
        // If this bucket contains elements...
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) {
                return result; // We grabbed exactly our top K!
            }
        }
    }

    return result;
}

// const nums = [1,1,1,2,2,3];
// const k = 2;
// console.log(topKFrequent(nums, k));
// Output: [1,2]
