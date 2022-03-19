/**
 * @file addTwoNumbers - ListNode
 * @module leetcode-algorithms/02/addTwoNumbers/ListNode
 */

import ListNodeValue from './list-node-value.type'

/**
 * Singly linked list.
 */
class ListNode {
  /**
   * @public
   * @property {ListNode | null} next - Next node in list, if any
   */
  next: ListNode | null

  /**
   * @public
   * @property {ListNodeValue} val - List node value
   */
  val: ListNodeValue

  /**
   * Creates a new list node.
   *
   * @param {ListNodeValue} [val] - List node value
   * @param {ListNode | null} [next] - Next node in list, if any
   */
  constructor(val?: ListNodeValue, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  /**
   * Creates a JSON representation of the node.
   *
   * @return {number[]} JSON representation of `this`
   */
  toJSON(): number[] {
    const digits: number[] = [this.val]
    let next: ListNode | null = this.next

    while (next) {
      digits.push(next.val)
      next = next.next
    }

    return digits
  }

  /**
   * Creates a string representation of the node.
   *
   * @return {string} String representation of `this`
   */
  toString(): string {
    return `[${this.toJSON().toString()}]`
  }
}

export default ListNode
