//? 901. Online Stock Span

//! Pattern: Monotonic Stack (Decreasing, Class Structure)
//! Companies: Amazon, Microsoft, ByteDance, Bloomberg
//! Difficulty: Medium

//* We receive stock prices day-by-day (Online algorithm).
//* The "span" is the maximum number of consecutive days (going backwards) where the price was <= today's price.
//* This is exactly finding the "Previous Greater Element"!
//* We maintain a Monotonic Decreasing Stack holding `[price, span]`.
//* When a new price arrives, while the top of the stack is `<= price`, we POP it.
//* We accumulate the span of the popped elements because if the current price beats the old high, 
//* it naturally beats everything that the old high beat!

// Time: O(1) amortized per `next` call. Each element is pushed and popped exactly once
// Space: O(n) - In the worst case, decreasing prices means everything stays on the stack

class StockSpanner {
    constructor() {
        // Stack stores pairs: [price, mathematical span]
        this.stack = [];
    }

    next(price) {
        // Every day naturally has a span of at least 1 (itself)
        let span = 1;

        // While the current price is >= the price on top of the stack...
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            // We beat this previous day, so we inherit all of its accumulated span!
            const popped = this.stack.pop();
            span += popped[1];
        }

        // Push the current price and its accumulated dominance span onto the stack
        this.stack.push([price, span]);

        return span;
    }
}
