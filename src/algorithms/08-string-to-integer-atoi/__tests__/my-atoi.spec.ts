/**
 * @file Unit Tests - myAtoi
 * @module leetcode-algorithms/algorithms/08/myAtoi/tests/unit
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../my-atoi'

describe('unit:algorithms/08/myAtoi', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [''] },
    { expected: 0, parameters: [' '] },
    { expected: 13, parameters: ['+13'] },
    { expected: 42, parameters: ['42'] },
    { expected: -42, parameters: ['   -42'] },
    { expected: 4193, parameters: ['4193 with words'] },
    { expected: 0, parameters: ['words and 987'] },
    { expected: 0, parameters: ['+-12'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
