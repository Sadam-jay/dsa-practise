//? 23. Merge k Sorted Lists

//! Pattern: Heap / Priority Queue (Merge K Sorted)
//! Companies: Meta, Amazon, Microsoft, ByteDance, Airbnb
//! Difficulty: Hard

//* We are given an array of 'k' linked lists, each already beautifully sorted.
//* We want to merge them all into one giant sorted linked list.
//* We drop the `head` node of EVERY singly linked list into a Min-Heap.
//* The Min-Heap inherently bubbles the absolute mathematically smallest node to the top.
//* We pop that node, append it to our final result linked list...
//* ...AND THEN immediately push that popped node's `.next` neighbor into the Heap!
//* The Heap constantly arbitrates the "smallest currently available node" across all 'k' tracks.

// Time: O(N log k) - N is total nodes across all lists, k is number of lists
// Space: O(k) - The heap holds at most 'k' nodes at any given time!

// Basic MinHeap abstraction (Assume typical implementation for brevity)
class MinHeap {
    constructor() { this.data = []; }
    push(val) { this.data.push(val); this.up(this.data.length - 1); }
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0]; this.data[0] = this.data.pop(); this.down(0); return top;
    }
    size() { return this.data.length; }
    // Compares actual node VALUES!
    up(i) {
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && this.data[p].val > this.data[i].val) {
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p; p = Math.floor((i - 1) / 2);
        }
    }
    down(i) {
        let smallest = i;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2;
            if (l < this.data.length && this.data[l].val < this.data[smallest].val) smallest = l;
            if (r < this.data.length && this.data[r].val < this.data[smallest].val) smallest = r;
            if (smallest === i) break;
            [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
            i = smallest;
        }
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();

    // 1. Initialize the Heap with the absolute starting heads of all K lists
    for (const listHead of lists) {
        if (listHead !== null) {
            minHeap.push(listHead);
        }
    }

    const dummy = new ListNode(0);
    let tail = dummy;

    // 2. Continuously extract the absolute shortest node globally
    while (minHeap.size() > 0) {
        const smallestNode = minHeap.pop();
        
        // Attach it to our merged result chain
        tail.next = smallestNode;
        tail = tail.next;

        // 3. Since we consumed this node, throw its logical successor back into the cage match!
        if (smallestNode.next !== null) {
            minHeap.push(smallestNode.next);
        }
    }

    return dummy.next;
}

// Provided definition
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// const lists = [[1,4,5],[1,3,4],[2,6]];
// console.log(mergeKLists(lists));
// Output: [1,1,2,3,4,4,5,6]
