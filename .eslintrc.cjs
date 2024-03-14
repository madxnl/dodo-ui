/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting',

    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'standard',
    '@vue/typescript',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  overrides: [
    {
      files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:playwright/recommended']
    }
  ],

  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-console': 'warn',
    'import/no-unresolved': 'off',
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/no-undef-components': 'error',

    'func-call-spacing': 'off',
    indent: 'off',
    '@typescript-eslint/func-call-spacing': ['warn'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'none' } }]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue', '.d.ts']
  },
  ignorePatterns: ['/docs-dist/', '/dist/', '/old/']
}
