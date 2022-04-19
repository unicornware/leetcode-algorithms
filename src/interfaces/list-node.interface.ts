/**
 * @file Interfaces - IListNode
 * @module leetcode/interfaces/IListNode
 */

/**
 * Object representing a linked list node.
 *
 * @template T - Value type
 */
interface IListNode<T> {
  /**
   * Next node in list, if any.
   */
  next: IListNode<T> | null

  /**
   * Previous node in list, if any.
   */
  prev?: IListNode<T> | null

  /**
   * Node value.
   */
  val: T

  /**
   * Creates a JSON representation of the node.
   */
  toJSON(): T[]

  /**
   * Creates a string representation of the node.
   */
  toString(): string
}

export default IListNode
