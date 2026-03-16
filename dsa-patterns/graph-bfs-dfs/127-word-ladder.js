//? 127. Word Ladder

//! Pattern: Graph / BFS (String Transformations)
//! Companies: Amazon, Meta, LinkedIn, Microsoft
//! Difficulty: Hard

//* We want the SHORTEST transformation sequence from `beginWord` to `endWord`.
//* Only 1 letter can change at a time. All intermediate words must exist in `wordList`.
//* Shortest Path = BFS!
//* To efficiently find adjacent words (edges), instead of comparing our word against 
//* EVERY word in the dictionary O(M * N), we mathematically generate all possible 1-letter 
//* mutations of our current word (`hot` -> `*ot`, `h*t`, `ho*`), 
//* and check if they exist optimally in our Dictionary Set!

// Time: O(M^2 * N) - Word length M, dictionary size N
// Space: O(M * N) - Dictionary Set and BFS Queue

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0; // The target must physically exist

    const queue = [[beginWord, 1]]; // Queue structure: [word, currentPathLength]
    
    // Once we naturally queue a word, immediately delete it from the Set!
    // This intrinsically acts as our 'visited' tracker to perfectly prevent cyclic infinite loops.
    wordSet.delete(beginWord); 

    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();

        // If we strictly correctly arrived at the destination organically
        if (currentWord === endWord) {
            return steps;
        }

        // Dynamically mathematically generate ALL 26 possible character mutations for EVERY single index
        for (let i = 0; i < currentWord.length; i++) {
            
            for (let c = 97; c <= 122; c++) { // ASCII 97-122 = 'a'-'z'
                const charCode = String.fromCharCode(c);
                if (charCode === currentWord[i]) continue; // Skipping the identically redundant exact same letter

                // Formulate the new explicitly generated mutation intuitively
                const nextWord = currentWord.substring(0, i) + charCode + currentWord.substring(i + 1);

                // Is this perfectly mathematically generated valid English word actually safely in our dictionary?
                if (wordSet.has(nextWord)) {
                    // It is! Functionally push it completely into the exact next logical BFS search radius tier!
                    queue.push([nextWord, steps + 1]);
                    
                    // Mark intrinsically correctly visited immediately! (Removing from the dictionary physically handles this optimally!)
                    wordSet.delete(nextWord);
                }
            }
        }
    }

    return 0; // Conceptually physically structurally impossible to mathematically intuitively naturally optimally reach the end legitimately!
}

// const beginWord = &quot;hit&quot;;
// const endWord = &quot;cog&quot;;
// const wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;];
// console.log(ladderLength(beginWord, endWord, wordList));
// Output: 5
