/**
 * @file isPalindrome
 * @module leetcode-algorithms/algorithms/09/isPalindrome
 */

/**
 * Given an integer, `x`, the function returns `true` if `x` is a palindrome
 * integer.
 *
 * An integer is a **palindrome** when it reads the same backward as forward.
 *
 * @see {@link https://leetcode.com/problems/palindrome-number}
 *
 * @example isPalindrome(121) => true
 * @example isPalindrome(-121) => false
 * @example isPalindrome(10) => false
 *
 * @param {number} x - Integer to check
 * @return {boolean} `true` if `x` is a palindrome integer, `false` otherwise
 */
function isPalindrome(x: number): boolean {
  // If x is negative, return false
  if (x < 0) return false

  /** @const {number} n - Copy of `x` */
  let n: number = x

  /** @const {number} reversed `x` reversed */
  let reversed: number = 0

  /**
   * @const {number} right_most_digit Right-most digit
   * @example 123/10 → 12.3 → 3
   */
  let right_most_digit: number = 0

  /** Reverse x - @see {@link https://stackoverflow.com/a/52366332/13150444} */
  while (n) {
    // Get right-most digit
    right_most_digit = n % 10

    // Reverse number
    reversed = reversed * 10 + right_most_digit

    // Remove right-most digit
    n = (n / 10) | 0
  }

  return x === reversed
}

export default isPalindrome
