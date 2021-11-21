const path = require('path')

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020, // Specifying the version of ECMAScript syntax we are going to use
    sourceType: 'module', // Specifying type of source type which we are using either 'script(default)' or 'module'
    ecmaFeatures: {
      // Specifying additional language features we are using
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // The version of React. "detect" - automatically picks the version which is currently installed.
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
  plugins: ['prettier'],
  extends: [
    'airbnb', // Set of recommended rules from Airbnb for JavaScript/React
    'airbnb/hooks', // Set of recommended rules from Airbnb for React hooks
    'prettier', // Turns off all rules that are unnecessary or might conflict with Prettier
    'prettier/react', // airbnb enables eslint-plugin-react rules internally, so "prettier/react" is needed
  ],
  // Instead of specifying eslint rules individually, we can also use pre built configurations. eslint-config-prettier : Turns off all rules that are unnecessary or might conflict with Prettier.
  rules: {
    strict: ['error', 'never'], // Check for explicit use of 'use strict'
    'no-console': 'error', // Disallows usage of console in the code
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Temporarily added to support JSX in .js file
  },
  env: {
    browser: true, // Set the environment as browser or not
    node: true,
    commonjs: true,
    jest: true,
    es6: true,
    es2020: true,
  },
}
