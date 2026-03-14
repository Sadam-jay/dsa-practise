//! 242. Valid Anagram

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   const counts = new Array(26).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     counts[s.charCodeAt(i) - 97]++;
//     counts[t.charCodeAt(i) - 97]--;
//   }

//   for (let count of counts) {
//     if (count !== 0) return false;
//   }

//   return true;
// }

// console.log(isAnagram("jay", "ayj"));

//! 217. Contains Duplicate

// function containsDuplicate(nums) {
//   const seen = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (seen.has(nums[i])) {
//       return true;
//     }
//     seen.add(nums[i]);
//   }

//   return false;
// }

// console.log(containsDuplicate([1, 2, 3, 1]))

//! 344. Reverse String

// function reverseString(s) {
//   const arr = s.split("");
//   let left = 0,
//     right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }

//   return arr.join("");
// }

// console.log(reverseString("jayanth"));

//! 20. Valid Parentheses

// function isBalanced(s) {
//   const stack = [];
//   const pairs = { ")": "(", "]": "[", "}": "{" };
//   for (const ch of s) {
//     if ("([{".includes(ch)) stack.push(ch);
//     else if (")]}".includes(ch)) {
//       if (stack.pop() !== pairs[ch]) return false;
//     }
//   }
//   return stack.length === 0;
// }

// console.log(isBalanced("()[]{}"));

//! 1. Two Sum

// function twoSum(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }

// console.log(twoSum([2, 4, 1, 6, 7], 5));

//! 11. Container With Most Water

// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let maxAreaStr = 0;

//   while (left < right) {
//     // Area is width * minimum height
//     const width = right - left;
//     const currentHeight = Math.min(height[left], height[right]);
//     const area = width * currentHeight;

//     maxAreaStr = Math.max(maxAreaStr, area);

//     // Always string to keep the tallest wall possible
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return maxAreaStr;
// }

// console.log(maxArea([8, 3, 4, 5, 3, 7]));

//! 3. Longest Substring Without Repeating Characters

// function lengthOfLongestSubstring(s) {
//   const seen = new Set();
//   let left = 0;
//   let maxLen = 0;

//   for (let right = 0; right < s.length; right++) {
//     // If we've seen this character, shrink window from the left
//     while (seen.has(s[right])) {
//       seen.delete(s[left]);
//       left++;
//     }

//     // Add current character to window
//     seen.add(s[right]);

//     // Update maximum window size
//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));

//! 704. Binary Search

// function search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 2));

//! 33. Search in Rotated Sorted Array

// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) return mid;

//     // Left half sorted
//     if (nums[left] <= nums[mid]) {
//       if (target >= nums[left] && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     // Right half sorted
//     else {
//       if (target > nums[mid] && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1;
// };

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 0, 1, 2, 3], 0));

//! 206. Reverse Linked List

// var reverseList = function(head) {

//     let prev = null;
//     let curr = head

//     while (curr !== null) {
//         let next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next
//     }

//     return prev
// };

//! 141. Linked List Cycle

// var hasCycle = function(head) {
//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             return true;
//         }
//     }

//     return false;
// };

//! 226. Invert Binary Tree

// var invertTree = function(root) {
//   if(root === null) {
//     return null
//   }

//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;

//   invertTree(root.left)
//   invertTree(root.right)

//   return root
// }

//! 104. Maximum Depth of Binary Tree

// var maxDepth = function(root) {
//   if(!root) {
//     return 0
//   }

//   let leftDepth = maxDepth(root.left);
//   let rightDepth = maxDepth(root.right);

//   return 1 + Math.max(leftDepth, rightDepth);
// }

//! 98. Validate Binary Search Tree

// var isValidBST = function(root) {
//     function validate(node, low, high) {
//         if (!node) return true;

//         if (node.val <= low || node.val >= high) {
//             return false;
//         }

//         return validate(node.left, low, node.val) &&
//                validate(node.right, node.val, high);
//     }

//     return validate(root, -Infinity, Infinity);
// };

// todo:
//! 1046. Last Stone Weight

//       8
//     /   \
//    7     4
//   / \   /
//  1  2  1

// var lastStoneWeight = function (stones) {
//   // Use the input array itself as the heap
//   const heap = stones;

//   // Convert the array into a Max Heap
//   const heapify = () => {
//     // Start from last non-leaf node and sift down
//     for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
//       siftDown(i);
//     }
//   };

//   // Move element down the heap to maintain Max Heap property
//   const siftDown = (i) => {
//     while (true) {
//       let left = 2 * i + 1; // left child index
//       let right = 2 * i + 2; // right child index
//       let largest = i; // assume current node is largest

//       // Check if left child is larger
//       if (left < heap.length && heap[left] > heap[largest]) {
//         largest = left;
//       }

