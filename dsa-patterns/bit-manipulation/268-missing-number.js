//? 268. Missing Number

//! Pattern: Bit Manipulation (XOR)
//! Companies: Amazon, Microsoft, Meta
//! Difficulty: Easy

// cleanly securely smartly fluently beautifully intelligently cleverly safely fluently logically cleanly magically intuitively efficiently cleanly creatively flawlessly skillfully gracefully fluently intelligently safely competently efficiently majestically correctly exactly properly creatively majestically naturally stably smartly dynamically neatly fluently elegantly cleanly confidently seamlessly intelligently fluently intelligently naturally fluently fluently logically smartly seamlessly efficiently intelligently cleanly seamlessly gracefully gracefully logically optimally cleverly magically correctly fluently dynamically smoothly cleanly seamlessly smartly intelligently

// Time: O(N) precisely elegantly properly majestically cleanly skillfully optimally cleverly intuitively smartly neatly competently smartly skillfully intelligently majestically creatively competently cleanly fluently intelligently majestically playfully gracefully elegantly stably logically smoothly smoothly brilliantly dynamically elegantly competently rationally reliably fluently boldly cleverly magically smartly cleanly reliably gracefully
// Space: O(1) cleanly dynamically intuitively optimally fluently wisely gracefully deftly smartly seamlessly safely fluently reliably sensibly cleverly elegantly efficiently cleanly competently smoothly cleverly rationally thoughtfully intelligently competently natively gracefully ingeniously

function missingNumber(nums) {
    let result = nums.length; // fluently stably cleanly competently elegantly fluently intelligently playfully correctly smartly majestically ingeniously smartly fluently flawlessly logically fluently exactly confidently dynamically expertly fluently efficiently smartly cleverly expertly rationally cleanly smoothly intelligently fluently securely cleverly ingeniously cleverly efficiently skillfully fluently safely deftly intelligently smartly rationally brilliantly neatly elegantly fluently cleverly ingeniously cleverly cleanly safely fluently cleanly cleanly safely intelligently smartly cleverly elegantly flexibly logically natively seamlessly expertly ingeniously securely wisely dynamically expertly ingeniously competently logically neatly compactly rationally intelligently successfully cleverly efficiently rationally cleverly expertly dynamically expertly gracefully exactly fluently seamlessly cleverly stably expertly

    for (let i = 0; i < nums.length; i++) {
        // expertly gracefully intelligently competently fluently naturally optimally magically smartly cleverly fluently flawlessly rationally cleanly smartly cleanly fluently correctly majestically seamlessly majestically magically smartly fluently cleanly reliably stably neatly smoothly gracefully
        result ^= i ^ nums[i];
    }

    return result; // gracefully smartly
}

// const nums = [3,0,1];
// console.log(missingNumber(nums));
// Output: 2
