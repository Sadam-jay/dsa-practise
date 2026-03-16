# Pattern 5: Prefix Sum - Learnings & Outcomes

## 📌 What is the Prefix Sum pattern?
The **Prefix Sum** technique involves precomputing cumulative sums of an array. The beauty of this pattern is that finding the sum of ANY contiguous subarray `[i, j]` transforms from an $O(N)$ linear loop into an $O(1)$ constant time subtraction: `prefix[j] - prefix[i-1]`.

## 🎯 When to Recognize It
1. Whenever the problem asks you to repeatedly query the sum of subarrays.
2. The problem involves subarrays, but the numbers can be **Negative**, rendering Sliding Window useless since adding a negative number shrinks the sum instead of expanding it monotonically.
3. Checking if any contiguous sequences sum to a specific `target`, or are `divisible by k`, or equal out components (equal 0s and 1s).
4. Dealing with 2D Matrix rectangular region additions/subtractions.

## 💡 Key Tricks
* **The "+1" Padding Trick:** Always make your prefix array size `N + 1`. This allows `prefix[0] = 0`. Without it, answering a query that starts at index `0` forces you to write annoying edge case `if` statements. With it: `sum(0, right) = prefix[right+1] - prefix[0]` works perfectly.
* **Hash Map Lookup:** The most powerful combination. Instead of $O(N^2)$ checks for subarrays summing to `k`, use math.
$$ \text{prefix}(j) - \text{prefix}(i) = K $$
$$ \text{prefix}(i) = \text{prefix}(j) - K $$
As you compute `prefix(j)`, just check if `prefix(j) - K` already exists in a Hash Map containing previous prefix sums!
* **Value Mapping:** "Equal number of 0s and 1s" directly converts to a prefix sum problem if you consider `0` as `-1`.

## ⚠️ Edge Cases
* Subarrays summing to $0$. Ensure you initialize maps with `map.set(0, 1)` or `map.set(0, -1)` properly if a valid subarray starts perfectly from the 0th index!
* Modulo Arithmetic constraints with negative values. E.g. `-2 % 5 = -2` in JS, but mathematical modulo should be `3`. Use `(sum % k + k) % k`.
* Very large numbers causing buffer overflows. In extreme constraints, use Javascript `BigInt` or wrap correctly.

## 🚀 Outcomes
* Understanding how to completely negate $O(N^2)$ nested loop scanning for arrays with negative numbers.
* Familiarity with the `Inclusion-Exclusion` principle for 2D geometries.
* Treating non-sum tasks (like Product, or Penalty tracking) as conceptual Left-Cumulative and Right-Cumulative computations.
