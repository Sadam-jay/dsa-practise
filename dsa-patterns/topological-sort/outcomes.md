# Pattern 13: Topological Sort - Learnings & Outcomes

## 📌 What is Topological Sort?
**Topological Sort** is an algorithm exclusively used on **Directed Acyclic Graphs (DAGs)** to find a linear ordering of nodes such that for every directed edge $U \to V$, node $U$ appears *before* node $V$ in the ordering. 
It is the ultimate solution for **Dependency Resolution** (e.g., compiling code, taking university courses, resolving build system dependencies, task scheduling). 
The cornerstone algorithm is **Kahn's Algorithm (BFS)**, which relies on calculating the **"In-Degree"** (number of prerequisites) for every node.

## 🎯 When to Recognize It
1. The problem asks you to find a linear ordering of tasks that respect an array of prerequisites (e.g., `Course Schedule`).
2. The problem involves detecting a cycle in a strictly **directed** graph.
3. The problem explicitly uses phrases like "X must happen before Y," "build order," or "alien dictionary ordering."
4. You need to find the "Longest Path" or propagate states through a DAG dynamically (e.g., `Parallel Courses`, `Largest Color Value in a Directed Graph`).

## 💡 Key Tricks
* **Kahn's Algorithm (In-Degree BFS):** 
    1. Count `inDegree` for all nodes.
    2. Build Adjacency List `u -> [v1, v2]`.
    3. Push ALL nodes with `inDegree === 0` to a Queue.
    4. While processing the Queue, decrement `inDegree` of all neighbors. If a neighbor hits `0`, push to Queue!
* **Detecting Cycles:** After Kahn's BFS queue is totally empty, simply check if the number of processed nodes exactly equals the total number of nodes. If it doesn't, a cycle *must* exist in the graph (since nodes in a cycle never drop to 0 In-Degree!).
* **Multi-Layer Dependency:** Using Dynamic Programming *combined* with Topological Sort is incredibly powerful. As you traverse, you can securely pass accumulated data (e.g., total elapsed time, max path lengths, accumulated color frequencies) to the dependent neighbor!

## ⚠️ Edge Cases
* **Disconnected Graphs:** Ensure your initial loop properly pushes *every* node with an `inDegree === 0` to the starting Queue, regardless of whether it's truly a "head" node or just completely disconnected from the rest of the graph.
* **Lexicographical Constraints:** If a valid Topological Sort requires breaking ties lexicographically (e.g., Alien Dictionary or specific task orders), Kahn's Algorithm seamlessly supports swapping the `Queue` for a `Min-Heap / Priority Queue`.

## 🚀 Outcomes
* Absolute mastery over Dependency Resolution architectures.
* Securely identifying and breaking down Directed Acyclic Graph problems effortlessly using Kahn's robust template.
* Intelligently combining BFS traversal logic with Dynamic Programming state propagation natively.
