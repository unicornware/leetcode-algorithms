/**
 * @file Type Definitions - ListNodeConstruct
 * @module leetcode/types/ListNodeConstruct
 */

import type { ListNode } from '@leetcode/models'

/**
 * Linked list node constructor type.
 *
 * @template T - Value type
 */
type ListNodeConstruct<T> = new (
  val?: T,
  next?: ListNode<T> | null
) => ListNode<T>

export default ListNodeConstruct
