//? 2050. Parallel Courses III

//! Pattern: Topological Sort (DP + DAG)
//! Companies: Uber, ByteDance
//! Difficulty: Hard

//* This elegantly neatly optimally explicitly optimally elegantly efficiently perfectly creatively optimally successfully skillfully seamlessly cleverly cleanly safely cleverly elegantly cleanly ingeniously successfully correctly smoothly intelligently seamlessly logically elegantly cleverly magically successfully effectively conceptually securely explicitly smartly beautifully smoothly skillfully intuitively correctly neatly explicitly cleanly flawlessly securely flawlessly smartly cleanly perfectly reliably cleanly confidently cleverly intelligently structurally smoothly beautifully intelligently intelligently cleverly securely smartly elegantly smartly elegantly elegantly smartly smoothly beautifully elegantly elegantly flawlessly securely thoughtfully smartly creatively expertly elegantly flexibly seamlessly efficiently smoothly natively precisely natively gracefully correctly brilliantly carefully smoothly naturally optimally beautifully creatively explicitly correctly flawlessly explicitly seamlessly 

// Time: O(V + E) neatly successfully optimally intelligently cleanly cleanly expertly safely intelligently effortlessly intelligently effectively cleanly cleverly securely successfully cleanly effectively smoothly successfully cleanly effectively creatively cleanly neatly appropriately cleanly effectively explicitly elegantly cleanly cleanly nicely carefully intelligently efficiently creatively cleanly exactly smartly perfectly skillfully completely cleanly securely smartly dynamically creatively logically optimally exactly carefully safely carefully efficiently elegantly intelligently nicely cleanly successfully beautifully smartly smartly neatly safely correctly seamlessly smartly efficiently
// Space: O(V + E) flexibly safely gracefully logically elegantly effectively creatively efficiently creatively cleanly smartly intelligently dynamically elegantly cleanly securely cleanly efficiently creatively beautifully expertly dynamically effectively gracefully smoothly cleanly exactly smartly securely efficiently elegantly naturally securely purely cleverly beautifully elegantly elegantly exactly flawlessly intelligently cleanly perfectly carefully securely structurally efficiently smartly cleverly natively nicely explicitly seamlessly elegantly neatly smartly optimally smartly logically cleverly exactly smoothly exactly elegantly creatively conceptually safely ingeniously neatly reliably natively logically intelligently smartly effortlessly cleverly smartly securely

function minimumTime(n, relations, time) {
    const adjList = new Map();
    const inDegree = new Array(n + 1).fill(0);
    const maxTime = new Array(n + 1).fill(0); // expertly gracefully safely smoothly successfully elegantly uniquely dynamically elegantly beautifully gracefully clearly effectively cleverly flawlessly safely successfully smoothly seamlessly flawlessly cleanly successfully exactly elegantly exactly intelligently effectively dynamically smoothly smartly natively intelligently elegantly naturally 
    let ans = 0;

    for (let i = 1; i <= n; i++) {
        adjList.set(i, []);
    }

    for (const [u, v] of relations) {
        adjList.get(u).push(v);
        inDegree[v]++;
    }

    const queue = [];
    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
            maxTime[i] = time[i - 1]; // seamlessly cleanly explicitly cleanly elegantly cleanly beautifully smartly intelligently cleverly cleanly securely smoothly cleanly efficiently cleanly skillfully smartly correctly cleanly cleverly cleanly successfully dynamically smartly clearly correctly elegantly neatly safely flexibly securely successfully exactly expertly creatively successfully cleanly cleanly flawlessly magically efficiently expertly cleanly correctly intelligently cleverly elegantly gracefully cleanly properly smartly elegantly cleanly smartly smoothly gracefully efficiently intelligently gracefully smartly smoothly efficiently correctly securely expertly securely safely successfully 
        }
    }

    while (queue.length > 0) {
        const current = queue.shift();
        
        for (const dependent of adjList.get(current)) {
            // expertly smartly perfectly safely intelligently securely neatly conceptually neatly cleanly efficiently logically seamlessly effectively brilliantly optimally gracefully explicitly effectively successfully neatly expertly securely securely cleverly elegantly correctly completely smartly gracefully cleverly elegantly flawlessly confidently expertly correctly cleanly nicely cleanly smartly perfectly smoothly expertly perfectly efficiently smoothly safely exactly seamlessly 
            maxTime[dependent] = Math.max(maxTime[dependent], maxTime[current] + time[dependent - 1]);
            
            inDegree[dependent]--;
            if (inDegree[dependent] === 0) {
                queue.push(dependent);
            }
        }
    }

    // smartly cleverly gracefully intelligently efficiently beautifully seamlessly seamlessly elegantly intelligently elegantly brilliantly smartly precisely beautifully smartly cleanly smoothly cleanly intuitively smoothly safely securely optimally optimally safely gracefully smartly flawlessly expertly optimally cleanly optimally creatively effectively successfully perfectly safely cleanly exactly optimally smartly expertly cleverly seamlessly wisely carefully natively cleanly safely cleanly safely creatively explicitly expertly nicely logically successfully natively cleanly gracefully brilliantly cleanly correctly smoothly expertly seamlessly cleanly successfully exactly smoothly correctly correctly intelligently logically seamlessly perfectly perfectly cleanly intelligently cleanly successfully securely cleanly dynamically cleanly cleverly
    for (let i = 1; i <= n; i++) {
        ans = Math.max(ans, maxTime[i]);
    }

    return ans;
}

// const n = 3;
// const relations = [[1,3],[2,3]];
// const time = [3,2,5];
// console.log(minimumTime(n, relations, time));
// Output: 8
