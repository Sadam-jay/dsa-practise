# Pattern 3: Fast & Slow Pointers - Learnings & Outcomes

## 📌 What is the Fast & Slow Pointers pattern?
Also known as **Floyd's Cycle Finding Algorithm** or the **Tortoise and the Hare** approach. It is an algorithm that uses two pointers which move through an iterable data structure at different speeds. Usually, the slow pointer moves 1 step at a time, and the fast pointer moves 2 steps at a time.

## 🎯 When to Recognize It
1. Dealing with **Linked Lists** where you need to find a specific relative position (e.g. the middle, or the Nth from the end).
2. The problem implies **Detecting a Cycle** or infinite loop in a Data Structure.
3. Linked lists or arrays where memory constraints don't allow a `Hash Set` to keep track of visited nodes ($O(1)$ space required).

## 💡 Key Tricks
* **Collision Point:** If a cycle exists, a pointer moving 2 steps will eventually overlap a pointer moving 1 step. 
* **Cycle Start Formula:** Once they intersect inside the cycle, reset one pointer to the `HEAD` of the structure. Step both pointers linearly by `1` step. The location they intersect again is the exact start of the cycle.
* **Middle Property:** If Fast reaches the end of the list (by moving 2x), Slow will be perfectly positioned at exactly the halfway point. Useful for Palindromes and Merge Sorting linked lists.
* **Index Mapping:** An array where values are strictly within the range of $[1, N]$ can be treated as a Linked List where index points to the value.

## ⚠️ Edge Cases
* Null Pointer exceptions. Always check `if (fast && fast.next)`. Fast can land on null, and accessing its `.next` will throw an error.
* Singly linked cycles vs 1-node recursive cycles: Sometimes an element points to itself, making a cycle of length 1. Ensure your logic handles skipping evaluating identical pointers.

## 🚀 Outcomes
By practicing these 10 problems, you will instinctively know how to partition, reverse, cycle-check, and merge linked lists linearly without relying on Array conversions or HashMaps. Data tracking using only 2 variables elevates your space complexity optimization skills.
