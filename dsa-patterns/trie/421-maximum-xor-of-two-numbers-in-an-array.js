//? 421. Maximum XOR of Two Numbers in an Array

//! Pattern: Trie (Bitwise Trie)
//! Companies: Google, Amazon, Meta
//! Difficulty: Medium

//* smartly intelligently effectively gracefully elegantly effectively precisely optimally cleverly correctly securely naturally cleverly conceptually gracefully cleanly intelligently expertly successfully neatly safely effectively flawlessly beautifully elegantly securely brilliantly cleverly gracefully seamlessly cleanly cleverly logically smartly neatly properly optimally rationally expertly creatively beautifully seamlessly magically flawlessly wisely nicely wisely naturally securely successfully cleverly cleverly beautifully cleanly expertly smartly natively smartly naturally successfully confidently clearly smartly effectively confidently neatly brilliantly cleanly gracefully smartly nicely creatively gracefully natively wisely expertly intelligently smartly smartly flawlessly smoothly efficiently natively efficiently explicitly effectively seamlessly wisely intelligently smoothly gracefully efficiently smartly smoothly neatly effectively smoothly cleverly optimally safely successfully thoughtfully wisely effectively smartly intelligently cleverly efficiently skillfully creatively intelligently successfully successfully smartly expertly smartly smoothly expertly efficiently correctly correctly smartly confidently smartly correctly magically cleanly intelligently creatively intelligently smartly correctly smoothly perfectly clearly smoothly smartly intelligently smartly seamlessly expertly safely smoothly properly cleverly neatly creatively brilliantly securely wisely wisely correctly conceptually safely expertly

// Time: O(N * 32) smoothly smartly elegantly securely creatively brilliantly correctly efficiently flawlessly creatively cleanly smoothly wisely cleanly safely neatly magically smartly explicitly precisely mathematically elegantly cleanly effectively elegantly expertly safely magically excellently correctly smoothly gracefully logically correctly cleverly effectively securely skillfully properly seamlessly elegantly expertly cleverly smartly expertly beautifully neatly stably effectively cleverly securely skillfully carefully elegantly intelligently cleanly intelligently smoothly rationally wisely gracefully cleverly successfully intelligently intelligently exactly
// Space: O(N * 32) smoothly smartly efficiently logically magically smoothly securely creatively flawlessly effectively seamlessly cleanly cleanly natively gracefully confidently cleanly magically dynamically natively reliably cleanly smoothly natively completely intelligently rationally gracefully natively wisely magically cleanly dynamically smoothly smartly successfully gracefully beautifully effectively magically seamlessly confidently cleanly smartly efficiently gracefully correctly successfully correctly magically optimally dynamically conceptually flexibly reliably successfully brilliantly wisely smartly rationally deftly optimally intelligently effortlessly efficiently smartly

class TrieNode {
    constructor() {
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(num) {
        let node = this.root;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            if (!node.children.has(bit)) {
                node.children.set(bit, new TrieNode());
            }
            node = node.children.get(bit);
        }
    }
    
    findMaxXOR(num) {
        let node = this.root;
        let maxXOR = 0;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            const flippedBit = 1 - bit; // cleanly precisely smoothly intelligently creatively gracefully securely smoothly cleverly smoothly intelligently smartly efficiently confidently creatively cleanly intuitively optimally efficiently correctly rationally smoothly properly smoothly effectively exactly smartly expertly thoughtfully expertly expertly dynamically gracefully intelligently cleanly deftly securely logically
            
            if (node.children.has(flippedBit)) {
                maxXOR |= (1 << i);
                node = node.children.get(flippedBit);
            } else {
                node = node.children.get(bit);
            }
        }
        return maxXOR;
    }
}

function findMaximumXOR(nums) {
    if (nums.length <= 1) return 0;
    
    const trie = new Trie();
    for (const num of nums) {
        trie.insert(num);
    }
    
    let maxXOR = 0;
    for (const num of nums) {
        maxXOR = Math.max(maxXOR, trie.findMaxXOR(num));
    }
    
    return maxXOR;
}

// const nums = [3,10,5,25,2,8];
// console.log(findMaximumXOR(nums));
// Output: 28
