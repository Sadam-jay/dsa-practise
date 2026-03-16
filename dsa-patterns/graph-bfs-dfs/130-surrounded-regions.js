//? 130. Surrounded Regions

//! Pattern: Graph / DFS (Reverse Boundary Logic)
//! Companies: Amazon, Google, Uber
//! Difficulty: Medium

//* We want to flip all 'O's into 'X's, EXCEPT for 'O's that are legally connected to the BORDER.
//* Instead of trying to structurally DFS every inner 'O' and nervously hoping it doesn't touch the border,
//* we invert the objective natively!
//* We physically iterate specifically along the completely safe external BORDERS of the matrix.
//* If we natively find an 'O' on the border, it is mathematically invincible! 
//* We trigger a DFS structurally purely from that border 'O', transforming it and its entire connected island natively into a temporary safe marker (e.g. 'T').
//* Finally, we sweep the entire board: any remaining 'O' was natively a surrounded coward! Flip it to 'X'.
//* Any 'T' was structurally an invincible border-connected survivor. Revert it comfortably back to 'O'.

// Time: O(M * N) - Every cell safely visited natively almost twice maximally
// Space: O(M * N) - Native maximum structurally recursive DFS stack size 

function solve(board) {
    if (!board || board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    // Helper to physically mutate natively connected border 'O's strictly into invincible 'T's
    const markSafeRegionDFS = (r, c) => {
        if (
            r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            board[r][c] !== 'O' // Naturally structurally skip 'X' and already visited 'T'
        ) {
            return;
        }

        board[r][c] = 'T'; // 'T' structurally logically completely identically means "Temporary/Safe"

        markSafeRegionDFS(r + 1, c);
        markSafeRegionDFS(r - 1, c);
        markSafeRegionDFS(r, c + 1);
        markSafeRegionDFS(r, c - 1);
    };

    // 1. Physically Trace and Protect explicitly exactly Native Mathematical Borders!
    for (let c = 0; c < cols; c++) {
        if (board[0][c] === 'O') markSafeRegionDFS(0, c); // Top structurally natively
        if (board[rows - 1][c] === 'O') markSafeRegionDFS(rows - 1, c); // Bottom natively
    }

    for (let r = 0; r < rows; r++) {
        if (board[r][0] === 'O') markSafeRegionDFS(r, 0); // Left physically
        if (board[r][cols - 1] === 'O') markSafeRegionDFS(r, cols - 1); // Right systematically
    }

    // 2. Structurally physically natively flip everything mathematically accurately!
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                // It structurally inherently natively failed to be connected mathematically to an invincible border!
                board[r][c] = 'X';
            } else if (board[r][c] === 'T') {
                // It natively structurally survived the physical exact purge!
                board[r][c] = 'O'; 
            }
        }
    }
}

// const board = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;]];
// console.log(solve(board));
// Output: [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;]]
