/**
 * @file Prettier Configuration
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://github.com/rx-ts/prettier/tree/master/packages/sh
 */

const { Config } = require('prettier')

/**
 * @type {Config}
 * @const config - Configuration object
 */
const config = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  plugins: [],
  printWidth: 80,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: [
        '*.sh',
        '.husky/commit-msg',
        '.husky/pre-commit',
        '.husky/pre-push'
      ],
      options: {
        functionNextLine: true,
        indent: 2,
        keepComments: true,
        keepPadding: false,
        parser: 'sh',
        plugins: ['prettier-plugin-sh'],
        spaceRedirects: true,
        switchCaseIndent: true,
        variant: 0
      }
    },
    {
      files: ['*.ts'],
      parser: 'typescript'
    }
  ]
}

module.exports = config
