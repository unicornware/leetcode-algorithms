/**
 * @file Models - ListNode
 * @module leetcode/models/ListNode
 */

import { AbstractListNode } from '@leetcode/abstracts'
import { IListNode } from '@leetcode/interfaces'

/**
 * Linked list node.
 *
 * @template T - Value type
 *
 * @extends {AbstractListNode<T>}
 * @implements {IListNode<T>}
 */
class ListNode<T> extends AbstractListNode<T> implements IListNode<T> {}

export default ListNode
