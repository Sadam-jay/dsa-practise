//? 703. Kth Largest Element in a Stream

//! Pattern: Heap / Priority Queue
//! Companies: Amazon, Apple, Google
//! Difficulty: Easy

//* We have a data stream (dynamic, continuous inputs) and we need to report the Kth largest element 
//* at any given moment when `add(val)` is called.
//* A Min-Heap strictly configured to a maximum size of 'K' natively solves this.
//* By always dropping the smallest elements, the K elements remaining are unequivocally the top K elements.
//* Therefore, the smallest of those top K elements (sitting perfectly on top of the Min-Heap)
//* is exactly the Kth largest element!

// Time: O(N log K) for constructor, O(log K) for each add() call
// Space: O(K)

class MinHeap {
    constructor() { this.data = []; }
    push(val) {
        this.data.push(val);
        this.up(this.data.length - 1);
    }
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.down(0);
        return top;
    }
    peek() { return this.data[0]; }
    size() { return this.data.length; }

    up(i) {
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && this.data[p] > this.data[i]) {
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p; p = Math.floor((i - 1) / 2);
        }
    }
    down(i) {
        let smallest = i;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2;
            if (l < this.data.length && this.data[l] < this.data[smallest]) smallest = l;
            if (r < this.data.length && this.data[r] < this.data[smallest]) smallest = r;
            if (smallest === i) break;
            [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
            i = smallest;
        }
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();

        for (const num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.minHeap.push(val);

        // Keep the heap size strictly at K!
        if (this.minHeap.size() > this.k) {
            this.minHeap.pop(); // Evict the absolute smallest mathematically
        }

        // Return the smallest of the K largest elements natively sitting at the top
        return this.minHeap.peek();
    }
}
