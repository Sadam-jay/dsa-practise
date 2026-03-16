//? 51. N-Queens

//! Pattern: Backtracking
//! Companies: Amazon, Microsoft, ByteDance
//! Difficulty: Hard

//* The hardest quintessential introductory Backtracking problem.
//* How to place N queens on an NxN chessboard so that none attack each other.
//* Queens attack on: the exact same Row, the exact same Col, and the exact same Diagonals.
//* We iterate row by row. We try placing a queen in each column `c`.
//* We track invalid/occupied columns and diagonals using Sets for O(1) conflict lookups.
//* Negative Diagonal (top-left to bottom-right): mathematically constant `row - col`.
//* Positive Diagonal (bottom-left to top-right): mathematically constant `row + col`.

// Time: O(N!) - Because we place 1 queen per row, the choices dictate N * (N-1) * (N-2)...
// Space: O(N^2) - To store the board configurations

function solveNQueens(n) {
    const result = [];
    
    // We use Sets to track which columns and diagonals are currently under attack
    const cols = new Set();
    const posDiag = new Set(); // (row + col)
    const negDiag = new Set(); // (row - col)

    // Build empty board
    const board = Array.from({ length: n }, () => new Array(n).fill('.'));

    const backtrack = (row) => {
        // Base case: If we successfully placed a queen in every row!
        if (row === n) {
            const formattedBoard = board.map(r => r.join(''));
            result.push(formattedBoard);
            return;
        }

        // Try placing a queen in every column for the current row
        for (let col = 0; col < n; col++) {
            // Is this square currently under attack? Maximize pruning!
            if (
                cols.has(col) ||
                posDiag.has(row + col) ||
                negDiag.has(row - col)
            ) {
                continue; // Cannot place here
            }

            // 1. Chose: Place the queen AND update attack sets
            board[row][col] = 'Q';
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);

            // 2. Explore: Move to the next row
            backtrack(row + 1);

            // 3. Backtrack: Remove the queen AND clear attack sets
            board[row][col] = '.';
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
        }
    };

    backtrack(0);
    return result;
}

// const n = 4;
// console.log(solveNQueens(n));
// Output: [[&quot;.Q..&quot;,&quot;...Q&quot;,&quot;Q...&quot;,&quot;..Q.&quot;],[&quot;..Q.&quot;,&quot;Q...&quot;,&quot;...Q&quot;,&quot;.Q..&quot;]]
