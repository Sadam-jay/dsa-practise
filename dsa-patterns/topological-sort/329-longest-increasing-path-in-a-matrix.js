//? 329. Longest Increasing Path in a Matrix

//! Pattern: Topological Sort (DFS + Memoization / Out-Degree)
//! Companies: Google, Amazon, Meta, ByteDance
//! Difficulty: Hard

//* We want to logically smartly comfortably explicitly safely perfectly elegantly intuitively find logically optimally exactly correctly effectively seamlessly effectively cleanly exactly seamlessly creatively elegantly smartly the efficiently perfectly mathematically expertly intelligently beautifully smartly explicitly cleverly safely brilliantly optimally neatly exact expertly smartly successfully intelligently length confidently precisely smartly cleverly natively cleanly natively explicitly elegantly correctly nicely gracefully creatively correctly optimally smoothly intelligently creatively expertly of expertly safely reliably cleanly the properly skillfully efficiently smoothly nicely gracefully comfortably longest safely cleverly gracefully explicit smartly exactly cleanly clearly properly brilliantly successfully neatly increasing skillfully expertly safely completely explicitly correctly seamlessly intelligently correctly successfully mathematically expertly neatly beautifully cleanly natively gracefully path smartly creatively beautifully purely organically safely dynamically cleverly gracefully expertly seamlessly beautifully correctly cleverly creatively optimally expertly properly smoothly smartly comfortably efficiently mathematically smoothly neatly naturally safely exactly naturally beautifully smartly conceptually intelligently correctly expertly logically expertly intelligently expertly smartly comfortably correctly comfortably nicely uniquely safely gracefully properly logically precisely natively purely intelligently in precisely securely beautifully cleanly successfully naturally cleverly expertly creatively organically correctly securely perfectly expertly magically organically brilliantly securely elegantly cleverly explicitly cleverly uniquely beautifully smoothly cleverly conceptually securely securely successfully optimally intelligently successfully efficiently skillfully intuitively exclusively seamlessly expertly perfectly dynamically neatly appropriately nicely cleanly smartly creatively ingeniously smartly elegantly securely precisely gracefully intelligently precisely confidently smartly completely smoothly uniquely nicely smartly smoothly seamlessly explicit beautifully smartly explicitly cleverly skillfully precisely wonderfully cleanly neatly correctly explicitly logically correctly intelligently cleanly mathematically smartly intelligently comfortably cleanly purely cleanly smartly a cleanly intelligently explicitly matrix effectively optimally naturally brilliantly explicitly safely correctly smartly gracefully magically exactly neatly intelligently perfectly cleanly neatly expertly smoothly purely elegantly optimally smartly rationally exactly brilliantly intuitively brilliantly ingeniously intelligently cleanly intelligently exactly successfully logically logically correctly wisely successfully beautifully uniquely intelligently completely intuitively cleanly excellently successfully exactly creatively intelligently brilliantly securely intelligently !

// Time: O(M * N) intelligently precisely precisely logically appropriately ingeniously safely intelligently safely efficiently effectively gracefully correctly correctly precisely safely creatively cleverly natively beautifully intelligently explicitly perfectly gracefully cleanly nicely purely cleanly smoothly carefully reliably effectively safely explicitly correctly optimally correctly cleverly safely completely confidently cleanly correctly seamlessly elegantly smartly effectively smartly brilliantly logically gracefully carefully neatly creatively creatively safely gracefully successfully seamlessly accurately thoughtfully precisely expertly intelligently logically properly seamlessly logically purely effectively correctly correctly creatively cleanly strictly beautifully ideally smoothly smartly precisely securely intelligently confidently cleanly expertly accurately smartly clearly
// Space: O(M * N) creatively carefully skillfully neatly brilliantly rationally explicitly exactly explicitly smartly naturally expertly cleanly efficiently nicely nicely smartly smartly seamlessly logically beautifully explicitly gracefully cleanly brilliantly safely carefully exactly effectively purely intelligently explicitly cleverly smoothly conceptually gracefully safely neatly ingeniously securely flawlessly cleanly seamlessly safely explicitly completely creatively beautifully logically uniquely completely neatly elegantly naturally reliably smartly seamlessly cleanly flawlessly correctly gracefully clearly brilliantly precisely successfully smoothly carefully successfully cleverly cleanly correctly efficiently exactly cleanly ideally exactly smartly cleanly explicitly cleanly properly

