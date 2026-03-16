//? 981. Time Based Key-Value Store

//! Pattern: Binary Search (with Hash Map)
//! Companies: Google, Amazon, Netflix, Apple
//! Difficulty: Medium

//* We need to design a data structure that stores multiple values for the same key at different timestamps.
//* Timestamps are strictly increasing when `set` is called.
//* Therefore, the array of `[value, timestamp]` pairs for any key is inherently SORTED by timestamp!
//* When retrieving via `get(key, timestamp)`, we use Binary Search to find the largest timestamp
//* that is less than or equal to the requested timestamp.

// Time: set() is O(1) amortized, get() is O(log n)
// Space: O(n) for storing the values

class TimeMap {
    constructor() {
        this.store = new Map();
    }

    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        // Because timestamps are monotonically increasing, pushing maintains sorted order
        this.store.get(key).push({ value, timestamp });
    }

    get(key, timestamp) {
        if (!this.store.has(key)) return "";

        const values = this.store.get(key);
        let left = 0;
        let right = values.length - 1;
        let result = "";

        // Binary Search for the largest timestamp <= target timestamp
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (values[mid].timestamp <= timestamp) {
                // This is a valid candidate. Save it and try to find a larger, valid timestamp
                result = values[mid].value;
                left = mid + 1;
            } else {
                // Timestamp is too large, search prior values
                right = mid - 1;
            }
        }

        return result;
    }
}
