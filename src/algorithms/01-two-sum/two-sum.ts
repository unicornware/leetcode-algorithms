/**
 * @file Algorithms - twoSum
 * @module leetcode/algorithms/01/twoSum
 * @see https://leetcode.com/problems/two-sum
 */

/**
 * Given an array of integers, `nums` and an integer `target`, the function
 * returns the indices of the two numbers that when summed, equal `target`.
 *
 * @example twoSum([2, 7, 11, 15], 9) // [0, 1]
 * @example twoSum([3, 2, 4], 7) // [0, 2]
 * @example twoSum([3, 3], 6) // [0, 1]
 *
 * @param {number[]} nums - Integer array
 * @param {number} target - Target sum
 * @return {[number, number]} Indices of the two numbers that add up to `target`
 */
function twoSum(nums: number[], target: number): [number, number] {
  /** @const {Record<number, number>} hash - Maps addends to indices */
  const hash: Record<number, number> = {}

  /** @var {[number, number]} indices - indices that add up to `target` */
  let indices: [number, number]

  /** @var {number} diff - Difference between target and `nums[i]` */
  let diff: number

  // Iterate over array to add the difference between target and nums[index] to
  // map. If a difference has already been seen, return indices instead
  for (let index = 0; index < nums.length; index++) {
    /** @const {number} integer - Value at `index` */
    const integer = nums[index]!

    // Get difference between target and integer
    diff = target - integer

    // If difference has already been seen return indices
    if (hash[diff] !== undefined) {
      indices = [hash[diff]!, index]
      break
    }

    // If difference has not been seen, add to map
    hash[integer] = index
  }

  return indices!
}

export default twoSum
