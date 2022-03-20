/**
 * @file Unit Tests - reverse
 * @module leetcode-algorithms/algorithms/07/reverse/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../reverse'

describe('unit:algorithms/07/reverse', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    x: number
  }

  const cases: Case[] = [
    { expected: 3, x: 3 },
    { expected: -4, x: -4 },
    { expected: 321, x: 123 },
    { expected: -321, x: -123 },
    { expected: 21, x: 120 },
    { expected: 0, x: 1_534_236_469 }
  ]

  cases.forEach(({ expected, x }) => {
    it(`should return ${expected} given [${x}]`, () => {
      expect(testSubject(x)).to.equal(expected)
    })
  })
})
