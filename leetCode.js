//! 242. Valid Anagram

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   const counts = new Array(26).fill(0);

//   // Increment for s, Decrement for t
//   for (let i = 0; i < s.length; i++) {
//     counts[s.charCodeAt(i) - 97]++;
//     counts[t.charCodeAt(i) - 97]--;
//   }

//   // If any count is not 0, it's not an anagram
//   for (let count of counts) {
//     if (count !== 0) return false;
//   }

//   return true;
// }

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

//! 344. Reverse String

// function reverseString(s) {
//   const arr = s.split('');
//   let left = 0, right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr.join('');
// }

//! 20. Valid Parentheses

// function isBalanced(s) {
//   const stack = [];
//   const pairs = { ')':'(', ']':'[', '}':'{' };
//   for (const ch of s) {
//     if ('([{'.includes(ch)) stack.push(ch);
//     else if (')]}'. includes(ch)) {
//       if (stack.pop() !== pairs[ch]) return false;
//     }
//   }
//   return stack.length === 0;
// }

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

//! 1046. Last Stone Weight

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
