/**
 * @file Unit Tests - addTwoNumbers
 * @module leetcode-algorithms/02/addTwoNumbers/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../add-two-numbers'
import ListNode from '../list-node'
import type ListNodeValue from '../list-node-value.type'

describe('unit:02/addTwoNumbers', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    l1: ListNode | null
    l2: ListNode | null
  }

  /**
   * Creates a new list and returns the first node in the list.
   *
   * @param {ListNodeValue[]} reversed - List node values in reverse order
   * @return {ListNode} First node in list
   */
  const createList = (reversed: ListNodeValue[]): ListNode => {
    let nodes = reversed.map(val => new ListNode(val))
    nodes.forEach((node, i) => (node.next = nodes[i + 1] ?? null))

    return nodes[0]!
  }

  const cases: Case[] = [
    { expected: null, l1: null, l2: null },
    { expected: createList([0]), l1: createList([0]), l2: createList([0]) },
    {
      expected: createList([7, 0, 8]),
      l1: createList([2, 4, 3]),
      l2: createList([5, 6, 4])
    },
    {
      expected: createList([5, 8, 8, 3]),
      l1: createList([0, 2, 4, 3]),
      l2: createList([5, 6, 4])
    },
    {
      expected: createList([8, 9, 9, 9, 0, 0, 0, 1]),
      l1: createList([9, 9, 9, 9, 9, 9, 9]),
      l2: createList([9, 9, 9, 9])
    }
  ]

  cases.forEach(({ expected, l1, l2 }) => {
    const sum = expected?.toString() ?? null
    const list1 = l1?.toString() ?? null
    const list2 = l2?.toString() ?? null

    it(`should return ${sum} given [${list1}, ${list2}]`, () => {
      expect(testSubject(l1, l2)?.toJSON()).to.deep.equal(expected?.toJSON())
    })
  })
})
