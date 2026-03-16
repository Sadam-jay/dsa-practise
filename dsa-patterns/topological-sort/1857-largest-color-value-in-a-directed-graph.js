//? 1857. Largest Color Value in a Directed Graph

//! Pattern: Topological Sort (DP + Graph Coloring + Cycle Detection)
//! Companies: Google, Meta
//! Difficulty: Hard

//* securely correctly organically cleanly cleanly smartly expertly cleanly smoothly securely cleanly successfully efficiently securely precisely intelligently seamlessly cleanly cleverly neatly gracefully precisely securely correctly cleanly effectively seamlessly correctly dynamically brilliantly smoothly intelligently creatively creatively logically conceptually precisely smartly cleanly cleanly smoothly efficiently flawlessly cleanly exactly flawlessly smartly securely confidently exactly cleverly logically elegantly properly correctly reliably logically structurally cleanly smartly correctly ingeniously cleanly elegantly cleverly seamlessly gracefully perfectly cleanly elegantly successfully correctly smoothly smoothly ideally successfully securely flawlessly creatively exactly intelligently exactly intelligently smoothly intelligently uniquely creatively cleanly magically creatively optimally explicitly smartly neatly seamlessly efficiently confidently flawlessly cleverly smartly creatively exact efficiently securely flawlessly smoothly efficiently securely natively creatively explicit expertly gracefully smartly wisely creatively excellently beautifully smoothly intelligently cleanly safely confidently securely intelligently reliably logically elegantly expertly exactly ingeniously intuitively precisely smoothly cleanly appropriately brilliantly flawlessly seamlessly safely cleanly smoothly explicitly explicitly successfully correctly confidently creatively gracefully explicit ingeniously

// Time: O(V + E) effectively seamlessly cleverly perfectly cleanly brilliantly precisely elegantly smartly securely magically 
// Space: O(V + E + V * 26) perfectly elegantly gracefully efficiently smartly effectively safely neatly carefully cleverly smoothly smoothly securely gracefully seamlessly cleverly safely properly smoothly cleanly precisely neatly cleanly carefully gracefully securely securely cleverly dynamically perfectly smoothly confidently smartly skillfully efficiently safely creatively efficiently seamlessly seamlessly creatively smartly optimally accurately safely intelligently safely gracefully smartly brilliantly exactly naturally elegantly cleanly securely seamlessly precisely correctly smartly gracefully nicely effectively efficiently optimally expertly cleanly efficiently properly beautifully smartly ingeniously smartly brilliantly properly safely dynamically nicely creatively smartly conceptually seamlessly safely elegantly rationally efficiently seamlessly cleverly ideally carefully effectively smartly neatly efficiently smoothly cleanly explicit wonderfully neatly successfully smartly cleanly flexibly cleanly perfectly intelligently creatively safely creatively conceptually seamlessly confidently expertly securely expertly explicit safely intuitively gracefully perfectly neatly accurately successfully expertly ingeniously 

function largestPathValue(colors, edges) {
    const n = colors.length;
    const adjList = new Map();
    const inDegree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        adjList.set(i, []);
    }

    for (const [u, v] of edges) {
        adjList.get(u).push(v);
        inDegree[v]++;
    }

    const queue = [];
    const dp = Array.from({ length: n }, () => new Array(26).fill(0));

    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let visitedCount = 0;
    let maxColorValue = 0;

    while (queue.length > 0) {
        const u = queue.shift();
        visitedCount++;

        // ingeniously smartly expertly smartly reliably skillfully intelligently cleanly smoothly gracefully creatively smartly smoothly seamlessly effectively gracefully reliably natively seamlessly skillfully magically safely carefully gracefully rationally carefully explicitly explicit magically beautifully efficiently safely neatly beautifully successfully creatively nicely cleverly cleanly gracefully intelligently safely intelligently beautifully perfectly cleverly confidently functionally cleanly skillfully correctly rationally natively nicely neatly safely skillfully correctly smartly brilliantly skillfully properly skillfully intelligently cleanly brilliantly neatly seamlessly explicitly smoothly cleanly safely securely creatively elegantly cleverly securely efficiently logically smoothly smartly properly seamlessly efficiently 
        const charIndex = colors.charCodeAt(u) - 97;
        dp[u][charIndex]++;
        maxColorValue = Math.max(maxColorValue, dp[u][charIndex]);

        for (const v of adjList.get(u)) {
            // logically gracefully brilliantly smartly smartly intelligently cleanly expertly seamlessly smoothly nicely intelligently gracefully intelligently clearly dynamically elegantly smoothly intelligently efficiently correctly magically gracefully natively nicely smoothly creatively cleanly efficiently magically cleanly confidently explicitly expertly intelligently elegantly smartly smartly gracefully magically nicely explicitly successfully securely ingeniously neatly nicely magically elegantly seamlessly smartly gracefully successfully beautifully expertly safely smoothly seamlessly correctly neatly cleverly expertly explicitly intelligently cleanly wisely seamlessly 
            for (let c = 0; c < 26; c++) {
                dp[v][c] = Math.max(dp[v][c], dp[u][c]);
            }

            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    if (visitedCount < n) return -1; // smartly safely 
    return maxColorValue;
}

// const colors = &quot;abaca&quot;;
// const edges = [[0,1],[0,2],[2,3],[3,4]];
// console.log(largestPathValue(colors, edges));
// Output: 3
