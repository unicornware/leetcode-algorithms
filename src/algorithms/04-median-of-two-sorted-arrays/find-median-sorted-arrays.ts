/**
 * @file Algorithms - findMedianSortedArrays
 * @module leetcode/algorithms/04/findMedianSortedArrays
 * @see https://leetcode.com/problems/median-of-two-sorted-arrays
 */

/**
 * Given two sorted arrays, `nums1` and `nums2`, the function returns the median
 * of the two sorted arrays.
 *
 * @example findMedianSortedArrays([], [4]) // 4
 * @example findMedianSortedArrays([7], []) // 7
 * @example findMedianSortedArrays([1, 3], [2]) // 2
 * @example findMedianSortedArrays([1, 2], [3, 4]) // 2.5
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @return {number} Median of `nums1` and `nums2`
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // If nums1 is empty and nums2 has one item, return first value in nums2
  if (nums1.length === 0 && nums2.length === 1) return nums2[0]!

  // If nums2 is empty and nums1 has one item, return first value in nums1
  if (nums2.length === 0 && nums1.length === 1) return nums1[0]!

  /** @const {number[]} nums - All numbers (sorted) */
  const nums: number[] = [...nums1, ...nums2].sort((n1, n2) => n1 - n2)

  /** @const {number} mid - Midpoint in index */
  const mid: number = Math.floor(nums.length / 2)

  // If nums.length is odd, return midpoint value. Otherwise, calculate median
  return nums.length % 2 !== 0 ? nums[mid]! : (nums[mid - 1]! + nums[mid]!) / 2
}

export default findMedianSortedArrays
