/**
 * @file Unit Tests - isPalindrome
 * @module leetcode/algorithms/09/isPalindrome/tests/unit
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-palindrome'

describe('unit:algorithms/09/isPalindrome', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [-121] },
    { expected: false, parameters: [10] },
    { expected: true, parameters: [3] },
    { expected: true, parameters: [121] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
