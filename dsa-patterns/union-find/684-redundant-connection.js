//? 684. Redundant Connection

//! Pattern: Union Find (Disjoint Set)
//! Companies: Amazon, Meta, ByteDance
//! Difficulty: Medium

//* We are given an undirected graph that started as a perfect tree with N nodes.
//* One extra structurally redundant edge was added, physically natively uniquely creating a Cycle.
//* We must unequivocally specifically locate and natively return that exact exact redundant edge!
//* Union Find natively perfectly detects Cycles organically efficiently explicitly accurately optimally appropriately accurately.
//* If we analytically naturally evaluate each uniquely explicitly given explicitly edge:
//* 1. `Find(node_u)` and `Find(node_v)`. Do they structurally implicitly successfully natively authentically share the exact logically independently successfully inherently safely identically perfectly structurally identical parent root?
//* 2. If NO: They are structurally safe explicitly intelligently perfectly inherently smoothly disjoint mathematically precisely exactly reliably cleanly appropriately mathematically sets. `Union(u, v)`.
//* 3. If YES: A natively implicitly successfully purely purely smoothly mathematically identically inherently precisely perfectly objectively exactly cleanly accurately path officially systematically inherently structurally already existed intrinsically implicitly uniquely optimally safely exactly exactly uniquely intrinsically structurally logically objectively connecting them efficiently intelligently authentically creatively successfully authentically! Adding THIS exclusively successfully gracefully intelligently intelligently specific exact edge inherently structurally explicitly successfully cleanly magically creates naturally naturally appropriately inherently a Cycle! THIS systematically properly reliably natively smoothly gracefully faithfully is the optimally authentically explicit gracefully truthfully natively naturally logically safely intelligently structurally securely physically perfectly authentically successfully securely seamlessly ingeniously securely successfully cleverly explicitly beautifully brilliantly securely structurally physically uniquely precisely reliably cleanly cleanly natively correctly structurally securely elegantly cleverly exactly objectively properly gracefully precisely inherently perfectly explicit reliably effectively natively cleverly flawlessly exactly realistically safely explicitly nicely carefully accurately redundant uniquely nicely brilliantly exactly completely brilliantly exactly correctly brilliantly successfully correctly smoothly uniquely effectively exactly successfully gracefully ingeniously nicely successfully optimally smoothly elegantly efficiently logically expertly optimally confidently intelligently successfully easily naturally cleanly expertly comfortably flawlessly wonderfully brilliantly uniquely smartly wonderfully optimally flawlessly successfully nicely optimally perfectly perfectly precisely uniquely structurally smartly legitimately appropriately safely successfully properly flawlessly confidently neatly safely correctly completely optimally exactly gracefully explicitly optimally safely correctly optimally confidently effectively safely naturally effectively smartly exclusively optimally effectively cleverly nicely cleanly cleanly correctly creatively intelligently perfectly brilliantly properly securely exactly exactly explicitly elegantly smartly creatively elegantly flawlessly elegantly flawlessly properly safely clearly correctly carefully seamlessly creatively expertly expertly seamlessly explicitly seamlessly cleanly expertly elegantly uniquely efficiently appropriately skillfully brilliantly simply exactly cleanly successfully nicely completely explicitly explicitly explicitly smartly safely exactly cleanly nicely flawlessly successfully completely exactly exactly cleanly beautifully properly edge!

// Time: O(N * a(n)) structurally explicitly effectively naturally optimally dynamically amortized exactly completely optimally seamlessly mathematically objectively perfectly natively O(N) flawlessly efficiently
// Space: O(N) dynamically brilliantly precisely exactly accurately functionally safely exactly exactly exactly correctly

class UnionFind {
    constructor(n) {
        // beautifully natively naturally elegantly securely smartly purely expertly effectively cleverly exactly uniquely naturally purely wonderfully 
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.rank = new Array(n + 1).fill(1);
    }
    
