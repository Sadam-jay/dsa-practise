# Pattern 10: Heap / Priority Queue - Learnings & Outcomes

## 📌 What is a Heap?
A **Heap** (Priority Queue) is a specialized tree-based data structure that fundamentally satisfies the heap property:
* In a **Min-Heap**, the parent node is intrinsically lesser than its children. Therefore, the absolute mathematically smallest element universally rests perfectly at the top (`[0]` index) for immediate $O(1)$ extraction.
* In a **Max-Heap**, the parent node is intrinsically greater than its children, keeping the absolute maximum value at the top.

*JavaScript lacks a built-in Heap, so learning how to write a 15-line array-based MinHeap class using bit-shift logic `Math.floor((i-1)/2)` is invaluable for FAANG interviews to prove systems knowledge!*

## 🎯 When to Recognize It
1. The problem literally explicitly asks you to structurally return/evaluate the **"Top K"**, **"Kth Largest"**, **"K Closest"**, or **"K Most Frequent"** continuous elements.
2. The problem intrinsically requires continually structurally identifying the explicitly **"highest/lowest"** value spanning across purely DYNAMIC overlapping data. (e.g. `Merge K Sorted Lists`, `Meeting Rooms II`).
3. You need mathematically $O(\log N)$ inserts and $O(1)$ peek extractions to not violently fail Time Limit constraints.

## 💡 Key Tricks
* **Bounding with K Size Restrictions:** Instead of dumping an entire array of size 1,000,000 into a Heap taking $O(N \log N)$ mapping it all... literally just enforce the heap bounds! `if (minHeap.size() > K) minHeap.pop();` ensures the physics of the data structure NEVER exceed physical bounds of 10. Memory collapses structurally to $O(K)$, speed to $O(N \log K)$.
* **Inverting the Goal:** When natively asked for the **Top K Largest** mathematical numbers... strangely use a **MIN-Heap**! Why? Because by keeping the heap physically capped at exactly size K, whatever inherently bubbles to the TOP of the array gets destroyed first! You want to indiscriminately structurally DESTROY the smallest (worst) numbers globally, so the remaining K bounds literally guarantee the largest! 
* **Custom Comparators:** A Node might consist of `{val, timestamp}`. Heavily mutating the internal `.heapifyUp()` loops to systematically compare specific internal object constraints is the absolute key to advanced system algorithms.

## ⚠️ Edge Cases
* Confusing Heaps conceptually with Binary Search Trees (BST). A Heap makes absolutely NO physical guarantee horizontally regarding sibling sorting. `LeftChild` does NOT strictly have to naturally be smaller than `RightChild` sequentially. It ONLY structurally guarantees Parent-Child bounding relationships!

## 🚀 Outcomes
* Understanding how to build $N$ scale algorithms mathematically bounded to $K$ complexity.
* Embellishing complex timeline intersection and chronological simulations (Streaming architectures, Scheduling systems).
