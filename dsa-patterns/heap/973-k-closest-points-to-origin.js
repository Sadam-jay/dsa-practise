//? 973. K Closest Points to Origin

//! Pattern: Heap / Priority Queue (Max-Heap for "Min" K elements)
//! Companies: Meta, Amazon, DoorDash
//! Difficulty: Medium

//* We want the K points CLOSEST (smallest distance) to the origin `(0,0)`.
//* To get the K SMALLEST items optimally, we strangely use a MAX-Heap of size K!
//* We calculate the Euclidean distance `(x^2 + y^2)`.
//* We push the point and its distance into our Max-Heap.
//* If the heap grows larger than K, the Max-Heap inherently bubbles the LARGEST distance to the top!
//* We `.pop()` it! We systematically destroy the largest (worst) distances.
//* The K items that survive inside the heap are the objectively absolute minimum distances!

// Time: O(n log k)
// Space: O(k)

class MaxHeap {
    constructor() { this.data = []; }
    // We compare based strictly on the stored `.dist` property!
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
    size() { return this.data.length; }
    
    up(i) {
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && this.data[p].dist < this.data[i].dist) {
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p; p = Math.floor((i - 1) / 2);
        }
    }
    down(i) {
        let largest = i;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2;
            if (l < this.data.length && this.data[l].dist > this.data[largest].dist) largest = l;
            if (r < this.data.length && this.data[r].dist > this.data[largest].dist) largest = r;
            if (largest === i) break;
            [this.data[largest], this.data[i]] = [this.data[i], this.data[largest]];
            i = largest;
        }
    }
}

function kClosest(points, k) {
    const maxHeap = new MaxHeap();

    for (const [x, y] of points) {
        // Distance from (0,0) is sqrt(x^2 + y^2).
        // Since we are strictly comparing relativity, computing square roots is computationally wasted.
        // We can just compare strictly the fully squared hypotenuse lengths!
        const distSquared = (x ** 2) + (y ** 2);
        
        maxHeap.push({ point: [x, y], dist: distSquared });

        // Maintain strict K size constraint
        if (maxHeap.size() > k) {
            maxHeap.pop(); // Destroy the furthest point
        }
    }

    // Extract the K surviving closest points
    return maxHeap.data.map(item => item.point);
}

// const points = [[1,3],[-2,2]];
// const k = 1;
// console.log(kClosest(points, k));
// Output: [[-2,2]]
