# Pattern 4: Binary Search - Learnings & Outcomes

## 📌 What is the Binary Search pattern?
Binary Search is a highly optimized search algorithm that works by repeatedly halving the search space. When working with sorted arrays, finding a specific item takes $O(n)$ in linearly scanning, but taking the middle element and discarding exactly half the array guarantees an $O(\log n)$ runtime.

## 🎯 When to Recognize It
1. The input is an array, matrix, or list that is explicitly **sorted** or locally **monotonic**.
2. Problems that explicitly mandate a time complexity of **$O(\log n)$**. 
3. Problems asking you to find a specific **range of values**, **upper/lower bounds**, or the "first/last" occurrence of a number.
4. "Binary Search on Answer" problems. When asked to find a **Min/Max capability** or "rate" (e.g. eating bananas, assigning shipments) where evaluating a specific answer validates/invalidates entire sections of numbers.

## 💡 Key Tricks
* **Calculating Mid safely:** Always use `left + Math.floor((right - left) / 2)` instead of `(left + right) / 2` to prevent memory Integer Overflow when dealing with very large array index numbers in other languages (JavaScript naturally handles doubles, but it's universally good habit).
* **The While Loop Condition:** 
    * `while(left <= right):` Use this when searching for the exact index position. It guarantees exploring the final overlapping pointer state.
    * `while(left < right):` Use this when converging pointers to identify a SINGLE mathematical peak, minimum, or pivot.
* **Aggressive Search:** For finding specific bounding ranges (First and Last Position), if you hit the target, don't just return. Update your limiters `left / right` aggressively to lock down exactly where the target sequence begins or ends.
* **Matrix Flattening:** A completely sorted 2D array can be conceptually flattened to 1D via coordinates `row = index / COLS` and `col = index % COLS`.

## ⚠️ Edge Cases
* Infinite recursion/loops: If your conditionals don't update `left` or `right` utilizing `+ 1` or `- 1` appropriately inside a `<= right` loop, it can cause index halting.
* Length 0 arrays, or completely empty inputs.
* Target bounds that extend past `left=0` and `right=length`.

## 🚀 Outcomes
By practicing these 10 distinct variants, you will master bounds management, 2D extrapolation, logic for unsorted local maxima, and complex threshold range optimizations guaranteeing $O(\log n)$ performance across a multitude of interview problem scopes.
