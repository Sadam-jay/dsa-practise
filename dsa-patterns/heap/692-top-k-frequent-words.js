//? 692. Top K Frequent Words

//! Pattern: Heap / Priority Queue (Custom Comparator)
//! Companies: Amazon, Bloomberg, Yelp
//! Difficulty: Medium

//* Finding exact K most frequent elements, BUT with a nasty secondary tie-breaking clause:
//* "If two words have the same frequency, the word with the lower alphabetical order comes first."
//* To solve this keeping O(N log K), we use a Min-Heap of size K.
//* However, JS strings are compared alphabetically. 
//* We must inject a custom comparator physically into the `.up()` and `.down()` bubbles of the Heap.
//* Rule: if `freq A !== freq B`, sort strictly by frequency counting.
//* Else: if `freq A === freq B`, sort REVERSE alphabetically on the string!
//* (We sort the strings in REVERSE in the Min-Heap so that 'a' is "larger" than 'z', meaning 'z' bubbles to top and logically gets evicted first! This successfully protects 'a' inside our K-bounds!).

// Time: O(N log K)
// Space: O(N) physically for Hash Map, O(K) physically for Heap

function topKFrequent(words, k) {
    const countMap = new Map();
    for (const word of words) countMap.set(word, (countMap.get(word) || 0) + 1);

    // Custom Comparator function returning boolean True if A is strictly "Lesser/Worse" than B
    // In our Min-Heap, "Lesser/Worse" items bubble to the top to get evicted!
    // What is "Worse"?
    // 1. Having a lower frequency count.
    // 2. Having the SAME frequency, but being ALPHABETICALLY LATER (e.g. 'z' is worse than 'a').
    const isWorse = (a, b) => {
        if (a.freq !== b.freq) {
            return a.freq < b.freq;
        }
        // If 'z' > 'a' (returns true), it implies 'z' is "worse" and should violently bubble towards eviction.
        return a.word > b.word; 
    };

    const minHeap = new MinHeapCustom(isWorse);

    for (const [word, freq] of countMap.entries()) {
        minHeap.push({ word, freq });
        
        if (minHeap.size() > k) {
            minHeap.pop(); // Evicts the systematically "worst" active element
        }
    }

    // Extraction
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.pop().word);
    }
    
    // Because we extract from a Min Heap, we are popping the "worst" remaining first.
    // Since we want the absolute best at the front of the array natively, we reverse it.
    return result.reverse();
}

class MinHeapCustom {
    constructor(isWorse) { this.data = []; this.isWorse = isWorse; }
    push(val) { this.data.push(val); this.up(this.data.length - 1); }
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0]; this.data[0] = this.data.pop(); this.down(0); return top;
    }
    size() { return this.data.length; }
    up(i) {
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && this.isWorse(this.data[i], this.data[p])) {
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p; p = Math.floor((i - 1) / 2);
        }
    }
    down(i) {
        let s = i;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2;
            if (l < this.data.length && this.isWorse(this.data[l], this.data[s])) s = l;
            if (r < this.data.length && this.isWorse(this.data[r], this.data[s])) s = r;
            if (s === i) break;
            [this.data[s], this.data[i]] = [this.data[i], this.data[s]];
            i = s;
        }
    }
}

// const words = [&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;,&quot;i&quot;,&quot;love&quot;,&quot;coding&quot;];
// const k = 2;
// console.log(topKFrequent(words, k));
// Output: [&quot;i&quot;,&quot;love&quot;]
