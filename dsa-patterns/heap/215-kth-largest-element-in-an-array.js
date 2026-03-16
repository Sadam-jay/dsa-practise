//? 215. Kth Largest Element in an Array

//! Pattern: Heap / Priority Queue
//! Companies: Meta, Amazon, Apple, Microsoft, Bloomberg
//! Difficulty: Medium

//* Finding the Kth Largest element. 
//* We could sort the array O(N log N) and return `nums[nums.length - k]`.
//* But we can optimize to O(N log K) using a Min-Heap of size K!
//* We iterate through the array, pushing elements into our Min-Heap.
//* Our Min-Heap keeps the absolute SMALLEST element structurally at the top.
//* If the heap size grows beyond K, we strictly POP the top (the smallest).
//* By constantly destroying the smallest items, a size K Min-Heap naturally preserves 
//* the K LARGEST items it has ever seen. At the end, the top is precisely the Kth largest!

// Time: O(n log k)
// Space: O(k)

// ** Note: JavaScript has no built-in Heap. This is a minimal MinHeap array simulation **
// Assume built-in for interviews or quickly write a class like this:
class MinHeap {
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
    peek() { return this.data[0]; }
    size() { return this.data.length; }
    
    heapifyUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.data[parent] <= this.data[i]) break;
            [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
            i = parent;
        }
    }
    heapifyDown(i) {
        while (true) {
            let smallest = i;
            const left = 2 * i + 1, right = 2 * i + 2;
            if (left < this.data.length && this.data[left] < this.data[smallest]) smallest = left;
            if (right < this.data.length && this.data[right] < this.data[smallest]) smallest = right;
            if (smallest === i) break;
            [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
            i = smallest;
        }
    }
}

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();

    for (const num of nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop(); // Toss the smallest number
        }
    }

    return minHeap.peek(); // The top perfectly rests as the Kth Largest
}

// const nums = [3,2,1,5,6,4];
// const k = 2;
// console.log(findKthLargest(nums, k));
// Output: 5
