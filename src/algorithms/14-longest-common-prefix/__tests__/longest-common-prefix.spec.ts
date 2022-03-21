/**
 * @file Unit Tests - longestCommonPrefix
 * @module leetcode-algorithms/algorithms/14/longestCommonPrefix/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../longest-common-prefix'

describe('unit:algorithms/14/longestCommonPrefix', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    strs: string[]
  }

  const cases: Case[] = [
    { expected: 'zoo', strs: ['zoo'] },
    { expected: 'fl', strs: ['flower', 'flow', 'flight'] },
    { expected: '', strs: ['dog', 'racecar', 'car'] },
    { expected: 'c', strs: ['cir', 'car'] }
  ]

  cases.forEach(({ expected, strs }) => {
    it(`should return '${expected}' given [[${strs}]]`, () => {
      expect(testSubject(strs)).to.equal(expected)
    })
  })
})
