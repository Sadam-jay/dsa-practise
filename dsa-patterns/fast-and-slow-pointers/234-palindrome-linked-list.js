//? 234. Palindrome Linked List

//! Pattern: Fast & Slow Pointers
//! Companies: Meta, Amazon, Microsoft, Apple
//! Difficulty: Easy

//* To check if a linked list is a palindrome in O(1) space, we:
//* 1. Use Fast & Slow pointers to find the middle.
//* 2. Reverse the second half of the linked list in-place.
//* 3. Use two pointers to compare the first half with the newly reversed second half.
//* 4. (Optional but good practice) Restore the second half to its original state.

// Time: O(n)
// Space: O(1)

function isPalindrome(head) {
    if (!head || !head.next) return true;

    // 1. Find the middle
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half
    let prev = null;
    let curr = slow;
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // 3. Compare the two halves
    let left = head;
    let right = prev; // 'prev' is now the head of the reversed second half
    
    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
}

// const head = [1,2,2,1];
// console.log(isPalindrome(head));
// Output: true
