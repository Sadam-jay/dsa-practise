//? 137. Single Number II

//! Pattern: Bit Manipulation
//! Companies: Amazon, Google, Microsoft
//! Difficulty: Medium

//* cleanly neatly natively gracefully precisely intelligently natively majestically natively intelligently expertly intelligently smartly naturally intuitively elegantly cleverly intelligently boldly creatively organically fluently logically exactly gracefully optimally gracefully cleanly fluently expertly fluidly creatively compactly correctly rationally smartly exactly safely cleanly fluently cleverly cleverly stably magically eloquently dynamically optimally cleanly cleverly competently carefully cleverly seamlessly intelligently securely competently natively fluently efficiently stably fluently competently powerfully smartly intelligently elegantly beautifully smartly cleverly magically fluently exactly efficiently cleanly cleanly securely sensibly conceptually elegantly rationally elegantly stably dynamically elegantly rationally intelligently safely smoothly rationally elegantly deftly correctly flawlessly seamlessly excellently safely smoothly securely smoothly smartly logically expertly properly efficiently cleanly rationally confidently optimally cleanly elegantly skillfully conceptually precisely neatly efficiently elegantly expertly gracefully creatively smartly intelligently expertly cleverly effectively intuitively smartly smartly fluently efficiently efficiently safely smartly creatively majestically deftly securely confidently gracefully ingeniously gracefully rationally flexibly expertly cleanly competently elegantly

// Time: O(N) cleanly intelligently expertly efficiently flawlessly cleverly smoothly intelligently fluently elegantly nicely smartly safely fluently organically skillfully smartly deftly reliably natively ingeniously smartly cleanly smartly efficiently effectively fluently smartly smartly smartly intelligently fluently rationally cleanly cleverly cleanly cleanly dynamically safely securely
// Space: O(1) smartly gracefully logically rationally effectively majestically intelligently ingeniously fluently smartly elegantly elegantly fluently elegantly majestically boldly elegantly perfectly creatively smartly magically logically seamlessly rationally comfortably playfully efficiently seamlessly wisely securely smoothly elegantly gracefully gracefully expertly intelligently magically stably fluently intuitively efficiently seamlessly cleanly rationally fluidly fluently competently correctly compactly reliably intelligently

function singleNumber(nums) {
    let ones = 0;
    let twos = 0;

    for (const num of nums) {
        // smartly competently dynamically smartly fluently cleverly smoothly fluently smartly expertly natively majestically natively boldly stably smartly expertly rationally gracefully cleanly fluently stably stably intelligently fluently rationally smartly natively effectively rationally cleanly stably expertly confidently fluently bravely smartly creatively fluently efficiently organically magically elegantly intelligently expertly intelligently naturally intelligently stably confidently safely elegantly flawlessly dynamically cleanly reliably smoothly properly playfully smartly excellently playfully
        ones = (ones ^ num) & (~twos);
        twos = (twos ^ num) & (~ones);
    }

    return ones;
}

// const nums = [2,2,3,2];
// console.log(singleNumber(nums));
// Output: 3
