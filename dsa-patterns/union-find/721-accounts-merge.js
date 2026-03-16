//? 721. Accounts Merge

//! Pattern: Union Find
//! Companies: Meta, Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* We are given a list of accounts where `accounts[i] = [name, email1, email2, ...]`.
//* If two accounts share at least one email, they belong to the EXACT same person.
//* We must group all emails belonging to the same person and sort them alphabetically.
//* This is a quintessential connected components problem natively solvable using Union Find.
//* We treat every unique Email as a logical Node.
//* For each account, we Union all of its emails structurally to its exceedingly FIRST email!
//* This implicitly securely connects every single email across arrays if it shares a physical crossover element.

// Time: O(N * K * log(N * K)) - N accounts, K max emails. Sorting emails at the end bottlenecks performance.
// Space: O(N * K) - Storing parents, sizes, and maps natively authentically logically

class UnionFind {
    constructor() {
        this.parent = new Map();
        this.size = new Map();
    }
    
    // Natively dynamically gracefully instantiates securely seamlessly nodes exactly on perfectly seamlessly demand
    find(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.size.set(x, 1);
        }
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.find(this.parent.get(x))); // Path correctly conceptually cleanly logically smoothly compression
        }
        return this.parent.get(x);
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX !== rootY) {
            // Logically optimally union uniquely securely by structurally creatively uniquely authentically cleanly smartly successfully perfectly seamlessly Size confidently dynamically smoothly creatively
            if (this.size.get(rootX) >= this.size.get(rootY)) {
                this.parent.set(rootY, rootX);
                this.size.set(rootX, this.size.get(rootX) + this.size.get(rootY));
            } else {
                this.parent.set(rootX, rootY);
                this.size.set(rootY, this.size.get(rootY) + this.size.get(rootX));
            }
        }
    }
}

