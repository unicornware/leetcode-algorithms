/**
 * @file reverse
 * @module leetcode-algorithms/algorithms/07/reverse
 */

import MAX_VALUE from '@fixtures/max-value.fixture'
import MIN_VALUE from '@fixtures/min-value.fixture'

/**
 * Given a signed 32-bit integer, `x`, the function returns `x` with its digits
 * reversed. If reversing `x` causes the value to go outside the signed 32-bit
 * integer range, `0` will be returned.
 *
 * Given a string, `s`, the function returns a string representing `s` written
 * in a zig-zag pattern.
 *
 * @see {@link https://leetcode.com/problems/reverse-integer}
 *
 * @example reverse(3) => 3
 * @example reverse(-4) => -4
 * @example reverse(123) => 321
 * @example reverse(-123) => -321
 * @example reverse(120) => 21
 * @example reverse(1534236469) => 0
 *
 * @param {number} x - Integer to reverse
 * @return {number} `x` with its digits reversed
 */
function reverse(x: number): number {
  // If x is between -9 and 9, return x
  if (x >= -9 && x <= 9) return x

  /** @const {string} s - `x` stringified */
  const s: string = x.toString()

  /** @const {number} reversed - `x` reversed */
  const reversed = Number.parseInt([...s, x < 0 ? '-' : ''].reverse().join(''))

  return reversed < MIN_VALUE || reversed > MAX_VALUE ? 0 : reversed
}

export default reverse