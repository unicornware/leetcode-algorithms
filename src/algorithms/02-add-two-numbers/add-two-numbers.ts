/**
 * @file Algorithms - addTwoNumbers
 * @module leetcode/algorithms/02/addTwoNumbers
 * @see https://leetcode.com/problems/add-two-numbers
 */

import type { OneDigitInteger09 } from '@leetcode/types'
import ListNode from './list-node'

/**
 * Given two **non-empty** linked lists representing two non-negative integers,
 * where digits are stored in **reverse order**, and each of their nodes
 * contains a single digit,the function adds the two numbers and returns the sum
 * as a linked list.
 *
 * @example addTwoNumbers([2, 4, 3], [5, 6, 4]) // [7, 0, 8]
 * @example addTwoNumbers([0], [0]) // [0]
 * @example addTwoNumbers([9, 9, 9, 9], [9, 9]) // [8, 9, 0, 0, 1]
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
  const sum: number = l1.val + l2.val

  /** @var {ListNode | null} nx - Next node, if any */
  let nx: ListNode | null = addTwoNumbers(l1.next ?? null, l2.next ?? null)

  // If sum is greater than 10, carry
  if (sum >= 10) {
    nx = addTwoNumbers(nx, new ListNode(+`${sum}`[0]! as OneDigitInteger09))
  }

  return new ListNode((sum % 10) as OneDigitInteger09, nx)
}

export default addTwoNumbers
