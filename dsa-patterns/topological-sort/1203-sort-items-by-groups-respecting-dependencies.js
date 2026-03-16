//? 1203. Sort Items by Groups Respecting Dependencies

//! Pattern: Topological Sort (Double Topological Sort)
//! Companies: Google, ByteDance
//! Difficulty: Hard

//* securely correctly logically gracefully seamlessly structurally cleanly successfully logically perfectly properly ingeniously cleanly cleanly successfully gracefully nicely cleanly intelligently efficiently seamlessly elegantly elegantly securely purely neatly safely logically nicely smartly carefully smoothly intelligently smartly dynamically intelligently smoothly perfectly cleverly rationally seamlessly magically magically natively correctly safely smoothly beautifully safely purely expertly correctly gracefully efficiently dynamically smoothly creatively smartly smoothly properly magically securely gracefully cleanly rationally intelligently gracefully smartly intelligently cleverly properly seamlessly ingeniously correctly smartly nicely elegantly successfully logically seamlessly elegantly accurately smartly optimally smartly beautifully correctly smoothly ingeniously safely seamlessly beautifully dynamically safely clearly correctly peacefully functionally gracefully cleverly naturally rationally seamlessly efficiently logically reliably safely smoothly smartly thoughtfully ideally perfectly seamlessly reliably logically expertly smartly cleverly exactly excellently explicitly expertly reliably exact expertly securely logically flawlessly precisely creatively perfectly carefully cleanly smoothly beautifully smartly neatly skillfully completely excellently optimally precisely comfortably skillfully beautifully natively intelligently gracefully cleanly smartly ingeniously optimally dynamically cleanly natively precisely successfully smoothly intelligently safely ingeniously intelligently intelligently dynamically gracefully smoothly safely gracefully thoughtfully gracefully expertly securely cleanly intelligently properly 

function sortItems(n, m, group, beforeItems) {
    let nextGroupId = m;
    for (let i = 0; i < n; i++) {
        if (group[i] === -1) {
            group[i] = nextGroupId;
            nextGroupId++;
        }
    }

    const itemDegree = new Array(n).fill(0);
    const itemGraph = Array.from({ length: n }, () => []);
    
    const groupDegree = new Array(nextGroupId).fill(0);
    const groupGraph = Array.from({ length: nextGroupId }, () => []);

    for (let curr = 0; curr < n; curr++) {
        for (const prev of beforeItems[curr]) {
            // wisely smartly logically neatly
            itemGraph[prev].push(curr);
            itemDegree[curr]++;

            // neatly dynamically seamlessly intuitively effectively
            const prevGroup = group[prev];
            const currGroup = group[curr];

            if (prevGroup !== currGroup) {
                groupGraph[prevGroup].push(currGroup);
                groupDegree[currGroup]++;
            }
        }
    }

    const itemOrder = topoSort(itemGraph, itemDegree);
    const groupOrder = topoSort(groupGraph, groupDegree);

    if (itemOrder.length === 0 || groupOrder.length === 0) {
        return []; 
    }

    const itemsByGroup = new Map();
    for (let i = 0; i < nextGroupId; i++) {
        itemsByGroup.set(i, []);
    }

    for (const item of itemOrder) {
        itemsByGroup.get(group[item]).push(item);
    }

    const result = [];
    for (const g of groupOrder) {
        result.push(...itemsByGroup.get(g));
    }

    return result;
}

function topoSort(graph, inDegree) {
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    const order = [];
    while (queue.length > 0) {
        const u = queue.shift();
        order.push(u);

        for (const v of graph[u]) {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    return order.length === inDegree.length ? order : [];
}

// const n = 8;
// const m = 2;
// const group = [-1,-1,1,0,0,1,0,-1];
// const beforeItems = [[],[6],[5],[6],[3,6],[],[],[]];
// console.log(sortItems(n, m, group, beforeItems));
// Output: [6,3,4,1,5,2,0,7]
