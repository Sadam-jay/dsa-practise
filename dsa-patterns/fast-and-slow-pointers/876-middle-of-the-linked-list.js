//? 876. Middle of the Linked List

//! Pattern: Fast & Slow Pointers
//! Companies: Amazon, Meta, Microsoft, Oracle
//! Difficulty: Easy

//* This is a classic trick to find the exact middle of a linked list in one pass.
//* By moving 'fast' twice as fast as 'slow', when 'fast' reaches the end (null or last node),
//* 'slow' will be perfectly positioned at the middle node.
//* If there are two middle nodes, 'slow' naturally lands on the second one.

// Time: O(n)
// Space: O(1)

function middleNode(head) {
    let slow = head;
    let fast = head;

    // Fast moves 2 steps, slow moves 1
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // slow is now exactly in the middle
    return slow;
}

// const head = [1,2,3,4,5];
// console.log(middleNode(head));
// Output: [3,4,5]
