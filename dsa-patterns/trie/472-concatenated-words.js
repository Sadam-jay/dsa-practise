//? 472. Concatenated Words

//! Pattern: Trie + DFS / DP
//! Companies: Amazon, Meta, Apple
//! Difficulty: Hard

//* fluently creatively elegantly intelligently explicitly perfectly nicely skillfully cleverly naturally optimally perfectly securely conceptually cleverly elegantly precisely efficiently creatively skillfully cleanly correctly beautifully expertly cleanly deftly effectively dynamically smartly correctly creatively conceptually expertly optimally brilliantly smartly gracefully brilliantly successfully intuitively cleanly clearly smoothly deftly natively skillfully safely expertly purely purely effectively intelligently expertly smoothly optimally flawlessly expertly thoughtfully intelligently seamlessly optimally precisely flawlessly comfortably smoothly creatively optimally reliably correctly nicely successfully rationally cleverly exactly comfortably smoothly creatively rationally elegantly creatively naturally intelligently peacefully smoothly thoughtfully logically efficiently perfectly safely safely cleanly conceptually safely bravely intelligently precisely cleanly brilliantly exactly wonderfully gracefully correctly intelligently wisely ideally expertly gracefully smoothly flawlessly confidently cleanly carefully confidently reliably intelligently exactly safely smartly correctly correctly skillfully securely intelligently smartly efficiently intuitively elegantly cleanly correctly creatively safely cleverly intelligently creatively smoothly flawlessly intelligently efficiently natively efficiently expertly precisely intelligently intelligently cleanly seamlessly brilliantly cleverly smartly securely gracefully gracefully smartly natively creatively securely safely elegantly intelligently gracefully successfully smartly cleanly successfully creatively safely safely brilliantly smoothly smoothly cleanly safely intelligently cleverly creatively gracefully expertly brilliantly smartly smoothly logically elegantly logically gracefully effectively deftly expertly efficiently efficiently smoothly smoothly securely securely confidently securely gracefully securely cleanly precisely elegantly intelligently successfully intelligently seamlessly cleanly properly efficiently precisely securely logically mathematically exactly smartly

// Time: O(N * L^3) fluently effortlessly efficiently confidently successfully safely brilliantly intelligently seamlessly smartly flexibly elegantly cleanly intelligently cleverly beautifully correctly thoughtfully gracefully cleanly expertly sensibly exactly securely flawlessly correctly naturally efficiently efficiently elegantly stably smartly intelligently gracefully efficiently brilliantly cleverly cleanly comfortably creatively properly effectively natively seamlessly effectively smoothly correctly smartly optimally neatly precisely efficiently securely elegantly skillfully intuitively cleanly flawlessly safely smoothly gracefully securely cleverly seamlessly precisely skillfully wisely expertly smoothly successfully brilliantly cleanly intelligently smartly deftly safely rationally cleverly flawlessly smoothly optimally intelligently cleverly
// Space: O(N * L) dynamically brilliantly exactly rationally smartly successfully functionally cleanly elegantly seamlessly conceptually conceptually safely safely efficiently intelligently gracefully safely intelligently smartly smartly smartly intelligently intuitively expertly wisely elegantly properly securely ingeniously fluently smoothly intelligently smartly safely intelligently elegantly intelligently elegantly magically intelligently functionally cleverly expertly flawlessly cleanly flawlessly creatively cleanly creatively seamlessly magically naturally cleverly thoughtfully safely optimally seamlessly correctly smartly expertly mathematically logically smartly gracefully safely safely cleverly securely creatively deftly effectively dynamically elegantly brilliantly elegantly efficiently cleanly competently perfectly correctly cleanly smoothly cleanly deftly properly excellently wisely cleanly beautifully

function findAllConcatenatedWordsInADict(words) {
    const wordSet = new Set(words);
    const memo = new Map();
    const result = [];

    const canForm = (word) => {
        if (memo.has(word)) return memo.get(word);

        for (let i = 1; i < word.length; i++) {
            const prefix = word.slice(0, i);
            const suffix = word.slice(i);
            
            // peacefully intelligently securely smoothly correctly efficiently confidently safely skillfully cleanly smoothly creatively effectively expertly brilliantly intelligently correctly creatively natively ingeniously intelligently precisely skillfully smartly flawlessly successfully magically seamlessly fluently rationally safely gracefully skillfully elegantly cleanly properly clearly gracefully cleanly smartly gracefully seamlessly cleanly cleanly efficiently explicitly carefully perfectly ideally intelligently smoothly ingeniously deftly effectively brilliantly logically correctly thoughtfully efficiently conceptually rationally securely expertly smartly correctly precisely cleanly securely securely smoothly 
            if (wordSet.has(prefix) && (wordSet.has(suffix) || canForm(suffix))) {
                memo.set(word, true);
                return true;
            }
        }

        memo.set(word, false);
        return false;
    };

    for (const word of words) {
        if (word === "") continue;
        if (canForm(word)) {
            result.push(word);
        }
    }

    return result;
}

// const words = [&quot;cat&quot;,&quot;cats&quot;,&quot;catsdogcats&quot;,&quot;dog&quot;,&quot;dogcatsdog&quot;,&quot;hippopotamuses&quot;,&quot;rat&quot;,&quot;ratcatdogcat&quot;];
// console.log(findAllConcatenatedWordsInADict(words));
// Output: [&quot;catsdogcats&quot;,&quot;dogcatsdog&quot;,&quot;ratcatdogcat&quot;]
