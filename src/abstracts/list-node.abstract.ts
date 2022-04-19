/**
 * @file Abstracts - ListNode
 * @module leetcode/abstracts/ListNode
 */

import { IListNode } from '@leetcode/interfaces'

/**
 * Abstract linked list node.
 *
 * @template T - Value type
 *
 * @abstract
 * @implements {IListNode<T>}
 */
abstract class AbstractListNode<T> implements IListNode<T> {
  /**
   * @public
   * @member {AbstractListNode<T> | null} next - Next node, if any
   */
  next: AbstractListNode<T> | null

  /**
   * @public
   * @member {AbstractListNode<T> | null} prev - Previous node, if any
   */
  prev: AbstractListNode<T> | null

  /**
   * @public
   * @member {T} val - List node value
   */
  val: T

  /**
   * Creates a new list node.
   *
   * @param {T} val - List node value
   * @param {AbstractListNode<T> | null} [next=null] - Next node in list
   */
  constructor(val: T, next: AbstractListNode<T> | null = null) {
    this.next = next
    this.prev = null
    this.val = val
  }

  /**
   * Creates a JSON representation of the node.
   *
   * @return {T[]} JSON representation of `this`
   */
  toJSON(): T[] {
    /** @const {T[]} values - Node values */
    const values: T[] = [this.val]

    /** @var {AbstractListNode<T> | null} curr - Current list node  */
    let curr: AbstractListNode<T> | null = this.next

    // Get values
    while (curr) {
      values.push(curr.val)
      curr = curr.next
    }

    return values
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

export default AbstractListNode
