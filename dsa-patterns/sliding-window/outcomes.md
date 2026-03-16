# Pattern 2: Sliding Window - Learnings & Outcomes

## 📌 What is the Sliding Window pattern?
The **Sliding Window** technique is a specialized form of Two Pointers. It's used to solve problems looking for subarrays, substrings, or contiguous sequences. The basic idea is to define a "window" of array elements bounded by a `left` and `right` pointer. You slide the `right` pointer to process new elements, and slide the `left` pointer to shrink the window when the condition dictates it.

## 🎯 When to Recognize It
1. The problem asks for the **maximum/minimum/longest/shortest** or **whether there exists** a specific contiguous subarray or substring.
2. Contiguous constraints: Subarrays must be continuous. If it's a subsequence problem (non-contiguous), Sliding Window usually won't work.
3. Common phrases: "Longest substring with K distinct characters", "Minimum size subarray sum", "Max Consecutive Ones", "Anagrams in a String".

## 💡 Key Tricks
There are two main variants:

### 1. Fixed Sliding Window
The size of the window `k` does not change.
* Setup the initial window sum/count from index `0` to `k-1`.
* Iterate starting from `k` up to `N`.
* **The trick:** Add `nums[i]` and immediately subtract `nums[i - k]`. This is $O(1)$ constant time transition. (`Permutation in String`, `Max Vowels`).

### 2. Variable Sliding Window
The size changes dynamically based on constraints.
* Let the `right` pointer continuously increment outwards until the window condition becomes **invalid**.
* Once invalid, invoke a `while` loop to continuously increment the `left` pointer (shrinking the window) until it returns to a valid state.
* Track the Math.max() or Math.min() length whenever the window is in a strictly valid state. (`Longest Substring Without Repeating Characters`, `Minimum Window Substring`).

## ⚠️ Edge Cases
* When looking for a "Minimum" length, ensure initialization is `Infinity`. Check for `min === Infinity` at the end and return `0` if it is.
* Be careful *when* you update your `max`/`min` length variables. If the window condition requires you to calculate lengths precisely when valid, do it immediately after shrinking if needed.

## 🚀 Outcomes
* Understanding how to convert $O(n^2)$ subarray generating loops and $O(n*k)$ window calculations into strict $O(n)$ space-efficient single passes limit.
* Becoming extremely familiar with Map/Set data structures for keeping track of frequency constraints inside a window.
