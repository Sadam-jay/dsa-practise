//? 79. Word Search

//! Pattern: Backtracking (on a 2D Grid / DFS)
//! Companies: Amazon, Microsoft, ByteDance, Bloomberg
//! Difficulty: Medium

//* We want to find a string in a 2D matrix moving horizontally or vertically.
//* We cannot reuse a matrix cell in the same word path.
//* This is a classic grid-based DFS Backtracking problem.
//* We iterate through the matrix. If a cell matches the 1st letter of our target word, 
//* we trigger a DFS `backtrack` looking at its 4 neighbors to find the 2nd letter.
//* To avoid reusing constraints, we temporarily mutate the board cell (e.g. to '#') 
//* marking it 'visited' before exploring, and mutate it back upon backtracking.

// Time: O(M * N * 4^L) - Where L is the length of the word to find
// Space: O(L) - Max recursion depth is the length of the word

function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const backtrack = (r, c, index) => {
        // Base case: Found the complete word
        if (index === word.length) {
            return true;
        }

        // Boundaries and validity checks
        if (
            r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            board[r][c] !== word[index]
        ) {
            return false;
        }

        // 1. Mark as visited (Choose)
        const temp = board[r][c];
        board[r][c] = '#';

        // 2. Explore all 4 adjacent directions
        const found = (
            backtrack(r + 1, c, index + 1) || 
            backtrack(r - 1, c, index + 1) || 
            backtrack(r, c + 1, index + 1) || 
            backtrack(r, c - 1, index + 1)
        );

        // 3. Unmark (Backtrack)
        board[r][c] = temp;

        return found;
    };

    // We must try to initiate a search starting at EVERY conceptual cell 
    // that matches the very first letter of our target word.
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Trigger backtrack if first letter matches
            if (board[r][c] === word[0]) {
                if (backtrack(r, c, 0)) return true;
            }
        }
    }

    return false;
}

// const board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]];
// const word = &quot;ABCCED&quot;;
// console.log(exist(board, word));
// Output: true
