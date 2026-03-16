//? 148. Sort List

//! Pattern: Fast & Slow Pointers (Finding Middle for Merge Sort)
//! Companies: Meta, ByteDance, Microsoft, Google
//! Difficulty: Medium

//* This problem demonstrates a practical application of finding the middle.
//* To perform O(n log n) time and O(1) space Merge Sort on a Linked List,
//* we MUST divide the list in half continuously.
//* Fast & Slow pointers natively split a linked list directly in the middle in O(n) time.

// Time: O(n log n)
// Space: O(log n) - For the recursive call stack (if required O(1), an iterative bottom-up approach is needed)

function sortList(head) {
    if (!head || !head.next) return head;

    // 1. Find the middle
    let prev = null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Cut the list into two halves
    prev.next = null;

    // 2. Sort each half recursively
    const l1 = sortList(head);
    const l2 = sortList(slow);

    // 3. Merge the sorted halves
    return merge(l1, l2);
}

function merge(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1) curr.next = l1;
    if (l2) curr.next = l2;

    return dummy.next;
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// const head = [4,2,1,3];
// console.log(sortList(head));
// Output: [1,2,3,4]
