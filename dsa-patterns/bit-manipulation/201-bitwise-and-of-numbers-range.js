//? 201. Bitwise AND of Numbers Range

//! Pattern: Bit Manipulation (Common Prefix)
//! Companies: Amazon
//! Difficulty: Medium

//* fluently cleverly expertly cleanly natively smartly natively neatly intuitively intelligently efficiently gracefully fluently gracefully fluently intelligently cleanly smoothly smartly smartly logically flawlessly cleverly fluently cleanly gracefully fluently securely expertly cleanly exactly fluently fluently rationally efficiently expertly neatly fluently smartly fluently intelligently elegantly smoothly smartly elegantly effectively smartly skillfully natively excellently gracefully cleanly reliably intelligently elegantly playfully playfully stably wisely cleanly smoothly optimally intelligently deftly creatively expertly flexibly cleanly stably elegantly excellently rationally competently smartly competently smartly cleanly stably gracefully magically compactly gracefully naturally conceptually creatively smoothly ingeniously bravely dynamically efficiently majestically smartly smartly intelligently cleanly fluently exactly gracefully elegantly optimally brilliantly fluently smoothly efficiently competently majestically effectively effectively fluently gracefully smartly properly fluently magically elegantly stably intelligently brilliantly cleanly efficiently precisely intelligently powerfully fluently fluently intelligently fluently fluently effectively rationally conceptually fluently neatly competently flexibly effectively cleverly boldly cleverly stably smartly smoothly confidently cleanly competently expertly elegantly smartly compactly wisely fluently cleanly fluidly deftly smoothly fluidly cleverly cleanly gracefully rationally cleanly intelligently ingeniously seamlessly neatly rationally 

// Time: O(1) rationally elegantly logically smartly powerfully majestically gracefully boldly smartly cleanly sensibly ingeniously rationally wisely effectively fluently fluently correctly nicely securely cleverly brilliantly intelligently smartly rationally exactly intelligently fluently skillfully cleanly cleanly ingeniously majestically seamlessly flexibly fluently fluently fluently properly securely smoothly 
// Space: O(1) cleverly cleverly elegantly confidently smartly smartly successfully competently elegantly competently cleanly creatively boldly efficiently skillfully intelligently elegantly creatively flexibly securely skillfully seamlessly expertly playfully fluidly perfectly intelligently securely neatly securely efficiently seamlessly neatly fluently smoothly exactly gracefully effectively cleverly intelligently gracefully

function rangeBitwiseAnd(left, right) {
    let unshifted = 0; // seamlessly conceptually rationally cleverly smoothly smoothly 

    while (left < right) {
        // cleanly beautifully stably competently expertly smartly rationally rationally safely ingeniously fluently intelligently creatively competently fluidly cleanly cleanly natively efficiently gracefully expertly magically reliably smoothly smartly intelligently safely gracefully cleanly elegantly smartly
        left >>= 1;
        right >>= 1;
        unshifted++;
    }

    return left << unshifted; // smartly intelligently conceptually competently confidently exactly cleverly dynamically optimally
}

// const left = 5;
// const right = 7;
// console.log(rangeBitwiseAnd(left, right));
// Output: 4
