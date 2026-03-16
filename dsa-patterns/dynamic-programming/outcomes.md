# Pattern 7: Dynamic Programming - Learnings & Outcomes

## 📌 What is Dynamic Programming?
Dynamic Programming (DP) is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends strictly on the optimal solutions to its subproblems. It trades **Space/Memory** (caching results to avoid redundant calculations) for highly optimized **Time** complexity.

## 🎯 When to Recognize It
1. The problem asks for the **maximum / minimum / longest / shortest**. 
2. The problem asks "**How many ways...**" it is possible to do something.
3. The future choices inherently depend on prior states and overlapping subproblems exists. For example, if recalculating the "Cost to cross step 5" requires recalculating "Cost of step 3" and "Cost of step 4" repeatedly. 

## 💡 Key Tricks
* **State Identification:** This is the soul of DP. What varying properties determine an exact snapshot of the simulation? E.g., `(index, remaining_capacity)` for Knapsacks.
* **The Transition Function:** How do you get to state `[i]` using information from state `[i-1]`? 
  * "Take it or Leave it" arrays: `dp[i] = max(take + dp[i-2], skip + dp[i-1])` 
  * "Accumulation": `dp[r][c] = waysToTop + waysToLeft`
* **Initialization / Base Cases:** Make sure `dp[0]` or `dp[0][0]` is logically seeded correctly!
* **Memory Optimization:** If computing `dp[i]` ONLY EVER mathematically refers to `dp[i-1]` and `dp[i-2]`, you DO NOT need a full $O(N)$ array! You only need 2 variables, dropping space down to $O(1)$! This usually drops 2D Matrices caching down to single 1D Row arrays. 
* **Top-Down (Memoization) vs Bottom-Up (Tabulation):** Top-down utilizes recursive functions with a Hash Map or Array cache, exploring from $N \rightarrow 0$. Bottom-Up translates Top-Down logic iteratively through `for` loops, building an array strictly building from $0 \rightarrow N$. 

## ⚠️ Edge Cases
* Substring problems inherently differ from Subsequence problems. Substrings MUST be strictly contiguous; sequences do not!
* Matrix Initialization in JS. NEVER USE `new Array(m).fill(new Array(n))`. This creates `m` references to the EXACT SAME SINGLE array. Updating `dp[0][0]` will also magically update `dp[1][0]`. **Always use**: `Array.from({ length: m }, () => new Array(n).fill(value))`.

## 🚀 Outcomes
* Translating conceptual recursion trees into strictly structured state tracking grids.
* Understanding that advanced Array scanning algorithms (Kadane's) are fundamentally just hyper-optimized single-variable DP constraints.
