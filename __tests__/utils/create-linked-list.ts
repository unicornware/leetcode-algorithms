/**
 * @file Test Utilities - createLinkedList
 * @module tests/utils/createLinkedList
 */

import { ListNode } from '@leetcode/models'
import { ListNodeConstruct } from '@leetcode/types'

/**
 * Creates a linked list.
 *
 * @template T - List node value type
 *
 * @param {T[]} [vals=[]] - Node values
 * @param {ListNodeConstruct<T>} [Node=ListNode] - List node constructor
 * @return {ListNode<T>} Head of new linked list
 */
function createLinkedList<T = any>(
  vals: T[] = [],
  Node: ListNodeConstruct<T> = ListNode as ListNodeConstruct<T>
): ListNode<T> {
  /** @const {ListNode<T>[]} nodes - Linked list nodes */
  const nodes: ListNode<T>[] = vals.map(v => new Node(v))

  // Link nodes together
  for (const [i, node] of nodes.entries()) {
    // Set next and previous nodes, if any
    node.next = nodes[i + 1] ?? null
    node.prev = nodes[i - 1] ?? null
  }

  return nodes[0]!
}

export default createLinkedList
