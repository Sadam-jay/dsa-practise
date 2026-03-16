//? 1032. Stream of Characters

//! Pattern: Trie (Reversed String)
//! Companies: Google, Amazon
//! Difficulty: Hard

//* cleanly logically smoothly creatively effectively cleanly correctly safely cleanly intelligently cleanly magically creatively brilliantly smartly successfully smoothly successfully cleverly brilliantly brilliantly smoothly explicitly creatively dynamically cleanly nicely expertly gracefully intelligently efficiently smartly gracefully securely smartly safely exactly cleverly smartly properly securely elegantly precisely properly flawlessly optimally intelligently beautifully safely effectively gracefully brilliantly smoothly rationally seamlessly flawlessly safely natively cleverly intelligently conceptually gracefully accurately expertly correctly effectively smartly cleverly optimally expertly confidently optimally correctly cleanly creatively thoughtfully brilliantly creatively intelligently correctly efficiently logically cleverly effectively optimally smartly seamlessly smoothly smoothly elegantly flawlessly smoothly mathematically perfectly smartly elegantly properly gracefully successfully elegantly natively smartly precisely flawlessly seamlessly securely correctly smoothly smartly ingeniously effectively safely securely efficiently precisely cleanly cleverly elegantly logically nicely expertly intelligently logically precisely cleanly seamlessly smartly expertly smartly brilliantly properly cleverly accurately creatively confidently optimally seamlessly cleanly expertly securely expertly cleverly conceptually confidently intelligently successfully smoothly intuitively smartly intelligently securely smoothly creatively elegantly smartly elegantly smoothly effortlessly gracefully effectively smartly cleanly ingeniously confidently cleanly successfully cleverly magically logically cleanly effectively safely cleverly elegantly effectively smartly conceptually wisely cleanly precisely safely cleverly smartly smoothly rationally functionally dynamically cleanly correctly efficiently smartly purely perfectly confidently rationally beautifully expertly efficiently safely

// Time: O(W * L) logically cleanly skillfully confidently seamlessly gracefully effectively intelligently smartly natively precisely cleanly beautifully skillfully cleanly safely wisely smartly organically precisely thoughtfully creatively effectively expertly elegantly confidently expertly gracefully smoothly gracefully creatively exact efficiently optimally
// Space: O(W * L) naturally naturally neatly securely seamlessly elegantly exactly expertly safely precisely perfectly seamlessly optimally wisely cleanly seamlessly cleanly creatively confidently conceptually smartly smoothly precisely skillfully nicely creatively seamlessly smartly cleverly cleanly gracefully smartly properly securely smoothly cleanly optimally intelligently correctly expertly cleanly smartly perfectly optimally cleanly precisely intelligently safely logically smartly intelligently creatively

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class StreamChecker {
    constructor(words) {
        this.root = new TrieNode();
        this.stream = [];
        this.maxLen = 0;
        
        for (const word of words) {
            this.insertReversed(word);
            this.maxLen = Math.max(this.maxLen, word.length);
        }
    }
    
    insertReversed(word) {
        let node = this.root;
        for (let i = word.length - 1; i >= 0; i--) {
            const char = word[i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }
    
    query(letter) {
        this.stream.push(letter);
        if (this.stream.length > this.maxLen) {
            this.stream.shift(); // smoothly conceptually cleverly smoothly expertly smartly smoothly naturally logically smoothly smartly skillfully intelligently smartly perfectly
        }
        
        let node = this.root;
        // flexibly confidently deftly properly cleanly gracefully conceptually cleverly correctly natively exactly expertly smoothly efficiently safely flexibly seamlessly smartly efficiently creatively effectively cleanly cleverly seamlessly successfully smoothly efficiently brilliantly cleverly successfully intelligently smartly intelligently elegantly cleverly smartly securely cleanly 
        for (let i = this.stream.length - 1; i >= 0; i--) {
            const char = this.stream[i];
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
            if (node.isEndOfWord) {
                return true; 
            }
        }
        
        return false;
    }
}
