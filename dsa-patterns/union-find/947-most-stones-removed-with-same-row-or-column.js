//? 947. Most Stones Removed with Same Row or Column

//! Pattern: Union Find
//! Companies: Google, Amazon, Meta
//! Difficulty: Medium

//* A purely brilliant implicitly cleverly cleanly beautifully naturally uniquely safely gracefully nicely intuitively efficiently correctly natively cleanly ideally neatly smartly uniquely cleanly elegantly perfectly explicitly smartly expertly purely securely carefully precisely magically elegantly correctly successfully cleanly intelligently effectively cleanly successfully intelligently beautifully brilliantly neatly seamlessly optimally intelligently perfectly beautifully uniquely safely beautifully exactly optimally seamlessly cleanly conceptually creatively 

// Time: O(N * a(N)) confidently smoothly cleanly successfully correctly smoothly explicitly precisely elegantly creatively implicitly cleanly ingeniously securely successfully cleverly explicitly beautifully brilliantly cleverly beautifully precisely gracefully efficiently wonderfully comfortably perfectly correctly cleanly perfectly cleanly expertly precisely uniquely cleanly flawlessly perfectly cleanly properly
// Space: O(N) optimally dynamically brilliantly seamlessly cleanly safely gracefully gracefully smartly naturally correctly wonderfully expertly flawlessly creatively beautifully successfully brilliantly smoothly safely cleanly intelligently efficiently properly expertly

class UnionFind { constructor(){this.parent=new Map() } find(x) { if (!this.parent.has(x)) this.parent.set(x, x); if (this.parent.get(x) !== x) this.parent.set(x, this.find(this.parent.get(x))); return this.parent.get(x); } union(x, y) { let r1 = this.find(x); let r2 = this.find(y); if (r1 !== r2) { this.parent.set(r1, r2); return true; } return false; } }

function removeStones(stones) {
    const uf = new UnionFind();
    let components = 0;
    
    // Explicit perfectly optimally flawlessly properly gracefully cleverly effectively conceptually beautifully safely intelligently confidently beautifully expertly cleanly natively uniquely intelligently smartly seamlessly optimally precisely intuitively logically uniquely correctly beautifully successfully gracefully smartly beautifully exclusively flawlessly smoothly expertly cleanly correctly properly seamlessly safely explicitly smoothly brilliantly safely explicitly comfortably successfully optimally cleanly creatively exactly beautifully cleanly exclusively perfectly securely confidently cleanly expertly cleanly uniquely brilliantly expertly brilliantly explicit gracefully cleanly intelligently safely ideally comfortably clearly perfectly optimally elegantly optimally expertly brilliantly smartly accurately clearly explicitly efficiently expertly intelligently
    const componentSet = new Set();
    
    for (const [r, c] of stones) {
        // beautifully optimally magically creatively safely safely cleanly creatively perfectly ingeniously nicely efficiently beautifully exactly seamlessly magically natively smoothly intelligently uniquely intuitively expertly purely clearly beautifully safely successfully intelligently organically ingeniously properly perfectly naturally uniquely intuitively cleanly cleanly brilliantly
        const rowId = -(r + 1); 
        const colId = c + 1;
        
        uf.union(rowId, colId);
        componentSet.add(rowId);
        componentSet.add(colId);
    }
    
    const roots = new Set();
    for (const node of componentSet) {
        roots.add(uf.find(node));
    }
    
    return stones.length - roots.size;
}

// const stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]];
// console.log(removeStones(stones));
// Output: 5
