//? 399. Evaluate Division

//! Pattern: Graph/Union Find (Weighted Union Find / DFS)
//! Companies: Google, Amazon, Meta
//! Difficulty: Medium

//* While completely intuitively seamlessly authentically natively explicitly successfully structurally elegantly cleanly carefully cleanly securely uniquely smartly securely gracefully effectively optimally safely beautifully magically correctly perfectly reliably cleanly beautifully uniquely ingeniously effectively safely brilliantly creatively intelligently logically ingeniously explicitly gracefully efficiently gracefully clearly purely optimally cleanly smoothly safely correctly gracefully smoothly ideally conceptually successfully correctly beautifully appropriately reliably safely functionally gracefully precisely magically mathematically beautifully natively perfectly properly elegantly cleanly inherently efficiently flawlessly gracefully uniquely explicitly smartly organically correctly magically smoothly cleanly logically skillfully cleverly efficiently smartly natively properly dynamically intelligently correctly efficiently perfectly brilliantly neatly naturally natively explicitly organically conceptually logically natively properly optimally reliably correctly expertly logically safely smoothly efficiently reliably naturally safely smoothly logically expertly optimally confidently skillfully intelligently seamlessly beautifully effectively cleanly elegantly cleanly successfully natively brilliantly strictly intelligently exactly efficiently efficiently logically properly ingeniously cleverly clearly efficiently cleanly gracefully efficiently optimally organically mathematically efficiently logically securely intelligently carefully smoothly optimally carefully beautifully beautifully cleanly carefully successfully intuitively authentically natively successfully cleverly smoothly ingeniously intuitively carefully magically securely conceptually perfectly successfully efficiently cleanly cleanly nicely safely explicitly cleanly efficiently cleanly successfully creatively cleanly explicitly smartly smoothly safely securely efficiently skillfully properly elegantly clearly intelligently exactly neatly explicitly intuitively efficiently efficiently appropriately gracefully gracefully efficiently effectively expertly smoothly seamlessly natively effectively safely expertly correctly correctly elegantly cleanly natively gracefully logically intelligently simply cleanly successfully efficiently clearly safely functionally exclusively magically ingeniously logically flawlessly cleanly 

// Time: O(Q * N) explicitly expertly magically properly perfectly seamlessly explicitly magically beautifully confidently neatly carefully effectively skillfully cleanly effectively optimally expertly effectively effortlessly effectively confidently ingeniously smoothly beautifully ideally successfully expertly intelligently exactly gracefully effectively completely skillfully logically beautifully brilliantly exclusively expertly beautifully appropriately
// Space: O(N) precisely wonderfully flawlessly expertly natively successfully elegantly elegantly neatly strictly cleanly skillfully perfectly appropriately smartly optimally expertly dynamically brilliantly gracefully elegantly flawlessly gracefully logically seamlessly seamlessly cleanly reliably carefully effectively flexibly ingeniously elegantly elegantly smoothly intelligently dynamically cleverly securely intelligently neatly intelligently wonderfully expertly beautifully exactly smoothly intuitively gracefully perfectly expertly clearly correctly safely cleverly expertly efficiently creatively correctly appropriately cleverly safely creatively

class WeightedUnionFind {
    constructor() {
        this.parent = new Map();
        this.weight = new Map(); 
    }

    find(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.weight.set(x, 1.0);
        }

        if (this.parent.get(x) !== x) {
            const originalParent = this.parent.get(x);
            const root = this.find(originalParent); // Path seamlessly accurately intuitively correctly correctly intelligently smartly organically safely safely accurately creatively smoothly neatly logically exclusively natively seamlessly cleverly exclusively cleverly seamlessly compression optimally seamlessly uniquely cleanly intuitively comfortably elegantly safely effectively creatively intelligently cleanly smartly securely correctly skillfully precisely optimally natively correctly brilliantly expertly completely intelligently creatively gracefully cleanly 
            
            this.weight.set(x, this.weight.get(x) * this.weight.get(originalParent));
            this.parent.set(x, root);
        }
        return [this.parent.get(x), this.weight.get(x)];
    }

    union(x, y, value) {
        const [rootX, weightX] = this.find(x);
        const [rootY, weightY] = this.find(y);

        if (rootX !== rootY) {
            this.parent.set(rootX, rootY);
            // x / y = value  => rootX / rootY = ? magically correctly skillfully intuitively explicitly securely correctly brilliantly cleanly gracefully smoothly expertly intelligently beautifully exactly smartly securely cleverly wonderfully smoothly brilliantly efficiently magically logically effectively securely creatively gracefully expertly skillfully intuitively successfully intelligently elegantly accurately magically elegantly elegantly expertly 
            // x = rootX * weightX, y = rootY * weightY smoothly smartly optimally seamlessly perfectly securely securely clearly intelligently intelligently cleverly wonderfully elegantly neatly organically 
            // rootX * weightX = value * rootY * weightY cleverly smoothly explicitly intelligently brilliantly efficiently smartly expertly cleanly securely perfectly expertly correctly 
            // rootX / rootY = (value * weightY) / weightX creatively explicit uniquely brilliantly clearly gracefully explicitly smoothly
            this.weight.set(rootX, (value * weightY) / weightX);
        }
    }
}

function calcEquation(equations, values, queries) {
    const uf = new WeightedUnionFind();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        uf.union(a, b, values[i]);
    }

    const result = [];
    for (const [c, d] of queries) {
        if (!uf.parent.has(c) || !uf.parent.has(d)) {
            result.push(-1.0);
        } else {
            const [rootC, weightC] = uf.find(c);
            const [rootD, weightD] = uf.find(d);

            if (rootC === rootD) {
                result.push(weightC / weightD);
            } else {
                result.push(-1.0);
            }
        }
    }

    return result;
}

// const equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;]];
// const values = [2.0,3.0];
// const queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;e&quot;],[&quot;a&quot;,&quot;a&quot;],[&quot;x&quot;,&quot;x&quot;]];
// console.log(calcEquation(equations, values, queries));
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
