---
home: true
title: Developer documentation
---

[[TOC]]

## Initial setup

### Repo - Design system

:::details Initial

**Setup**
- run `cd vue-box`
- run `create-vite`
- type `project-name` → `design-system`
- select `Vue` → `Yes`
- select `Customize with create-vue` → `Yes`
- select `Add TypeScript?` → `Yes`
- select `Add JSX Support?` → `Yes`
- select `Add Vue Router for Single Page Application development?` → `Yes`
- select `Add Pinia for state management?` → `Yes`
- select `Add Vitest for Unit Testing?` → `Yes`
- select `Add an End-to-End Testing Solution?` → `Cypress`
- select `Add ESLint for code quality?` → `Yes, and speed up with Oxlint (experimental)`
- select `Add Prettier for code formatting?` → `Yes`

**Test**
- run `cd design-system`
- run `pnpm i`
- run `pnpm run format`
- run `pnpm run dev`
:::

:::details Cleanup script

**Setup**
- add `design-system/package.json` → `scripts` → `"clean": "rm -rf pnpm-lock.yaml node_modules/ dist/",`

**Test**
- run `pnpm clean && pnpm i pnpm dev:open`
:::

:::details Auto open browser

**Setup**
- add `design-system/package.json` → `scripts` → `"dev:open": "vite --open --port 8080",`

**Test**
- run `pnpm dev:open`
:::

:::details Allow offline install

**Setup**
- add `design-system/package.json` → `scripts` → `"install:offline": "pnpm install --offline",`

**Test**
- run `pnpm install:offline`
:::

:::details Allow mass-update

**Setup**
- add `design-system/package.json` → `scripts` → `"package:update": "npx npm-check-updates && ncu --interactive",`

**Test**
- run `pnpm package:update` → press `enter` → press `y`
:::

:::details Standardise order in package.json

**Setup**
- run `pnpm add -D sort-package-json`
- add `design-system/package.json` → `scripts` → `"package:sort": "npx sort-package-json",`

**Test**
- run `pnpm package:sort`
:::

:::details Adding Tailwind

**Setup**
- run `pnpm add -D tailwindcss@next @tailwindcss/vite@next`
- run `pnpm package:update`
- add `design-system/vite.config.ts` → `import tailwindcss from '@tailwindcss/vite';`
- add `design-system/vite.config.ts` → `plugins` → `tailwindcss()`
- add `design-system/src/base.css` → `@import "tailwindcss";`

**Test**
- add `design-system/src/views/HomeView.vue` →
```vue
<div class="grid grid-cols-15d">
  <div v-for="item in 16">{{ item }}</div>
</div>
```
- run `pnpm dev:open`
:::

:::details Adding PostCss

**Setup**
- run `pnpm add -D @tailwindcss/postcss`
- add `design-system/vite.config.ts` → `import tailwindpostcss from '@tailwindcss/postcss';`
- add `design-system/vite.config.ts` →
```ts
css: {
  postcss: {
    plugins: [ 
      tailwindpostcss(),
    ]
  }
},
```

**Test**
- add `design-system/src/views/HomeView.vue` →
```vue
<div class="home-view__grid">
  <div v-for="item in 16">{{ item }}</div>
</div>
<!-- ... -→
<style lang="scss" scoped>
.home-view__grid {
  @apply grid;
  @apply grid-cols-15;
}
</style>
```
- run `pnpm dev:open`

**Test 2**
- add `design-system/src/views/HomeView.vue` →
```vue
<div class="home-view__grid">
  <div v-for="item in 16">{{ item }}</div>
</div>
<!-- ... -→
<style lang="scss" src="./HomeView.scss" scoped></style>
```
- add `design-system/src/views/HomeView.scss` →
```scss
.home-view__grid {
  @apply grid;
  @apply grid-cols-15;
}
```
- run `pnpm dev:open`
:::

:::details Improve formatting and linting

