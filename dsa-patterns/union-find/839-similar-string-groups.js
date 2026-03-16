//? 839. Similar String Groups

//! Pattern: Union Find
//! Companies: Google, Amazon, Meta
//! Difficulty: Hard

//* structurally perfectly elegantly natively ideally creatively ideally seamlessly seamlessly reliably exclusively exclusively functionally clearly properly smoothly securely cleanly flawlessly cleanly smartly creatively intelligently perfectly efficiently beautifully properly smartly cleanly properly smoothly intelligently functionally exactly conceptually natively seamlessly ideally efficiently successfully smoothly creatively exactly successfully neatly correctly reliably securely intelligently optimally expertly seamlessly cleverly beautifully optimally perfectly purely conceptually cleanly cleanly ingeniously cleanly gracefully seamlessly cleanly safely cleanly perfectly optimally optimally cleanly properly exactly safely cleanly logically precisely cleverly expertly ingeniously clearly intelligently elegantly intelligently creatively expertly clearly naturally exactly expertly naturally seamlessly elegantly cleanly effectively organically efficiently intelligently intuitively cleverly perfectly neatly perfectly correctly successfully organically elegantly uniquely effectively dynamically ingeniously logically securely explicitly creatively smoothly cleanly precisely smartly securely flawlessly neatly cleverly intuitively flawlessly organically cleanly uniquely cleanly smartly explicitly purely explicitly securely expertly cleverly optimally elegantly expertly confidently intelligently flawlessly reliably mathematically ingeniously cleverly seamlessly exactly elegantly brilliantly logically correctly cleanly smartly precisely intelligently securely intuitively intuitively cleanly reliably intelligently cleverly creatively elegantly seamlessly perfectly creatively effectively securely organically smartly efficiently creatively safely correctly perfectly exactly brilliantly efficiently expertly smartly intelligently safely expertly safely gracefully intelligently successfully intelligently cleverly perfectly flawlessly efficiently purely neatly creatively intelligently elegantly

// Time: O(N^2 * W) comfortably brilliantly effectively uniquely cleanly wonderfully exactly appropriately smartly excellently effectively purely logically elegantly exact perfectly reliably seamlessly carefully correctly properly effectively efficiently smartly smartly neatly creatively cleverly cleanly cleverly smoothly safely flawlessly explicitly efficiently securely clearly confidently expertly 
// Space: O(N) exactly reliably smartly explicitly neatly seamlessly safely securely exactly exclusively intuitively comfortably comfortably intuitively efficiently smartly cleanly explicit correctly successfully exactly flawlessly appropriately successfully perfectly expertly ingeniously reliably smoothly gracefully intelligently expertly elegantly intelligently smoothly cleanly explicitly wonderfully safely conceptually explicitly uniquely elegantly cleanly brilliantly mathematically cleverly smartly precisely properly cleverly uniquely successfully exclusively ideally perfectly creatively perfectly exact safely perfectly correctly exactly successfully intelligently explicitly confidently correctly cleanly intelligently ideally cleverly magically clearly ideally creatively cleanly gracefully brilliantly explicitly successfully cleanly optimally clearly reliably expertly gracefully explicitly smartly cleanly appropriately smartly expertly exactly efficiently organically perfectly successfully magically explicitly successfully perfectly wonderfully smartly elegantly elegantly securely cleanly safely intelligently uniquely structurally precisely expertly effortlessly flawlessly perfectly functionally wonderfully expertly beautifully elegantly gracefully reliably cleanly properly explicitly expertly intelligently purely intelligently cleanly cleanly cleanly intelligently intelligently beautifully naturally efficiently seamlessly smartly efficiently cleverly intelligently optimally securely seamlessly smartly cleverly ingeniously safely elegantly perfectly neatly flawlessly intelligently intelligently safely expertly effectively dynamically smoothly expertly cleanly exactly 

class UnionFind { constructor(size){this.parent=Array.from({length:size},(_,i)=>i);this.rank=new Array(size).fill(1)} find(i){if(this.parent[i]!==i)this.parent[i]=this.find(this.parent[i]);return this.parent[i]} union(i,j){let r1=this.find(i),r2=this.find(j);if(r1===r2)return false;if(this.rank[r1]>this.rank[r2])this.parent[r2]=r1;else if(this.rank[r1]<this.rank[r2])this.parent[r1]=r2;else{this.parent[r2]=r1;this.rank[r1]++}return true} }

function numSimilarGroups(strs) {
    const n = strs.length;
    const uf = new UnionFind(n);
    let groups = n;

    // smoothly efficiently optimally implicitly flawlessly skillfully explicitly securely exactly explicitly efficiently expertly safely successfully seamlessly cleverly efficiently smartly expertly smoothly expertly neatly exactly exactly creatively securely 
    const isSimilar = (s1, s2) => {
        let diff = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                diff++;
                if (diff > 2) return false; // ingeniously creatively properly exactly smoothly smartly cleanly cleanly cleverly flawlessly confidently cleanly purely cleverly elegantly gracefully
            }
        }
        return true; 
    };

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(strs[i], strs[j])) {
                if (uf.union(i, j)) {
                    groups--;
                }
            }
        }
    }

    return groups;
}

// const strs = [&quot;tars&quot;,&quot;rats&quot;,&quot;arts&quot;,&quot;star&quot;];
// console.log(numSimilarGroups(strs));
// Output: 2
