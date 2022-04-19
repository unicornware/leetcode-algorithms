/**
 * @file Unit Tests - removeNthFromEnd
 * @module leetcode/algorithms/19/removeNthFromEnd/tests/unit
 */

import ListNode from '@leetcode/models/list-node-number.model'
import type { TestcaseFn } from '@tests/interfaces'
import createLinkedList from '@tests/utils/create-linked-list'
import testSubject from '../remove-nth-from-end'

describe('unit:algorithms/19/removeNthFromEnd', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  /**
   * Creates a new list and returns the first node in the list.
   *
   * @param {number[]} v - Node values
   * @return {ListNode} Head node
   */
  const createList = (v: number[]): ListNode => createLinkedList(v, ListNode)

  const cases: Case[] = [
    { expected: null, parameters: [createList([1]), 1] },
    { expected: createList([1]), parameters: [createList([1, 2]), 1] },
    { expected: createList([2]), parameters: [createList([1, 2]), 2] },
    {
      expected: createList([1, 2, 3, 5]),
      parameters: [createList([1, 2, 3, 4, 5]), 2]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })
    const returns = expected ? `Node { ${pf(expected, { min: true })} }` : null

    it(`should return ${returns} given ${args}`, () => {
      // Act
      const result = testSubject(...parameters)

      // Expect
      expect(result?.toJSON()).to.deep.equal(expected?.toJSON())
    })
  })
})