**Setup**
- run `pnpm add -D @tanstack/eslint-plugin-query eslint-plugin-regexp eslint-plugin-security eslint-plugin-simple-import-sort eslint-plugin-unicorn eslint-plugin-vuejs-accessibility globals @types/eslint-plugin-security eslint-plugin-prettier eslint-config-prettier @eslint/js @types/eslint__js typescript-eslint`
- add `design-system/vite.config.ts` → `plugins` → `eslint({ fix: true }),`
- add `design-system/.gitignore` → 
```yaml
!.vscode/settings.json
*.eslintcache
```
- replace `design-system/.prettierrc.json` →
```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "ignore",
  "jsxBracketSameLine": true,
  "printWidth": 150,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```
- add `design-system/.vscode/extensions.json` →
```json
{
  "recommendations": [
    // Customisation
    "bradlc.vscode-tailwindcss",
    "Cardinal90.multi-cursor-case-preserve",
    "heybourn.headwind",
    "lukas-tr.materialdesignicons-intellisense",
    "sleistner.vscode-fileutils",
    "yzhang.markdown-all-in-one"
  ],
  "unwantedRecommendations": [
    // Customisation
    "octref.vetur", 
    "Vue.vscode-typescript-vue-plugin"
  ]
}
```
- replace `design-system/.vscode/settings.json` →
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.bracketPairColorization.enabled": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit"
  },
  "css.lint.unknownAtRules": "ignore",
}
```
- add `design-system/eslint.config.ts` →
```ts
import pluginJs from '@eslint/js'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRegexp from 'eslint-plugin-regexp'
import pluginSecurity from 'eslint-plugin-security'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginVuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// ...
/**
 * Customisation
 */
{
  files: ['**/*.{ts,mts,tsx,vue,js,mjs,cjs}'],
  ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
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
```
:::

:::details Adding convenient libraries

**Setup**
- run `pnpm add -D @tanstack/vue-query class-variance-authority clsx focus-trap lodash-es mdi-vue3 radix-vue vee-validate vue-i18n @tsconfig/node20 @types/jsdom @types/lodash-es @types/node jsdom dompurify axios qs @changesets/cli @vueuse/core @vueuse/components @vueuse/integrations`

**Test**
- run `pnpm dev:open`
:::

:::details Purge unused

**Setup**
- run `printf "@import 'tailwindcss';" → src/assets/base.css`
- run `printf "@import './base.css';" → src/assets/main.css`
- run `rm -rf src/assets/logo.svg src/components src/stores src/views/AboutView.vue`
- replace `design-system/src/App.vue` →
```vue
<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
```
- add `design-system/constants/routeNamesConstant.ts` →
```ts
export const routeNamesConstant = [
  'home'
] as const;
```
- add `design-system/types/RouteNameType.ts` →
```ts
import type { routeNamesConstant } from "@/constants/routeNamesConstant";

export type RouteNameType = typeof routeNamesConstant[number];
```
- add `design-system/types/RouteNameType.ts` →
```ts
import type { RouteRecordRaw } from "vue-router";
import type { RouteNameType } from "./RouteNameType";

export type RouteType = RouteRecordRaw & {
  name: RouteNameType
}
```
- replace `design-system/src/router/index.ts` →
```ts
import { createRouter, createWebHistory } from 'vue-router'

import type { RouteType } from '@/types/RouteType'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
  ] satisfies RouteType[],
})

export default router
```
- replace `design-system/src/views/HomeView.vue` →
```vue
<script lang="ts" setup></script>

<template>
  <main>
    Hello world!
  </main>
