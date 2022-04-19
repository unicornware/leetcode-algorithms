/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

const { Linter } = require('eslint')
const { overrides } = require('./.eslintrc.base.cjs')

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...overrides,
    {
      files: ['src/algorithms/02-add-two-numbers/add-two-numbers.ts'],
      rules: {
        '@typescript-eslint/restrict-plus-operands': 0
      }
    }
  ]
}

module.exports = config
