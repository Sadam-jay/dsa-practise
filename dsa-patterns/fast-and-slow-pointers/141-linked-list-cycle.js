//? 141. Linked List Cycle

//! Pattern: Fast & Slow Pointers (Floyd's Cycle-Finding Algorithm)
//! Companies: Microsoft, Amazon, Meta, Apple
//! Difficulty: Easy

//* This is the fundamental problem for the Fast & Slow pointer pattern.
//* We use two pointers, 'slow' moving one step at a time, and 'fast' moving two steps.
//* If there is no cycle, the 'fast' pointer will eventually reach the end (null).
//* If there is a cycle, the 'fast' pointer will eventually lap the 'slow' pointer 
//* and they will meet at the same node.

// Time: O(n)
// Space: O(1)

function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    // Traverse until fast reaches the end of the list
    while (fast && fast.next) {
        slow = slow.next;         // 1 step
        fast = fast.next.next;    // 2 steps

        // If they meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }

    return false;
}

// const head = [3,2,0,-4];
// const pos = 1;
// console.log(hasCycle(head, pos));
// Output: true
