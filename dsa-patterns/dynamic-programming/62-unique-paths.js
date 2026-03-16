//? 62. Unique Paths

//! Pattern: Dynamic Programming (2D Grid)
//! Companies: Google, Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* A robot is at the top-left of an M x N grid. It can only move Down or Right.
//* Every cell conceptually has `x` ways to reach it, which is EXACTLY the sum of:
//* 1. Ways to reach the cell safely above it `dp[r-1][c]`.
//* 2. Ways to reach the cell safely to the left of it `dp[r][c-1]`.
//* `dp[r][c] = dp[r-1][c] + dp[r][c-1]`

// Time: O(m * n)
// Space: O(n) - Optimized from O(M*N) by only storing the Previous Row!

function uniquePaths(m, n) {
    // Instead of a 2D matrix, we only need to "look up" at the row directly above us
    // So we just maintain a 1-D array representing the "current evolving row sum"
    let row = new Array(n).fill(1);
    
    // The very first row mathematically has exactly 1 way to reach every cell (by moving right infinitely)
    // Now we compute the next M-1 rows
    for (let r = 1; r < m; r++) {
        const nextRow = new Array(n).fill(1);
        
        // Loop starts at col 1 because the very first col ALWAYS only has 1 way to reach it (by moving down infinitely)
        for (let c = 1; c < n; c++) {
            // New cell ways = ways_from_top (old row) + ways_from_left (new row being built)
            nextRow[c] = row[c] + nextRow[c - 1]; 
        }
        
        // Push state forward
        row = nextRow;
    }

    // The destination cell is the last element
    return row[n - 1];
}

// const m = 3;
// const n = 7;
// console.log(uniquePaths(m, n));
// Output: 28
