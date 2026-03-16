//? 695. Max Area of Island

//! Pattern: Graph / DFS (Grid Traversal + Accumulation)
//! Companies: Meta, Amazon, Microsoft
//! Difficulty: Medium

//* Very similar to "Number of Islands", but instead of merely counting the *amount* of islands,
//* we want to natively find the island with the mathematically largest area (most '1's).
//* The DFS helper function changes from a purely recursive `void` function into an accumulator.
//* Whenever it natively steps on a '1', it physically returns `1 + dfs(up) + dfs(left) + ...`.
//* This accumulates the raw size of the structural landmass bubble!

// Time: O(m * n)
// Space: O(m * n)

function maxAreaOfIsland(grid) {
    if (!grid || grid.length === 0) return 0;
    
    let globalMaxArea = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    // The DFS now mathematically accumulates the physical size!
    const measureAndSinkIslandDFS = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
            return 0; // Water natively contributes exactly 0 to area!
        }

        // Sink it so we don't structurally double count it in an infinite cycle
        grid[r][c] = 0;

        // The current cell counts as '1', natively plus anything attached to it
        let localArea = 1;
        localArea += measureAndSinkIslandDFS(r - 1, c);
        localArea += measureAndSinkIslandDFS(r + 1, c);
        localArea += measureAndSinkIslandDFS(r, c - 1);
        localArea += measureAndSinkIslandDFS(r, c + 1);

        return localArea;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                // Discover the physical bounds of this new landmass mathematically
                const currentIslandArea = measureAndSinkIslandDFS(r, c);
                
                // Track the absolute maximum natively
                globalMaxArea = Math.max(globalMaxArea, currentIslandArea);
            }
        }
    }

    return globalMaxArea;
}

// const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
// console.log(maxAreaOfIsland(grid));
// Output: 6
