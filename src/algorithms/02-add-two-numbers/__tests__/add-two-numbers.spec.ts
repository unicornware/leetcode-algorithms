/**
 * @file Unit Tests - addTwoNumbers
 * @module leetcode/algorithms/02/addTwoNumbers/tests/unit
 */

import type { OneDigitInteger09 } from '@leetcode/types'
import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../add-two-numbers'
import ListNode from '../list-node'

describe('unit:algorithms/02/addTwoNumbers', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  /**
   * Creates a new list and returns the first node in the list.
   *
   * @param {OneDigitInteger09[]} reversed - List node values in reverse order
   * @return {ListNode} First node in list
   */
  const createList = (reversed: OneDigitInteger09[]): ListNode => {
    let nodes = reversed.map(val => new ListNode(val))
    nodes.forEach((node, i) => (node.next = nodes[i + 1] ?? null))

    return nodes[0]!
  }

  const cases: Case[] = [
    { expected: null, parameters: [null, null] },
    {
      expected: createList([0]),
      parameters: [createList([0]), createList([0])]
    },
    {
      expected: createList([7, 0, 8]),
      parameters: [createList([2, 4, 3]), createList([5, 6, 4])]
    },
    {
      expected: createList([5, 8, 8, 3]),
      parameters: [createList([0, 2, 4, 3]), createList([5, 6, 4])]
    },
    {
      expected: createList([8, 9, 9, 9, 0, 0, 0, 1]),
      parameters: [createList([9, 9, 9, 9, 9, 9, 9]), createList([9, 9, 9, 9])]
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