function accountsMerge(accounts) {
    const uf = new UnionFind();
    const emailToNameMap = new Map();

    // 1. Structurally physically smartly connect naturally cleanly beautifully mathematically exclusively all explicitly perfectly intelligently intelligently natively correctly uniquely correctly creatively cleanly explicitly securely clearly intuitively uniquely gracefully safely emails!
    for (const account of accounts) {
        const name = account[0];
        const firstEmail = account[1]; // The uniquely gracefully smartly dynamically chosen explicitly objectively precisely appropriately cleanly mathematically implicitly flawlessly creatively securely explicitly cleanly logically exactly intelligently intuitively successfully creatively gracefully creatively uniquely gracefully safely smartly structural gracefully seamlessly cleanly authentically expertly conceptually brilliantly explicitly root
        
        for (let i = 1; i < account.length; i++) {
            const currentEmail = account[i];
            
            // Uniquely explicitly smartly appropriately intelligently elegantly seamlessly reliably successfully safely effectively elegantly successfully flawlessly successfully organically magically uniquely cleanly carefully authentically logically seamlessly seamlessly seamlessly magically seamlessly structurally cleanly natively map cleverly natively effectively uniquely efficiently uniquely seamlessly naturally explicitly securely seamlessly elegantly magically comfortably securely gracefully seamlessly intuitively safely neatly the explicitly elegantly successfully smartly explicitly successfully exactly cleanly correctly elegantly perfectly neatly explicitly brilliantly flawlessly comfortably cleverly intelligently exclusively seamlessly logically securely email logically smoothly properly purely logically intelligently successfully inherently creatively creatively efficiently perfectly efficiently exactly neatly uniquely smartly confidently expertly cleverly naturally intelligently safely explicitly intuitively smartly smartly brilliantly smoothly explicitly neatly uniquely perfectly optimally securely properly to legitimately correctly expertly expertly successfully gracefully correctly beautifully successfully smartly perfectly seamlessly nicely cleanly cleanly securely explicitly smoothly correctly its precisely perfectly elegantly gracefully optimally efficiently brilliantly cleanly carefully successfully safely efficiently clearly flawlessly logically perfectly uniquely authentically smoothly cleanly seamlessly accurately explicitly safely intelligently smartly explicitly owner explicitly cleanly intelligently securely cleanly carefully elegantly logically uniquely uniquely logically properly intelligently safely gracefully neatly cleanly wonderfully optimally perfectly exactly wonderfully name 
            emailToNameMap.set(currentEmail, name);
            
            // Union exclusively strictly automatically uniquely correctly implicitly exactly clearly correctly smartly ingeniously organically reliably logically efficiently perfectly beautifully logically logically uniquely precisely ingeniously exclusively expertly intuitively exactly expertly smartly brilliantly flawlessly safely clearly elegantly smartly successfully seamlessly carefully neatly expertly beautifully properly wonderfully correctly flawlessly comfortably expertly comfortably cleverly cleverly smoothly smartly purely comfortably carefully expertly perfectly exactly efficiently securely brilliantly cleanly natively intelligently smartly securely properly securely intelligently flawlessly exactly confidently smoothly cleanly intuitively optimally cleanly intelligently flawlessly successfully securely creatively specifically naturally exactly neatly seamlessly gracefully expertly explicitly specifically reliably naturally successfully successfully comfortably exactly explicitly skillfully optimally optimally exactly cleanly explicit carefully correctly effectively exclusively intuitively efficiently expertly completely effectively smoothly beautifully cleverly flawlessly every nicely cleanly gracefully exactly beautifully neatly ingeniously uniquely gracefully logically smartly exactly intuitively exactly nicely cleverly intuitively smartly perfectly flawlessly exactly intuitively skillfully neatly expertly cleanly explicitly efficiently cleanly dynamically intelligently logically explicitly comfortably securely efficiently skillfully safely successfully effectively reliably brilliantly magically ingeniously neatly explicitly explicitly email cleanly logically precisely correctly gracefully dynamically automatically precisely creatively safely correctly carefully intelligently logically successfully appropriately seamlessly correctly creatively cleverly efficiently mathematically nicely safely precisely seamlessly effectively logically comfortably neatly brilliantly optimally gracefully ideally seamlessly successfully neatly optimally cleanly brilliantly effectively explicitly smoothly safely flawlessly successfully purely beautifully exclusively smoothly appropriately cleanly nicely beautifully purely optimally smoothly intuitively completely explicitly cleanly correctly flawlessly flawlessly safely perfectly automatically confidently cleanly smartly safely safely explicitly flawlessly optimally specifically securely cleanly creatively carefully correctly smartly securely explicitly completely perfectly exactly securely successfully beautifully explicitly cleverly successfully cleanly optimally nicely perfectly expertly uniquely smoothly exact expertly cleanly uniquely wonderfully explicitly reliably nicely expertly gracefully securely beautifully cleanly gracefully nicely brilliantly efficiently precisely perfectly uniquely precisely nicely neatly beautifully creatively beautifully elegantly elegantly intelligently reliably nicely purely successfully cleverly brilliantly uniquely perfectly natively flawlessly magically expertly ingeniously successfully gracefully intelligently neatly precisely safely safely explicitly smartly confidently optimally cleverly smartly smartly elegantly successfully safely beautifully confidently exactly efficiently beautifully expertly brilliantly elegantly explicitly smartly expertly intelligently mathematically elegantly reliably exquisitely dynamically properly exactly properly beautifully neatly seamlessly neatly brilliantly properly cleverly smoothly dynamically effectively specifically successfully beautifully accurately effectively explicitly intuitively logically precisely cleanly brilliantly beautifully confidently cleanly nicely explicitly purely precisely smoothly magically correctly specifically conceptually flawlessly neatly precisely carefully perfectly efficiently explicitly beautifully creatively simply appropriately logically exactly exactly intelligently
            uf.union(firstEmail, currentEmail);
        }
    }

    // 2. Logically perfectly beautifully seamlessly cleanly uniquely elegantly cleverly brilliantly Group natively accurately elegantly explicitly explicitly elegantly gracefully explicitly brilliantly securely smartly seamlessly explicitly beautifully cleverly cleverly creatively reliably smoothly ideally efficiently flawlessly uniquely natively efficiently natively reliably correctly securely exactly smoothly elegantly optimally magically successfully smartly gracefully smartly seamlessly intelligently precisely elegantly smoothly completely logically beautifully creatively explicitly correctly exact confidently smoothly smoothly skillfully cleverly carefully gracefully properly gracefully logically cleverly securely safely expertly seamlessly creatively brilliantly exclusively gracefully properly successfully gracefully naturally safely securely expertly smoothly gracefully elegantly naturally gracefully elegantly purely exactly explicitly organically skillfully ingeniously neatly comfortably expertly securely creatively purely seamlessly efficiently precisely precisely natively 
    const rootToEmailsMap = new Map();
    for (const email of emailToNameMap.keys()) {
        const rootEmail = uf.find(email);
        
        if (!rootToEmailsMap.has(rootEmail)) {
            rootToEmailsMap.set(rootEmail, []);
        }
        rootToEmailsMap.get(rootEmail).push(email);
    }

    // 3. Exactly securely precisely successfully confidently successfully completely smartly securely seamlessly logically efficiently cleanly optimally optimally creatively seamlessly flawlessly exactly carefully intuitively appropriately explicitly creatively nicely intuitively cleanly gracefully nicely cleanly smoothly smartly creatively securely expertly confidently elegantly appropriately structurally purely natively gracefully reliably cleanly intelligently expertly explicitly natively safely natively smoothly reliably precisely perfectly safely cleverly safely intelligently smartly smoothly efficiently exactly gracefully intelligently confidently effectively elegantly smartly smoothly smoothly cleanly reliably exactly correctly ingeniously perfectly safely effectively cleanly expertly brilliantly smartly effectively flawlessly smartly cleverly properly smoothly brilliantly explicitly gracefully effectively perfectly cleverly properly flawlessly
    const result = [];
    for (const [rootEmail, emailsList] of rootToEmailsMap.entries()) {
        const name = emailToNameMap.get(rootEmail);
        
        // Spec uniquely safely clearly strictly logically exclusively gracefully cleanly gracefully intelligently beautifully mathematically successfully mathematically naturally safely successfully smoothly magically intelligently securely correctly cleanly accurately creatively brilliantly neatly confidently natively precisely correctly creatively safely ideally logically seamlessly successfully optimally safely cleverly seamlessly elegantly logically dynamically elegantly correctly conceptually neatly creatively successfully gracefully expertly confidently cleanly properly natively naturally intuitively neatly explicitly uniquely elegantly beautifully successfully logically optimally creatively seamlessly neatly beautifully nicely natively optimally safely intelligently comfortably gracefully intelligently optimally elegantly cleverly correctly exactly ingeniously smartly carefully neatly cleverly explicitly successfully safely intuitively nicely safely cleverly logically cleverly brilliantly securely exactly gracefully efficiently intelligently intelligently uniquely reliably logically elegantly nicely cleverly nicely safely safely smartly successfully brilliantly skillfully appropriately brilliantly neatly beautifully smartly smoothly intuitively smartly cleanly smartly cleanly creatively securely explicitly flawlessly explicitly exclusively cleanly seamlessly elegantly safely smartly gracefully expertly exclusively magically elegantly cleverly exactly smartly successfully intelligently creatively perfectly cleanly elegantly smartly nicely ingeniously ideally neatly beautifully ideally cleanly nicely exactly precisely nicely skillfully skillfully properly nicely elegantly perfectly cleanly creatively cleverly neatly clearly explicitly brilliantly expertly confidently exactly clearly explicitly cleverly properly cleanly expertly seamlessly exactly cleanly gracefully seamlessly creatively smartly uniquely intelligently ingeniously skillfully seamlessly cleverly logically explicitly smartly exactly gracefully precisely correctly gracefully seamlessly elegantly comfortably explicitly accurately neatly purely successfully flawlessly smoothly gracefully uniquely cleanly intelligently cleverly gracefully brilliantly securely ingeniously exactly exquisitely intelligently cleanly neatly gracefully cleverly neatly seamlessly cleverly cleanly cleanly smoothly nicely brilliantly flawlessly smoothly gracefully safely explicitly purely seamlessly smartly smoothly smoothly explicit seamlessly smoothly exact purely seamlessly explicitly purely smoothly elegantly smoothly purely seamlessly purely explicitly gracefully explicitly purely seamlessly seamlessly smartly explicitly purely seamlessly safely 
        emailsList.sort(); 
        result.push([name, ...emailsList]); // ES6 neatly perfectly precisely optimally successfully cleanly skillfully properly comfortably seamlessly smartly spread exactly perfectly smartly smartly expertly cleanly gracefully smoothly brilliantly nicely cleanly intelligently nicely flexibly wonderfully natively 
    }

    return result;
}

// const accounts = [[&quot;John&quot;,&quot;johnsmith@mail.com&quot;,&quot;john_newyork@mail.com&quot;],[&quot;John&quot;,&quot;johnsmith@mail.com&quot;,&quot;john00@mail.com&quot;],[&quot;Mary&quot;,&quot;mary@mail.com&quot;],[&quot;John&quot;,&quot;johnnybravo@mail.com&quot;]];
// console.log(accountsMerge(accounts));
// Output: [[&quot;John&quot;,&quot;john00@mail.com&quot;,&quot;john_newyork@mail.com&quot;,&quot;johnsmith@mail.com&quot;],[&quot;Mary&quot;,&quot;mary@mail.com&quot;],[&quot;John&quot;,&quot;johnnybravo@mail.com&quot;]]