</template>
```

**Test**
- run `pnpm dev:open`
:::

### Repo - Typescript utilities

:::details Duplicate folder for typescript-utilities

**Setup**
- replace `design-system/index.html` → `head` → `<title>Design System</title>`
- replace `design-system/package.json` → `name` → `@vue-box/design-system`
- remove `design-system/package.json` → `"private": true,`
- add `design-system/library.ts` →
```ts
export * from './src/constants/routeNamesConstant'
export type * from './src/types/RouteNameType'
export type * from './src/types/RouteType'
```
- add `design-system/package.json` → `"main": "library.ts",`
- add `design-system/tsconfig.eslint.json` → `include` → `"library.ts",`
- run `rm -rf pnpm-lock.yaml node_modules/ && cd .. && cp -r ./design-system ./typescript-utilities`
- replace `typescript-utilities/index.html` → `head` → `<title>Typescript Utilities</title>`
- replace `typescript-utilities/package.json` → `name` → `@vue-box/typescript-utilities`
- replace `typescript-utilities/readme.md` → `typescript-utilities`
- replace `typescript-utilities/src/views/HomeView.vue` →
```vue
<script lang="ts" setup></script>

<template>
  <main>
    Hello world! (typescript-utilities)
  </main>
</template>
```
- replace `typescript-utilities/package.json` → `scripts` → `"dev:open": "vite --open --port 8081",`

**Test**
- run `cd typescript-utilities && pnpm i && pnpm dev:open`
:::

### Monorepo

:::details Running repo's in paralel

**Setup**
- run `cd ..`
- add `pnpm-workspace.yaml` →
```yaml
packages:
  - 'typescript-utilities'
  - 'design-system'
```
- add `.gitignore` →
```yaml
.DS_Store
node_modules
dist
```
- add `package.json` →
```json
{
  "name": "vue-box",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "clean": "rm -rf pnpm-lock.yaml node_modules/ dist/ && pnpm --stream --parallel -r --filter=!vue-box run clean",
    "install:offline": "pnpm install --offline",
    "dev:open": "pnpm --stream --parallel -r --filter=!vue-box run dev:open",
    "package:sort": "npx sort-package-json && pnpm --stream --parallel -r --filter=!vue-box run package:sort",
    "package:update": "npx npm-check-updates && ncu --interactive && (cd typescript-utilities && pnpm run package:update) && (cd design-system && pnpm run package:update)"
  },
  "devDependencies": {
    "sort-package-json": "^2.14.0"
  },
  "pnpm": {
    "onlyBuiltDependencies": [
      "cypress",
      "esbuild",
      "vue-demi"
    ]
  }
}
```
- add `design-system/package.json` → `"@vue-box/typescript-utilities": "workspace:*",`

**Test**
- `pnpm clean && pnpm i && pnpm dev:open`
- replace `design-system/src/views/HomeView.vue` →
```vue
<script setup lang="ts">
import { routeNamesConstant } from '@vue-box/typescript-utilities'
</script>

<template>
  <main>
    Hello world!
    <h1>typescript-utilities routeNamesConstant:</h1>
    <pre>{{ routeNamesConstant }}</pre>
  </main>
</template>
```
:::

### Repo - Developer documentation

:::details Adding Vuepress

**Setup**
- run `pnpm create vuepress vuepress-starter`
- Select `Select a language to display` → `english (US)`
- Select `Choose package manager` → `pnpm`
- Select `Which bundler do you want to use?` → `vite`
- Select `What type of project do you want to create?` → `docs`
- Select `Your project name` → `developer-documentation`
- Select `Your project version` → `0.0.1`
- Select `Your project description` → `A VuePress project`
- Select `Your project license` → `MIT`
- Select `Do you need a GitHub workflow to deploy docs on GitHub pages?` → `Yes`
- Select `Would you like to preview template now?` → `No`
- add `pnpm-workspace.yaml` →
```yaml
packages:
  - 'typescript-utilities'
  - 'developer-documentation'
