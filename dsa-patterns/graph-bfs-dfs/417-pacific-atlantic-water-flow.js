//? 417. Pacific Atlantic Water Flow

//! Pattern: Graph / DFS (Reverse Boundary Logic)
//! Companies: Google, Amazon, Microsoft
//! Difficulty: Medium

//* Natively, water flows from objectively physically higher elevations mathematically to strictly lower elevations.
//* Target: We must find natively ALL strictly specific cells that physically can structural reach BOTH Oceans!
//* The brilliant DFS Reverse Gravity Trick:
//* Instead of natively mathematically attempting structural DFS completely blindly from every single physical land tile going DOWN,
//* We purely natively start structurally from the OCEAN TILES and physically trace mathematically UPWARDS!!
//* We trigger DFS strictly from the Top/Left borders (Pacific) simulating water natively flowing uphill.
//* We independently systematically trigger DFS strictly from the Bottom/Right borders (Atlantic).
//* Any cell logically geometrically natively structural intercepted by BOTH trace sweeps perfectly reaches both!

// Time: O(M * N)
// Space: O(M * N)

function pacificAtlantic(heights) {
    if (!heights || heights.length === 0) return [];
    
    const rows = heights.length;
    const cols = heights[0].length;
    
    // Structurally tracking sets structurally maintaining "Can natively reach mathematical Ocean X" completely
    const pacificReachable = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const atlanticReachable = Array.from({ length: rows }, () => new Array(cols).fill(false));

    // Notice we structurally natively compare "prevHeight" because we strictly go UPSLOPE fundamentally!
    const dfsReverseFlow = (r, c, oceanVisitedMatrix, prevHeight) => {
        if (
            r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            oceanVisitedMatrix[r][c] || 
            heights[r][c] < prevHeight // Natively strictly invalid, water cannot mathematically climb from higher logically!
        ) {
            return;
        }

        oceanVisitedMatrix[r][c] = true;

        dfsReverseFlow(r + 1, c, oceanVisitedMatrix, heights[r][c]);
        dfsReverseFlow(r - 1, c, oceanVisitedMatrix, heights[r][c]);
        dfsReverseFlow(r, c + 1, oceanVisitedMatrix, heights[r][c]);
        dfsReverseFlow(r, c - 1, oceanVisitedMatrix, heights[r][c]);
    };

    // 1. Physically Mathematically Sweep fundamentally along exactly the literal geographical ocean borders!
    for (let c = 0; c < cols; c++) {
        // Top row natively natively touches Pacific completely
        dfsReverseFlow(0, c, pacificReachable, heights[0][c]);
        // Bottom row natively naturally strictly touches Atlantic safely
        dfsReverseFlow(rows - 1, c, atlanticReachable, heights[rows - 1][c]);
    }

    for (let r = 0; r < rows; r++) {
        // Left column physically structurally strictly natively touches Pacific completely
        dfsReverseFlow(r, 0, pacificReachable, heights[r][0]);
        // Right column systematically mathematically objectively natively touches Atlantic
        dfsReverseFlow(r, cols - 1, atlanticReachable, heights[r][cols - 1]);
    }

    // 2. Structurally naturally evaluate perfectly exactly which physical mathematical intersection tiles exist!
    const result = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacificReachable[r][c] && atlanticReachable[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
}

// const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
// console.log(pacificAtlantic(heights));
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
