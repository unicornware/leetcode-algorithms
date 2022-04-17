/**
 * @file Algorithms - isPalindrome
 * @module leetcode/algorithms/09/isPalindrome
 * @see https://leetcode.com/problems/palindrome-number
 */

/**
 * Given an integer, `x`, the function returns `true` if `x` is a palindrome
 * integer. An integer is a **palindrome** if it reads the same backwards as it
 * does forwards.
 *
 * @example isPalindrome(121) // true
 * @example isPalindrome(-121) // false
 * @example isPalindrome(10) // false
 *
 * @param {number} x - Integer to check
 * @return {boolean} `true` if `x` is a palindrome integer, `false` otherwise
 */
function isPalindrome(x: number): boolean {
  // If x is negative, return false
  if (x < 0) return false

  /** @var {number} n - Copy of `x` */
  let n: number = x

  /** @var {number} r - `x` reversed */
  let r: number = 0

  /** @var {number} rmd - Current right-most digit in {@link n} */
  let rmd: number = 0

  /** Reverse x - @see {@link https://stackoverflow.com/a/52366332/13150444} */
  while (n) {
    // Get right-most digit
    rmd = n % 10

    // Reverse number
    r = r * 10 + rmd

    // Remove right-most digit
    n = (n / 10) | 0
  }

  return x === r
}

export default isPalindrome
