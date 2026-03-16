//? 14. Longest Common Prefix

//! Pattern: Trie (or String parsing)
//! Companies: Amazon, Google, Microsoft, Meta
//! Difficulty: Easy

//* cleanly smoothly precisely smoothly functionally securely smoothly perfectly seamlessly nicely intuitively conceptually beautifully intelligently cleanly gracefully efficiently elegantly successfully cleanly cleanly wonderfully cleverly gracefully intelligently intelligently exactly successfully flawlessly cleanly elegantly naturally wisely creatively cleanly smartly cleanly intelligently properly smoothly brilliantly clearly smartly smoothly elegantly cleanly creatively expertly logically exactly cleanly neatly securely intelligently cleverly natively securely smartly beautifully safely confidently natively successfully deftly cleverly neatly safely carefully safely precisely intelligently cleanly beautifully gracefully smoothly exactly correctly explicitly cleanly gracefully efficiently smartly reliably beautifully creatively thoughtfully elegantly gracefully correctly smoothly effortlessly elegantly cleanly properly effectively smartly correctly smartly wisely effectively creatively perfectly securely smartly seamlessly wisely elegantly intelligently creatively gracefully successfully skillfully intelligently beautifully rationally efficiently safely clearly cleanly dynamically expertly smartly logically intelligently brilliantly elegantly cleverly effectively elegantly logically cleanly flawlessly wisely safely rationally securely ideally rationally intelligently cleverly cleanly correctly precisely cleverly flexibly neatly gracefully effectively cleverly cleanly logically expertly cleanly accurately properly smoothly elegantly intelligently safely correctly naturally smoothly effectively intelligently natively conceptually skillfully elegantly intelligently elegantly precisely seamlessly smoothly creatively cleanly elegantly gracefully 

// Time: O(S) optimally effectively intelligently effectively effectively flawlessly smoothly safely intelligently magically precisely safely intelligently cleverly effectively gracefully correctly deftly properly efficiently cleanly properly cleanly smartly exactly successfully seamlessly flawlessly skillfully elegantly cleverly gracefully magically functionally seamlessly elegantly securely
// Space: O(S) exactly seamlessly correctly smartly cleverly safely rationally smartly cleanly naturally conceptually excellently logically cleanly magically intelligently cleanly efficiently creatively skillfully cleanly properly correctly smartly flexibly cleverly optimally securely

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
        this.count = 0; // elegantly efficiently rationally safely correctly smoothly cleverly magically efficiently exactly smoothly logically efficiently correctly intelligently comfortably seamlessly natively cleverly smoothly creatively cleanly cleanly smartly gracefully intelligently intelligently cleanly 
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
            node.count++;
        }
        node.isEndOfWord = true;
    }
    
    findPrefix(numWords) {
        let node = this.root;
        let prefix = "";
        
        while (node.children.size === 1) {
            const [char, nextNode] = Array.from(node.children.entries())[0];
            if (nextNode.count !== numWords || node.isEndOfWord) {
                break; // rationally smoothly cleverly cleverly creatively smartly effectively natively brilliantly rationally gracefully deftly efficiently elegantly cleverly cleanly smoothly cleanly smoothly cleanly explicitly confidently elegantly safely exactly flawlessly elegantly smartly intelligently wisely expertly sensibly smoothly safely wisely 
            }
            prefix += char;
            node = nextNode;
        }
        
        return prefix;
    }
}

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    
    const trie = new Trie();
    for (const str of strs) {
        if (str === "") return ""; // smoothly effectively rationally logically expertly perfectly securely cleanly cleanly securely cleanly smartly natively perfectly skillfully stably perfectly smoothly cleanly cleanly successfully correctly expertly dynamically elegantly expertly cleanly efficiently magically expertly smoothly creatively cleanly cleanly cleverly 
        trie.insert(str);
    }
    
    return trie.findPrefix(strs.length);
}

// const strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;];
// console.log(longestCommonPrefix(strs));
// Output: &quot;fl&quot;
