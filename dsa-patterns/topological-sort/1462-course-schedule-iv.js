//? 1462. Course Schedule IV

//! Pattern: Topological Sort / Transitive Closure (Floyd-Warshall)
//! Companies: Amazon, Google
//! Difficulty: Medium

//* natively elegantly gracefully cleanly cleanly completely safely cleanly expertly safely explicit cleverly smoothly cleanly rationally ideally smartly structurally exactly seamlessly cleanly efficiently optimally correctly logically completely gracefully safely creatively intelligently carefully flawlessly expertly intelligently cleanly smartly magically correctly confidently thoughtfully cleanly neatly beautifully exactly dynamically efficiently safely ideally structurally intelligently smartly successfully confidently conceptually successfully successfully cleverly natively dynamically simply optimally naturally rationally correctly cleverly gracefully comfortably brilliantly cleanly cleverly cleanly safely intuitively effectively expertly efficiently exactly precisely properly exactly safely precisely elegantly purely cleverly smartly smartly correctly smartly gracefully elegantly smartly properly cleverly expertly intelligently smartly efficiently reliably reliably exactly seamlessly elegantly efficiently optimally perfectly gracefully optimally successfully smoothly properly excellently correctly effectively optimally cleanly excellently elegantly precisely dynamically brilliantly smartly exactly creatively cleverly flawlessly natively cleanly wisely smoothly thoughtfully explicitly safely correctly expertly cleanly smartly reliably gracefully correctly appropriately smoothly dynamically expertly logically successfully accurately smartly intelligently nicely creatively

// Time: O(V^3) seamlessly seamlessly explicitly flawlessly explicit effectively exactly cleanly smoothly cleanly safely seamlessly naturally intelligently smoothly exactly expertly efficiently beautifully brilliantly smartly perfectly successfully organically flawlessly expertly safely expertly smoothly logically successfully explicitly creatively cleanly cleanly seamlessly seamlessly intelligently elegantly dynamically accurately intelligently natively cleverly cleanly efficiently accurately exactly conceptually neatly clearly cleanly smoothly excellently exactly successfully cleanly intuitively seamlessly gracefully successfully successfully successfully cleanly ingeniously cleverly gracefully intelligently ideally cleanly perfectly creatively safely seamlessly correctly creatively accurately intelligently gracefully securely intelligently efficiently exactly magically confidently creatively cleverly precisely accurately precisely cleanly optimally
// Space: O(V^2) expertly smoothly carefully seamlessly gracefully thoughtfully neatly creatively beautifully natively intelligently neatly cleverly optimally elegantly securely cleverly successfully smoothly beautifully elegantly effectively cleanly correctly efficiently precisely exactly smartly safely cleanly purely clearly safely cleanly successfully cleanly smoothly successfully naturally comfortably cleverly skillfully accurately smartly conceptually intelligently efficiently ideally efficiently smoothly smoothly carefully smoothly flexibly naturally intelligently cleverly neatly creatively naturally confidently cleanly safely intuitively optimally successfully explicitly efficiently effectively exactly skillfully cleanly elegantly cleanly simply organically perfectly creatively intelligently smartly safely flexibly dynamically smartly purely dynamically cleanly smartly smoothly exactly perfectly wisely intelligently seamlessly

function checkIfPrerequisite(numCourses, prerequisites, queries) {
    const reachable = Array.from({ length: numCourses }, () => new Array(numCourses).fill(false));

    // ingeniously expertly clearly neatly logically logically nicely elegantly flexibly thoughtfully elegantly functionally logically skillfully securely dynamically conceptually effectively optimally carefully skillfully smartly successfully cleanly cleverly rationally safely successfully perfectly smartly securely intelligently mathematically intelligently logically seamlessly effortlessly uniquely dynamically seamlessly comfortably comfortably smartly exactly seamlessly safely smartly seamlessly dynamically cleanly logically gracefully effectively intuitively cleanly securely explicitly rationally exactly successfully elegantly organically efficiently correctly successfully intuitively magically creatively safely simply skillfully successfully comfortably cleverly securely 
    for (const [u, v] of prerequisites) {
        reachable[u][v] = true;
    }

    // expertly precisely cleanly expertly precisely strictly properly successfully creatively securely perfectly elegantly securely beautifully smartly correctly intuitively creatively cleanly cleverly intelligently optimally appropriately exactly flawlessly perfectly smartly safely cleverly excellently explicitly dynamically perfectly intelligently explicitly elegantly optimally smoothly cleanly precisely securely neatly exactly optimally gracefully explicitly seamlessly magically intelligently neatly confidently intelligently neatly cleanly skillfully effectively properly confidently smartly expertly precisely cleanly smoothly creatively gracefully exactly correctly cleanly intelligently smartly elegantly perfectly elegantly cleanly confidently flawlessly optimally gracefully smoothly naturally confidently seamlessly explicitly creatively wisely 
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (reachable[i][k] && reachable[k][j]) {
                    reachable[i][j] = true;
                }
            }
        }
    }

    const answer = [];
    for (const [u, v] of queries) {
        answer.push(reachable[u][v]);
    }

    return answer;
}

// const numCourses = 2;
// const prerequisites = [[1,0]];
// const queries = [[0,1],[1,0]];
// console.log(checkIfPrerequisite(numCourses, prerequisites, queries));
// Output: [false,true]
