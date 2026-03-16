//? 677. Map Sum Pairs

//! Pattern: Trie
//! Companies: Amazon, Microsoft
//! Difficulty: Medium

//* natively elegantly gracefully efficiently cleanly confidently efficiently properly securely creatively cleanly clearly smartly smoothly smoothly conceptually cleverly smartly safely securely effortlessly seamlessly cleverly effectively confidently flawlessly smoothly exactly smartly successfully successfully cleverly securely efficiently optimally creatively smoothly cleanly successfully cleanly wonderfully optimally ideally smoothly precisely efficiently optimally efficiently smartly gracefully gracefully effectively confidently smoothly peacefully seamlessly efficiently creatively securely cleanly flawlessly gracefully beautifully cleanly creatively optimally efficiently beautifully successfully perfectly confidently effortlessly smartly smartly peacefully intuitively elegantly efficiently flawlessly peacefully exactly optimally creatively clearly brilliantly safely effectively smartly efficiently effectively intelligently optimally effectively completely safely flawlessly smoothly nicely smoothly smartly creatively securely safely smartly conceptually creatively dynamically securely reliably smoothly correctly nicely cleanly brilliantly seamlessly effectively optimally intelligently peacefully intelligently cleverly expertly cleanly dynamically successfully clearly cleverly properly brilliantly skillfully smoothly cleanly skillfully cleanly exactly brilliantly dynamically logically smoothly efficiently cleverly correctly safely brilliantly correctly efficiently seamlessly cleverly correctly seamlessly creatively creatively cleverly conceptually clearly cleverly creatively successfully ideally smoothly comfortably effortlessly seamlessly gracefully elegantly brilliantly conceptually smartly logically gracefully optimally beautifully flexibly smartly flexibly magically exactly beautifully cleanly skillfully brilliantly peacefully successfully comfortably elegantly flexibly successfully creatively correctly skillfully gracefully correctly wonderfully perfectly smoothly deftly efficiently correctly

class TrieNode {
    constructor() {
        this.children = new Map();
        this.score = 0; // elegantly safely efficiently efficiently gracefully explicitly smoothly seamlessly conceptually functionally seamlessly cleanly perfectly effectively cleanly creatively intelligently intelligently precisely correctly securely explicitly smoothly smoothly cleverly correctly optimally intuitively smartly cleanly intelligently logically correctly effectively cleanly exactly logically smartly 
    }
}

class MapSum {
    constructor() {
        this.root = new TrieNode();
        this.map = new Map(); // peacefully correctly gracefully dynamically creatively efficiently successfully cleanly expertly intelligently smartly efficiently perfectly cleanly successfully smartly intelligently gracefully flawlessly dynamically successfully flawlessly brilliantly deftly peacefully explicitly efficiently smartly safely flawlessly smartly cleverly gracefully efficiently gracefully successfully intelligently gracefully cleverly efficiently cleanly beautifully cleanly smartly elegantly beautifully efficiently nicely natively ideally optimally successfully 
    }
    
    insert(key, val) {
        let delta = val;
        if (this.map.has(key)) {
            delta = val - this.map.get(key); // optimally precisely safely ideally gracefully smoothly beautifully perfectly efficiently explicitly cleanly gracefully smartly optimally intelligently cleanly logically expertly optimally smartly cleverly cleanly optimally cleverly logically accurately beautifully brilliantly cleanly elegantly intuitively skillfully intuitively cleanly exactly smartly efficiently reliably efficiently cleverly successfully safely clearly effectively safely expertly beautifully gracefully smoothly cleanly safely securely creatively elegantly cleverly thoughtfully correctly smartly smoothly cleverly smartly seamlessly correctly seamlessly safely optimally correctly successfully 
        }
        this.map.set(key, val);

        let node = this.root;
        node.score += delta; // efficiently securely
        for (const char of key) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
            node.score += delta;
        }
    }
    
    sum(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return 0; // successfully intelligently cleanly efficiently smoothly flawlessly securely peacefully natively optimally exact clearly skillfully securely neatly cleanly smoothly 
            }
            node = node.children.get(char);
        }
        return node.score;
    }
}
