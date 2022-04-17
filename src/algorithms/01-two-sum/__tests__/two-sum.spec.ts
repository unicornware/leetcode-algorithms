/**
 * @file Unit Tests - twoSum
 * @module leetcode/algorithms/01/twoSum/tests/unit
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../two-sum'

describe('unit:algorithms/01/twoSum', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [0, 1], parameters: [[2, 7, 11, 15], 9] },
    { expected: [0, 2], parameters: [[3, 2, 4], 7] },
    { expected: [0, 1], parameters: [[3, 3], 6] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })
    const returns = pf(expected, { min: true })

    it(`should return ${returns} given ${args}`, () => {
      expect(testSubject(...parameters)).to.have.ordered.members(expected)
    })
  })
})
