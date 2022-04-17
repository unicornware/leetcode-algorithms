/**
 * @file Algorithms - myAtoi
 * @module leetcode/algorithms/08/myAtoi
 * @see https://leetcode.com/problems/string-to-integer-atoi
 */

import MAX_VALUE from '@fixtures/max-value.fixture'
import MIN_VALUE from '@fixtures/min-value.fixture'

/**
 * Converts a string, `s`, to a 32-bit signed integer (similar to C/C++'s `atoi`
 * function).
 *
 * @example myAtoi('') // 0
 * @example myAtoi('42') // 42
 * @example myAtoi('   -42') // -42
 * @example myAtoi('4193 with words') // 4193
 * @example myAtoi('words and 987') // 0
 * @example myAtoi('+-12') // 0
 *
 * @param {string} s - String to convert
 * @return {number} 32-bit signed integer
 */
function myAtoi(s: string): number {
  /** @var {string} numeric - Stringified number */
  let numeric: string = ''

  // Convert string
  for (let pos = 0; pos < s.length; pos++) {
    /** @const {string} char - A single character in {@link s} */
    const char: string = s.charAt(pos)

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
      ].includes(char)
    ) {
      break
    }

    // Add digit to numeric
    numeric += char
  }

  // Return clamped value
  return +numeric > MAX_VALUE
    ? MAX_VALUE
    : +numeric < MIN_VALUE
    ? MIN_VALUE
    : Number.isNaN(+numeric)
    ? 0
    : +numeric
}

export default myAtoi
