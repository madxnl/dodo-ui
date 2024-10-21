import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: ['dist/', 'docs/', 'public/', 'eslint.config.mjs']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        extraFileExtensions: ['.vue']
      }
    },

    rules: {
      'no-console': 'warn',
      'no-undef': 'off',
      'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/no-unused-components': 'off',
      'vue/no-v-html': 'off',
      'vue/no-undef-components': 'error',
      'vue/html-quotes': 'off',
      'func-call-spacing': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      '@typescript-eslint/no-explicit-any': 'off'

      //   indent: 'off',
      //   '@typescript-eslint/func-call-spacing': ['warn'],
      //   '@typescript-eslint/indent': ['warn', 2],
      //   '@typescript-eslint/member-delimiter-style': [
      //     'warn',
      //     {
      //       multiline: {
      //         delimiter: 'none'
      //       }
      //     }
      //   ]
    }
  }
)
