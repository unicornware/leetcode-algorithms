/**
 * @file Unit Tests - twoSum
 * @module leetcode-algorithms/01/twoSum/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../two-sum'

describe('unit:01/twoSum', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    nums: number[]
    target: number
  }

  const cases: Case[] = [
    { expected: [0, 1], nums: [2, 7, 11, 15], target: 9 },
    { expected: [0, 2], nums: [3, 2, 4], target: 7 },
    { expected: [0, 1], nums: [3, 3], target: 6 }
  ]

  cases.forEach(({ expected, nums, target }) => {
    it(`should return ${expected} given [${nums},${target}]`, () => {
      expect(testSubject(nums, target)).to.have.ordered.members(expected)
    })
  })
})
