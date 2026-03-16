//? 621. Task Scheduler

//! Pattern: Greedy (Math Formulation / Simulation)
//! Companies: Meta, Amazon, Uber, Microsoft
//! Difficulty: Medium

//* We must run tasks with a minimum cooldown `n` between identical tasks.
//* The greedy bottleneck is ALWAYS the most frequent task!
//* E.g., 'A' has frequency 3, cooldown 2.
//* The absolute minimum layout is: A _ _ A _ _ A 
//* The "chunks" are defined by the most frequent item `(max_freq - 1) * (n + 1)`.
//* The elements sharing the exact same maximum frequency simply attach to the tail `+ count_of_max_freqs`.
//* If there are so many other tasks that the "idle" gaps get entirely filled natively,
//* the answer defaults to simply the length of the task array!

// Time: O(n) - We just count frequencies and do math constants
// Space: O(1) - Frequency array of size 26 for English letters

function leastInterval(tasks, n) {
    const frequencies = new Array(26).fill(0);
    let maxFreq = 0;
    
    // Count frequencies and identify the absolute highest frequency
    for (const task of tasks) {
        const currentFreq = ++frequencies[task.charCodeAt(0) - 65];
        maxFreq = Math.max(maxFreq, currentFreq);
    }

    // Count how many distinct letters actually SHARE this absolute max frequency
    // Example: A and B both appear 3 times (the max). They both define the bottleneck tail.
    let numTasksWithMaxFreq = 0;
    for (const freq of frequencies) {
        if (freq === maxFreq) {
            numTasksWithMaxFreq++;
        }
    }

    // Calculate theoretical minimum layout built entirely around the bottleneck tasks
    // `maxFreq - 1` gaps, each consisting of `n + 1` empty spaces.
    // Plus the `numTasksWithMaxFreq` which represent the physical existence of the final slice.
    const minimalTime = (maxFreq - 1) * (n + 1) + numTasksWithMaxFreq;

    // The actual answer is the GREATER of these two:
    // 1. the mathematically bottlenecked time with potential idle slots
    // 2. the raw volume of tasks (if they natively pack together perfectly overflowing the gaps)
    return Math.max(minimalTime, tasks.length);
}

// const tasks = [&quot;A&quot;,&quot;A&quot;,&quot;A&quot;,&quot;B&quot;,&quot;B&quot;,&quot;B&quot;];
// const n = 2;
// console.log(leastInterval(tasks, n));
// Output: 8
