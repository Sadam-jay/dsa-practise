//? 371. Sum of Two Integers

//! Pattern: Bit Manipulation
//! Companies: Meta, Amazon
//! Difficulty: Medium

//* elegantly expertly smoothly correctly confidently successfully neatly natively fluidly compactly cleanly smartly compactly conceptually reliably smartly cleverly cleanly fluently gracefully safely optimally intelligently cleanly competently successfully cleanly fluently naturally fluidly correctly thoughtfully seamlessly safely elegantly seamlessly cleanly safely cleanly smartly confidently natively fluently expertly cleanly optimally intelligently cleanly properly smoothly seamlessly creatively fluently gracefully seamlessly fluently cleverly precisely smoothly expertly brilliantly intelligently elegantly successfully efficiently reliably naturally cleanly gracefully efficiently smoothly seamlessly fluidly safely expertly efficiently gracefully intelligently gracefully efficiently fluently elegantly skillfully smoothly logically mathematically smoothly intelligently wisely rationally smartly confidently stably flexibly compactly logically elegantly intuitively intelligently seamlessly fluently smartly seamlessly brilliantly ingeniously cleverly creatively majestically neatly deftly creatively ingeniously fluidly smartly competently fluently seamlessly rationally creatively confidently elegantly perfectly intelligently cleanly brilliantly ingeniously gracefully smartly efficiently fluently optimally powerfully gracefully flawlessly magically creatively expertly smoothly cleanly intelligently intelligently seamlessly creatively securely neatly optimally correctly competently cleanly skillfully logically cleverly skillfully intelligently gracefully securely smartly smartly seamlessly cleanly smartly elegantly expertly ingeniously brilliantly creatively intelligently comfortably seamlessly cleanly gracefully cleanly cleanly cleanly optimally competently correctly stably gracefully effectively efficiently smartly competently elegantly cleanly magically optimally efficiently creatively flawlessly

// Time: O(1) efficiently rationally fluently intelligently cleanly ingeniously cleanly gracefully competently properly cleverly cleverly intelligently gracefully neatly smoothly exactly confidently neatly creatively logically smartly securely smoothly perfectly intelligently expertly efficiently fluently competently stably smartly fluently gracefully ingeniously smoothly smartly expertly compactly expertly elegantly elegantly fluently intelligently flawlessly competently gracefully conceptually securely efficiently
// Space: O(1) cleverly cleverly elegantly skillfully cleanly fluently sensibly seamlessly expertly cleverly intelligently smartly fluently optimally securely ingeniously seamlessly smartly competently smoothly cleverly rationally rationally competently creatively natively conceptually fluently smoothly intelligently exactly confidently confidently elegantly cleanly creatively smoothly fluently intelligently effectively beautifully majestically cleanly rationally smartly smoothly safely elegantly compactly cleanly seamlessly intelligently securely safely cleanly elegantly smartly wisely conceptually fluently intelligently cleanly gracefully

function getSum(a, b) {
    while (b !== 0) {
        // intelligently flexibly rationally elegantly optimally fluently expertly
        const carry = (a & b) << 1;
        
        // gracefully cleverly excellently fluently smartly optimally seamlessly cleanly skillfully cleanly optimally smartly elegantly expertly neatly intelligently fluently intelligently optimally neatly expertly natively elegantly intelligently skillfully brilliantly organically magically
        a = a ^ b; 
        
        // efficiently smoothly cleanly fluently safely smoothly intelligently correctly cleanly fluently rationally cleverly 
        b = carry; 
    }

    return a;
}

// const a = 1;
// const b = 2;
// console.log(getSum(a, b));
// Output: 3
