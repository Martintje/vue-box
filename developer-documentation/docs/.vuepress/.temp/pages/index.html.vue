<template><div><nav class="table-of-contents"><ul><li><router-link to="#initial-setup">Initial setup</router-link><ul><li><router-link to="#repo-design-system">Repo - Design system</router-link></li><li><router-link to="#repo-typescript-utilities">Repo - Typescript utilities</router-link></li><li><router-link to="#monorepo">Monorepo</router-link></li><li><router-link to="#repo-developer-documentation">Repo - Developer documentation</router-link></li></ul></li></ul></nav>
<h2 id="initial-setup" tabindex="-1"><a class="header-anchor" href="#initial-setup"><span>Initial setup</span></a></h2>
<h3 id="repo-design-system" tabindex="-1"><a class="header-anchor" href="#repo-design-system"><span>Repo - Design system</span></a></h3>
<details class="hint-container details"><summary>Initial</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>cd vue-box</code></li>
<li>run <code v-pre>create-vite</code></li>
<li>type <code v-pre>project-name</code> -&gt; <code v-pre>design-system</code></li>
<li>select <code v-pre>Vue</code></li>
<li>select <code v-pre>Customize with create-vue</code></li>
<li>select <code v-pre>Add TypeScript?</code></li>
<li>select <code v-pre>Add JSX Support?</code></li>
<li>select <code v-pre>Add Vue Router for Single Page Application development?</code></li>
<li>select <code v-pre>Add Pinia for state management?</code></li>
<li>select <code v-pre>Add Vitest for Unit Testing?</code></li>
<li>select <code v-pre>Add an End-to-End Testing Solution?</code> -&gt; <code v-pre>Cypress</code></li>
<li>select <code v-pre>Add ESLint for code quality?</code> -&gt; <code v-pre>Yes, and speed up with Oxlint (experimental)</code></li>
<li>select <code v-pre>Add Prettier for code formatting?</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>cd design-system</code></li>
<li>run <code v-pre>pnpm i</code></li>
<li>run <code v-pre>pnpm run format</code></li>
<li>run <code v-pre>pnpm run dev</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Cleanup script</summary>
<p><strong>Setup</strong></p>
<ul>
<li>add <code v-pre>design-system/package.json</code> -&gt; <code v-pre>scripts</code> -&gt; <code v-pre>&quot;clean&quot;: &quot;rm -rf pnpm-lock.yaml node_modules/ dist/&quot;,</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>pnpm clean &amp;&amp; pnpm i pnpm dev:open</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Auto open browser</summary>
<p><strong>Setup</strong></p>
<ul>
<li>add <code v-pre>design-system/package.json</code> -&gt; <code v-pre>scripts</code> -&gt; <code v-pre>&quot;dev:open&quot;: &quot;vite --open --port 8080&quot;,</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>pnpm dev:open</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Allow offline install</summary>
<p><strong>Setup</strong></p>
<ul>
<li>add <code v-pre>design-system/package.json</code> -&gt; <code v-pre>scripts</code> -&gt; <code v-pre>&quot;install:offline&quot;: &quot;pnpm install --offline&quot;,</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>pnpm install:offline</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Allow mass-update</summary>
<p><strong>Setup</strong></p>
<ul>
<li>add <code v-pre>design-system/package.json</code> -&gt; <code v-pre>scripts</code> -&gt; <code v-pre>&quot;package:update&quot;: &quot;npx npm-check-updates &amp;&amp; ncu --interactive&quot;,</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>pnpm package:update</code> -&gt; press <code v-pre>enter</code> -&gt; press <code v-pre>y</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Standardise order in package.json</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>pnpm add -D sort-package-json</code></li>
<li>add <code v-pre>design-system/package.json</code> -&gt; <code v-pre>scripts</code> -&gt; <code v-pre>&quot;package:sort&quot;: &quot;npx sort-package-json&quot;,</code></li>
<li></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>pnpm package:sort</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Adding Tailwind</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>pnpm add -D tailwindcss@next @tailwindcss/vite@next</code></li>
<li>run <code v-pre>pnpm package:update</code></li>
<li>add <code v-pre>design-system/vite.config.ts</code> -&gt; <code v-pre>import tailwindcss from '@tailwindcss/vite';</code></li>
<li>add <code v-pre>design-system/vite.config.ts</code> -&gt; <code v-pre>plugins</code> -&gt; <code v-pre>tailwindcss()</code></li>
<li>add <code v-pre>design-system/src/base.css</code> -&gt; <code v-pre>@import &quot;tailwindcss&quot;;</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>add <code v-pre>design-system/src/views/HomeView.vue</code> -&gt;</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-15d<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in 16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>run <code v-pre>pnpm dev:open</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Adding PostCss</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>pnpm add -D @tailwindcss/postcss</code></li>
<li>add <code v-pre>design-system/vite.config.ts</code> -&gt; <code v-pre>import tailwindpostcss from '@tailwindcss/postcss';</code></li>
<li>add <code v-pre>design-system/vite.config.ts</code> -&gt;</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">css<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  postcss<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    plugins<span class="token operator">:</span> <span class="token punctuation">[</span> </span>
<span class="line">      <span class="token function">tailwindpostcss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Test</strong></p>
<ul>
<li>add <code v-pre>design-system/src/views/HomeView.vue</code> -&gt;</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home-view__grid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in 16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- ... --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.home-view__grid</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@apply</span> grid<span class="token punctuation">;</span></span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@apply</span> grid-cols-15<span class="token punctuation">;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>run <code v-pre>pnpm dev:open</code></li>
</ul>
<p><strong>Test 2</strong></p>
<ul>
<li>add <code v-pre>design-system/src/views/HomeView.vue</code> -&gt;</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home-view__grid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in 16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- ... --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./HomeView.scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/src/views/HomeView.scss</code> -&gt;</li>
</ul>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token selector">.home-view__grid </span><span class="token punctuation">{</span></span>
<span class="line">  @apply grid<span class="token punctuation">;</span></span>
<span class="line">  @apply grid-cols-15<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>run <code v-pre>pnpm dev:open</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Improve formatting and linting</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>pnpm add -D @tanstack/eslint-plugin-query eslint-plugin-regexp eslint-plugin-security eslint-plugin-simple-import-sort eslint-plugin-unicorn eslint-plugin-vuejs-accessibility globals @types/eslint-plugin-security eslint-plugin-prettier eslint-config-prettier @eslint/js @types/eslint__js typescript-eslint</code></li>
<li>add <code v-pre>design-system/vite.config.ts</code> -&gt; <code v-pre>plugins</code> -&gt; <code v-pre>eslint({ fix: true }),</code></li>
<li>add <code v-pre>design-system/.gitignore</code> -&gt;</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token tag">!.vscode/settings.json</span></span>
<span class="line"><span class="token important">*.eslintcache</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace <code v-pre>design-system/.prettierrc.json</code> -&gt;</li>
</ul>
<div class="language-jsonc line-numbers-mode" data-highlighter="prismjs" data-ext="jsonc" data-title="jsonc"><pre v-pre><code><span class="line">{</span>
<span class="line">  &quot;$schema&quot;: &quot;https://json.schemastore.org/prettierrc&quot;,</span>
<span class="line">  &quot;semi&quot;: false,</span>
<span class="line">  &quot;endOfLine&quot;: &quot;lf&quot;,</span>
<span class="line">  &quot;htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;,</span>
<span class="line">  &quot;jsxBracketSameLine&quot;: true,</span>
<span class="line">  &quot;printWidth&quot;: 150,</span>
<span class="line">  &quot;singleQuote&quot;: true,</span>
<span class="line">  &quot;tabWidth&quot;: 2,</span>
<span class="line">  &quot;trailingComma&quot;: &quot;all&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/.vscode/extensions.json</code> -&gt;</li>
</ul>
<div class="language-jsonc line-numbers-mode" data-highlighter="prismjs" data-ext="jsonc" data-title="jsonc"><pre v-pre><code><span class="line">{</span>
<span class="line">  &quot;recommendations&quot;: [</span>
<span class="line">    // Customisation</span>
<span class="line">    &quot;bradlc.vscode-tailwindcss&quot;,</span>
<span class="line">    &quot;Cardinal90.multi-cursor-case-preserve&quot;,</span>
<span class="line">    &quot;heybourn.headwind&quot;,</span>
<span class="line">    &quot;lukas-tr.materialdesignicons-intellisense&quot;,</span>
<span class="line">    &quot;sleistner.vscode-fileutils&quot;,</span>
<span class="line">    &quot;yzhang.markdown-all-in-one&quot;</span>
<span class="line">  ],</span>
<span class="line">  &quot;unwantedRecommendations&quot;: [</span>
<span class="line">    // Customisation</span>
<span class="line">    &quot;octref.vetur&quot;, </span>
<span class="line">    &quot;Vue.vscode-typescript-vue-plugin&quot;</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace <code v-pre>design-system/.vscode/settings.json</code> -&gt;</li>
</ul>
<div class="language-jsonc line-numbers-mode" data-highlighter="prismjs" data-ext="jsonc" data-title="jsonc"><pre v-pre><code><span class="line">{</span>
<span class="line">  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span>
<span class="line">  &quot;[html]&quot;: {</span>
<span class="line">    &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">    &quot;editor.defaultFormatter&quot;: &quot;vscode.html-language-features&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;[json]&quot;: {</span>
<span class="line">    &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;[jsonc]&quot;: {</span>
<span class="line">    &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;[markdown]&quot;: {</span>
<span class="line">    &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">    &quot;editor.defaultFormatter&quot;: &quot;yzhang.markdown-all-in-one&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;[typescript]&quot;: {</span>
<span class="line">    &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;[vue]&quot;: {</span>
<span class="line">    &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;[javascript]&quot;: {</span>
<span class="line">    &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;editor.bracketPairColorization.enabled&quot;: true,</span>
<span class="line">  &quot;editor.formatOnSave&quot;: true,</span>
<span class="line">  &quot;editor.formatOnPaste&quot;: true,</span>
<span class="line">  &quot;editor.codeActionsOnSave&quot;: {</span>
<span class="line">    &quot;source.fixAll&quot;: &quot;explicit&quot;,</span>
<span class="line">    &quot;source.fixAll.eslint&quot;: &quot;explicit&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;css.lint.unknownAtRules&quot;: &quot;ignore&quot;,</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/eslint.config.ts</code> -&gt;</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> pluginJs <span class="token keyword">from</span> <span class="token string">'@eslint/js'</span></span>
<span class="line"><span class="token keyword">import</span> pluginPrettierRecommended <span class="token keyword">from</span> <span class="token string">'eslint-plugin-prettier/recommended'</span></span>
<span class="line"><span class="token keyword">import</span> pluginQuery <span class="token keyword">from</span> <span class="token string">'@tanstack/eslint-plugin-query'</span></span>
<span class="line"><span class="token keyword">import</span> pluginRegexp <span class="token keyword">from</span> <span class="token string">'eslint-plugin-regexp'</span></span>
<span class="line"><span class="token keyword">import</span> pluginSecurity <span class="token keyword">from</span> <span class="token string">'eslint-plugin-security'</span></span>
<span class="line"><span class="token keyword">import</span> pluginSimpleImportSort <span class="token keyword">from</span> <span class="token string">'eslint-plugin-simple-import-sort'</span></span>
<span class="line"><span class="token keyword">import</span> pluginUnicorn <span class="token keyword">from</span> <span class="token string">'eslint-plugin-unicorn'</span></span>
<span class="line"><span class="token keyword">import</span> pluginVuejsAccessibility <span class="token keyword">from</span> <span class="token string">'eslint-plugin-vuejs-accessibility'</span></span>
<span class="line"><span class="token keyword">import</span> globals <span class="token keyword">from</span> <span class="token string">'globals'</span></span>
<span class="line"><span class="token keyword">import</span> tseslint <span class="token keyword">from</span> <span class="token string">'typescript-eslint'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Customisation</span>
<span class="line"> */</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  files<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.{ts,mts,tsx,vue,js,mjs,cjs}'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  ignores<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/dist/**'</span><span class="token punctuation">,</span> <span class="token string">'**/dist-ssr/**'</span><span class="token punctuation">,</span> <span class="token string">'**/coverage/**'</span><span class="token punctuation">,</span> <span class="token string">'**/node_modules/**'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  languageOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    globals<span class="token operator">:</span> globals<span class="token punctuation">.</span>browser<span class="token punctuation">,</span></span>
<span class="line">    parserOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      extraFileExtensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      project<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./tsconfig.eslint.json'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      tsconfigRootDir<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>dirname<span class="token punctuation">,</span></span>
<span class="line">      parser<span class="token operator">:</span> tseslint<span class="token punctuation">.</span>parser<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">pluginJs<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">...</span>tseslint<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">...</span>pluginVue<span class="token punctuation">.</span>configs<span class="token punctuation">[</span><span class="token string">'flat/recommended'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">pluginRegexp<span class="token punctuation">.</span>configs<span class="token punctuation">[</span><span class="token string">'flat/recommended'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">pluginSecurity<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">,</span></span>
<span class="line">pluginUnicorn<span class="token punctuation">.</span>configs<span class="token punctuation">[</span><span class="token string">'flat/recommended'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">...</span>pluginVuejsAccessibility<span class="token punctuation">.</span>configs<span class="token punctuation">[</span><span class="token string">'flat/recommended'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">...</span>pluginQuery<span class="token punctuation">.</span>configs<span class="token punctuation">[</span><span class="token string">'flat/recommended'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">pluginPrettierRecommended<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'simple-import-sort'</span><span class="token operator">:</span> pluginSimpleImportSort<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  rules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// sort imports and exports</span></span>
<span class="line">    <span class="token string-property property">'simple-import-sort/imports'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'simple-import-sort/exports'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// constistent file names</span></span>
<span class="line">    <span class="token string-property property">'unicorn/filename-case'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        cases<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          camelCase<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          kebabCase<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          pascalCase<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// prevent abbreviations</span></span>
<span class="line">    <span class="token string-property property">'unicorn/prevent-abbreviations'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        ignore<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'e2e'</span><span class="token punctuation">,</span> <span class="token string">'env'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// sort attributes</span></span>
<span class="line">    <span class="token string-property property">'vue/attributes-order'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        alphabetical<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// warn on unused vars</span></span>
<span class="line">    <span class="token string-property property">'@typescript-eslint/no-unused-vars'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// allow unused arguments</span></span>
<span class="line">        args<span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// ignore when prefixed with '_'</span></span>
<span class="line">        varsIgnorePattern<span class="token operator">:</span> <span class="token string">'^_'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary>Adding convenient libraries</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>pnpm add -D @tanstack/vue-query class-variance-authority clsx focus-trap lodash-es mdi-vue3 radix-vue vee-validate vue-i18n @tsconfig/node20 @types/jsdom @types/lodash-es @types/node jsdom dompurify axios qs @changesets/cli @vueuse/core @vueuse/components @vueuse/integrations</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>pnpm dev:open</code></li>
</ul>
</details>
<details class="hint-container details"><summary>Purge unused</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>printf &quot;@import 'tailwindcss';&quot; &gt; src/assets/base.css</code></li>
<li>run <code v-pre>printf &quot;@import './base.css';&quot; &gt; src/assets/main.css</code></li>
<li>run <code v-pre>rm -rf src/assets/logo.svg src/components src/stores src/views/AboutView.vue</code></li>
<li>replace <code v-pre>design-system/src/App.vue</code> -&gt;</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/constants/routeNamesConstant.ts</code> -&gt;</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> routeNamesConstant <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">'home'</span></span>
<span class="line"><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/types/RouteNameType.ts</code> -&gt;</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> routeNamesConstant <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/constants/routeNamesConstant"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RouteNameType</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> routeNamesConstant<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/types/RouteNameType.ts</code> -&gt;</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteNameType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./RouteNameType"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RouteType</span> <span class="token operator">=</span> RouteRecordRaw <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> RouteNameType</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace <code v-pre>design-system/src/router/index.ts</code> -&gt;</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types/RouteType'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  routes<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">      name<span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/HomeView.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span> satisfies RouteType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace <code v-pre>design-system/src/views/HomeView.vue</code> -&gt;</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    Hello world!</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>pnpm dev:open</code></li>
</ul>
</details>
<h3 id="repo-typescript-utilities" tabindex="-1"><a class="header-anchor" href="#repo-typescript-utilities"><span>Repo - Typescript utilities</span></a></h3>
<details class="hint-container details"><summary>Duplicate folder for typescript-utilities</summary>
<p><strong>Setup</strong></p>
<ul>
<li>replace <code v-pre>design-system/index.html</code> -&gt; <code v-pre>head</code> -&gt; <code v-pre>&lt;title&gt;Design System&lt;/title&gt;</code></li>
<li>replace <code v-pre>design-system/package.json</code> -&gt; <code v-pre>name</code> -&gt; <code v-pre>@vue-box/design-system</code></li>
<li>remove <code v-pre>design-system/package.json</code> -&gt; <code v-pre>&quot;private&quot;: true,</code></li>
<li>add <code v-pre>design-system/library.ts</code> -&gt;</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./src/constants/routeNamesConstant'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./src/types/RouteNameType'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./src/types/RouteType'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/package.json</code> -&gt; <code v-pre>&quot;main&quot;: &quot;library.ts&quot;,</code></li>
<li>add <code v-pre>design-system/tsconfig.eslint.json</code> -&gt; <code v-pre>include</code> -&gt; <code v-pre>&quot;library.ts&quot;,</code></li>
<li>run <code v-pre>rm -rf pnpm-lock.yaml node_modules/ &amp;&amp; cd .. &amp;&amp; cp -r ./design-system ./typescript-utilities</code></li>
<li>replace <code v-pre>typescript-utilities/index.html</code> -&gt; <code v-pre>head</code> -&gt; <code v-pre>&lt;title&gt;Typescript Utilities&lt;/title&gt;</code></li>
<li>replace <code v-pre>typescript-utilities/package.json</code> -&gt; <code v-pre>name</code> -&gt; <code v-pre>@vue-box/typescript-utilities</code></li>
<li>replace <code v-pre>typescript-utilities/readme.md</code> -&gt; <code v-pre>typescript-utilities</code></li>
<li>replace <code v-pre>typescript-utilities/src/views/HomeView.vue</code> -&gt;</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    Hello world! (typescript-utilities)</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace <code v-pre>typescript-utilities/package.json</code> -&gt; <code v-pre>scripts</code> -&gt; <code v-pre>&quot;dev:open&quot;: &quot;vite --open --port 8081&quot;,</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>run <code v-pre>cd typescript-utilities &amp;&amp; pnpm i &amp;&amp; pnpm dev:open</code></li>
</ul>
</details>
<h3 id="monorepo" tabindex="-1"><a class="header-anchor" href="#monorepo"><span>Monorepo</span></a></h3>
<details class="hint-container details"><summary>Running repo's in paralel</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>cd ..</code></li>
<li>add <code v-pre>pnpm-workspace.yaml</code> -&gt;</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">packages</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">'typescript-utilities'</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">'design-system'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>.gitignore</code> -&gt;</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line">.DS_Store</span>
<span class="line">node_modules</span>
<span class="line">dist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>package.json</code> -&gt;</li>
</ul>
<div class="language-jsonc line-numbers-mode" data-highlighter="prismjs" data-ext="jsonc" data-title="jsonc"><pre v-pre><code><span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;vue-box&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;0.0.0&quot;,</span>
<span class="line">  &quot;private&quot;: true,</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;clean&quot;: &quot;rm -rf pnpm-lock.yaml node_modules/ dist/ &amp;&amp; pnpm --stream --parallel -r --filter=!vue-box run clean&quot;,</span>
<span class="line">    &quot;install:offline&quot;: &quot;pnpm install --offline&quot;,</span>
<span class="line">    &quot;dev:open&quot;: &quot;pnpm --stream --parallel -r --filter=!vue-box run dev:open&quot;,</span>
<span class="line">    &quot;package:sort&quot;: &quot;npx sort-package-json &amp;&amp; pnpm --stream --parallel -r --filter=!vue-box run package:sort&quot;,</span>
<span class="line">    &quot;package:update&quot;: &quot;npx npm-check-updates &amp;&amp; ncu --interactive &amp;&amp; (cd typescript-utilities &amp;&amp; pnpm run package:update) &amp;&amp; (cd design-system &amp;&amp; pnpm run package:update)&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;devDependencies&quot;: {</span>
<span class="line">    &quot;sort-package-json&quot;: &quot;^2.14.0&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;pnpm&quot;: {</span>
<span class="line">    &quot;onlyBuiltDependencies&quot;: [</span>
<span class="line">      &quot;cypress&quot;,</span>
<span class="line">      &quot;esbuild&quot;,</span>
<span class="line">      &quot;vue-demi&quot;</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>design-system/package.json</code> -&gt; <code v-pre>&quot;@vue-box/typescript-utilities&quot;: &quot;workspace:*&quot;,</code></li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li><code v-pre>pnpm clean &amp;&amp; pnpm i &amp;&amp; pnpm dev:open</code></li>
<li>replace <code v-pre>design-system/src/views/HomeView.vue</code> -&gt;</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> routeNamesConstant <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-box/typescript-utilities'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    Hello world!</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>typescript-utilities routeNamesConstant:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>{{ routeNamesConstant }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="repo-developer-documentation" tabindex="-1"><a class="header-anchor" href="#repo-developer-documentation"><span>Repo - Developer documentation</span></a></h3>
<details class="hint-container details"><summary>Adding Vuepress</summary>
<p><strong>Setup</strong></p>
<ul>
<li>run <code v-pre>pnpm create vuepress vuepress-starter</code></li>
<li>Select <code v-pre>Select a language to display</code> -&gt; <code v-pre>english (US)</code></li>
<li>Select <code v-pre>Choose package manager</code> -&gt; <code v-pre>pnpm</code></li>
<li>Select <code v-pre>Which bundler do you want to use?</code> -&gt; <code v-pre>vite</code></li>
<li>Select <code v-pre>What type of project do you want to create?</code> -&gt; <code v-pre>docs</code></li>
<li>Select <code v-pre>Your project name</code> -&gt; <code v-pre>developer-documentation</code></li>
<li>Select <code v-pre>Your project version</code> -&gt; <code v-pre>0.0.1</code></li>
<li>Select <code v-pre>Your project description</code> -&gt; <code v-pre>A VuePress project</code></li>
<li>Select <code v-pre>Your project license</code> -&gt; <code v-pre>MIT</code></li>
<li>Select <code v-pre>Do you need a GitHub workflow to deploy docs on GitHub pages?</code> -&gt; <code v-pre>Yes</code></li>
<li>Select <code v-pre>Would you like to preview template now?</code> -&gt; <code v-pre>No</code></li>
<li>add <code v-pre>pnpm-workspace.yaml</code> -&gt;</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">packages</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">'typescript-utilities'</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token string">'developer-documentation'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace folder name <code v-pre>vuepress-starter</code> with <code v-pre>developer-documentation</code></li>
<li>replace <code v-pre>developer-documentation/package.json</code> -&gt; <code v-pre>&quot;name&quot;: &quot;@vue-box/developer-documentation&quot;,</code></li>
<li>add <code v-pre>developer-documentation/package.json</code> -&gt; <code v-pre>devDependencies</code></li>
</ul>
<div class="language-jsonc line-numbers-mode" data-highlighter="prismjs" data-ext="jsonc" data-title="jsonc"><pre v-pre><code><span class="line">&quot;clean&quot;: &quot;rm -rf pnpm-lock.yaml node_modules/ dist/&quot;,</span>
<span class="line">&quot;dev:open&quot;: &quot;vuepress dev docs --port 8082 --open&quot;,</span>
<span class="line">&quot;install:offline&quot;: &quot;pnpm install --offline&quot;,</span>
<span class="line">&quot;package:sort&quot;: &quot;npx sort-package-json&quot;,</span>
<span class="line">&quot;package:update&quot;: &quot;npx npm-check-updates &amp;&amp; ncu --interactive&quot;,</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add <code v-pre>developer-documentation/.gitignore</code> -&gt; <code v-pre>docs/.vuepress/.cache</code></li>
<li>add <code v-pre>developer-documentation/.gitignore</code> -&gt; <code v-pre>docs/.vuepress/.temp</code></li>
<li>replace <code v-pre>package.json</code> -&gt; <code v-pre>scripts</code> -&gt; <code v-pre>&quot;package:update&quot;: &quot;npx npm-check-updates &amp;&amp; ncu --interactive &amp;&amp; (cd typescript-utilities &amp;&amp; pnpm run package:update) &amp;&amp; (cd design-system &amp;&amp; pnpm run package:update) &amp;&amp; (cd developer-documentation &amp;&amp; pnpm run package:update)&quot;</code></li>
<li>run <code v-pre>pnpm clean</code></li>
<li>run <code v-pre>pnpm i</code></li>
<li>run <code v-pre>pnpm package:sort</code></li>
<li>run <code v-pre>pnpm package:update</code> -&gt; repeat
<ul>
<li>Select <code v-pre>Choose which packages to update</code> -&gt; <code v-pre>Enter</code></li>
<li>Select <code v-pre>Run pnpm install to install new versions?</code> -&gt; <code v-pre>N</code></li>
</ul>
</li>
<li>(cd developer-documentation &amp;&amp; pnpm add -D @vuepress/bundler-vite@next @vuepress/theme-default@next vuepress@next sass-embedded)</li>
<li>add <code v-pre>package.json</code> -&gt; <code v-pre>devDependencies</code> -&gt; <code v-pre>^</code> where missing</li>
<li>run <code v-pre>pnpm clean</code></li>
<li>run <code v-pre>pnpm i</code></li>
<li>run <code v-pre>pnpm dev:open</code></li>
</ul>
</details>
</div></template>


