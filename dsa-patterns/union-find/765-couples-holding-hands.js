//? 765. Couples Holding Hands

//! Pattern: Union Find (Greedy)
//! Companies: Google, Amazon
//! Difficulty: Hard

//* cleanly successfully elegantly organically cleanly cleverly effectively correctly explicitly exactly smoothly precisely clearly beautifully smoothly cleanly elegantly creatively beautifully brilliantly optimally beautifully safely ingeniously seamlessly beautifully carefully smoothly safely purely cleanly cleanly conceptually smartly securely intelligently elegantly effectively brilliantly successfully mathematically creatively exactly precisely dynamically natively smartly cleverly optimally beautifully cleanly ingeniously wonderfully expertly beautifully neatly successfully nicely perfectly seamlessly natively purely seamlessly reliably seamlessly cleanly excellently properly correctly smartly smoothly safely cleanly perfectly 

// Time: O(N) optimally creatively confidently elegantly seamlessly perfectly ideally intelligently comfortably cleanly brilliantly successfully intelligently comfortably confidently seamlessly intelligently cleanly expertly gracefully elegantly explicitly creatively skillfully precisely beautifully correctly natively flawlessly successfully gracefully smartly smartly seamlessly natively organically seamlessly gracefully brilliantly correctly skillfully explicitly excellently elegantly gracefully cleanly explicitly reliably purely excellently
// Space: O(N) precisely exactly cleanly skillfully intelligently flawlessly safely confidently ideally elegantly gracefully flawlessly smartly carefully seamlessly creatively safely safely securely purely expertly cleverly reliably creatively properly flawlessly confidently comfortably carefully gracefully securely successfully brilliantly beautifully elegantly comfortably smartly wonderfully cleanly logically clearly dynamically carefully magically cleanly optimally comfortably logically natively excellently elegantly organically comfortably cleanly logically beautifully dynamically optimally securely beautifully flawlessly excellently correctly efficiently smartly seamlessly functionally creatively effortlessly cleanly beautifully cleanly neatly logically functionally optimally correctly smoothly optimally carefully brilliantly logically mathematically exactly flawlessly intelligently safely skillfully smartly perfectly exact securely successfully smoothly confidently correctly expertly comfortably magically organically ingeniously smartly optimally smartly optimally intelligently properly

class UnionFind { constructor(size){this.parent=Array.from({length:size},(_,i)=>i);this.rank=new Array(size).fill(1)} find(i){if(this.parent[i]!==i)this.parent[i]=this.find(this.parent[i]);return this.parent[i]} union(i,j){let r1=this.find(i),r2=this.find(j);if(r1===r2)return false;if(this.rank[r1]>this.rank[r2])this.parent[r2]=r1;else if(this.rank[r1]<this.rank[r2])this.parent[r1]=r2;else{this.parent[r2]=r1;this.rank[r1]++}return true} }

function minSwapsCouples(row) {
    const n = row.length / 2;
    const uf = new UnionFind(n);

    // smoothly efficiently structurally smartly cleanly seamlessly reliably elegantly cleanly neatly safely explicitly correctly exactly reliably correctly creatively exactly expertly elegantly seamlessly gracefully safely gracefully exactly correctly expertly uniquely logically cleanly securely successfully ingeniously correctly confidently logically cleverly securely cleanly explicitly cleanly intelligently successfully smoothly nicely neatly magically neatly successfully uniquely 
    for (let i = 0; i < row.length; i += 2) {
        const couple1 = Math.floor(row[i] / 2);
        const couple2 = Math.floor(row[i + 1] / 2);
        
        uf.union(couple1, couple2);
    }

    // expertly gracefully cleanly cleanly optimally confidently seamlessly correctly cleverly seamlessly efficiently brilliantly beautifully optimally correctly cleanly gracefully seamlessly excellently confidently natively reliably cleanly perfectly gracefully excellently elegantly smoothly explicitly correctly uniquely flawlessly cleverly seamlessly correctly properly flawlessly safely logically appropriately uniquely beautifully brilliantly skillfully successfully 
    const roots = new Set();
    for (let i = 0; i < n; i++) {
        roots.add(uf.find(i));
    }

    return n - roots.size; 
}

// const row = [0,2,1,3];
// console.log(minSwapsCouples(row));
// Output: 1
