/**
 * @file Unit Tests - lengthOfLongestSubstring
 * @module leetcode-algorithms/algorithms/03/lengthOfLongestSubstring/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../length-of-longest-substring'

describe('unit:algorithms/03/lengthOfLongestSubstring', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    s: string
  }

  const cases: Case[] = [
    { expected: 0, s: '' },
    { expected: 1, s: 'z' },
    { expected: 3, s: 'abcabcbb' },
    { expected: 1, s: 'bbbbb' },
    { expected: 3, s: 'pwwkew' },
    { expected: 3, s: 'dvdf' }
  ]

  cases.forEach(({ expected, s }) => {
    it(`should return ${expected} given ['${s}']`, () => {
      expect(testSubject(s)).to.equal(expected)
    })
  })
})
