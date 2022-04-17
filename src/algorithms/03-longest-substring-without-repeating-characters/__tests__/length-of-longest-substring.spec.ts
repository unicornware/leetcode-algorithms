/**
 * @file Unit Tests - lengthOfLongestSubstring
 * @module leetcode/algorithms/03/lengthOfLongestSubstring/tests/unit
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../length-of-longest-substring'

describe('unit:algorithms/03/lengthOfLongestSubstring', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [''] },
    { expected: 1, parameters: ['z'] },
    { expected: 3, parameters: ['abcabcbb'] },
    { expected: 1, parameters: ['bbbbb'] },
    { expected: 3, parameters: ['pwwkew'] },
    { expected: 3, parameters: ['dvdf'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
