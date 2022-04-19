/**
 * @file Models - ListNodeNumber
 * @module leetcode/models/ListNodeNumber
 */

import { IListNode } from '@leetcode/interfaces'
import ListNode from './list-node.model'

/**
 * Singly linked list node with a number as value.
 *
 * @extends {ListNode<number>}
 * @implements {IListNode<number>}
 */
class ListNodeNumber extends ListNode<number> implements IListNode<number> {
  /**
   * Creates a new list node.
   *
   * @param {number} [val] - List node value
   * @param {ListNodeNumber | null} [next] - Next node in list, if any
   */
  constructor(val: number = 0, next?: ListNodeNumber | null) {
    super(val, next)
  }
}

export default ListNodeNumber
