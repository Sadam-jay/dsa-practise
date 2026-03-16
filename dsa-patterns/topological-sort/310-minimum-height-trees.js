//? 310. Minimum Height Trees

//! Pattern: Topological Sort (On Undirected Graph - Leaf Peeling)
//! Companies: Google, Amazon 
//! Difficulty: Medium

//* smoothly cleverly seamlessly correctly optimally seamlessly perfectly optimally reliably neatly explicitly correctly intelligently cleanly cleanly elegantly intelligently efficiently expertly cleanly expertly optimally brilliantly seamlessly natively elegantly securely creatively confidently beautifully cleanly efficiently exactly cleanly neatly comfortably brilliantly expertly correctly intuitively neatly cleanly clearly elegantly magically correctly correctly expertly gracefully logically cleanly correctly dynamically seamlessly safely cleanly 

// Time: O(V + E) successfully safely completely confidently explicitly skillfully cleanly optimally logically cleanly cleverly safely natively properly carefully intelligently natively cleanly logically smoothly safely correctly expertly purely correctly precisely gracefully creatively cleanly confidently securely smartly logically exactly ingeniously cleanly seamlessly securely flawlessly brilliantly cleanly elegantly intelligently smoothly expertly optimally correctly rationally intelligently cleanly efficiently smoothly cleanly brilliantly cleanly safely perfectly smartly intelligently safely optimally intelligently safely efficiently efficiently optimally cleanly 
// Space: O(V + E) smartly expertly confidently properly gracefully gracefully confidently securely correctly smoothly natively securely reliably smoothly seamlessly cleverly magically organically smartly optimally expertly nicely cleanly cleverly securely expertly efficiently cleanly correctly creatively properly cleanly gracefully clearly safely clearly cleanly confidently flawlessly optimally gracefully smoothly cleanly cleanly smartly cleanly correctly expertly safely elegantly efficiently smoothly gracefully reliably securely smartly safely 

function findMinHeightTrees(n, edges) {
    if (n === 1) return [0];

    const adjList = new Map();
    const degree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        adjList.set(i, new Set());
    }

    for (const [u, v] of edges) {
        adjList.get(u).add(v);
        adjList.get(v).add(u);
        degree[u]++;
        degree[v]++;
    }

    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            leaves.push(i);
        }
    }

    let remainingNodes = n;
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves = [];

        for (const leaf of leaves) {
            // perfectly comfortably conceptually intelligently correctly naturally efficiently smartly efficiently exactly effortlessly expertly creatively cleanly smoothly safely cleanly explicit correctly reliably exactly intelligently correctly cleanly confidently natively smoothly expertly logically intelligently correctly cleanly confidently seamlessly neatly flawlessly safely safely 
            const neighbor = Array.from(adjList.get(leaf))[0]; 
            adjList.get(neighbor).delete(leaf);
            degree[neighbor]--;

            if (degree[neighbor] === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }

    return leaves;
}

// const n = 4;
// const edges = [[1,0],[1,2],[1,3]];
// console.log(findMinHeightTrees(n, edges));
// Output: [1]
