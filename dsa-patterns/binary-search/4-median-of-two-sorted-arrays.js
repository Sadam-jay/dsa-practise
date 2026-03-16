//? 4. Median of Two Sorted Arrays

//! Pattern: Binary Search (on Multiple Arrays)
//! Companies: Google, Amazon, Apple, Meta, Microsoft
//! Difficulty: Hard

//* This is one of the hardest well-known binary search problems.
//* We must find the median of two sorted arrays in strictly O(log(m+n)) time.
//* The median splits an array into two equal-length halves mathematically.
//* We can binary search the partitioning index on the SMALLER array.
//* From that partition, the partition of the second array is implied 
//* because (left_part_size) = (m + n + 1) / 2.
//* We check validity: is max(left_side_A) <= min(right_side_B) AND max(left_side_B) <= min(right_side_A)?

// Time: O(log(min(m, n)))
// Space: O(1)

function findMedianSortedArrays(nums1, nums2) {
    // We always want to binary search the smaller array to minimize the search space
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const n1 = nums1.length;
    const n2 = nums2.length;
    let left = 0;
    let right = n1;
    let totalLengthHalf = Math.floor((n1 + n2 + 1) / 2);

    while (left <= right) {
        // partition1 handles numbers from nums1
        const partition1 = left + Math.floor((right - left) / 2);
        // partition2 perfectly balances the remaining required left-half size
        const partition2 = totalLengthHalf - partition1;

        // Extract the edge values around the bounds, handling -Infinity/Infinity for bounds edges
        const maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1];
        const minRight1 = (partition1 === n1) ? Infinity : nums1[partition1];

        const maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1];
        const minRight2 = (partition2 === n2) ? Infinity : nums2[partition2];

        // Ensure perfectly valid cross-partition overlap
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Valid partition found!
            // If total length is even, median is avg of the two middlemost numbers
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                // If total length is odd, median is strictly the max of the left side
                return Math.max(maxLeft1, maxLeft2);
            }
        } 
        else if (maxLeft1 > minRight2) {
            // We took too many elements from nums1, shrink the right bound
            right = partition1 - 1;
        } else {
            // We took too few elements from nums1, expand the left bound
            left = partition1 + 1;
        }
    }

    return 0; // Should never be reached given valid arrays
}

// const nums1 = [1,3];
// const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2));
// Output: 2.00000