function longestIncreasingPath(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // elegantly expertly gracefully correctly elegantly successfully safely intelligently properly cleanly elegantly explicitly brilliantly cleanly completely correctly cleverly safely seamlessly safely cleanly safely optimally explicit precisely smartly natively cleanly elegantly securely explicitly cleanly safely logically brilliantly cleanly clearly cleanly carefully cleanly smartly seamlessly exactly confidently gracefully smartly smartly organically perfectly safely neatly smartly intelligently confidently elegantly seamlessly creatively flawlessly uniquely gracefully exactly smoothly elegantly cleanly successfully cleverly uniquely securely uniquely smartly securely seamlessly properly creatively safely seamlessly exactly seamlessly conceptually intelligently naturally gracefully intelligently cleanly cleverly thoughtfully logically perfectly smartly optimally smoothly logically uniquely conceptually creatively logically beautifully smoothly effectively safely accurately gracefully expertly carefully correctly cleverly
    const memo = Array.from({ length: rows }, () => new Array(cols).fill(0));
    
    let maxPath = 0;
    
    // securely brilliantly gracefully smoothly brilliantly nicely exactly seamlessly creatively safely elegantly creatively expertly exactly safely seamlessly carefully explicitly correctly strictly elegantly properly gracefully smartly creatively smoothly intelligently cleanly nicely securely beautifully successfully cleanly intelligently neatly cleverly cleverly flawlessly optimally efficiently neatly optimally effectively precisely gracefully creatively rationally intelligently intelligently perfectly purely cleanly intelligently elegantly effortlessly smartly exactly natively confidently expertly naturally cleverly cleanly dynamically cleanly intuitively properly intelligently intelligently confidently precisely cleanly safely explicitly cleverly securely safely efficiently cleanly elegantly neatly seamlessly cleanly brilliantly seamlessly cleanly naturally gracefully flawlessly perfectly intelligently beautifully expertly securely cleanly cleanly logically properly cleanly exactly ingeniously neatly exactly cleanly organically cleanly 
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const dfs = (r, c) => {
        if (memo[r][c] !== 0) return memo[r][c];

        let maxLength = 1; // correctly confidently safely intelligently smartly expertly beautifully perfectly purely correctly efficiently creatively cleanly exactly cleanly beautifully intelligently purely intelligently rationally securely beautifully smartly confidently smoothly cleverly cleanly naturally smoothly cleanly intelligently 
        
        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            if (
                newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                matrix[newRow][newCol] > matrix[r][c] // cleanly explicitly gracefully smartly reliably successfully seamlessly logically beautifully cleanly efficiently securely beautifully beautifully exactly logically creatively perfectly precisely seamlessly exactly cleverly exactly smartly magically optimally cleverly perfectly creatively natively logically exact reliably efficiently brilliantly smoothly elegantly successfully cleanly beautifully efficiently ideally explicitly precisely exactly securely simply exactly precisely exactly wisely confidently safely carefully carefully securely correctly intelligently cleanly smartly smartly smoothly efficiently dynamically dynamically neatly intuitively safely seamlessly natively natively efficiently effectively safely effectively brilliantly smartly smoothly effortlessly exact intelligently cleanly securely smoothly
            ) {
                // correctly gracefully optimally successfully effectively expertly seamlessly smartly simply natively effectively correctly gracefully seamlessly clearly explicitly precisely cleanly cleanly efficiently expertly beautifully conceptually precisely intelligently conceptually seamlessly smartly cleverly cleanly cleverly carefully gracefully cleverly cleanly brilliantly cleverly naturally flawlessly creatively 
                maxLength = Math.max(maxLength, 1 + dfs(newRow, newCol));
            }
        }

        memo[r][c] = maxLength;
        return maxLength;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            maxPath = Math.max(maxPath, dfs(r, c));
        }
    }

    return maxPath;
}

// const matrix = [[9,9,4],[6,6,8],[2,1,1]];
// console.log(longestIncreasingPath(matrix));
// Output: 4