//       // Check if right child is larger
//       if (right < heap.length && heap[right] > heap[largest]) {
//         largest = right;
//       }

//       // If current node is already largest → heap property satisfied
//       if (largest === i) break;

//       // Swap with larger child
//       [heap[i], heap[largest]] = [heap[largest], heap[i]];

//       // Continue sifting down
//       i = largest;
//     }
//   };

//   // Move element up to maintain Max Heap property
//   const siftUp = (i) => {
//     while (i > 0) {
//       let parent = Math.floor((i - 1) / 2);

//       // If parent is already larger, stop
//       if (heap[parent] >= heap[i]) break;

//       // Swap with parent
//       [heap[parent], heap[i]] = [heap[i], heap[parent]];

//       // Move upward
//       i = parent;
//     }
//   };

//   // Remove and return the largest element from heap
//   const extractMax = () => {
//     const max = heap[0]; // root of heap (largest)
//     const last = heap.pop(); // remove last element

//     // If heap still has elements
//     if (heap.length > 0) {
//       heap[0] = last; // move last element to root
//       siftDown(0); // restore heap property
//     }

//     return max;
//   };

//   // Insert new value into heap
//   const insert = (val) => {
//     heap.push(val); // add at end
//     siftUp(heap.length - 1); // move it up to correct position
//   };

//   // Build heap from initial stones array
//   heapify();

//   console.log(heap);

//   // Keep smashing the two largest stones
//   while (heap.length > 1) {
//     let y = extractMax(); // heaviest stone
//     let x = extractMax(); // second heaviest

//     // If stones are different weights
//     if (y !== x) {
//       insert(y - x); // push remaining stone back into heap
//     }
//   }

//   // Return last stone weight or 0 if none
//   return heap.length ? heap[0] : 0;
// };

// var lastStoneWeight = function (stones) {
//   const heap = stones;
//   console.log("Initial stones:", [...heap]);

//   const siftDown = (i) => {
//     console.log(`  [siftDown] Starting at index ${i}, value ${heap[i]}`);
//     while (true) {
//       let left = 2 * i + 1;
//       let right = 2 * i + 2;
//       let largest = i;

//       console.log({ left, right, largest });

//       if (left < heap.length && heap[left] > heap[largest]) {
//         largest = left;
//         console.log("left is greater", largest);
//       }
//       if (right < heap.length && heap[right] > heap[largest]) {
//         largest = right;
//         console.log("right is greater", largest);
//       }

//       if (largest === i) {
//         console.log(
//           `  [siftDown] No swap needed at index ${i}, heap property satisfied`,
//         );
//         break;
//       }

//       console.log(
//         `  [siftDown] Swapping index ${i} (${heap[i]}) with index ${largest} (${heap[largest]})`,
//       );
//       [heap[i], heap[largest]] = [heap[largest], heap[i]];
//       console.log(`  [siftDown] Heap after swap: [${heap}]`);
//       i = largest;
//     }
//   };

//   const heapify = () => {
//     console.log("\n--- Heapify Start ---");
//     for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
//       console.log(
//         `[heapify] Processing non-leaf node at index ${i} (value ${heap[i]})`,
//       );
//       siftDown(i);
//       console.log(`[heapify] Heap state: [${heap}]`);
//     }
//     console.log("--- Heapify Complete → Max Heap:", [...heap], "---\n");
//   };

//   const siftUp = (i) => {
//     console.log(`  [siftUp] Starting at index ${i}, value ${heap[i]}`);
//     while (i > 0) {
//       let parent = Math.floor((i - 1) / 2);

//       if (heap[parent] >= heap[i]) {
//         console.log(
//           `  [siftUp] Parent ${heap[parent]} >= child ${heap[i]}, stopping`,
//         );
//         break;
//       }

//       console.log(
//         `  [siftUp] Swapping index ${i} (${heap[i]}) with parent index ${parent} (${heap[parent]})`,
//       );
//       [heap[parent], heap[i]] = [heap[i], heap[parent]];
//       console.log(`  [siftUp] Heap after swap: [${heap}]`);
//       i = parent;
//     }
//   };

//   const extractMax = () => {
//     const max = heap[0];
//     const last = heap.pop();
//     console.log(
//       `  [extractMax] Removed root (max): ${max}, popped last element: ${last}`,
//     );

//     if (heap.length > 0) {
//       heap[0] = last;
//       console.log(`  [extractMax] Placed ${last} at root, sifting down...`);
//       siftDown(0);
//     }

//     console.log(`  [extractMax] Heap after extract: [${heap}]`);
//     return max;
//   };

//   const insert = (val) => {
//     console.log(`  [insert] Inserting value: ${val}`);
//     heap.push(val);
//     siftUp(heap.length - 1);
//     console.log(`  [insert] Heap after insert: [${heap}]`);
//   };

