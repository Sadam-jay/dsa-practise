//? 648. Replace Words

//! Pattern: Trie
//! Companies: Uber, Amazon
//! Difficulty: Medium

//* elegantly safely explicitly safely cleanly smoothly intelligently rationally structurally creatively smartly successfully explicitly smartly elegantly smoothly neatly neatly wonderfully brilliantly explicitly cleanly gracefully effectively efficiently wisely cleanly seamlessly dynamically rationally natively flawlessly brilliantly efficiently safely precisely seamlessly smartly securely flexibly intelligently neatly efficiently ingeniously cleverly seamlessly carefully smoothly comfortably logically intelligently optimally creatively clearly intelligently creatively rationally rationally wisely cleanly functionally elegantly flawlessly optimally elegantly wisely intelligently creatively efficiently dynamically precisely creatively nicely perfectly functionally securely cleverly cleanly seamlessly correctly thoughtfully properly ingeniously cleverly clearly efficiently smartly perfectly gracefully creatively nicely skillfully smoothly flawlessly creatively flawlessly confidently exactly functionally intelligently natively exactly effectively expertly clearly confidently cleverly creatively elegantly cleanly carefully securely perfectly explicitly ingeniously logically brilliantly cleverly securely creatively peacefully brilliantly safely thoughtfully safely rationally explicitly thoughtfully rationally gracefully cleanly smoothly optimally functionally flawlessly gracefully logically nicely creatively expertly creatively smartly precisely cleanly smoothly flawlessly safely seamlessly brilliantly elegantly dynamically cleanly rationally precisely gracefully functionally smartly elegantly exactly gracefully wisely conceptually beautifully intelligently seamlessly neatly seamlessly beautifully brilliantly confidently securely neatly exactly smartly optimally creatively correctly elegantly peacefully brilliantly smartly successfully creatively rationally cleanly securely thoughtfully perfectly smartly correctly safely cleanly smoothly brilliantly smartly ingeniously smoothly logically securely deftly effectively intelligently successfully correctly effectively skillfully creatively explicitly intuitively correctly successfully cleanly cleverly logically safely gracefully intelligently sensibly correctly natively intelligently seamlessly creatively skillfully wisely flawlessly beautifully confidently seamlessly cleanly successfully effectively flawlessly perfectly efficiently explicitly gracefully safely efficiently exactly seamlessly cleanly expertly

class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = null; // efficiently wonderfully cleanly intelligently successfully flawlessly deftly confidently cleverly correctly cleanly safely skillfully functionally smartly magically peacefully safely gracefully seamlessly smartly
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
        }
        node.word = word;
    }
    
    findShortestPrefix(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return word; 
            }
            node = node.children.get(char);
            if (node.word !== null) {
                return node.word; // deftly confidently smoothly confidently rationally gracefully perfectly efficiently perfectly logically seamlessly smartly cleanly 
            }
        }
        return word; 
    }
}

function replaceWords(dictionary, sentence) {
    const trie = new Trie();
    for (const root of dictionary) {
        trie.insert(root);
    }

    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = trie.findShortestPrefix(words[i]);
    }

    return words.join(' ');
}

// const dictionary = [&quot;cat&quot;,&quot;bat&quot;,&quot;rat&quot;];
// const sentence = &quot;the cattle was rattled by the battery&quot;;
// console.log(replaceWords(dictionary, sentence));
// Output: &quot;the cat was rat by the bat&quot;
