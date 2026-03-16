# Pattern 9: Monotonic Stack - Learnings & Outcomes

## 📌 What is a Monotonic Stack?
A **Monotonic Stack** is fundamentally just a normal array structured as a Stack (LIFO: push/pop). Unlike a normal stack where you just blindly dump data into it, a Monotonic Stack heavily restricts what can enter. 
To maintain a strict mathematical sequence (such as *Strictly Increasing* or *Strictly Decreasing*), if a new element violates the rule, you **forcefully `pop()`** elements out of the stack until the rule is completely satisfied again before inserting the new element.

## 🎯 When to Recognize It
1. The problem literally asks for the **"Next Greater Element"** or **"Previous Smaller Element"**.
2. Problems involving physical boundaries collapsing:
   * **Temperatures dropping/rising.**
   * **Water trapping** looking for bounds (`Trapping Rain Water`).
   * **Histograms/skylines** getting artificially chopped by short towers (`Largest Rectangle in Histogram`).
   * **Car/Ship Bottlenecks** where faster items get stuck behind slower leading items (`Car Fleet`).
3. You need to manipulate string lexicographical constraints aggressively from left to right while being bounded by future options (`Remove K Digits`, `Remove Duplicate Letters`).

## 💡 Key Tricks
* **Use Indices:** 95% of stack problems require storing the **Array INDEX** on the stack, *not* the array value! You can always look up `value = nums[index]`, but if you only store the value, you physically lose the ability to calculate width distances (`i - popped_index`).
* **The Flushing Element:** Often, elements will successfully stay inside the stack sequentially all the way until the end of the `for` loop, meaning they never naturally triggered their boundary. An elite trick is to loop to `<= N` and simulate a final iteration `currentNum = -Infinity` or `0`. This acts as an artificial wall strictly forcing everything remaining inside the stack to neatly process.
* **Decreasing vs Increasing:** 
  * Use **Decreasing Stack** (meaning top element is smallest) to find the **Next Greater** element! You pop when something is unexpectedly large.
  * Use **Increasing Stack** (meaning top element is largest) to find the **Next Smaller** element! You pop when something is unexpectedly tiny.

## ⚠️ Edge Cases
* Duplicates. Depending on constraints, you must choose whether to use `<` or `<=` in your `while(stack.length > 0 && current < top)`. `Largest Rectangle in Histogram` doesn't strictly pop duplicate height bars.
* Unused properties surviving the loop. As stated above, always plan for how to handle indices that never found their bounds after stepping completely through the array. 

## 🚀 Outcomes
* Turning nested loop $O(N^2)$ bounding calculations perfectly linear $O(N)$.
* Mastery of isolating independent constraint "Sub-States" using stack tracking mechanisms rather than rigid variables.