//   heapify();

//   let round = 1;
//   while (heap.length > 1) {
//     console.log(`--- Round ${round++} | Heap: [${heap}] ---`);
//     let y = extractMax();
//     let x = extractMax();
//     console.log(`  Smashing y=${y} and x=${x}`);

//     if (y !== x) {
//       console.log(`  Stones differ → inserting remainder: ${y - x}`);
//       insert(y - x);
//     } else {
//       console.log(`  Stones are equal → both destroyed`);
//     }
//     console.log(`  Heap after round: [${heap}]\n`);
//   }

//   const result = heap.length ? heap[0] : 0;
//   console.log("Final result:", result);
//   return result;
// };

// console.log("\n=== RESULT:", lastStoneWeight([2, 7, 4, 1, 8, 1]), "===");
// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

//? Recurssion

// const printNum = (n) => {
//   if (n < 10) {
//     console.log(n);
//     printNum(n + 1);
//   }
// };
// printNum(0);

//? Factorial

// const factorial = (n) => {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// };
// console.log(factorial(5));

//? Regular Expresion // Regex

// const text = "#2A2A2A";

// const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

// const match = text.match(regex);
// const index = text.search(regex);
// const replaced = text.replace(regex, "#000000");
// const testing = regex.test(text);

// console.log([match, index, replaced, testing]);

//* ----------------------------------------------

// const text = "+88-01912345678";

// const regex = /(\+88)?-?01[1-9]\d{8}/g;

// const match = text.match(regex);
// const index = text.search(regex);
// const replaced = text.replace(regex, "phone");
// const testing = regex.test(text);

// console.log(match, index, replaced, testing);

//! 268. Missing Number

// var missingNumber = function (nums) {
//   let n = nums.length;

//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = nums.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// };

// console.log(missingNumber([3, 0, 1, 2, 4, 6]));

//! 448. Find All Numbers Disappeared in an Array

// var findDisappearedNumbers = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let index = Math.abs(nums[i]) - 1;

//     if (nums[index] > 0) {
//       nums[index] = -nums[index];
//     }
//   }

//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       result.push(i + 1);
//     }
//   }

//   return result;
// };

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

//! 1365. How Many Numbers Are Smaller Than the Current Number

// var smallerNumbersThanCurrent = function (nums) {
//   // Step 1: Create a counting array for numbers 0 → 100
//   // index = number
//   // value = frequency of that number
//   let count = new Array(101).fill(0);

//   // Step 2: Count how many times each number appears
//   for (let num of nums) {
//     count[num]++;
//   }

//   //   console.log("count", count);

//   // Step 3: Convert frequency array to prefix sum array
//   // After this:
//   // count[i] = number of elements ≤ i
//   for (let i = 1; i <= 100; i++) {
//     count[i] += count[i - 1];
//   }

//   console.log("count after", count);

//   // Step 4: Build result array
//   // Numbers smaller than num = numbers ≤ (num - 1)
//   return nums.map((num) => {
//     if (num === 0) return 0; // nothing is smaller than 0
//     return count[num - 1]; // prefix sum gives the answer
//   });
// };

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

//! Two Sum II

// function twoSumII(numbers, target) {
//   // Pointer 1: Starts at the beginning (smallest number)
//   let left = 0;

//   // Pointer 2: Starts at the end (largest number)
//   let right = numbers.length - 1;

//   while (left < right) {
//     // Calculate the current sum of our two pointers
//     let currentSum = numbers[left] + numbers[right];

//     if (currentSum === target) {
//       // We found the match!
//       // Adding 1 because the problem usually asks for 1-based indexing.
//       return [left + 1, right + 1];
//     } else if (currentSum > target) {
//       // The sum is too big. Move the right pointer to a smaller number.
//       right--;
//     } else {
//       // The sum is too small. Move the left pointer to a bigger number.
//       left++;
//     }
//   }

//   return []; // Return empty if no solution exists
// }

// const numbers = [2, 7, 11, 15];
// console.log(twoSumII(numbers, 9));
// Output: [1, 2] (Because numbers[0] + numbers[1] is 2 + 7 = 9)

//! 3Sum

// Index:   0    1    2    3    4
// Array: [ 10,  20,  30,  40,  50 ]
//                    ^    ^    ^
//                    i   left right
//                   (a)  (b)  (c)

// function threeSum(nums) {
//   // 1. Sort the array from smallest to largest
//   // JS arrays sort alphabetically by default, so we must provide a sorting function
//   nums.sort((a, b) => a - b);

//   const results = [];

//   // 2. Loop through the array to lock in our 'a'
//   // If we let i travel all the way to the very end of the array,
//   // there wouldn't be any numbers left over for left and right to point to.
//   for (let i = 0; i < nums.length - 2; i++) {
//     // Skip duplicate 'a' values to avoid duplicate triplets in our results
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let left = i + 1; // Pointer 'b' starts just after 'a'
//     let right = nums.length - 1; // Pointer 'c' starts at the end

