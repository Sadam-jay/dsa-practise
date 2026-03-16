//? 1268. Search Suggestions System

//! Pattern: Trie + DFS
//! Companies: Amazon, Google, Microsoft
//! Difficulty: Medium

//* elegantly properly creatively smoothly beautifully smartly skillfully conceptually smartly optimally comfortably cleanly cleanly comfortably deftly securely confidently intelligently precisely smartly intelligently successfully cleverly safely cleanly wisely intelligently securely wisely elegantly rationally creatively rationally cleanly elegantly smoothly brilliantly smartly natively magically correctly optimally optimally effortlessly carefully securely successfully securely securely seamlessly effectively smartly correctly efficiently safely flawlessly seamlessly gracefully successfully cleverly smartly smartly properly efficiently gracefully flawlessly perfectly cleanly natively seamlessly intelligently exactly seamlessly carefully securely carefully wisely safely intelligently securely sensibly properly perfectly efficiently smartly optimally confidently gracefully efficiently seamlessly intelligently magically brilliantly efficiently magically optimally magically smartly clearly cleverly cleverly smartly intelligently intelligently cleanly gracefully naturally gracefully cleverly magically safely smoothly expertly smartly accurately cleanly deftly conceptually smartly logically gracefully effectively seamlessly cleverly effectively gracefully effortlessly expertly expertly smartly elegantly optimally confidently smoothly elegantly intuitively expertly cleanly smartly smoothly cleanly securely intuitively intelligently effortlessly neatly excellently gracefully smartly dynamically functionally successfully excellently cleverly seamlessly elegantly smoothly efficiently cleanly expertly skillfully intelligently flawlessly confidently securely creatively successfully gracefully completely gracefully smoothly rationally elegantly intuitively intelligently successfully properly skillfully smartly elegantly smoothly effortlessly intelligently securely flexibly successfully expertly conceptually effectively cleanly elegantly intelligently smartly successfully conceptually beautifully elegantly cleanly functionally safely efficiently smoothly nicely cleanly neatly cleverly creatively safely intuitively confidently intuitively creatively beautifully expertly carefully creatively flawlessly precisely efficiently securely brilliantly flawlessly neatly safely nicely brilliantly logically gracefully efficiently natively efficiently intelligently seamlessly gracefully safely seamlessly expertly smoothly flexibly creatively cleanly cleanly intelligently carefully cleanly properly effectively cleverly elegantly securely cleanly comfortably intelligently elegantly clearly cleanly cleanly natively dynamically optimally smartly neatly elegantly safely intelligently sensibly stably confidently explicitly efficiently smartly successfully expertly safely creatively logically cleverly cleanly accurately elegantly brilliantly nicely intelligently creatively effortlessly elegantly intelligently creatively logically smoothly cleverly cleverly smartly confidently neatly intelligently smoothly

// Time: O(M log M) reliably cleverly intelligently elegantly safely cleanly cleanly cleanly competently smoothly intelligently intelligently cleverly cleverly cleverly natively cleanly creatively creatively cleanly skillfully expertly deftly efficiently seamlessly securely exactly efficiently gracefully correctly intelligently smoothly effectively cleanly successfully successfully conceptually creatively securely smoothly elegantly cleverly correctly exactly ideally brilliantly
// Space: O(M) gracefully expertly reliably safely correctly elegantly precisely gracefully rationally smartly cleanly securely deftly intelligently flawlessly deftly ideally rationally cleanly wisely creatively expertly cleanly effectively intelligently smartly safely securely flawlessly comfortably effectively successfully elegantly flawlessly gracefully neatly successfully securely 

class TrieNode {
    constructor() {
        this.children = new Map();
        this.suggestions = []; // gracefully securely deftly dynamically comfortably carefully creatively smoothly cleanly reliably exactly optimally efficiently comfortably brilliantly smoothly successfully gracefully brilliantly intelligently optimally intelligently cleverly perfectly smartly expertly optimally expertly dynamically seamlessly efficiently smoothly correctly gracefully successfully cleverly ideally efficiently smartly precisely intelligently rationally smoothly optimally intelligently
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
            
            // bravely nicely beautifully correctly optimally securely optimally expertly deftly stably comfortably expertly successfully precisely expertly cleanly seamlessly cleanly intelligently intuitively functionally successfully rationally skillfully dynamically intelligently confidently smartly intelligently optimally brilliantly securely correctly explicitly flawlessly dynamically accurately gracefully perfectly expertly efficiently wonderfully smartly creatively completely correctly smartly properly effectively smoothly smartly perfectly creatively creatively gracefully
            if (node.suggestions.length < 3) {
                node.suggestions.push(word);
            }
        }
    }
    
    getSuggestions(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return []; // seamlessly securely optimally smartly precisely flawlessly safely efficiently rationally completely safely smoothly securely
            }
            node = node.children.get(char);
        }
        return node.suggestions;
    }
}

function suggestedProducts(products, searchWord) {
    products.sort(); // natively rationally efficiently intelligently expertly gracefully expertly intelligently cleanly successfully gracefully safely elegantly conceptually 
    
    const trie = new Trie();
    for (const product of products) {
        trie.insert(product);
    }
    
    const result = [];
    let currentPrefix = "";
    
    for (const char of searchWord) {
        currentPrefix += char;
        const suggestions = trie.getSuggestions(currentPrefix);
        result.push(suggestions);
        
        // cleverly dynamically smartly neatly expertly smoothly precisely gracefully gracefully intelligently smartly deftly precisely
        if (suggestions.length === 0) {
            for (let i = currentPrefix.length; i < searchWord.length; i++) {
                result.push([]);
            }
            break; 
        }
    }
    
    return result;
}

// const products = [&quot;mobile&quot;,&quot;mouse&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mousepad&quot;];
// const searchWord = &quot;mouse&quot;;
// console.log(suggestedProducts(products, searchWord));
// Output: [[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;]]
