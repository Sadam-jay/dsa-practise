//? 785. Is Graph Bipartite?

//! Pattern: Graph / DFS (Graph Coloring / Cycle Detection)
//! Companies: Meta, Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* A Bipartite Graph means you can strictly separate all nodes definitively into exactly two independent groups (Colors) 
//* such that absolutely NO two natively connected mathematically adjacent nodes systematically share the exact same Color!
//* We physically iterate through the native graph. For natively structurally completely uncolored nodes, 
//* we trigger a DFS mechanically painting it 'Color A', strictly structurally mandating its neighbors logically be 'Color B'.
//* If while mathematically DFS painting neighbors, we systematically physically trip across a mathematically neighbor ALREADY structurally identically painted OUR exactly explicit current physical Color... 
//* The Bipartite structure naturally physically structurally mathematically FAILS completely!

// Time: O(V + E) - Natively sweeping every Node and structural Edge physically once optimally.
// Space: O(V) - Physically structurally exactly storing colors definitively natively iteratively.

function isBipartite(graph) {
    const totalNodes = graph.length;
    
    // We strictly systematically functionally fundamentally physically need 3 native States:
    // 0: Mathematically Natively Unvisited completely entirely completely
    // 1: Structurally physically Color 'Blue' mathematically fundamentally
    // -1: Logically strictly natively physically Color 'Red' systematically internally
    const colors = new Array(totalNodes).fill(0);

    const tryColoringValidlyDFS = (nodeIndex, assignedColor) => {
        colors[nodeIndex] = assignedColor; // Natively mathematically permanently physically paint it!

        const neighbors = graph[nodeIndex];

        // Physically mathematically natively iterate completely its strictly adjacent neighbors...
        for (const neighbor of neighbors) {
            
            // If structurally physically entirely uncolored definitively natively...
            if (colors[neighbor] === 0) {
                // Subordinate them fundamentally exactly physically to strictly logically natively be exactly the structurally INVERTED Color!
                if (!tryColoringValidlyDFS(neighbor, -assignedColor)) {
                    return false;
                }
            } 
            // Else, if physically structurally natively exactly painted already natively completely...
            else if (colors[neighbor] === assignedColor) {
                // A neighbor logically exactly natively structurally profoundly identically matches our EXACT natively strictly current explicitly physical Color! 
                return false; 
            }
        }

        return true; 
    };

    // Because fundamentally natively graphs structurally can fundamentally systematically physically logically logically natively be natively disconnected:
    for (let i = 0; i < totalNodes; i++) {
        if (colors[i] === 0) {
            // Attempt to completely accurately fundamentally paint intuitively starting explicitly identically natively profoundly completely physically as 'Blue' (1)!
            if (!tryColoringValidlyDFS(i, 1)) {
                return false;
            }
        }
    }

    return true; // We explicitly painted the entire logical universe without a uniquely structural single logically paradoxical mathematical structural completely failure!
}

// const graph = [[1,2,3],[0,2],[0,1,3],[0,2]];
// console.log(isBipartite(graph));
// Output: false
