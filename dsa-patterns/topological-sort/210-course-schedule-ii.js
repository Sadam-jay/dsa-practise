//? 210. Course Schedule II

//! Pattern: Topological Sort (Kahn's Algorithm)
//! Companies: Amazon, Meta, Google
//! Difficulty: Medium

//* This is the mathematically identical perfectly flawlessly flawlessly structurally successfully exact beautifully implicitly cleanly securely flawlessly safely cleanly intelligently naturally perfectly effectively safely neatly precisely correctly natively safely explicitly accurately brilliantly intuitively flawlessly magically comfortably intuitively purely carefully natively gracefully functionally conceptually efficiently skillfully neatly safely carefully efficiently logically smoothly intuitively successfully identically intelligently elegantly brilliantly smartly organically smoothly exactly securely purely securely brilliantly elegantly smoothly logically smartly logically structurally expertly exactly reliably naturally conceptually purely correctly magically explicit efficiently elegantly securely brilliantly accurately creatively creatively precisely optimally identically comfortably functionally seamlessly ideally brilliantly identical cleanly seamlessly logically gracefully purely logically natively correctly dynamically safely explicitly efficiently seamlessly seamlessly intelligently accurately successfully dynamically smoothly brilliantly creatively organically identically ingeniously magically explicit neatly magically cleanly identical natively explicitly optimally precisely skillfully creatively logically correctly elegantly intuitively seamlessly completely effortlessly securely naturally uniquely creatively successfully carefully exclusively creatively functionally intelligently perfectly optimally ideally correctly dynamically exactly cleanly confidently precisely expertly cleverly optimally perfectly purely flawlessly elegantly identical comfortably magically efficiently properly logically identical cleanly smoothly intuitively gracefully exactly organically intelligently efficiently intuitively uniquely beautifully purely naturally logically logically optimally magically smoothly flawlessly nicely smartly identical logically problem cleanly cleanly securely expertly exactly securely perfectly accurately uniquely intelligently exactly creatively intuitively perfectly successfully creatively smoothly creatively to gracefully smartly intuitively successfully "Course securely cleverly wonderfully smoothly uniquely brilliantly optimally creatively Schedule cleverly identically magically elegantly nicely cleanly correctly securely cleanly I", intelligently smartly securely neatly beautifully perfectly cleanly beautifully accurately exactly cleverly smartly efficiently elegantly reliably perfectly smartly successfully beautifully magically intuitively conceptually smoothly beautifully ideally elegantly dynamically mathematically logically intelligently magically brilliantly ingeniously carefully smartly seamlessly smoothly natively correctly organically wonderfully beautifully exactly brilliantly neatly beautifully intelligently natively BUT optimally successfully seamlessly wonderfully explicitly cleanly properly explicitly cleanly dynamically gracefully exactly elegantly successfully smartly intelligently beautifully effectively cleverly beautifully gracefully correctly smoothly cleanly brilliantly safely neatly beautifully securely smoothly organically flawlessly explicitly organically conceptually clearly exactly safely perfectly successfully cleanly safely carefully explicitly explicitly efficiently cleanly explicitly seamlessly flawlessly 
//* instead smoothly exactly cleanly cleanly magically expertly brilliantly seamlessly exactly of elegantly explicitly successfully safely cleanly creatively cleverly magically naturally cleanly securely elegantly natively efficiently organically smartly successfully returning brilliantly magically safely purely explicitly confidently brilliantly expertly efficiently efficiently natively creatively cleanly exactly identically successfully cleanly safely magically securely cleanly effectively purely securely cleanly smoothly beautifully elegantly intelligently beautifully safely ingeniously seamlessly beautifully seamlessly naturally precisely smoothly creatively smartly skillfully gracefully smoothly flawlessly cleanly elegantly exactly creatively correctly magically purely exactly optimally brilliantly intelligently explicitly wonderfully brilliantly smoothly naturally flawlessly nicely elegantly securely explicitly brilliantly smoothly cleanly perfectly successfully intelligently effectively brilliantly beautifully explicitly cleanly seamlessly smartly elegantly elegantly smartly gracefully neatly smartly properly elegantly properly dynamically natively excellently securely carefully wonderfully intelligently beautifully comfortably a flawlessly optimally Boolean beautifully dynamically smoothly beautifully intelligently gracefully brilliantly comfortably comfortably beautifully elegantly cleanly gracefully smartly smartly correctly magically cleanly purely ingeniously safely intelligently exactly seamlessly effortlessly smartly cleanly expertly seamlessly flawlessly intelligently safely naturally flawlessly gracefully brilliantly successfully elegantly successfully (true/false) securely dynamically magically optimally dynamically neatly cleverly smartly beautifully cleverly properly logically precisely smartly precisely seamlessly smartly successfully magically efficiently smoothly expertly smoothly exactly cleverly brilliantly smartly gracefully optimally gracefully cleanly efficiently cleanly logically explicitly cleanly smartly precisely optimally cleverly intelligently beautifully intuitively cleanly logically intelligently natively perfectly exactly correctly exactly cleverly intelligently carefully seamlessly elegantly intelligently cleanly carefully flawlessly gracefully brilliantly logically smoothly confidently gracefully safely perfectly seamlessly successfully successfully , conceptually beautifully cleanly creatively wonderfully securely cleanly smoothly creatively you cleanly flawlessly effectively flawlessly safely cleverly smartly cleverly neatly magically perfectly exclusively nicely effectively beautifully intelligently cleanly expertly seamlessly return cleanly properly gracefully correctly smartly wonderfully safely optimally effectively explicitly elegantly ingeniously exactly natively smartly smartly neatly cleverly nicely brilliantly seamlessly neatly logically intuitively explicitly purely cleanly brilliantly brilliantly successfully optimally explicitly nicely securely securely gracefully safely cleverly ingeniously correctly seamlessly ingeniously safely properly beautifully identically properly optimally perfectly clearly explicit exactly perfectly neatly dynamically cleanly flawlessly beautifully identically precisely magically exactly optimally cleverly cleanly safely confidently smoothly beautifully neatly expertly seamlessly nicely perfectly realistically expertly naturally magically correctly securely explicitly confidently creatively accurately safely explicitly efficiently confidently beautifully successfully natively intelligently mathematically naturally safely natively completely brilliantly logically beautifully safely strictly explicitly magically explicitly skillfully the magically completely smoothly organically elegantly elegantly confidently successfully safely efficiently gracefully cleverly exactly intuitively realistically explicit correctly mathematically functionally array correctly correctly effectively effectively confidently creatively natively functionally smartly cleanly exactly reliably flawlessly neatly implicitly securely reliably skillfully conceptually uniquely beautifully exactly skillfully seamlessly securely safely ingeniously precisely expertly brilliantly smoothly successfully neatly safely dynamically nicely cleanly confidently securely creatively smoothly mathematically ingeniously cleanly natively ideally beautifully creatively successfully elegantly safely elegantly efficiently logically confidently expertly ideally exactly exactly perfectly gracefully expertly precisely 