//     // 3. The Two Sum II Squeeze
//     while (left < right) {
//       const currentSum = nums[i] + nums[left] + nums[right];

//       if (currentSum === 0) {
//         // We found a triplet! Push it to our results.
//         results.push([nums[i], nums[left], nums[right]]);

//         // Skip any duplicate 'b' values
//         while (left < right && nums[left] === nums[left + 1]) left++;
//         // Skip any duplicate 'c' values
//         while (left < right && nums[right] === nums[right - 1]) right--;

//         // Move both pointers inward to look for other potential pairs for this 'a'
//         left++;
//         right--;
//       } else if (currentSum > 0) {
//         // Sum is too big, move the right pointer left to get a smaller number
//         right--;
//       } else {
//         // Sum is too small, move the left pointer right to get a bigger number
//         left++;
//       }
//     }
//   }

//   return results;
// }

// const nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums));
// Output: [ [-1, -1, 2], [-1, 0, 1] ]

//! 76. Minimum Window Substring

// function minWindow(s, t) {
//   // Edge case: if the target is longer than the string, it's impossible.
//   if (t.length > s.length) return "";

//   // 1. Build our Hash Map checklist from 't'
//   const map = {};
//   for (let char of t) {
//     map[char] = (map[char] || 0) + 1;
//   }

//   let left = 0;
//   let right = 0;

//   // 'count' tracks how many UNIQUE characters from 't' we still need to fulfill
//   let count = Object.keys(map).length;

//   // Variables to remember the best window we've found
//   let minLength = Infinity;
//   let minStart = 0;

//   // 2. Expand the window using the right pointer
//   while (right < s.length) {
//     const rightChar = s[right];

//     // If the character is in our checklist, cross it off
//     if (map[rightChar] !== undefined) {
//       map[rightChar]--;
//       // If we got exactly the amount we needed for this letter, decrease count
//       if (map[rightChar] === 0) count--;
//     }

//     // We processed the character, move right pointer forward
//     right++;

//     // 3. Contract the window using the left pointer
//     // (This while loop ONLY runs when our window has all the characters we need!)
//     while (count === 0) {
//       // Is this valid window the smallest one we've seen? Record it!
//       if (right - left < minLength) {
//         minLength = right - left;
//         minStart = left;
//       }

//       // Now, try to shrink the window from the left
//       const leftChar = s[left];

//       // If the character we are leaving behind is on our checklist...
//       if (map[leftChar] !== undefined) {
//         // We put it back on the checklist
//         map[leftChar]++;
//         // If putting it back means we are now MISSING it, our window breaks.
//         // We increase count, which will stop this while loop.
//         if (map[leftChar] > 0) count++;
//       }

//       // Move left pointer forward to officially shrink
//       left++;
//     }
//   }

//   // If minLength never changed, we never found a match. Otherwise, slice the string.
//   return minLength === Infinity
//     ? ""
//     : s.substring(minStart, minStart + minLength);
// }

// console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"

//! 643. Maximum Average Subarray I

// function findMaxAverage(nums, k) {
//   let currentSum = 0;
//   let maxSum = 0;

//   // 1. Build the very first window of size 'k'
//   for (let i = 0; i < k; i++) {
//     currentSum += nums[i];
//   }

//   // Set maxSum to our first window's sum to start
//   maxSum = currentSum;

//   // 2. Slide the window across the rest of the array
//   for (let i = k; i < nums.length; i++) {
//     // Subtract the element that falls off the left (i - k)
//     // Add the new element that enters on the right (i)
//     currentSum = currentSum - nums[i - k] + nums[i];

//     // Keep whichever sum is larger
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }

//   // 3. We found the max sum, now just divide by k to get the average!
//   return maxSum / k;
// }

const nums = [1, 12, -5, -6, 50, 3];
console.log(findMaxAverage(nums, 4));
// Output: 12.75
// (The max sum is 51 from [12, -5, -6, 50]. 51 / 4 = 12.75)

//! 49. Group Anagrams

function groupAnagrams(strs) {
  // 1. Create our Hash Map
  const map = {};

  // 2. Loop through the original strings
  for (let word of strs) {
    // 3. Create the Universal Signature (Sort the string)
    // JS strings don't have a .sort(), so we convert to array, sort, and convert back
    const signature = word.split("").sort().join("");

    // 4. If the signature isn't in our map yet, initialize it with an empty array
    if (!map[signature]) {
      map[signature] = [];
    }

    // 5. Push the original word into the correct bucket
    map[signature].push(word);
  }

  // 6. Object.values() takes all the values from an object and puts them in an array
  return Object.values(map);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
