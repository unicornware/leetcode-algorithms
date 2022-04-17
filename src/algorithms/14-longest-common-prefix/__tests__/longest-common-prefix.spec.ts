/**
 * @file Unit Tests - longestCommonPrefix
 * @module leetcode/algorithms/14/longestCommonPrefix/tests/unit
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../longest-common-prefix'

describe('unit:algorithms/14/longestCommonPrefix', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'zoo', parameters: [['zoo']] },
    { expected: 'fl', parameters: [['flower', 'flow', 'flight']] },
    { expected: '', parameters: [['dog', 'racecar', 'car']] },
    { expected: 'c', parameters: [['cir', 'car']] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })
    const returns = pf(expected)

    it(`should return ${returns} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
