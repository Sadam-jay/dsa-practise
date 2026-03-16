# Pattern 8: Greedy - Learnings & Outcomes

## 📌 What is the Greedy pattern?
A **Greedy** algorithm builds a solution piece by piece, always choosing the next piece that offers the most immediate ("local") optimal benefit. It assumes that by continuously making the best local choice, it will naturally find the overall ("global") optimal solution. It contrasts heavily with Dynamic Programming, which exhaustively evaluates *all* choices.

## 🎯 When to Recognize It
1. Seeking an optimization (min, max, fewest, largest) where decisions don't seemingly affect the availability of strictly independent later choices.
2. The problem involves **Intervals** containing discrete Start and End times. Sorting these and extracting overlapping timelines is the hallmark of Greedy geometries.
3. The problem involves arrays tracking "fuels", "gas", "jumps", or "budgets" spanning linearly.
4. "Does it feel like there's an obvious best move right now?" Test it against Edge Cases!

## 💡 Key Tricks
* **Sorting by Ending Value:** For most interval overlapping/removal problems, `sort((a,b) => a[END] - b[END])` is essential! Choosing the interval that **finishes first** inherently leaves maximum possible room for all remaining elements.
* **Math Bottlenecks:** Don't simulate what you can calculate. If tasked to find minimum execution layouts (e.g. `Task Scheduler`), you can literally mathematically deduce the absolute minimum sequence length based strictly on the most frequent numbers without writing any simulation logic.
* **Working Backwards:** In connectivity jumping arrays (`Jump Game`), checking if you can reach the end is simpler by starting at the END and checking if traversing backwards eventually reaches index `0`.
* **Capturing Deltas:** In stock/finance arrays, the absolute greatest profit across a sequence is mathematically identical to just summing every individual daily positive price shift.

## ⚠️ Edge Cases
* The "Counterexample" test. Can you think of a scenario where taking the "obvious best" immediately completely ruins the later configuration? (e.g. standard `Coin Change` fails greedy if coin denominations aren't standard 1, 5, 10, 25. Choosing '20' first ruins making '21' if the coins are [1, 7, 20]). Usually, standard Leetcode intervals won't bait you, but always mentally check.

## 🚀 Outcomes
* Writing wildly efficient $O(N \log N)$ or strictly $O(N)$ solutions for complex tracking scenarios that appear to require heavy $O(N^2)$ dynamic planning.
* Mastering overlapping Interval manipulations and sorting logic.
