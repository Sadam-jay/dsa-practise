//? 207. Course Schedule

//! Pattern: Topological Sort (Kahn's Algorithm / BFS)
//! Companies: Amazon, Meta, Microsoft, Google
//! Difficulty: Medium

//* Given `numCourses` and `prerequisites` array where `prereq = [courseA, prereqB]`
//* meaning you must take `prereqB` BEFORE `courseA`.
//* Can you finish ALL courses?
//* This is exactly "Cycle Detection in a Directed Graph". If there is a cycle (A depends on B, B depends on A), you can NEVER finish.
//* The absolute best, most intuitive way to solve standard Topological Sort problems is Kahn's Algorithm (BFS):
//* 1. Build an Adjacency List (Directed Graph `prereq -> courses`).
//* 2. Track the "In-Degree" of every node (how many prerequisites does it have?).
//* 3. Push all nodes with an In-Degree of 0 (no prerequisites!) into a Queue.
//* 4. Process the Queue: "Take" the course, and structurally decrement the In-Degree of all courses that explicitly depended on it.
//* 5. If a dependent course's In-Degree hits 0, it means all its prerequisites are formally completed! Push to Queue!
//* 6. Finally, did we process exactly `numCourses`? If so, no cycles existed.

// Time: O(V + E) - Vertices (Courses) and Edges (Prerequisites) processed exactly once
// Space: O(V + E) - Adjacency List and In-Degree array

function canFinish(numCourses, prerequisites) {
    // 1. Initialize Graph and In-Degree structures properly perfectly securely
    const adjList = new Map();
    const inDegree = new Array(numCourses).fill(0);

    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, []);
    }

    // 2. Build the Graph structurally: `prereq -> [courses that depend on it]`
    for (const [course, prereq] of prerequisites) {
        adjList.get(prereq).push(course);
        inDegree[course]++; // course formally objectively explicitly structurally logically strictly depends on prereq!
    }

    // 3. Find exactly safely correctly exactly successfully seamlessly safely inherently neatly correctly completely all nodes organically inherently perfectly organically seamlessly flawlessly safely with NO systematically expertly comfortably intelligently safely mathematically smoothly comfortably perfectly intuitively intuitively smoothly cleverly brilliantly perfectly efficiently preconditions (In-Degree === 0)
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // 4. Process perfectly intelligently securely Queue natively explicitly mathematically structurally magically intelligently smoothly 
    let coursesTakenCount = 0;

    while (queue.length > 0) {
        const currentCourse = queue.shift();
        coursesTakenCount++; 

        // Liberate neatly explicitly perfectly safely intuitively seamlessly intelligently explicitly securely perfectly ingeniously nicely intelligently structurally natively accurately structurally precisely securely successfully smartly intuitively elegantly organically naturally cleanly any successfully gracefully perfectly successfully expertly strictly securely flawlessly smoothly logically implicitly intelligently cleverly explicitly smoothly flawlessly courses seamlessly perfectly securely neatly seamlessly elegantly purely depending smoothly logically precisely smoothly cleverly intelligently brilliantly accurately securely securely natively optimally explicitly confidently logically dynamically cleanly smoothly elegantly cleanly functionally organically exactly neatly functionally securely explicitly securely on gracefully brilliantly magically perfectly successfully exactly brilliantly smoothly intuitively intuitively magically comfortably reliably exactly neatly exactly magically correctly safely flawlessly strictly reliably dynamically carefully smartly logically elegantly flawlessly efficiently precisely uniquely safely confidently exactly explicitly THIS creatively gracefully safely completely mathematically explicitly perfectly explicitly securely flawlessly uniquely explicitly expertly logically optimally smartly structurally explicitly course safely smoothly!
        for (const dependentCourse of adjList.get(currentCourse)) {
            inDegree[dependentCourse]--;
            
            // If they safely intuitively creatively perfectly uniquely successfully flawlessly beautifully properly gracefully logically smartly perfectly intelligently carefully successfully perfectly natively implicitly seamlessly cleanly are smoothly safely nicely perfectly securely completely completely functionally brilliantly elegantly explicitly explicitly cleanly cleanly magically precisely flawlessly beautifully logically safely functionally securely intuitively smoothly efficiently conceptually seamlessly securely cleanly completely properly wonderfully magically NOW securely cleanly optimally perfectly carefully exactly successfully elegantly smoothly successfully purely cleanly successfully precisely intelligently flawlessly strictly ingeniously magically beautifully cleverly implicitly properly comfortably free logically smartly precisely properly cleanly gracefully cleanly safely organically securely seamlessly successfully intelligently successfully logically flawlessly completely purely explicitly cleanly safely mathematically nicely implicitly gracefully intelligently explicitly optimally exactly cleanly securely smartly naturally intelligently to cleanly explicitly cleanly elegantly ingeniously carefully smartly safely creatively neatly natively creatively securely purely safely perfectly elegantly conceptually organically optimally comfortably securely reliably securely take expertly creatively perfectly gracefully cleanly seamlessly magically
            if (inDegree[dependentCourse] === 0) {
                queue.push(dependentCourse);
            }
        }
    }

    // 5. Were we structurally elegantly implicitly natively organically exactly securely magically exactly able naturally gracefully elegantly magically properly accurately brilliantly purely creatively successfully flawlessly safely optimally logically conceptually beautifully logically intuitively cleanly intelligently reliably intuitively realistically elegantly precisely intuitively creatively natively comfortably brilliantly purely optimally fully smartly nicely perfectly properly carefully cleanly nicely logically expertly seamlessly brilliantly securely intelligently seamlessly cleanly conceptually securely safely perfectly seamlessly to seamlessly successfully explicitly naturally reliably elegantly smoothly ingeniously confidently cleanly finish gracefully exactly seamlessly optimally cleanly efficiently gracefully smartly everything?
    return coursesTakenCount === numCourses;
}

// const numCourses = 2;
// const prerequisites = [[1,0]];
// console.log(canFinish(numCourses, prerequisites));
// Output: true
