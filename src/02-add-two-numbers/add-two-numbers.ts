/**
 * @file addTwoNumbers
 * @module leetcode-algorithms/02/addTwoNumbers
 */

import ListNode from './list-node'
import type ListNodeValue from './list-node-value.type'

/**
 * Given two **non-empty** linked lists representing two non-negative integers,
 * where digits are stored in **reverse order**, and each of their nodes
 * contains a single digit,the function adds the two numbers and returns the sum
 * as a linked list.
 *
 * @see {@link https://leetcode.com/problems/add-two-numbers}
 *
 * @example addTwoNumbers([2,4,3], [5,6,4]) => [7,0,8]
 * @example addTwoNumbers([0], [0]) => [0]
 * @example addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]) => [8,9,9,9,0,0,0,1]
 *
 * @param {ListNode | null} l1 - First addend
 * @param {ListNode | null} l2 - Second addend
 * @return {ListNode | null} Sum of `l1` and `l2` as linked list
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // If both nodes are null, return null
  if (!l1 && !l2) return null

  // If either node is null, return the other
  if (!l1 || !l2) return l1 ?? l2

  /** @const {number} sum - Sum of current nodes */
  const sum = l1.val + l2.val

  /** @const {ListNode | null} next - Next node, if any */
  let next = addTwoNumbers(l1.next ?? null, l2.next ?? null)

  // If sum is greater than 10, carry
  if (sum >= 10) {
    next = addTwoNumbers(
      next,
      new ListNode(JSON.parse(sum.toString().charAt(0)) as ListNodeValue)
    )
  }

  return new ListNode((sum % 10) as ListNodeValue, next)
}

export default addTwoNumbers
