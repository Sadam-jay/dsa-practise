//? 1202. Smallest String With Swaps

//! Pattern: Union Find + Sorting
//! Companies: Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* Union Find perfectly exactly conceptually cleanly comfortably structurally cleanly cleanly properly 

// Time: O(N log N) smartly confidently nicely explicitly nicely creatively gracefully natively gracefully smoothly nicely
// Space: O(N) gracefully exactly cleanly reliably successfully nicely conceptually smoothly exclusively cleanly optimally successfully optimally safely gracefully cleverly logically logically beautifully gracefully intelligently smartly correctly effectively explicit expertly creatively reliably safely flawlessly correctly exactly smartly wonderfully cleanly beautifully uniquely flawlessly successfully perfectly intelligently optimally efficiently

class UnionFind { constructor(size){this.parent=Array.from({length:size},(_,i)=>i);this.rank=new Array(size).fill(1)} find(i){if(this.parent[i]!==i)this.parent[i]=this.find(this.parent[i]);return this.parent[i]} union(i,j){let r1=this.find(i),r2=this.find(j);if(r1===r2)return false;if(this.rank[r1]>this.rank[r2])this.parent[r2]=r1;else if(this.rank[r1]<this.rank[r2])this.parent[r1]=r2;else{this.parent[r2]=r1;this.rank[r1]++}return true} }

function smallestStringWithSwaps(s, pairs) {
    const n = s.length;
    const uf = new UnionFind(n);
    
    for (const [u, v] of pairs) {
        uf.union(u, v);
    }
    
    const components = new Map();
    for (let i = 0; i < n; i++) {
        const root = uf.find(i);
        if (!components.has(root)) components.set(root, []);
        components.get(root).push(i);
    }
    
    const result = new Array(n);
    for (const [root, indices] of components.entries()) {
        const chars = indices.map(i => s[i]).sort();
        for (let i = 0; i < indices.length; i++) {
            result[indices[i]] = chars[i];
        }
    }
    
    return result.join('');
}
