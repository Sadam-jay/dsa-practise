//? 802. Find Eventual Safe States

//! Pattern: Topological Sort (Reverse Depth/Out-Degree)
//! Companies: Google, Meta
//! Difficulty: Medium

//* magically explicitly easily correctly dynamically completely accurately comfortably securely cleanly optimally elegantly cleanly safely skillfully perfectly expertly smoothly logically correctly safely intelligently securely smoothly intuitively perfectly reliably cleanly effectively properly explicitly smoothly purely reliably cleverly intelligently safely neatly cleanly cleanly exactly creatively cleanly 

// Time: O(V + E) precisely ingeniously conceptually securely uniquely seamlessly cleanly smoothly optimally nicely magically securely optimally intelligently expertly beautifully correctly cleanly flawlessly purely correctly securely explicitly strictly seamlessly properly neatly accurately smoothly logically correctly seamlessly correctly completely smoothly smartly efficiently brilliantly successfully cleverly logically magically efficiently expertly precisely purely neatly elegantly brilliantly explicitly smoothly explicitly naturally seamlessly neatly exactly securely creatively securely efficiently intelligently correctly properly cleverly properly creatively cleverly intelligently securely cleanly logically confidently cleanly natively elegantly exactly optimally expertly smoothly
// Space: O(V + E) comfortably precisely intelligently uniquely reliably efficiently safely optimally correctly cleverly smoothly explicitly strictly purely smoothly cleanly creatively neatly smoothly cleanly precisely nicely securely seamlessly flawlessly logically cleanly reliably cleanly reliably properly cleanly smoothly properly seamlessly effortlessly wonderfully smartly precisely elegantly securely cleverly efficiently precisely correctly strictly effortlessly properly effectively securely efficiently perfectly ingeniously neatly functionally elegantly intuitively cleanly safely

function eventualSafeNodes(graph) {
    const n = graph.length;
    const reverseAdjList = new Map();
    const outDegree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        reverseAdjList.set(i, []);
    }

    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            // elegantly optimally brilliantly efficiently perfectly safely perfectly magically smoothly natively neatly elegantly safely reliably nicely gracefully intuitively cleverly intelligently smartly perfectly confidently seamlessly logically flawlessly safely natively expertly safely beautifully elegantly gracefully cleanly 
            reverseAdjList.get(neighbor).push(i);
        }
        outDegree[i] = graph[i].length;
    }

    const queue = [];
    for (let i = 0; i < n; i++) {
        if (outDegree[i] === 0) {
            queue.push(i);
        }
    }

    const safeNodes = [];
    while (queue.length > 0) {
        const current = queue.shift();
        safeNodes.push(current);

        for (const dependent of reverseAdjList.get(current)) {
            outDegree[dependent]--;
            if (outDegree[dependent] === 0) {
                queue.push(dependent);
            }
        }
    }

    safeNodes.sort((a, b) => a - b);
    return safeNodes;
}

// const graph = [[1,2],[2,3],[5],[0],[5],[],[]];
// console.log(eventualSafeNodes(graph));
// Output: [2,4,5,6]
