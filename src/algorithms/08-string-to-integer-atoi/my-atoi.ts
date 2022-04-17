/**
 * @file Algorithms - myAtoi
 * @module leetcode/algorithms/08/myAtoi
 */

import MAX_VALUE from '@fixtures/max-value.fixture'
import MIN_VALUE from '@fixtures/min-value.fixture'

/**
 * Converts a string, `s`, to a 32-bit signed integer (similar to C/C++'s `atoi`
 * function).
 *
 * @see {@link https://leetcode.com/problems/string-to-integer-atoi}
 *
 * @example myAtoi('') => 0
 * @example myAtoi('42') => 42
 * @example myAtoi('   -42') => -42
 * @example myAtoi('4193 with words') => 4193
 * @example myAtoi('words and 987') => 0
 * @example myAtoi('+-12') => 0
 *
 * @param {string} s - String to convert
 * @return {number} 32-bit signed integer
 */
function myAtoi(s: string): number {
  /** @const {string} numeric - Stringified number */
  let numeric: string = ''

  for (let pos = 0; pos < s.length; pos++) {
    /** @const {string} char - A single character in `s` */
    const c = s.charAt(pos)

    // Check if integer sign and check for valid one digit integer or whitespace
    if (
      ![
        ' ',
        '-',
        '+',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
      ].includes(c)
    ) {
      break
    }

    // Add digit to numeric
    numeric += c
  }

  /** @const {number} integer - Parsed integer */
  const int: number = Number.parseInt(numeric.trim())

  // Return clamped value
  return int > MAX_VALUE
    ? MAX_VALUE
    : int < MIN_VALUE
    ? MIN_VALUE
    : Number.isNaN(int)
    ? 0
    : int
}

export default myAtoi
