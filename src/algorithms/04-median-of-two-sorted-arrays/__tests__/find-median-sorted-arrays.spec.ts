/**
 * @file Unit Tests - findMedianSortedArrays
 * @module leetcode-algorithms/algorithms/04/findMedianSortedArrays/tests/unit
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../find-median-sorted-arrays'

describe('unit:algorithms/04/findMedianSortedArrays', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    nums1: number[]
    nums2: number[]
  }

  const cases: Case[] = [
    { expected: 4, nums1: [], nums2: [4] },
    { expected: 7, nums1: [7], nums2: [] },
    { expected: 2, nums1: [1, 3], nums2: [2] },
    { expected: 2.5, nums1: [1, 2], nums2: [3, 4] }
  ]

  cases.forEach(({ expected, nums1, nums2 }) => {
    it(`should return ${expected} given [[${nums1}], [${nums2}]]`, () => {
      expect(testSubject(nums1, nums2)).to.equal(expected)
    })
  })
})
