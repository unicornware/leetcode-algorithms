/**
 * @file Unit Tests - isPalindrome
 * @module leetcode-algorithms/algorithms/09/isPalindrome/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../is-palindrome'

describe('unit:algorithms/09/isPalindrome', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    x: number
  }

  const cases: Case[] = [
    { expected: false, x: -121 },
    { expected: false, x: 10 },
    { expected: true, x: 3 },
    { expected: true, x: 121 }
  ]

  cases.forEach(({ expected, x }) => {
    it(`should return ${expected} given [${x}]`, () => {
      expect(testSubject(x)).to.equal(expected)
    })
  })
})
