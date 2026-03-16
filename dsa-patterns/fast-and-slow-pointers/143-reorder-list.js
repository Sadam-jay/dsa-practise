//? 143. Reorder List

//! Pattern: Fast & Slow Pointers
//! Companies: Meta, Amazon, Microsoft, ByteDance
//! Difficulty: Medium

//* This problem combines three important linked list techniques:
//* 1. Use Fast & Slow pointers to find the middle of the list.
//* 2. Reverse the second half of the list starting from the middle.
//* 3. Merge the two halves by interleaving one node from each side alternately.

// Time: O(n)
// Space: O(1)

function reorderList(head) {
    if (!head || !head.next) return;

    // 1. Find the middle
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half
    let prev = null;
    let curr = slow.next;
    slow.next = null; // Cut off the first half from the second half
    
    while (curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // 3. Merge two lists
    let first = head;
    let second = prev; // 'prev' is the head of the reversed second half

    while (second) {
        const tmp1 = first.next;
        const tmp2 = second.next;

        first.next = second;
        second.next = tmp1;

        first = tmp1;
        second = tmp2;
    }
}

// const head = [1,2,3,4];
// console.log(reorderList(head));
// Output: [1,4,2,3]