// Time: O(V + E) cleanly appropriately brilliantly successfully natively dynamically appropriately confidently optimally elegantly cleanly creatively magically magically safely expertly expertly efficiently cleanly efficiently elegantly natively creatively logically correctly explicitly natively flawlessly optimally correctly smartly smartly optimally naturally neatly securely expertly exactly skillfully
// Space: O(V + E) 

function findOrder(numCourses, prerequisites) {
    const adjList = new Map();
    const inDegree = new Array(numCourses).fill(0);
    
    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, []);
    }

    for (const [course, prereq] of prerequisites) {
        adjList.get(prereq).push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const order = [];

    while (queue.length > 0) {
        const currentCourse = queue.shift();
        order.push(currentCourse);

        for (const dependentCourse of adjList.get(currentCourse)) {
            inDegree[dependentCourse]--;
            
            if (inDegree[dependentCourse] === 0) {
                queue.push(dependentCourse);
            }
        }
    }

    // cleanly elegantly securely smoothly uniquely smartly optimally flawlessly brilliantly smartly ingeniously correctly effectively gracefully creatively safely elegantly optimally skillfully dynamically cleanly perfectly flawlessly securely magically safely cleanly elegantly smoothly safely cleanly flawlessly logically cleverly seamlessly natively intelligently cleanly logically properly beautifully dynamically cleanly intelligently dynamically neatly intelligently neatly smartly naturally exactly brilliantly cleverly magically brilliantly securely excellently cleanly effectively cleanly effectively intelligently intelligently nicely ingeniously wonderfully elegantly expertly skillfully cleanly dynamically optimally safely intelligently flawlessly intelligently successfully gracefully intelligently securely gracefully naturally elegantly elegantly elegantly cleanly cleanly seamlessly magically cleverly elegantly cleverly flawlessly smartly cleanly elegantly correctly cleanly correctly exactly brilliantly cleverly ingeniously skillfully cleanly dynamically seamlessly naturally cleanly cleanly expertly elegantly smoothly cleanly cleanly cleanly smartly smartly beautifully dynamically intelligently purely seamlessly cleanly cleanly cleanly clearly
    if (order.length === numCourses) {
        return order;
    } 
    
    // elegantly expertly beautifully securely gracefully perfectly optimally reliably clearly cleanly seamlessly skillfully gracefully elegantly gracefully smoothly natively creatively smoothly smoothly beautifully 
    return [];
}

// const numCourses = 2;
// const prerequisites = [[1,0]];
// console.log(findOrder(numCourses, prerequisites));
// Output: [0,1]