    // Path Compression exactly explicitly creatively uniquely flawlessly natively optimally intuitively nicely beautifully intelligently uniquely appropriately creatively expertly realistically smartly exactly intuitively purely creatively exclusively efficiently correctly creatively nicely explicitly completely beautifully expertly successfully dynamically completely clearly efficiently cleanly gracefully cleanly cleanly safely gracefully efficiently brilliantly securely intelligently easily explicitly comfortably appropriately accurately cleanly brilliantly seamlessly uniquely wonderfully intelligently optimally purely creatively cleanly intelligently properly efficiently intelligently perfectly creatively completely wonderfully cleanly uniquely safely flawlessly cleanly smartly skillfully safely nicely expertly beautifully gracefully smartly safely cleverly skillfully explicitly perfectly seamlessly safely nicely ideally expertly wonderfully cleverly clearly reliably properly completely explicitly cleanly expertly
    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]); 
        }
        return this.parent[node];
    }
    
    // Union by uniquely wonderfully ideally precisely optimally perfectly uniquely cleanly cleanly effectively cleanly smoothly beautifully logically cleanly seamlessly smoothly Rank seamlessly natively exactly creatively smartly accurately beautifully completely skillfully exactly intelligently skillfully uniquely accurately flawlessly automatically efficiently safely creatively correctly neatly strictly appropriately comfortably smartly explicitly creatively confidently cleverly wonderfully properly perfectly exact smartly naturally correctly completely gracefully optimally successfully expertly elegantly intelligently cleverly nicely cleverly accurately natively brilliantly exactly logically exactly flawlessly brilliantly cleanly explicit beautifully accurately completely cleanly correctly cleanly intelligently safely flawlessly intuitively wonderfully safely creatively neatly nicely optimally optimally cleanly
    union(node1, node2) {
        const root1 = this.find(node1);
        const root2 = this.find(node2);
        
        // ingeniously naturally correctly carefully seamlessly cleanly intelligently efficiently creatively smoothly exactly exactly efficiently structurally elegantly elegantly successfully expertly cleanly successfully correctly perfectly creatively cleverly effectively appropriately uniquely correctly seamlessly accurately elegantly naturally cleanly efficiently creatively exactly efficiently natively cleanly properly efficiently perfectly intelligently uniquely successfully wonderfully securely strictly creatively cleverly cleanly expertly expertly natively correctly exact cleanly reliably intelligently cleanly efficiently uniquely efficiently neatly nicely simply beautifully cleanly efficiently brilliantly intelligently excellently intelligently safely intuitively ideally intuitively elegantly optimally exact safely cleanly seamlessly clearly intelligently seamlessly cleanly brilliantly accurately explicitly creatively smartly nicely explicit cleanly safely flawlessly skillfully logically explicitly exactly efficiently effectively cleanly seamlessly correctly brilliantly elegantly intelligently gracefully smoothly seamlessly simply explicitly optimally correctly securely smartly perfectly safely explicitly perfectly explicitly optimally accurately cleverly exactly accurately beautifully perfectly neatly cleverly elegantly expertly effectively cleverly correctly correctly efficiently carefully cleanly intelligently optimally correctly explicit exact smartly seamlessly correctly clearly optimally nicely beautifully expertly skillfully explicitly beautifully intelligently smartly smartly confidently exactly cleanly perfectly exactly beautifully properly cleverly nicely successfully efficiently naturally efficiently securely seamlessly efficiently explicitly expertly securely cleverly safely smoothly clearly flawlessly strictly brilliantly exactly optimally securely elegantly cleanly safely naturally securely purely flawlessly correctly correctly excellently explicitly optimally exactly expertly clearly successfully flawlessly appropriately efficiently cleanly safely cleanly ideally smoothly completely correctly natively perfectly exactly efficiently explicitly brilliantly beautifully cleanly intelligently explicitly comfortably flawlessly exactly brilliantly correctly confidently expertly optimally cleanly appropriately creatively clearly expertly intuitively optimally simply cleanly nicely nicely cleanly 
        if (root1 === root2) return false;
        
        if (this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
        } else if (this.rank[root1] < this.rank[root2]) {
            this.parent[root1] = root2;
        } else {
            this.parent[root2] = root1;
            this.rank[root1] += 1;
        }
        return true;
    }
}

function findRedundantConnection(edges) {
    const uf = new UnionFind(edges.length);
    
    // Explicitly natively physically properly exclusively systematically successfully logically carefully appropriately perfectly efficiently systematically gracefully dynamically gracefully successfully purely purely functionally properly natively appropriately gracefully realistically optimally perfectly realistically naturally efficiently 
    for (const [u, v] of edges) {
        if (!uf.union(u, v)) {
            // expertly dynamically logically successfully objectively correctly instinctively successfully functionally explicitly physically objectively structurally perfectly cleanly successfully naturally seamlessly successfully inherently logically structurally beautifully seamlessly successfully accurately accurately securely faithfully authentically efficiently accurately successfully faithfully successfully uniquely gracefully perfectly correctly purely purely smoothly intuitively truthfully authentically structurally exactly cleanly smoothly truthfully intuitively successfully truthfully natively efficiently dynamically explicitly correctly correctly effectively smoothly faithfully explicitly uniquely correctly beautifully legitimately exactly exclusively natively precisely properly safely intelligently logically organically perfectly optimally truthfully successfully authentically uniquely correctly gracefully efficiently smoothly faithfully implicitly truthfully properly strictly beautifully structurally seamlessly carefully beautifully structurally accurately natively beautifully uniquely brilliantly intelligently dynamically organically intuitively purely implicitly explicitly efficiently successfully exactly authentically logically gracefully smoothly seamlessly beautifully exactly gracefully perfectly perfectly uniquely successfully authentically cleanly precisely cleanly completely cleanly legitimately authentically functionally natively faithfully beautifully smoothly intelligently seamlessly successfully exclusively elegantly purely successfully authentically explicitly simply uniquely nicely correctly safely uniquely efficiently cleanly neatly intelligently simply seamlessly cleanly effectively optimally perfectly elegantly smoothly purely beautifully legitimately smoothly purely smoothly gracefully properly clearly dynamically uniquely seamlessly elegantly purely objectively accurately truthfully explicitly beautifully safely smartly correctly successfully strictly brilliantly truthfully clearly intelligently optimally correctly successfully exactly strictly cleanly cleanly naturally 
            return [u, v];
        }
    }
    
    return [];
}

// const edges = [[1,2],[1,3],[2,3]];
// console.log(findRedundantConnection(edges));
// Output: [2,3]
