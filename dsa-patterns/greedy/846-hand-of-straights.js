//? 846. Hand of Straights

//! Pattern: Greedy (Frequency Map)
//! Companies: Google, Amazon, Microsoft
//! Difficulty: Medium

//* You have an array of cards. Can you arrange them into groups of `groupSize`, 
//* where each group consists of consecutive continuous numbers?
//* A Greedy strategy dictates: You MUST systematically satisfy the SMALLEST completely unhandled card first!
//* We track card frequencies using a Map.
//* We identify the unique cards, sort them greedily from smallest to largest.
//* For every smallest card, we *attempt* to sequentially build a straight of length `groupSize`.

// Time: O(n log n) - sorting unique cards, plus n lookups
// Space: O(n)

function isNStraightHand(hand, groupSize) {
    // A quick math check: if the total cards cannot evenly divide into groups, fail.
    if (hand.length % groupSize !== 0) return false;

    // Frequency map
    const count = new Map();
    for (const card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }

    // Extract unique cards and sort them to enable the greedy approach
    const uniqueCards = Array.from(count.keys()).sort((a, b) => a - b);

    for (const card of uniqueCards) {
        // If this specific card has remaining counts we need to group...
        const remainingQuantity = count.get(card);
        
        if (remainingQuantity > 0) {
            // Greedily build a consecutive sequence of size 'groupSize'
            // starting strictly from this unfulfilled 'card'
            for (let i = 0; i < groupSize; i++) {
                const targetCard = card + i;
                const availableQuantity = count.get(targetCard) || 0;

                // If the strictly required consecutive card frequency is insufficient
                if (availableQuantity < remainingQuantity) {
                    return false;
                }

                // Consume the frequencies
                count.set(targetCard, availableQuantity - remainingQuantity);
            }
        }
    }

    return true;
}

// const hand = [1,2,3,6,2,3,4,7,8];
// const groupSize = 3;
// console.log(isNStraightHand(hand, groupSize));
// Output: true
