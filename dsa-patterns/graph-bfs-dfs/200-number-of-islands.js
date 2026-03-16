//? 200. Number of Islands

//! Pattern: Graph / DFS (Grid)
//! Companies: Amazon, Meta, Microsoft, Google, Bloomberg
//! Difficulty: Medium

//* The absolute foundational Grid Graph traversal problem.
//* We treat the 2D matrix as a graph. A '1' is a land node. 4-directional adjacencies are edges.
//* We iterate completely through the grid. When we find a completely unvisited '1',
//* it proves the existence of a brand new Island! We increment our count.
//* IMMEDIATELY run a DFS (or BFS) natively spreading out from that '1' to its 4 neighbors,
//* mutating all connected '1's into '0's (or marking them visited) so we don't naturally double count them later.

// Time: O(m * n) - We natively visit each physical grid cell at most a constant number of times.
// Space: O(m * n) - The recursive call stack could technically mirror the entire grid physics.

function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    let totalIslands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    // Helper recursive DFS function to perfectly sweep an entire connected block
    const sinkIslandDFS = (r, c) => {
        // Physical boundaries checks, and check if it's already water '0'
        if (
            r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            grid[r][c] === '0'
        ) {
            return;
        }

        // 'Sink' the land natively in-place so we structurally never trigger it again
        grid[r][c] = '0';

        // Recursively infect/traverse all 4 cardinal directions
        sinkIslandDFS(r - 1, c); // Up
        sinkIslandDFS(r + 1, c); // Down
        sinkIslandDFS(r, c - 1); // Left
        sinkIslandDFS(r, c + 1); // Right
    };

    // Natively iterate the entire matrix
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            
            // If we physically trip over unvisited land...
            if (grid[r][c] === '1') {
                totalIslands++; // ...it proves a brand new island natively exists!
                
                // Natively sink this entire interconnected landmass so the external `for` loop
                // doesn't structurally rediscover its connected edges!
                sinkIslandDFS(r, c);
            }
        }
    }

    return totalIslands;
}
