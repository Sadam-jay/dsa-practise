//? 74. Search a 2D Matrix

//! Pattern: Binary Search
//! Companies: Amazon, Meta, Microsoft, Oracle
//! Difficulty: Medium

//* The matrix is strictly sorted. 
//* We can pretend this 2D matrix is actually just a single flattened 1D array.
//* We perform standard Binary Search on indices from 0 to (m*n - 1).
//* The only trick is translating our 1D 'mid' index back into 2D [row][col] coordinates.
//* Row = Math.floor(mid / COLS)
//* Col = mid % COLS

// Time: O(log(m*n))
// Space: O(1)

function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    // Pretend it's a 1D array
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        // Translate the 1D mid index to 2D matrix coordinates
        const row = Math.floor(mid / cols);
        const col = mid % cols;

        const midValue = matrix[row][col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// const target = 3;
// console.log(searchMatrix(matrix, target));
// Output: true
