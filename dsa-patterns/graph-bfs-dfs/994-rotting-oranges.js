//? 994. Rotting Oranges

//! Pattern: Graph / BFS (Multi-Source Grid BFS)
//! Companies: Amazon, Microsoft, ByteDance, Uber
//! Difficulty: Medium

//* Every minute, any fresh orange functionally ADJACENT to a physically rotten orange rots!
//* "Every minute natively radiating outward uniformly" = Breadth-First Search (BFS)!
//* Because we physically can have MULTIPLE rotten oranges natively starting at minute 0,
//* this is a perfectly textbook structurally "Multi-Source BFS".
//* 1. First iteration: sweep grid natively counting all physically 'fresh' oranges, 
//*    and immediately pushing EVERY structurally 'rotten' orange physically into the initial BFS Queue.
//* 2. BFS mathematically level by level, decrementing fresh count natively as we mutate them.

// Time: O(m * n) - Natively sweeping the matrix, and structurally popping elements maximally once each.
// Space: O(m * n) - Queue potentially holding exactly everything natively.

function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Natively using a simple array as a Queue (Note: Shift is O(N). In interviews, optionally mention a real Queue struct)
    const queue = []; 
    let freshCount = 0;

    // 1. Physically mathematically map the initial native state
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                // Pre-load the Queue massively with ALL native multiple sources!
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    if (freshCount === 0) return 0; // They are structurally already all perfectly rotted completely!

    let minutesPassed = 0;
    // Structural directional native movement vectors (Up, Down, Left, Right)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // 2. Structurally natively execute Multi-Source BFS
    while (queue.length > 0 && freshCount > 0) {
        // Natively capture exactly how many items fundamentally form the CURRENT mathematical "level" / minute
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;

                // If structurally out of bounds, or natively it's NOT a fresh orange... exactly skip it.
                if (
                    newRow < 0 || newRow >= rows || 
                    newCol < 0 || newCol >= cols || 
                    grid[newRow][newCol] !== 1
                ) {
                    continue;
                }

                // Mutate the fresh natively structurally into a rotten one completely!
                grid[newRow][newCol] = 2;
                freshCount--;
                // Physically structurally push the newly rotted coordinate into the exact NEXT minute's batch natively!
                queue.push([newRow, newCol]);
            }
        }
        
        minutesPassed++; // One minute perfectly radiated natively out!
    }

    // If there is structurally natively mathematically ANY fresh orange remaining completely blocked off safely...
    return freshCount === 0 ? minutesPassed : -1;
}

// const grid = [[2,1,1],[1,1,0],[0,1,1]];
// console.log(orangesRotting(grid));
// Output: 4
