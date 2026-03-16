//? 871. Minimum Number of Refueling Stops

//! Pattern: Heap / Priority Queue (Greedy Choice)
//! Companies: Google, Amazon, Microsoft
//! Difficulty: Hard

//* You are driving to a target. You have current fuel.
//* There are gas stations along the way.
//* How do you minimize stops?
//* GREEDY + HEAP LOGIC: DO NOT practically stop until you absolutely mathematically physically run out of gas!
//* As we drive past stations, we inherently note down the amount of gas they strictly offered in a Max-Heap.
//* If we run entirely out of gas natively, we retroactively pretend we structurally stopped 
//* at the SINGLE PREVIOUS STATION that explicitly offered the MAXIMUM ABSOLUTE gas!
//* We pop it from the Max-Heap, add its gas to our tank, and keep evaluating.

// Time: O(N log N) - N is number of stations. Max-Heap extraction is O(log N)
// Space: O(N)

function minRefuelStops(target, startFuel, stations) {
    // MaxHeap to keep strictly track of the largest gas reservoirs we mathematically Drove Past
    const maxHeap = new MaxHeap();
    
    let stops = 0;
    let maxDistanceReachable = startFuel; // Initially, we can only reach as far as our raw fuel takes us
    let currentIndex = 0;

    // Loop until our theoretically mathematically reachable distance eclipses the target
    while (maxDistanceReachable < target) {
        
        // Did we physically drive past any stations inside our current reachable window?
        while (currentIndex < stations.length && stations[currentIndex][0] <= maxDistanceReachable) {
            // Yes! Memorize the amount of gas they offered just in case we need it later.
            maxHeap.push(stations[currentIndex][1]);
            currentIndex++;
        }

        // We are officially mathematically stranded. We haven't reached the target, 
        // and we haven't driven past any new stations to check.
        // We MUST retroactively cash in a stop at the best station we remember passing!
        if (maxHeap.size() === 0) {
            // There are NO stations behind us we didn't already cash in. We violently fail.
            return -1;
        }

        // We greedily consume the absolute largest mathematical gas tank we skipped!
        maxDistanceReachable += maxHeap.pop();
        stops++;
    }

    return stops;
}

// Minimal implementation block
class MaxHeap { constructor(){this.d=[]} push(v){this.d.push(v);this.up(this.d.length-1)} pop(){if(this.d.length===1)return this.d.pop();let t=this.d[0];this.d[0]=this.d.pop();this.down(0);return t} size(){return this.d.length} up(i){let p=Math.floor((i-1)/2);while(i>0&&this.d[p]<this.d[i]){[this.d[p],this.d[i]]=[this.d[i],this.d[p]];i=p;p=Math.floor((i-1)/2)}} down(i){let s=i;while(true){let l=2*i+1,r=2*i+2;if(l<this.d.length&&this.d[l]>this.d[s])s=l;if(r<this.d.length&&this.d[r]>this.d[s])s=r;if(s===i)break;[this.d[s],this.d[i]]=[this.d[i],this.d[s]];i=s}} }

// const target = 1;
// const startFuel = 1;
// const stations = [];
// console.log(minRefuelStops(target, startFuel, stations));
// Output: 0
