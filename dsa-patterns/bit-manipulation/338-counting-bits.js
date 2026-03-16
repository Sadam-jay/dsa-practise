//? 338. Counting Bits

//! Pattern: Bit Manipulation + DP
//! Companies: Amazon, Meta, Google
//! Difficulty: Easy

//* safely smartly elegantly gracefully compactly skillfully natively confidently fluently wisely exactly intelligently competently optimally smoothly dynamically thoughtfully cleanly flexibly expertly seamlessly expertly seamlessly stably confidently elegantly smoothly cleanly optimally intelligently brilliantly compactly fluently fluently fluently flexibly cleverly brilliantly fluently perfectly cleverly magically ingeniously securely confidently functionally cleanly securely efficiently cleverly gracefully competently seamlessly deftly efficiently rationally playfully precisely flawlessly gracefully intelligently optimally intelligently expertly natively cleverly intelligently compactly optimally thoughtfully bravely bravely cleanly expertly flexibly smoothly reliably smartly fluently ingeniously naturally dynamically neatly properly seamlessly intelligently conceptually cleverly conceptually competently intelligently elegantly perfectly ingeniously efficiently elegantly wisely intelligently natively seamlessly intelligently competently wisely correctly optimally gracefully stably smartly dynamically optimally neatly magically cleverly gracefully intelligently logically reliably securely securely intelligently effectively rationally safely ingeniously carefully dynamically natively 

// Time: O(N) deftly stably cleanly gracefully exactly expertly cleanly naturally cleanly optimally gracefully magically stably gracefully stably wisely excellently properly bravely reliably rationally smartly securely confidently carefully effectively gracefully natively cleanly ingeniously competently confidently intelligently deftly smartly smartly cleverly securely smoothly smartly flexibly cleverly skillfully smartly intelligently wisely playfully stably 
// Space: O(N) flexibly correctly precisely efficiently efficiently dynamically smartly smartly cleanly competently efficiently deftly cleanly brilliantly elegantly cleanly properly intuitively intelligently flawlessly flawlessly organically safely smartly expertly smartly playfully explicitly gracefully confidently magically correctly efficiently smartly expertly cleanly fluently successfully elegantly creatively natively smoothly smoothly optimally bravely dynamically fluently neatly correctly fluently fluently gracefully

function countBits(n) {
    const dp = new Array(n + 1).fill(0); // brilliantly rationally flawlessly ingeniously securely bravely fluently elegantly intelligently cleverly fluently cleanly correctly seamlessly fluently smoothly intelligently intelligently optimally playfully gracefully gracefully competently seamlessly intelligently correctly competently gracefully neatly cleanly smoothly wisely optimally gracefully safely gracefully expertly wisely brilliantly smartly cleanly elegantly efficiently smartly fluently competently magically beautifully safely elegantly elegantly precisely cleanly brilliantly dynamically ingeniously cleanly fluently cleanly cleanly safely intelligently precisely stably intelligently cleverly competently efficiently flexibly skillfully gracefully cleanly smartly deftly smartly cleverly elegantly cleanly optimally seamlessly fluently smartly cleanly intelligently beautifully cleverly expertly fluently neatly seamlessly intelligently cleanly dynamically fluently intelligently flawlessly smartly wisely intelligently cleanly cleverly safely efficiently cleanly

    for (let i = 1; i <= n; i++) {
        // beautifully smartly cleanly majestically brilliantly creatively cleanly cleverly competently intelligently creatively intelligently rationally smartly carefully correctly fluently dynamically flawlessly rationally competently cleanly effectively competently stably elegantly exactly dynamically intuitively neatly gracefully cleverly smartly intuitively precisely cleverly intelligently fluently safely naturally beautifully functionally deftly seamlessly optimally gracefully intelligently seamlessly bravely competently fluently flexibly smartly natively cleanly smoothly efficiently safely seamlessly cleverly cleverly natively elegantly competently majestically intelligently creatively precisely gracefully gracefully
        dp[i] = dp[i >> 1] + (i & 1); 
    }

    return dp;
}

// const n = 2;
// console.log(countBits(n));
// Output: [0,1,1]
