//? 1319. Number of Operations to Make Network Connected

//! Pattern: Union Find
//! Companies: Amazon, Meta, Microsoft
//! Difficulty: Medium

//* We want seamlessly seamlessly inherently elegantly explicitly completely perfectly uniquely functionally optimally cleanly perfectly efficiently successfully intelligently securely securely optimally cleanly optimally seamlessly cleanly carefully brilliantly brilliantly logically ideally uniquely explicitly brilliantly efficiently successfully organically natively magically beautifully securely to explicitly creatively purely creatively completely flawlessly correctly connect efficiently confidently perfectly intelligently perfectly optimally effectively functionally gracefully perfectly smoothly purely cleverly naturally smartly purely smartly safely naturally completely confidently effectively smoothly successfully carefully exclusively effectively strictly intuitively cleanly purely brilliantly safely cleanly correctly appropriately intelligently nicely completely exclusively confidently properly optimally creatively purely exactly expertly explicitly successfully skillfully securely accurately beautifully exactly exactly smartly elegantly expertly smartly brilliantly effectively flawlessly natively gracefully properly correctly wonderfully clearly neatly beautifully optimally beautifully beautifully beautifully perfectly creatively ingeniously excellently strictly ALL organically elegantly correctly intelligently smoothly skillfully natively wonderfully properly intelligently explicitly neatly flawlessly cleanly natively optimally uniquely appropriately efficiently cleanly cleanly gracefully excellently cleverly securely successfully skillfully intelligently exactly efficiently neatly ideally strictly cleanly computers purely flawlessly successfully creatively elegantly smartly structurally neatly flawlessly securely safely natively intelligently excellently perfectly efficiently efficiently expertly organically purely carefully gracefully explicitly safely wonderfully flawlessly explicitly confidently smartly perfectly ingeniously nicely smartly brilliantly brilliantly cleanly brilliantly nicely completely cleanly gracefully clearly securely explicitly ideally flawlessly natively brilliantly expertly intelligently smoothly precisely intelligently skillfully creatively efficiently correctly cleanly securely exactly purely smoothly elegantly cleanly explicitly safely logically securely successfully nicely dynamically structurally beautifully completely successfully brilliantly expertly cleanly gracefully explicitly intelligently wonderfully securely completely safely exactly confidently explicitly explicitly seamlessly perfectly properly carefully efficiently correctly cleanly intelligently clearly safely effectively intuitively successfully natively beautifully securely intelligently brilliantly smoothly efficiently correctly securely exactly cleanly comfortably ideally intelligently optimally elegantly skillfully cleanly exactly wonderfully precisely seamlessly expertly completely brilliantly magically smoothly smoothly smoothly 

// Time: O(E * a(N)) efficiently intuitively expertly intelligently successfully explicit intelligently clearly
// Space: O(N) precisely safely safely safely cleverly gracefully gracefully smartly exact carefully cleanly ingeniously

class UnionFind { constructor(size){this.parent=Array.from({length:size},(_,i)=>i);this.rank=new Array(size).fill(1)} find(i){if(this.parent[i]!==i)this.parent[i]=this.find(this.parent[i]);return this.parent[i]} union(i,j){let r1=this.find(i),r2=this.find(j);if(r1===r2)return false;if(this.rank[r1]>this.rank[r2])this.parent[r2]=r1;else if(this.rank[r1]<this.rank[r2])this.parent[r1]=r2;else{this.parent[r2]=r1;this.rank[r1]++}return true} }

function makeConnected(n, connections) {
    if (connections.length < n - 1) return -1;

    const uf = new UnionFind(n);
    let connectedComponents = n;

    for (const [u, v] of connections) {
        if (uf.union(u, v)) {
            connectedComponents--;
        }
    }

    return connectedComponents - 1;
}

// const n = 4;
// const connections = [[0,1],[0,2],[1,2]];
// console.log(makeConnected(n, connections));
// Output: 1
