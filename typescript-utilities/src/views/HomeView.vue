<script setup lang="ts">
import { getHtmlSanitized } from '../utilities/getHtmlSanitized'
// import { getObjectEntries } from '../utilities/getObjectEntries'
// import { getObjectFromEntries } from '../utilities/getObjectFromEntries'
// import { getObjectKeys } from '../utilities/getObjectKeys'
// import { getObjectValues } from '../utilities/getObjectValues'

const getHtmlSanitizedData = `<a href='#' target='_blank'>Link</a><${'script'}></${'script'}>`
// const getObjectKeysData = { foo: 'bar', 1: true } as const
</script>

<template>
  <main class="home-view">
    <h1 class="home-view__heading">Typescript utilities kitchensink</h1>

    <section class="home-view__section">
      <h2 class="home-view__section-heading">Utilities</h2>

      <article class="home-view__article">
        <details>
          <summary>getHtmlSanitized</summary>
          <dl>
            <dt>Input</dt>
            <dd>{{ getHtmlSanitizedData }}</dd>

            <dt>Output</dt>
            <dd>{{ getHtmlSanitized(getHtmlSanitizedData) }}</dd>
          </dl>
        </details>
      </article>

      <!-- <article class="home-view__article">
        <details>
          <summary>getObjectKeys</summary>
          <dl>
            <dt>Input</dt>
            <dd>
              <pre>{{ getObjectKeysData }}</pre>
            </dd>

            <dt>Output</dt>
            <dd>
              <pre>{{ getObjectKeys(getObjectKeysData) }}</pre>
            </dd>
          </dl>
        </details>
      </article>

      <article class="home-view__article">
        <details>
          <summary>getObjectValues</summary>
          <dl>
            <dt>Input</dt>
            <dd>
              <pre>{{ getObjectKeysData }}</pre>
            </dd>

            <dt>Output</dt>
            <dd>
              <pre>{{ getObjectValues(getObjectKeysData) }}</pre>
            </dd>
          </dl>
        </details>
      </article>

      <article class="home-view__article">
        <details>
          <summary>getObjectEntries</summary>
          <dl>
            <dt>Input</dt>
            <dd>
              <pre>{{ getObjectKeysData }}</pre>
            </dd>

            <dt>Output</dt>
            <dd>
              <pre>{{ getObjectEntries(getObjectKeysData) }}</pre>
            </dd>
          </dl>
        </details>
      </article>

      <article class="home-view__article">
        <details>
          <summary>getObjectFromEntries</summary>
          <dl>
            <dt>Input</dt>
            <dd>
              <pre>{{ getObjectEntries(getObjectKeysData) }}</pre>
            </dd>

            <dt>Output</dt>
            <dd>
              <pre>{{ getObjectFromEntries(getObjectEntries(getObjectKeysData)) }}</pre>
            </dd>
          </dl>
        </details>
      </article> -->
    </section>
  </main>
</template>

<style lang="scss" scoped>
@reference "../assets/main.css";

.home-view {
  @apply px-3;
  @apply bg-slate-300;
  @apply min-h-screen;

  .home-view__heading {
    @apply text-xl;
    @apply font-semibold;
    @apply py-1;
  }

  .home-view__section {
    .home-view__section-heading {
      @apply text-lg;
      @apply font-semibold;
      @apply py-1;
    }

    .home-view__article {
      .home-view__article-heading {
        @apply text-base;
        @apply font-semibold;
        @apply py-1;
      }
    }

    dl {
      @apply text-sm;
      @apply w-full;
      @apply grid;
      grid-template: auto auto / auto 1fr;

      dt,
      dd {
        @apply py-1;
        @apply px-3;
        @apply border;
        @apply border-slate-400;
      }

      dt {
        @apply border-r-0;
        @apply font-semibold;
      }

      dd {
        @apply bg-white;
      }
    }
  }
}
</style>
