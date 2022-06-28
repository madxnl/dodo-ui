module.exports = {
  root: true,
  ignorePatterns: [
    '/docs/',
    '/dist/',
  ],
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'standard',
    '@vue/typescript',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'no-console': 'warn',
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
    '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'none' } }],

  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue', '.d.ts'],
  },
}
