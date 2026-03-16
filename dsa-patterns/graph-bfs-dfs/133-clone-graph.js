//? 133. Clone Graph

//! Pattern: Graph / DFS (Hash Map Recursion)
//! Companies: Meta, Amazon, Microsoft, Uber
//! Difficulty: Medium

//* Given a reference to a natively connected undirected Graph, return a deep copy.
//* A deep copy means instantiating brand new structural node objects.
//* We must use a Hash Map `visited` mapping structurally `Old Node -> Brand New Clone Node`.
//* If a node is already completely parsed inside the Map, we literally just natively return the Map's exact clone!
//* If not, we natively instantiate a new Clone, insert it forcefully into the Map so infinite recursive cycles
//* physically don't crash the stack, and then structurally DFS its neighbors.

// Time: O(V + E) - Vertices and Edges natively visited once
// Space: O(V) - Hash Map taking precisely V memory, Recursion Stack O(V) natively

function cloneGraph(node) {
    if (node === null) return null;

    // Maps original Node physical reference -> newly cloned Node object natively
    const oldToNewMap = new Map();

    const dfsClone = (originalNode) => {
        // If we've already cleanly instantiated this node, natively return the existing clone reference
        // (This structurally inherently mathematically solves cyclic infinite loop references)
        if (oldToNewMap.has(originalNode)) {
            return oldToNewMap.get(originalNode);
        }

        // 1. Instantiate the brand new structural copy
        const clone = new _Node(originalNode.val);
        
        // 2. STASH IT IN THE MAP IMMEDIATELY BEFORE EXPLORING NEIGHBORS!!
        oldToNewMap.set(originalNode, clone);

        // 3. Natively iterate and DFS map its neighbors
        for (const neighbor of originalNode.neighbors) {
            // Push the result of structurally cloning its neighbor perfectly into its own neighbors list
            clone.neighbors.push(dfsClone(neighbor));
        }

        return clone;
    };

    // Trigger the DFS naturally on the head
    return dfsClone(node);
}

// Definition natively provided by Leetcode:
function _Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

// const adjList = [[2,4],[1,3],[2,4],[1,3]];
// console.log(cloneGraph(adjList));
// Output: [[2,4],[1,3],[2,4],[1,3]]
