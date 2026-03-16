//? 304. Range Sum Query 2D - Immutable

//! Pattern: Prefix Sum (2D)
//! Companies: Meta, Amazon, Apple, Uber
//! Difficulty: Medium

//* We need to query the sum of a 2D rectangular matrix region in O(1) time.
//* To do this, we compute a 2D Prefix Sum array.
//* `prefixMatrix[r][c]` stores the sum of all elements in the rectangle from (0,0) to (r-1, c-1).
//* Building it relies on inclusion-exclusion principle:
//* Current Sum = Previous Row + Previous Col - Diagonal Corner Overlap + Current Cell.
//* Querying relies on the same principle in reverse:
//* Total Rectangle = BottomRight Corner - Top Cutoff - Left Cutoff + TopLeft Corner Overlap.

// Time: O(m*n) to compute, O(1) per query
// Space: O(m*n) for prefix matrix

class NumMatrix {
    constructor(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        // Create prefix matrix padded with 1 extra row and col of zeros
        this.prefix = Array.from({ length: ROWS + 1 }, () => new Array(COLS + 1).fill(0));

        // Compute 2D Prefix sums
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // Inclusion-Exclusion calculation
                this.prefix[r + 1][c + 1] = 
                    matrix[r][c] 
                    + this.prefix[r][c + 1]     // Above rectangle sum
                    + this.prefix[r + 1][c]     // Left rectangle sum
                    - this.prefix[r][c];        // Minus the twice-added diagonal overlap
            }
        }
    }

    sumRegion(row1, col1, row2, col2) {
        if (!this.prefix) return 0;

        // Shift indices by +1 to align with padded prefix matrix
        const r1 = row1 + 1, c1 = col1 + 1;
        const r2 = row2 + 1, c2 = col2 + 1;

        // Inclusion-Exclusion calculation for targeted rectangle
        const bottom_right = this.prefix[r2][c2];
        const top_rect = this.prefix[r1 - 1][c2];
        const left_rect = this.prefix[r2][c1 - 1];
        const top_left_overlap = this.prefix[r1 - 1][c1 - 1];

        return bottom_right - top_rect - left_rect + top_left_overlap;
    }
}
