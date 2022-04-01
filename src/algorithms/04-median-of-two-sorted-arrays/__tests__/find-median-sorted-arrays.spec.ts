/**
 * @file Unit Tests - findMedianSortedArrays
 * @module leetcode-algorithms/algorithms/04/findMedianSortedArrays/tests/unit
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../find-median-sorted-arrays'

describe('unit:algorithms/04/findMedianSortedArrays', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 4, parameters: [[], [4]] },
    { expected: 7, parameters: [[7], []] },
    { expected: 2, parameters: [[1, 3], [2]] },
    {
      expected: 2.5,
      parameters: [
        [1, 2],
        [3, 4]
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
