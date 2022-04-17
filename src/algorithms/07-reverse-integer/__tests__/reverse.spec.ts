/**
 * @file Unit Tests - reverse
 * @module leetcode/algorithms/07/reverse/tests/unit
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../reverse'

describe('unit:algorithms/07/reverse', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 3, parameters: [3] },
    { expected: -4, parameters: [-4] },
    { expected: 321, parameters: [123] },
    { expected: -321, parameters: [-123] },
    { expected: 21, parameters: [120] },
    { expected: 0, parameters: [1_534_236_469] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
