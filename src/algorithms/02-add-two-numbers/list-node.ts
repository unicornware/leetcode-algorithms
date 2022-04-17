/**
 * @file Algorithms - addTwoNumbers - ListNode
 * @module leetcode/algorithms/02/addTwoNumbers/ListNode
 */

import { OneDigitInteger09 } from '@leetcode/types'

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
   * @return {OneDigitInteger09[]} JSON representation of `this`
   */
  toJSON(): OneDigitInteger09[] {
    /** @const {OneDigitInteger09[]} digits - Digits in node */
    const digits: OneDigitInteger09[] = [this.val]

    /** @var {ListNode | null} curr - Current list node  */
    let curr: ListNode | null = this.next

    // Get digits
    while (curr) {
      digits.push(curr.val)
      curr = curr.next
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
