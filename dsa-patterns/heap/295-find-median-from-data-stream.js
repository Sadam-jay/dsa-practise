//? 295. Find Median from Data Stream

//! Pattern: Heap / Priority Queue (Two Heaps)
//! Companies: Amazon, Microsoft, Apple, Google, Meta
//! Difficulty: Hard

//* The classic elite Two Heaps algorithm.
//* We receive a stream of numbers. We must return the median mathematically at any point.
//* The median structurally sits in the exact middle of sorted data.
//* We split the theoretical sorted data perfectly in half using TWO HEAPS.
//* The "Small Half" uses a Max-Heap (so the absolute biggest of the smalls sits at the top).
//* The "Large Half" uses a Min-Heap (so the absolute smallest of the bigs sits at the top).
//* The true median is always just peeking these two top borders resting against each other!

// Time: O(log N) for addNum(), O(1) for findMedian()
// Space: O(N) physically storing the numbers across two arrays

// NOTE: Uses custom logical implementations of MaxHeap and MinHeap
// Both implement .push(), .pop(), .peek(), .size()

class MedianFinder {
    constructor() {
        this.smallHeap = new MaxHeap(); // Max-heap storing smaller half
        this.largeHeap = new MinHeap(); // Min-heap storing larger half
    }

    addNum(num) {
        // ALWAYS unconditionally toss the number into the small half first
        this.smallHeap.push(num);

        // 1. Mathematical Guarantee Check:
        // The absolute BIGGEST number in the "small" half CANNOT be bigger 
        // than the absolute SMALLEST number in the "large" half!
        if (
            this.smallHeap.size() > 0 && this.largeHeap.size() > 0 && 
            this.smallHeap.peek() > this.largeHeap.peek()
        ) {
            // It violates the boundary! Evict it to the large half.
            this.largeHeap.push(this.smallHeap.pop());
        }

        // 2. Structural Size Balancing Check:
        // We arbitrarily decide the smallHeap is allowed to mathematically hold 1 extra element for odd totals
        if (this.smallHeap.size() > this.largeHeap.size() + 1) {
            this.largeHeap.push(this.smallHeap.pop());
        }
        
        if (this.largeHeap.size() > this.smallHeap.size()) {
            this.smallHeap.push(this.largeHeap.pop());
        }
    }

    findMedian() {
        // If odd, our algorithm guaranteed smallHeap forcefully holds the exact median!
        if (this.smallHeap.size() > this.largeHeap.size()) {
            return this.smallHeap.peek();
        }

        // If even, average the two perfectly touching boundaries!
        return (this.smallHeap.peek() + this.largeHeap.peek()) / 2;
    }
}

// Minimal implementation block
class MinHeap { constructor(){this.d=[]} push(v){this.d.push(v);this.up(this.d.length-1)} pop(){if(this.d.length===1)return this.d.pop();let t=this.d[0];this.d[0]=this.d.pop();this.down(0);return t} peek(){return this.d[0]} size(){return this.d.length} up(i){let p=Math.floor((i-1)/2);while(i>0&&this.d[p]>this.d[i]){[this.d[p],this.d[i]]=[this.d[i],this.d[p]];i=p;p=Math.floor((i-1)/2)}} down(i){let s=i;while(true){let l=2*i+1,r=2*i+2;if(l<this.d.length&&this.d[l]<this.d[s])s=l;if(r<this.d.length&&this.d[r]<this.d[s])s=r;if(s===i)break;[this.d[s],this.d[i]]=[this.d[i],this.d[s]];i=s}} }
class MaxHeap { constructor(){this.d=[]} push(v){this.d.push(v);this.up(this.d.length-1)} pop(){if(this.d.length===1)return this.d.pop();let t=this.d[0];this.d[0]=this.d.pop();this.down(0);return t} peek(){return this.d[0]} size(){return this.d.length} up(i){let p=Math.floor((i-1)/2);while(i>0&&this.d[p]<this.d[i]){[this.d[p],this.d[i]]=[this.d[i],this.d[p]];i=p;p=Math.floor((i-1)/2)}} down(i){let s=i;while(true){let l=2*i+1,r=2*i+2;if(l<this.d.length&&this.d[l]>this.d[s])s=l;if(r<this.d.length&&this.d[r]>this.d[s])s=r;if(s===i)break;[this.d[s],this.d[i]]=[this.d[i],this.d[s]];i=s}} }
