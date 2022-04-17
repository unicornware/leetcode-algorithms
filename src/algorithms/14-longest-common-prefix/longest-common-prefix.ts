/**
 * @file Algorithms - longestCommonPrefix
 * @module leetcode/algorithms/14/longestCommonPrefix
 * @see https://leetcode.com/problems/longest-common-prefix
 */

/**
 * Given an array of strings, `strs`, the function returns the longest common
 * prefix found amongst the strings.
 *
 * @example longestCommonPrefix(['zoo']) // 'zoo'
 * @example longestCommonPrefix(['flower', 'flow', 'flight']) // 'fl'
 * @example longestCommonPrefix(['dog', 'racecar', 'car']) // ''
 * @example longestCommonPrefix(['cir', 'car']) // 'c'
 *
 * @param {string[]} strs - Strings to check
 * @return {string} Longest common prefix or empty string
 */
function longestCommonPrefix(strs: string[]): string {
  // If array only has one item, return first item in array
  if (strs.length === 1) return strs[0]!

  /** @var {string} prefix - Longest common prefix */
  let prefix: string = ''

  // Get longest common prefix
  for (let pos = 0; pos < strs[0]!.length; pos++) {
    /** @const {string} char - A single character in `strs[0]` */
    const char: string = strs[0]!.charAt(pos)

    // If every string has the same character as this position, add to prefix
    if (strs.every(str => char === str.charAt(pos))) prefix += char
    else break
  }

  return prefix
}

export default longestCommonPrefix