```
- replace folder name `vuepress-starter` with `developer-documentation`
- replace `developer-documentation/package.json` → `"name": "@vue-box/developer-documentation",`
- add `developer-documentation/package.json` → `devDependencies`
```json
"clean": "rm -rf pnpm-lock.yaml node_modules/ dist/",
"dev:open": "vuepress dev docs --port 8082 --open",
"install:offline": "pnpm install --offline",
"package:sort": "npx sort-package-json",
"package:update": "npx npm-check-updates && ncu --interactive",
```
- add `developer-documentation/.gitignore` → `docs/.vuepress/.cache`
- add `developer-documentation/.gitignore` → `docs/.vuepress/.temp`
- replace `package.json` → `scripts` → `"package:update": "npx npm-check-updates && ncu --interactive && (cd typescript-utilities && pnpm run package:update) && (cd design-system && pnpm run package:update) && (cd developer-documentation && pnpm run package:update)"`
- run `pnpm clean`
- run `pnpm i`
- run `pnpm package:sort`
- run `pnpm package:update` → repeat 
  - Select `Choose which packages to update` → `Enter` 
  - Select `Run pnpm install to install new versions?` → `N`
- run `(cd developer-documentation && pnpm add -D @vuepress/bundler-vite@next @vuepress/theme-default@next vuepress@next sass-embedded)`
- add `developer-documentation/package.json` → `devDependencies` → `^` where missing
- run `pnpm clean`
- run `pnpm i`
- run `pnpm dev:open`
:::

### Repo - Storybookcase

:::details Adding storybook
- run `pnpm clean && cp -r ./design-system ./storybookcase`
- replace `storybookcase/readme.md` → `storybookcase`
- replace `storybookcase/package.json` → `name` → `@vue-box/storybookcase`
- add `storybookcase/package.json` → `devDependencies` → `"@vue-box/design-system": "workspace:*",`
- replace `storybookcase/package.json → scripts
```json
{
  "clean": "rm -rf pnpm-lock.yaml node_modules/ dist/",
  "type-check": "vue-tsc --build",
  "lint:oxlint": "oxlint . --fix -D correctness --ignore-path .gitignore",
  "lint:eslint": "eslint . --fix",
  "lint": "run-s lint:*",
  "format": "prettier --write src/",
  "install:offline": "pnpm install --offline",
  "package:sort": "npx sort-package-json",
  "package:update": "npx npm-check-updates && ncu --interactive"
},
```
- replace `package.json` → `"package:update": "npx npm-check-updates && ncu --interactive && (cd typescript-utilities && pnpm run package:update) && (cd design-system && pnpm run package:update) && (cd developer-documentation && pnpm run package:update) && (cd storybookcase && pnpm run package:update)"`
- add `pnpm-workspaces.yaml` →  `- "storybookcase"`
- run `pnpm dlx storybook@latest init`
- replace `"storybook": "storybook dev -p 6006",` with `"dev:open": "storybook dev -p 8083",`
:::

:::details Storybook - Installation error: `Could not resolve "@storybook/addon-actions/manager"`
- Ran into the error `✘ [ERROR] Could not resolve "@storybook/addon-actions/manager"`
- Solved it by running `find ~ -name ".pnp.*"` and then renaming, that file
- Solution found in https://stackoverflow.com/questions/78699720/error-could-not-resolve-various-storybook-dependencies-with-storybook-8-and-pnp
:::

:::details Storybook - Run error: `Failed to resolve "\u0000/virtual:/@storybook/builder-vite/storybook-stories.js"`
- Ran into the error `[vite] (client) warning: Failed to resolve "\u0000/virtual:/@storybook/builder-vite/storybook-stories.js" from /virtual:/@storybook/builder-vite/vite-app.js. An id should be written. Did you pass a URL?`
- Solved it by escaping the following from `storybookcase/vite.config.ts`
```ts
// import eslint from 'vite-plugin-eslint2'
// eslint({
//   fix: true,
// }),
```
- Real issue is also being worked on by Storybook https://github.com/storybookjs/storybook/issues/30497
:::

:::details Cleaning
- Reordered all examples in `storybookcase/src/stories` with `<script /><template /><style />`
- For each example in `storybookcase/src/stories` moved the external css into a `<style lang="scss" scoped></style>` block
- Prefixed all examples in `storybookcase/src/stories` with `Some` so they are multi-word-components
:::