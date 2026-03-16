//? 167. Two Sum II - Input Array Is Sorted

//! Pattern: Two Pointers
//! Companies: Amazon, Meta, Google
//! Difficulty: Medium

//* This is the fundamental Two Pointers problem.
//* Since the array is sorted, we can use a left pointer at the beginning and a right pointer at the end.
//* If the sum of elements at both pointers is too large, it means the rightmost element is too big, so we move right inward.
//* If the sum is too small, we move left inward.
//* This eliminates the need for extra space (Hash Map).

// Time: O(n)
// Space: O(1)

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            // Problem usually demands 1-indexed output
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            // Sum is too small, try a larger number
            left++;
        } else {
            // Sum is too large, try a smaller number
            right--;
        }
    }

    return [];
}

// const numbers = [2,7,11,15];
// const target = 9;
// console.log(twoSum(numbers, target));
// Output: [1,2]
