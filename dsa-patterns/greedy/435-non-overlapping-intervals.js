//? 435. Non-overlapping Intervals

//! Pattern: Greedy (Intervals)
//! Companies: Meta, Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* Finding the MINIMUM number of intervals to remove to make the rest non-overlapping.
//* This is identical to "Maximum Number of Non-Overlapping Intervals" (Activity Selection Problem).
//* The optimal greedy strategy is: 
//* ALWAYS KEEP THE INTERVAL THAT ENDS EARLIEST!
//* Why? Because an interval that ends early leaves maximum possible room for remaining intervals.

// Time: O(n log n) - Sorting the intervals
// Space: O(1) - or O(n) depending on JS sort implementation under the hood

function eraseOverlapIntervals(intervals) {
    if (!intervals || intervals.length === 0) return 0;

    // Sort strictly by ENDING time ascending!
    // This allows us to greedily pick whichever interval finishes quickest.
    intervals.sort((a, b) => a[1] - b[1]);

    let countRemoved = 0;
    // Track the end time of the last successfully 'kept' interval
    let lastValidEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const currentStart = intervals[i][0];
        const currentEnd = intervals[i][1];

        // Does the new interval overlap with the one we just kept?
        // (A mathematically overlapping start is STRICTLY LESS than the previous end)
        if (currentStart < lastValidEnd) {
            // Overlap detected. 
            // Because we sorted by end time, the current overlapping interval inherently 
            // has a >= end time compared to what we've previously kept.
            // Greedily REMOVE this current worse one!
            countRemoved++;
        } else {
            // No overlap. Keep this one and update our boundary.
            lastValidEnd = currentEnd;
        }
    }

    return countRemoved;
}

// const intervals = [[1,2],[2,3],[3,4],[1,3]];
// console.log(eraseOverlapIntervals(intervals));
// Output: 1
