//? 355. Design Twitter

//! Pattern: Heap / Priority Queue (Merge K Sorted with Timestamps)
//! Companies: Amazon, Meta, Twitter
//! Difficulty: Medium

//* A system design problem perfectly solved by "Merge K Sorted Lists" logic.
//* We track globally unique, strictly increasing timestamps for EVERY tweet.
//* A user follows 'k' followees. When generating a news feed, we must fetch the 10 most recent 
//* tweets across ALL of those 'k' followees' individual tweet histories.
//* Since every individual followee's tweet history is ALREADY sorted chronologically,
//* we simply push the "HEAD" (their most recent tweet) of each followed user's list into a Max-Heap.

// Time: O(K) to build heap + O(10 log K) to extract feed. (k is number of followees)
// Space: O(U + T) structurally for users and tweets

class Twitter {
    constructor() {
        this.globalTime = 0;
        this.tweetMap = new Map(); // userId -> Array of {tweetId, time}
        this.followMap = new Map(); // userId -> Set of followeeIds
    }

    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) this.tweetMap.set(userId, []);
        // Appending natively sorts the user's personal list chronologically
        this.tweetMap.get(userId).push({ id: tweetId, time: this.globalTime++ });
    }

    getNewsFeed(userId) {
        let res = [];
        let maxHeap = new MaxHeap(); // Compares specifically based on `.time` property

        // You implicitly follow yourself
        if (!this.followMap.has(userId)) this.followMap.set(userId, new Set());
        this.followMap.get(userId).add(userId);

        // Prepopulate the Max-Heap with ONLY the absolute most recent tweet from EACH followee
        for (let followeeId of this.followMap.get(userId)) {
            if (this.tweetMap.has(followeeId)) {
                let tweets = this.tweetMap.get(followeeId);
                let latestIndex = tweets.length - 1;
                let latestTweet = tweets[latestIndex];
                
                // We physically store the index location so we can iteratively request the NEXT tweet backwards later!
                maxHeap.push({ ...latestTweet, tweetIndex: latestIndex, userId: followeeId });
            }
        }

        // Systematically extract the 10 absolute most recent tweets globally
        while (maxHeap.size() > 0 && res.length < 10) {
            let curr = maxHeap.pop();
            res.push(curr.id); // Add it to feed

            // Conceptually matching the `smallestNode.next` logic in Merge K Sorted Lists!
            // Grab the dynamically next recent tweet from that specific user's block
            if (curr.tweetIndex > 0) {
                let nextIdx = curr.tweetIndex - 1;
                let nextTweet = this.tweetMap.get(curr.userId)[nextIdx];
                maxHeap.push({ ...nextTweet, tweetIndex: nextIdx, userId: curr.userId });
            }
        }

        return res;
    }

    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) this.followMap.set(followerId, new Set());
        this.followMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}

class MaxHeap { constructor(){this.d=[]} push(v){this.d.push(v);this.up(this.d.length-1)} pop(){if(this.d.length===1)return this.d.pop();let t=this.d[0];this.d[0]=this.d.pop();this.down(0);return t} size(){return this.d.length} up(i){let p=Math.floor((i-1)/2);while(i>0&&this.d[p].time<this.d[i].time){[this.d[p],this.d[i]]=[this.d[i],this.d[p]];i=p;p=Math.floor((i-1)/2)}} down(i){let s=i;while(true){let l=2*i+1,r=2*i+2;if(l<this.d.length&&this.d[l].time>this.d[s].time)s=l;if(r<this.d.length&&this.d[r].time>this.d[s].time)s=r;if(s===i)break;[this.d[s],this.d[i]]=[this.d[i],this.d[s]];i=s}} }
