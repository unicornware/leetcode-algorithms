/**
 * @file addTwoNumbers - ListNode
 * @module leetcode-algorithms/algorithms/02/addTwoNumbers/ListNode
 */

import { OneDigitInteger09 } from '@leetcode-algorithms/types'

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
   * @property {OneDigitInteger09} val - List node value
   */
  val: OneDigitInteger09

  /**
   * Creates a new list node.
   *
   * @param {OneDigitInteger09} [val] - List node value
   * @param {ListNode | null} [next] - Next node in list, if any
   */
  constructor(val?: OneDigitInteger09, next?: ListNode | null) {
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
