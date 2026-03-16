//? 904. Fruit Into Baskets

//! Pattern: Sliding Window
//! Companies: Google, Amazon, Microsoft
//! Difficulty: Medium

//* This problem is conceptually identical to "Longest Substring with At Most 2 Distinct Characters".
//* We are traversing an array representing tree fruit types.
//* We use a frequency map to track types of fruits in our current contiguous subarray (window).
//* When the map size exceeds 2 (i.e. we found a 3rd distinct type), 
//* we must shrink from the left until exactly one fruit type is removed entirely from our map.

// Time: O(n)
// Space: O(1) - The map stores at most 3 distinct items at any time

function totalFruit(fruits) {
    const basket = new Map();
    let left = 0;
    let maxFruits = 0;

    for (let right = 0; right < fruits.length; right++) {
        // Add current fruit to the basket
        const currentFruit = fruits[right];
        basket.set(currentFruit, (basket.get(currentFruit) || 0) + 1);

        // Shrink if we have more than 2 types of fruits
        while (basket.size > 2) {
            const leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);

            // Once a specific fruit type drops to 0 count, we remove it from the map
            // taking us back down to 2 valid fruit types
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            left++;
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
}

// const fruits = [1,2,1];
// console.log(totalFruit(fruits));
// Output: 3
