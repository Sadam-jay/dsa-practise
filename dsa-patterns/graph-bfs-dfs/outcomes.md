# Pattern 11: Graph BFS / DFS - Learnings & Outcomes

## 📌 What is Graph BFS / DFS?
A **Graph** is a collection of Nodes (Vertices) and connections between them (Edges). 
* **Depth-First Search (DFS)** plunges as deeply as possible along a branch before retreating and trying another path. It uses a **Stack** (implicitly via recursion or explicitly). It excels at finding connected components, detecting cycles, and sweeping bounded regions.
* **Breadth-First Search (BFS)** explores evenly outward in all directions, layer by layer, like a ripple in water. It uses a **Queue**. It is fundamentally the absolute best standard tool for finding the **Shortest Path** on an unweighted graph.

## 🎯 When to Recognize It
1. The problem explicitly gives you an `Adjacency List` or `Adjacency Matrix` representing city/friend networks.
2. The problem gives you a `2D Grid Matrix` where cells are land ('1') or water ('0'), and you must analyze the structures of the landmasses (Islands, Enclaves, Provinces).
3. The problem asks for the **"Shortest Path"** to reach a destination with equal movement costs (`Word Ladder`, `Shortest Path in Binary Matrix` = BFS!).
4. The problem asks if a puzzle or graph can be separated into two mutually exclusive groups (`Is Graph Bipartite?`).

## 💡 Key Tricks
* **The "Visited" Tracker:** If you forget to track `visited` nodes via a `Set()`, Hash Map, or in-place array mutation (e.g. `grid[r][c] = '0'`), recursive graphs will instantly infinitely loop and crash the stack. 
* **Reverse Gravity (DFS):** If a problem asks "What inner nodes can reach the outer borders?", flip the logic! Start your DFS strictly on the **borders** and see what inner nodes you can reach! (`Pacific Atlantic Water Flow`, `Surrounded Regions`).
* **Multi-Source BFS:** If there are multiple starting points (e.g. 5 Rotten Oranges rotting simultaneously), push ALL starting nodes into your Queue *before* starting the `while(queue > 0)` loop! Then process level-by-level cleanly.
* **In-place Grid Mutation:** If allowed, instead of instantiating an $O(M \times N)$ spatial boolean `visited` matrix, literally just alter the grid string itself! Change land '1' into water '0' or 'X', naturally mathematically rendering it "visited".

## ⚠️ Edge Cases
* **Recursion Stack Overflow:** A deeply spindly graph of 10,000 nodes will violently `RangeError: Maximum call stack size exceeded` in JS using Recursive DFS. If bounds are massive, use an explicit iterative `while (stack > 0)` array simulation.
* **O(N) Shift in JS Queues:** `queue.shift()` in JS is $O(N)$ because arrays conceptually reindex. In extreme interview settings, you may need to build a lightweight genuine linked-list `Queue` class or use pointer indices rather than strictly shifting an array if Time Limit Exceeded triggers.

## 🚀 Outcomes
* Writing unkillable Grid Traversal nested logic loops.
* Deeply visually understanding Graph Adjacency formulations.
* Unlocking complete mastery over pathfinding shortest algorithms uniquely utilizing explicit Queue structures.
