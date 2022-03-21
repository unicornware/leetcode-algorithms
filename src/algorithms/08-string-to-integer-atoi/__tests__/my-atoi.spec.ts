/**
 * @file Unit Tests - myAtoi
 * @module leetcode-algorithms/algorithms/08/myAtoi/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../my-atoi'

describe('unit:algorithms/08/myAtoi', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    s: string
  }

  const cases: Case[] = [
    { expected: 0, s: '' },
    { expected: 0, s: ' ' },
    { expected: 13, s: '+13' },
    { expected: 42, s: '42' },
    { expected: -42, s: '   -42' },
    { expected: 4193, s: '4193 with words' },
    { expected: 0, s: 'words and 987' },
    { expected: 0, s: '+-12' }
  ]

  cases.forEach(({ expected, s }) => {
    it(`should return ${expected} given ['${s}']`, () => {
      expect(testSubject(s)).to.equal(expected)
    })
  })
})
