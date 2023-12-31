// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: 'off',
    'no-extra-semi': 'warn',
    'no-multi-spaces': 'warn',
    'block-spacing': 'warn',
    'comma-spacing': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true
  }
}
