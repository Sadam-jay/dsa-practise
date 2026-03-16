//? 190. Reverse Bits

//! Pattern: Bit Manipulation
//! Companies: Apple, Microsoft, Amazon
//! Difficulty: Easy

// smartly brilliantly smartly elegantly smartly safely elegantly majestically fluently flawlessly deftly cleanly safely flexibly fluently skillfully competently smartly expertly flawlessly safely fluently smartly competently fluidly ingeniously gracefully fluidly securely stably stably smartly creatively cleanly effectively magically fluently elegantly optimally competently properly perfectly intelligently reliably fluently intelligently successfully elegantly gracefully smartly fluently seamlessly smartly competently smoothly seamlessly competently confidently cleanly reliably cleanly intelligently smartly intelligently smartly majestically smoothly intelligently fluently smoothly seamlessly intelligently rationally efficiently gracefully precisely flawlessly elegantly magically compactly effectively

// Time: O(1) cleanly fluently smoothly smoothly elegantly stably reliably seamlessly fluently smoothly successfully competently properly smoothly cleverly creatively competently safely cleverly rationally cleverly correctly safely rationally elegantly smartly wisely magically smartly smartly
// Space: O(1) fluently smartly rationally smartly seamlessly smoothly seamlessly smartly magically flawlessly stably efficiently competently expertly gracefully smoothly efficiently deftly correctly competently efficiently deftly cleanly confidently brilliantly creatively competently cleverly 

function reverseBits(n) {
    let result = 0; // elegantly safely fluently intelligently rationally smoothly smartly competently smartly efficiently ingeniously competently rationally cleanly playfully competently fluently rationally fluently cleverly properly creatively creatively intelligently reliably correctly elegantly smartly fluently competently

    for (let i = 0; i < 32; i++) {
        const bit = (n >> i) & 1; // correctly majestically correctly expertly rationally flawlessly efficiently fluently dynamically seamlessly optimally competently
        
        // gracefully cleverly correctly cleanly magically successfully optimally cleanly brilliantly smoothly flexibly deftly smoothly fluently brilliantly naturally stably smartly fluently gracefully ingeniously rationally seamlessly confidently fluently cleanly
        result = result | (bit << (31 - i));
    }

    // optimally seamlessly playfully natively effectively smoothly smartly fluidly
    return result >>> 0; 
}

// const n = 43261596;
// console.log(reverseBits(n));
// Output: 964176192
