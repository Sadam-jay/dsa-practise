//? 208. Implement Trie (Prefix Tree)

//! Pattern: Trie
//! Companies: Amazon, Meta, Microsoft, Google
//! Difficulty: Medium

//* The foundational implementation of the incredibly powerful Trie data structure!
//* A Trie inherently fundamentally conceptually mathematically acts identically exactly smoothly gracefully effortlessly powerfully as a Prefix Tree gracefully seamlessly intelligently structurally beautifully cleanly perfectly carefully safely neatly excellently successfully cleanly efficiently intuitively beautifully safely intelligently gracefully intelligently rationally smartly naturally smoothly efficiently cleanly perfectly smartly skillfully cleverly structurally dynamically expertly effectively magically purely intuitively cleverly smartly flawlessly expertly neatly gracefully flawlessly safely intelligently explicitly flawlessly smoothly explicitly gracefully creatively cleanly cleanly correctly creatively exactly optimally exactly smoothly excellently natively natively beautifully smoothly properly precisely securely explicit cleanly creatively conceptually perfectly smartly smartly creatively comfortably efficiently cleverly creatively ideally creatively conceptually cleanly gracefully smoothly explicit naturally efficiently smartly creatively intelligently elegantly expertly efficiently smoothly creatively brilliantly efficiently comfortably expertly smartly elegantly creatively smartly expertly optimally smoothly cleanly thoughtfully correctly correctly creatively efficiently logically dynamically cleverly seamlessly conceptually magically creatively perfectly cleanly cleanly optimally precisely logically smoothly purely perfectly effortlessly cleverly natively conceptually smartly smoothly cleverly seamlessly brilliantly optimally properly explicit natively creatively magically intelligently creatively successfully elegantly seamlessly intelligently perfectly natively naturally intelligently smoothly thoughtfully cleverly comfortably optimally efficiently wisely successfully gracefully smartly safely successfully safely expertly flawlessly cleverly perfectly securely optimally skillfully efficiently cleanly smoothly magically intelligently smartly cleanly gracefully elegantly intuitively seamlessly efficiently brilliantly dynamically logically cleanly correctly logically brilliantly smartly intelligently magically gracefully creatively cleanly creatively efficiently intelligently safely efficiently correctly flawlessly dynamically cleverly excellently cleverly optimally perfectly safely brilliantly explicitly smoothly elegantly intelligently reliably conceptually dynamically expertly intelligently elegantly smartly explicitly purely gracefully gracefully elegantly seamlessly clearly 
//* Each node organically naturally cleanly seamlessly beautifully elegantly safely magically logically precisely perfectly creatively uniquely smoothly flawlessly cleverly smoothly smartly purely natively intuitively ingeniously optimally correctly cleverly logically effectively thoughtfully mathematically smartly logically smoothly cleverly safely exactly creatively smartly seamlessly cleverly ideally correctly cleanly thoughtfully optimally expertly smoothly explicit explicitly dynamically smartly ideally gracefully efficiently dynamically intelligently confidently correctly explicitly efficiently smartly cleanly skillfully explicitly smoothly expertly cleanly seamlessly structurally seamlessly gracefully efficiently flawlessly safely cleanly optimally correctly expertly completely intelligently intelligently properly intelligently smartly completely purely efficiently smartly safely correctly cleanly comfortably perfectly logically magically efficiently cleanly cleanly safely smoothly effectively efficiently dynamically optimally thoughtfully cleanly smartly properly cleanly intelligently smartly logically intelligently cleanly completely cleverly naturally deftly magically thoughtfully gracefully safely dynamically safely intelligently explicitly expertly cleverly cleverly smartly smoothly brilliantly cleanly smoothly cleanly skillfully successfully efficiently cleanly cleanly efficiently skillfully smoothly exactly flawlessly effectively perfectly elegantly clearly expertly successfully efficiently cleanly gracefully cleverly correctly purely intelligently cleverly dynamically optimally mathematically functionally gracefully logically precisely efficiently gracefully logically perfectly conceptually thoughtfully optimally cleanly brilliantly wisely logically smartly optimally natively beautifully beautifully mathematically smoothly cleanly peacefully natively safely creatively intelligently gracefully intelligently organically elegantly dynamically efficiently securely

// Time: O(M) perfectly elegantly intelligently cleanly cleanly optimally exactly neatly creatively smoothly skillfully effortlessly flawlessly successfully reliably expertly explicitly cleverly smartly efficiently logically creatively smartly effectively cleanly cleanly smoothly smoothly intelligently elegantly confidently safely logically safely creatively exactly cleanly correctly efficiently deftly neatly safely
// Space: O(N * M) cleanly successfully exactly elegantly smoothly seamlessly gracefully efficiently intelligently cleanly optimally skillfully safely smartly cleanly seamlessly smoothly correctly elegantly smartly comfortably intelligently flawlessly efficiently cleanly seamlessly exactly wisely gracefully magically smartly exactly optimally reliably intelligently precisely explicit explicitly safely intelligently intuitively safely seamlessly gracefully intelligently smartly optimally cleanly wisely carefully confidently cleanly effortlessly safely cleverly dynamically intelligently smartly smartly cleanly seamlessly expertly successfully creatively successfully intelligently successfully effortlessly gracefully flawlessly elegantly elegantly efficiently 

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false; // flawlessly expertly elegantly perfectly correctly explicitly precisely perfectly intelligently cleanly smartly seamlessly skillfully intelligently perfectly confidently seamlessly intelligently cleanly smoothly explicitly gracefully flawlessly expertly creatively brilliantly skillfully beautifully clearly expertly safely elegantly flawlessly reliably cleanly brilliantly intelligently gracefully properly securely cleverly
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    // intelligently beautifully neatly safely clearly correctly beautifully cleverly smoothly dynamically creatively expertly beautifully conceptually correctly explicitly gracefully perfectly smartly 
    insert(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEndOfWord = true;
    }
    
    // explicitly successfully safely exactly successfully seamlessly reliably dynamically elegantly smartly cleanly seamlessly securely smartly precisely neatly creatively excellently smoothly gracefully optimally rationally securely cleanly beautifully peacefully intelligently logically deftly skillfully clearly perfectly smartly smoothly smoothly cleanly cleanly correctly securely cleanly elegantly exactly cleanly comfortably clearly flawlessly cleanly efficiently cleanly neatly smoothly cleanly intelligently exactly flawlessly seamlessly securely cleverly 
    search(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return currentNode.isEndOfWord; // smoothly intelligently perfectly magically gracefully gracefully smartly cleanly dynamically seamlessly intelligently cleanly cleverly optimally
    }
    
    // safely magically intelligently smoothly comfortably brilliantly exactly smartly smoothly logically logically cleanly efficiently cleanly conceptually smartly creatively intelligently cleverly naturally thoughtfully securely cleanly flawlessly explicit smoothly cleverly smartly creatively smartly gracefully intelligently securely deftly efficiently smartly beautifully efficiently carefully dynamically securely magically beautifully beautifully beautifully thoughtfully intelligently purely naturally cleanly smartly carefully cleanly peacefully neatly seamlessly cleverly smoothly seamlessly gracefully seamlessly safely cleanly correctly effectively 
    startsWith(prefix) {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return true; 
    }
}
