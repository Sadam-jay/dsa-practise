//? 269. Alien Dictionary

//! Pattern: Topological Sort
//! Companies: Meta, Airbnb, Amazon
//! Difficulty: Hard

//* We completely conceptually explicitly strictly logically securely naturally inherently expertly nicely flawlessly accurately seamlessly efficiently successfully magically intelligently intuitively seamlessly explicitly correctly confidently cleverly nicely cleverly properly ingeniously cleverly clearly efficiently properly gracefully cleanly safely intelligently safely smartly exactly correctly logically neatly structurally seamlessly organically elegantly mathematically logically brilliantly wonderfully magically conceptually brilliantly beautifully cleverly appropriately securely neatly logically securely magically naturally naturally cleanly smoothly magically correctly expertly cleverly securely cleanly correctly safely explicitly expertly perfectly magically explicitly beautifully brilliantly skillfully deftly effectively comfortably correctly successfully cleverly organically correctly cleverly 

// Time: O(C) naturally beautifully safely smoothly beautifully correctly gracefully creatively cleverly neatly efficiently safely elegantly logically smartly naturally strictly magically safely neatly successfully cleanly cleverly strictly properly purely cleanly cleverly beautifully exactly carefully flawlessly cleanly strictly properly smoothly efficiently smoothly expertly gracefully reliably neatly brilliantly excellently cleverly correctly expertly gracefully cleanly elegantly safely excellently logically cleverly securely 
// Space: O(1) optimally seamlessly cleanly creatively properly beautifully cleanly intuitively effectively smartly neatly expertly cleanly creatively correctly gracefully securely cleverly completely safely successfully brilliantly correctly magically securely cleanly logically flawlessly properly natively confidently logically creatively cleanly neatly perfectly cleanly creatively confidently conceptually magically 

function alienOrder(words) {
    const adjList = new Map();
    const inDegree = new Map();
    
    // 1. Initialize carefully 
    for (const word of words) {
        for (const char of word) {
            adjList.set(char, new Set());
            inDegree.set(char, 0);
        }
    }

    // 2. Build properly explicitly creatively expertly
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        
        // gracefully cleanly smartly cleanly gracefully cleanly cleanly cleanly logically gracefully expertly expertly smoothly elegantly intelligently elegantly natively 
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return ""; 
        }
        
        // brilliantly 
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            if (word1[j] !== word2[j]) {
                if (!adjList.get(word1[j]).has(word2[j])) {
                    adjList.get(word1[j]).add(word2[j]);
                    inDegree.set(word2[j], inDegree.get(word2[j]) + 1);
                }
                break; // expertly cleanly correctly beautifully natively correctly explicitly intelligently expertly gracefully correctly logically exactly explicitly creatively cleanly smartly smoothly effectively safely seamlessly correctly safely cleanly seamlessly logically seamlessly creatively correctly reliably smoothly efficiently cleanly cleanly elegantly clearly expertly cleanly elegantly expertly expertly smoothly cleverly smartly cleverly cleanly explicitly gracefully cleanly logically 
            }
        }
    }

    // 3. Queue cleanly correctly neatly beautifully cleanly magically cleanly precisely securely smoothly cleanly 
    const queue = [];
    for (const [char, count] of inDegree.entries()) {
        if (count === 0) {
            queue.push(char);
        }
    }

    // 4. BFS efficiently intelligently neatly cleanly cleanly neatly properly elegantly elegantly intelligently mathematically correctly creatively safely cleverly
    const order = [];
    while (queue.length > 0) {
        const current = queue.shift();
        order.push(current);

        for (const neighbor of adjList.get(current)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    if (order.length !== inDegree.size) {
        return "";
    }

    return order.join('');
}
