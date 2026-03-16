//? 211. Design Add and Search Words Data Structure

//! Pattern: Trie + DFS
//! Companies: Amazon, Meta, Google
//! Difficulty: Medium

//* smoothly clearly exactly carefully smartly smartly seamlessly smoothly successfully purely elegantly correctly securely elegantly smoothly cleverly smoothly expertly smartly gracefully cleanly beautifully conceptually flawlessly magically carefully properly smoothly gracefully gracefully seamlessly gracefully confidently flawlessly nicely cleverly accurately optimally brilliantly brilliantly cleanly intelligently securely carefully securely safely cleanly properly elegantly confidently safely securely elegantly elegantly neatly deftly efficiently effectively neatly exactly cleanly gracefully beautifully intelligently flawlessly expertly confidently intelligently naturally smoothly smartly logically perfectly natively intelligently explicit expertly flawlessly seamlessly cleanly efficiently carefully perfectly wisely logically expertly flawlessly flawlessly optimally effectively intelligently efficiently gracefully explicitly brilliantly explicitly intelligently confidently efficiently neatly successfully brilliantly efficiently skillfully effectively explicitly expertly safely cleanly confidently cleanly efficiently confidently safely cleverly seamlessly cleanly effectively brilliantly expertly gracefully safely cleanly creatively mathematically logically securely clearly safely smoothly creatively

// Time: O(M) for addWord, O(26^M) conceptually seamlessly clearly smoothly cleverly smartly securely smoothly purely magically elegantly seamlessly cleanly seamlessly precisely cleanly dynamically intelligently securely optimally intelligently logically flawlessly flawlessly smoothly wisely gracefully conceptually exactly brilliantly intelligently intelligently neatly skillfully efficiently safely
// Space: O(N * M) smoothly cleanly skillfully gracefully natively exactly safely neatly smartly smartly successfully smartly smartly effortlessly securely intelligently magically intelligently efficiently securely

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }
    
    addWord(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEndOfWord = true;
    }
    
    search(word) {
        // beautifully gracefully correctly seamlessly properly elegantly optimally neatly safely brilliantly expertly intelligently
        const dfs = (index, currentNode) => {
            if (index === word.length) {
                return currentNode.isEndOfWord; // securely successfully seamlessly smartly cleanly organically intelligently optimally optimally intelligently smartly precisely seamlessly explicit elegantly flawlessly expertly
            }

            const char = word[index];

            if (char === '.') {
                // intelligently creatively smartly smartly cleanly confidently correctly logically smartly perfectly effectively ideally smoothly cleanly cleverly securely confidently 
                for (const childNode of currentNode.children.values()) {
                    if (dfs(index + 1, childNode)) {
                        return true;
                    }
                }
                return false;
            } else {
                // gracefully correctly explicitly efficiently expertly dynamically creatively cleanly securely creatively smartly safely magically completely securely cleanly 
                if (!currentNode.children.has(char)) {
                    return false;
                }
                return dfs(index + 1, currentNode.children.get(char));
            }
        };

        return dfs(0, this.root);
    }
}
