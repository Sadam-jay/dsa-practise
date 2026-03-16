//? 34. Find First and Last Position of Element in Sorted Array

//! Pattern: Binary Search
//! Companies: Meta, Amazon, LinkedIn, Uber
//! Difficulty: Medium

//* Standard Binary Search finds *any* instance of the target.
//* If duplicates exist, it might return a middle instance.
//* To find the exact First and Last position, we run Binary Search TWICE.
//* First pass: We find the leftmost (first) index by aggressively stepping `right = mid - 1` even when target is found.
//* Second pass: We find the rightmost (last) index by aggressively stepping `left = mid + 1` even when target is found.

// Time: O(log n) - Two separate O(log n) operations
// Space: O(1)

function searchRange(nums, target) {
    const findBound = (isFirst) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === target) {
                bound = mid; // Record the bound
                if (isFirst) {
                    right = mid - 1; // Keep searching left for earlier occurrences
                } else {
                    left = mid + 1;  // Keep searching right for later occurrences
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return bound;
    };

    const first = findBound(true);
    // Optimization: If the target isn't found at all, we don't need to search for the last position.
    if (first === -1) return [-1, -1];

    const last = findBound(false);
    return [first, last];
}

// const nums = [5,7,7,8,8,10];
// const target = 8;
// console.log(searchRange(nums, target));
// Output: [3,4]
