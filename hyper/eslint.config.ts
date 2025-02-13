import pluginJs from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pluginCypress from 'eslint-plugin-cypress/flat'
import oxlint from 'eslint-plugin-oxlint'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginRegexp from 'eslint-plugin-regexp'
import pluginSecurity from 'eslint-plugin-security'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'
import pluginVuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js,mjs,cjs}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginCypress.configs.recommended,
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
  },
  oxlint.configs['flat/recommended'],
  skipFormatting,

  /**
   * Customisation
   */
  {
    files: ['**/*.{ts,mts,tsx,vue,js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
        parser: tseslint.parser,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  pluginRegexp.configs['flat/recommended'],
  pluginSecurity.configs.recommended,
  pluginUnicorn.configs['flat/recommended'],
  ...pluginVuejsAccessibility.configs['flat/recommended'],
  ...pluginQuery.configs['flat/recommended'],
  pluginPrettierRecommended,
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      // sort imports and exports
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      // constistent file names
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],

      // prevent abbreviations
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: ['e2e', 'env'],
        },
      ],

      // sort attributes
      'vue/attributes-order': [
        'warn',
        {
          alphabetical: true,
        },
      ],

      // warn on unused vars
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          // allow unused arguments
          args: 'none',
          // ignore when prefixed with '_'
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
)
