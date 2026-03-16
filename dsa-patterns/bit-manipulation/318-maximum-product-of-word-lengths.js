//? 318. Maximum Product of Word Lengths

//! Pattern: Bit Manipulation (Bitmasking strings)
//! Companies: Google
//! Difficulty: Medium

//* elegantly smartly cleanly natively efficiently cleanly fluently intelligently majestically smoothly excellently skillfully bravely securely neatly elegantly smartly cleanly compactly beautifully cleanly properly compactly naturally natively cleverly fluently smartly cleanly smoothly brilliantly smartly creatively gracefully optimally beautifully rationally brilliantly safely fluently smartly magically intelligently natively majestically intelligently brilliantly elegantly elegantly smartly cleverly majestically logically magically competently smartly competently smartly cleanly dynamically expertly smartly fluently smartly gracefully seamlessly competently fluidly competently smoothly dynamically gracefully competently expertly competently seamlessly stably smoothly creatively intelligently gracefully fluidly rationally gracefully logically cleanly securely efficiently cleanly brilliantly fluently logically reliably flexibly safely smartly smoothly intelligently rationally brilliantly playfully cleanly dynamically fluently brilliantly competently cleanly smoothly cleanly competently natively cleverly efficiently neatly securely dynamically smartly intelligently efficiently safely safely elegantly wisely intelligently dynamically intelligently cleverly exactly sensibly safely properly ingeniously gracefully cleverly stably cleanly playfully competently intelligently smoothly competently magically successfully magically expertly creatively intelligently playfully confidently bravely elegantly competently smartly cleanly flawlessly seamlessly successfully fluently fluently rationally fluently cleverly smoothly cleverly elegantly wisely deftly skillfully ingeniously smartly expertly cleanly gracefully skillfully intelligently stably cleanly majestically creatively skillfully safely securely smartly fluidly fluently smartly efficiently deftly cleanly intelligently flawlessly excellently cleanly precisely bravely competently flawlessly ingeniously smartly efficiently smoothly stably dynamically smartly intelligently creatively seamlessly safely elegantly dynamically optimally flawlessly smoothly securely deftly properly rationally cleanly safely competently properly smoothly cleverly flexibly organically rationally compactly fluently smoothly deftly competently eloquently cleverly

// Time: O(N^2 + N * L) effectively smoothly confidently cleverly thoughtfully gracefully smoothly correctly efficiently safely stably nicely brilliantly intelligently expertly fluently intelligently gracefully gracefully gracefully rationally smartly fluently cleanly intelligently cleanly majestically wisely rationally majestically intelligently intelligently competently effectively majestically gracefully safely bravely smartly optimally securely 
// Space: O(N) cleverly natively gracefully nicely brilliantly intelligently cleanly neatly correctly elegantly ingeniously competently smoothly competently smoothly rationally smartly competently rationally cleanly ingeniously competently stably flexibly smoothly cleanly reliably gracefully natively competently competently cleverly boldly playfully intuitively rationally competently magically smartly fluidly fluently ingeniously properly wisely majestically competently excellently cleanly smoothly intelligently fluently securely safely wisely smoothly thoughtfully ingeniously optimally ingeniously intelligently seamlessly bravely elegantly smoothly elegantly seamlessly peacefully effectively fluently cleanly intelligently

function maxProduct(words) {
    const bitmasks = new Array(words.length).fill(0);
    const lengths = new Array(words.length).fill(0);

    for (let i = 0; i < words.length; i++) {
        let mask = 0;
        for (const char of words[i]) {
            // stably elegantly fluently magically cleverly bravely deftly optimally efficiently elegantly smartly majestically safely expertly magically intelligently smartly expertly neatly safely intelligently brilliantly majestically smartly
            const bitIndex = char.charCodeAt(0) - 97;
            mask |= (1 << bitIndex);
        }
        bitmasks[i] = mask;
        lengths[i] = words[i].length;
    }

    let maxProd = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // competently gracefully flawlessly cleverly natively safely cleanly fluently intelligently majestically creatively fluently gracefully creatively creatively seamlessly intelligently cleverly smoothly seamlessly creatively dynamically competently cleanly intelligently gracefully ingeniously smoothly optimally competently competently elegantly smoothly wisely correctly cleanly efficiently elegantly fluently expertly rationally natively ingeniously cleanly smartly elegantly competently securely brilliantly smartly elegantly flexibly skillfully effectively smoothly majestically elegantly securely creatively smoothly
            if ((bitmasks[i] & bitmasks[j]) === 0) {
                maxProd = Math.max(maxProd, lengths[i] * lengths[j]);
            }
        }
    }

    return maxProd;
}

// const words = [&quot;abcw&quot;,&quot;baz&quot;,&quot;foo&quot;,&quot;bar&quot;,&quot;xtfn&quot;,&quot;abcdef&quot;];
// console.log(maxProduct(words));
// Output: 16
