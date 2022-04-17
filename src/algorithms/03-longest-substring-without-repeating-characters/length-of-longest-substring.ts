/**
 * @file Algorithms - lengthOfLongestSubstring
 * @module leetcode/algorithms/03/lengthOfLongestSubstring
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters
 */

/**
 * Given a string, `s`, the function returns the length of the longest substring
 * without repeating characters.
 *
 * @example lengthOfLongestSubstring('abcabcbb') // 3 ('abc')
 * @example lengthOfLongestSubstring('bbbbb') // 1 ('b')
 * @example lengthOfLongestSubstring('pwwkew') // 3 ('wke')
 * @example lengthOfLongestSubstring('dvdf') // 3 ('vdf')
 *
 * @param {string} s - String to check
 * @return {number} Length of longest substring
 */
function lengthOfLongestSubstring(s: string): number {
  // Best case scenario
  if (s.length <= 1) return s.length

  /** @const {Map<string, number>} map - Maps characters to indices */
  const map: Map<string, number> = new Map<string, number>()

  /** @var {number} length - Longest substring length */
  let length: number = 0

  /**
   * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/solution
   */
  for (let i = 0, j = 0; j < s.length; j++) {
    /** @const {string} character - A single character in {@link s} */
    const character = s.charAt(j)

    // If character is included in map already, reset i
    if (map.has(character)) i = Math.max(map.get(character)!, i)

    // Calculate longest substring length
    length = Math.max(length, j - i + 1)

    // Add next character to map
    map.set(character, j + 1)
  }

  return length
}

export default lengthOfLongestSubstring
