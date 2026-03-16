//? 19. Remove Nth Node From End of List

//! Pattern: Fast & Slow Pointers (Offset Pointers)
//! Companies: Meta, Amazon, Apple, Google, Microsoft
//! Difficulty: Medium

//* While not a "cycle" checking problem, this problem uses two pointers moving at the same speed
//* but with a fixed OFFSET. 
//* We move the 'fast' pointer 'n' steps ahead. Then we move both at the same speed.
//* When 'fast' hits the end of the list, 'slow' will be exactly at the (Nth from end) node.

// Time: O(L) where L is the length of the list, done in a single pass
// Space: O(1)

function removeNthFromEnd(head, n) {
    // Add a dummy node to easily handle removing the head itself
    const dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Advance fast pointer by n + 1 steps so slow lands on the predecessor
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both until fast reaches the end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Skip the nth node
    slow.next = slow.next.next;

    return dummy.next;
}

// Minimal definition for context
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// const head = [1,2,3,4,5];
// const n = 2;
// console.log(removeNthFromEnd(head, n));
// Output: [1,2,3,5]
