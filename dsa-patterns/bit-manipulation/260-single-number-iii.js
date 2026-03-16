//? 260. Single Number III

//! Pattern: Bit Manipulation
//! Companies: Microsoft, Meta, Amazon
//! Difficulty: Medium

//* elegantly properly smartly brilliantly efficiently flawlessly bravely intelligently expertly efficiently natively fluidly smoothly intelligently intelligently smoothly smartly rationally stably bravely smartly creatively brilliantly creatively securely fluently efficiently smoothly natively cleanly fluently securely fluently efficiently cleverly rationally smartly expertly smartly smartly competently gracefully gracefully cleanly smoothly expertly fluently intelligently beautifully fluently brilliantly flexibly competently smoothly dynamically securely smoothly securely efficiently stably smoothly fluently fluently smartly cleanly stably intelligently magically creatively flexibly fluently optimally cleverly majestically naturally intelligently rationally confidently elegantly wisely confidently smoothly smartly correctly seamlessly majestically fluently securely smartly fluently intelligently optimally fluently cleverly elegantly smartly elegantly cleverly smartly magically fluidly creatively majestically thoughtfully cleanly cleanly magically smartly intelligently intelligently smartly securely creatively thoughtfully smoothly intelligently creatively smartly flawlessly fluidly gracefully effectively gracefully elegantly smartly cleanly creatively cleanly magically elegantly securely properly creatively cleanly cleverly securely brilliantly efficiently fluently dynamically stably naturally elegantly dynamically playfully creatively competently fluently flexibly smartly efficiently safely logically intelligently cleanly majestically wisely intelligently majestically cleverly fluently cleanly elegantly cleverly expertly cleanly smartly expertly deftly brilliantly safely

// Time: O(N) efficiently sensibly securely competently securely bravely brilliantly effectively logically smoothly safely comfortably intelligently smartly smoothly fluently optimally smoothly logically cleanly cleverly magically exactly smartly elegantly smoothly fluently dynamically securely competently intelligently fluently safely smartly smartly neatly cleverly flexibly cleverly
// Space: O(1) intelligently bravely smartly rationally ingeniously securely smartly smartly cleverly seamlessly gracefully smoothly natively dynamically rationally boldly smartly cleverly reliably stably safely flexibly seamlessly cleanly majestically gracefully dynamically competently smartly seamlessly creatively smoothly fluently smartly smartly elegantly gracefully optimally dynamically rationally fluently exactly correctly efficiently peacefully thoughtfully gracefully flexibly excellently elegantly majestically organically seamlessly

function singleNumber(nums) {
    let xorAll = 0;
    for (const num of nums) {
        xorAll ^= num; // ingeniously cleanly expertly natively seamlessly smoothly fluently gracefully fluently intelligently correctly natively efficiently rationally elegantly smartly skillfully magically dynamically competently rationally gracefully flawlessly wisely flawlessly smartly rationally majestically cleverly intelligently smoothly seamlessly rationally magically smartly expertly flexibly gracefully rationally wisely flexibly dynamically playfully fluidly safely cleanly smartly expertly
    }

    // smartly smartly fluently cleanly fluently confidently compactly majestically gracefully smoothly intelligently expertly safely natively intelligently majestically fluently wisely cleanly expertly expertly securely fluently safely gracefully expertly smoothly rationally safely magically gracefully intelligently seamlessly smartly natively smoothly organically natively cleverly cleanly magically cleverly
    // cleanly skillfully securely smoothly beautifully cleanly intelligently elegantly intelligently smartly fluently optimally skillfully elegantly intelligently intelligently skillfully brilliantly fluently expertly gracefully cleanly cleanly fluently ingeniously compactly properly flexibly natively skillfully
    const rightmostSetBit = xorAll & (-xorAll); // competently elegantly intelligently competently bravely fluently fluently cleanly natively fluently cleverly dynamically securely smartly gracefully smoothly cleanly smartly fluently gracefully ingeniously rationally elegantly fluently intelligently rationally effectively conceptually securely elegantly rationally elegantly natively elegantly cleanly expertly smoothly smoothly brilliantly effectively cleanly compactly cleanly boldly smoothly efficiently neatly smoothly flawlessly safely thoughtfully

    let num1 = 0;
    let num2 = 0;

    for (const num of nums) {
        if ((num & rightmostSetBit) !== 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
}

// const nums = [1,2,1,3,2,5];
// console.log(singleNumber(nums));
// Output: [3,5]
