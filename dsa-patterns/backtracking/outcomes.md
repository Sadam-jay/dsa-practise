# Pattern 6: Backtracking - Learnings & Outcomes

## 📌 What is the Backtracking pattern?
Backtracking is an algorithmic paradigm that incrementally builds candidates to solutions and abandons a candidate ("backtracks") the moment it determines the candidate cannot possibly be completed to a valid solution. It is essentially an optimized Depth-First Search (DFS) on an imaginary tree of choices.

## 🎯 When to Recognize It
1. The problem asks for **ALL** possible combinations, permutations, subsets, or paths. Note that it rarely asks for merely "how many" (which can usually be solved efficiently with Dynamic Programming), but specifically asks to **return the full lists/strings** of the configurations.
2. The constraints are shockingly small ($N \leq 20$). This is a dead giveaway because combinatorial explosion makes larger $N$ physically impossible to compute in time.
3. Problem requires placing items on a grid with extreme rules (N-Queens, Sudoku).

## 💡 Key Tricks
* **The Blueprint:**
    ```javascript
    function backtrack(path, choices) {
        if (base_case_satisfied) {
            result.push([...path]); // ALWAYS PUSH A COPY (arrays), not memory ref
            return;
        }
        for (let choice of choices) {
            if (is_invalid(choice)) continue;
            path.push(choice);          // 1. Choose
            backtrack(path, choices);   // 2. Explore
            path.pop();                 // 3. Un-choose (Backtrack)
        }
    }
    ```
* **Avoiding Duplicate Subsets/Combinations:** If the array has duplicates, sort it first. Then inside your recursive loop, write: 
  `if (i > start_index && nums[i] === nums[i - 1]) continue;`
* **Using Strings:** In JavaScript, Strings are immutable primitive values. If you build paths via `string + "a"`, it passes a brand new copy of the string to the next function frame. You don't physically need a `path.pop()` equivalent when using strings, saving code complexity.
* **Pruning:** The entire speed efficiency of Backtracking comes from abandoning dead ends early. If `currentSum > target`, stop immediately. Don't let it run until `index === array.length`.

## ⚠️ Edge Cases
* **Pushing References:** If your result looks like `[ [], [], [] ]` but contains the correct number of elements, you pushed a reference to the array `result.push(path)` instead of copying its contents `result.push([...path])`. The backtracking `.pop()` logic mutated your correct answers down to nothing!
* Confusing `Subsets` vs `Permutations`. Subsets only loops `forward` (`i = index` to `N`). Permutations loops the `entire array` every time (`i = 0` to `N`) checking visited sets.

## 🚀 Outcomes
* Writing immaculate template-driven recursion structures. You gain the ability to visualize recursion as a tree of decisions, traversing branches and undoing state cleanly.
* This unlocks ability to solve complex Graph traversals and Grid matrix DFS algorithms.
