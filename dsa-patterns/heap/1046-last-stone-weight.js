//? 1046. Last Stone Weight

//! Pattern: Heap / Priority Queue (Max-Heap Simulation)
//! Companies: Amazon, ByteDance
//! Difficulty: Easy

//* We systematically smash the two LARGEST stones together.
//* A pure sorting array requires O(N log N) sorting repeatedly after every single smash.
//* A Max-Heap intrinsically keeps the largest stones at the top, extracting them in O(log N).
//* We extract the top two stones. If they differ, we push the remainder back into the heap.

// Time: O(n log n) - Building initial heap O(N log N), and we smash O(N) times taking O(log N) each
// Space: O(n) - The physical array implementing the heap

class MaxHeap {
    constructor() { this.data = []; }
    push(val) {
        this.data.push(val);
        this.heapifyUp(this.data.length - 1);
    }
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return top;
    }
    size() { return this.data.length; }
    
    // Identical to MinHeap, just flipped inequality operators!
    heapifyUp(i) {
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && this.data[p] < this.data[i]) {
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p; p = Math.floor((i - 1) / 2);
        }
    }
    heapifyDown(i) {
        let largest = i;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2;
            if (l < this.data.length && this.data[l] > this.data[largest]) largest = l;
            if (r < this.data.length && this.data[r] > this.data[largest]) largest = r;
            if (largest === i) break;
            [this.data[largest], this.data[i]] = [this.data[i], this.data[largest]];
            i = largest;
        }
    }
}

function lastStoneWeight(stones) {
    const maxHeap = new MaxHeap();
    for (const stone of stones) {
        maxHeap.push(stone);
    }

    while (maxHeap.size() > 1) {
        const stone1 = maxHeap.pop(); // The largest
        const stone2 = maxHeap.pop(); // The second largest

        // If they are equal, both are destroyed.
        if (stone1 !== stone2) {
            // Push the physical difference back into the pile
            maxHeap.push(stone1 - stone2);
        }
    }

    return maxHeap.size() === 1 ? maxHeap.pop() : 0;
}

// const stones = [2,7,4,1,8,1];
// console.log(lastStoneWeight(stones));
// Output: 1
