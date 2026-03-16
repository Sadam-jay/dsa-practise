//? 142. Linked List Cycle II

//! Pattern: Fast & Slow Pointers
//! Companies: Microsoft, Amazon, Meta
//! Difficulty: Medium

//* Building on cycle detection, this problem asks for the *start node* of the cycle.
//* Phase 1: Detect if a cycle exists using standard Fast & Slow pointers.
//* Phase 2: Once they meet, mathematically the distance from the head to the cycle start
//* is equal to the distance from the intersection point to the cycle start.
//* We place a new pointer at the head, and move both pointers 1 step at a time until they meet.

// Time: O(n)
// Space: O(1)

function detectCycle(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;
    let hasCycle = false;

    // Phase 1: Find the intersection point
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }

    // If no cycle, return null
    if (!hasCycle) return null;

    // Phase 2: Find the entry point
    let entry = head;
    while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
    }

    return entry;
}

// const head = [3,2,0,-4];
// const pos = 1;
// console.log(detectCycle(head, pos));
// Output: tail connects to node index 1
