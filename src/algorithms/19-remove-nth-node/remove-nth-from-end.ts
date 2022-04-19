/**
 * @file Algorithms - removeNthFromEnd
 * @module leetcode/algorithms/19/removeNthFromEnd
 * @see https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */

import ListNode from '@leetcode/models/list-node-number.model'

/**
 * Given the `head` of a linked list, the function removes the `n`th node from
 * the **end of the list** and returns the head of the list.
 *
 * @example removeNthFromEnd([1, 2, 3, 4, 5], 2) // [1, 2, 3, 5]
 * @example removeNthFromEnd([1, 2], 1) // [1]
 * @example removeNthFromEnd([1], 1) // []
 *
 * @param {ListNode | null} head - Head of linked list
 * @param {number} n - Node to remove
 * @return {ListNode | null} Head of modified list
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // If list is empty or has one node and the tail is being removed, return null
  if (!head || (!head.next && n === 1)) return null

  /** @var {ListNode | null} curr - Current list node  */
  let curr: ListNode | null = head

  /** @var {ListNode | null} prev - Node before {@link curr}  */
  let prev: ListNode | null = null

  // Find nth node
  while (curr) {
    /** @var {number} after - Number of nodes after {@link curr} */
    let after: number = 0

    /** @var {ListNode | null} node - {@link curr} or any node after it */
    let node: ListNode | null = curr

    // Count nodes after node
    while (node) {
      // Increase count
      if (node.next) after++

      // Move onto next node
      node = node.next
    }

    // If current node has n-1 nodes after it, it should be removed
    if (after === n - 1) {
      if (!prev) head = curr.next
      else prev.next = curr.next

      break
    }

    // Reset prev and move onto next node
    prev = curr
    curr = curr.next
  }

  return head
}

export default removeNthFromEnd
