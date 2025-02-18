<script setup lang="ts">
import { computed } from 'vue'

import HtmlRenderer, { type HtmlRendererEmits } from '../components/HtmlRenderer.vue'
import { useHtmlRendererData } from '../composables/useHtmlRendererData'
import { useHtmlRendererHandlers } from '../composables/useHtmlRendererHandlers'
import { type HtmlRendererMeta, useHtmlRendererItems } from '../composables/useHtmlRendererItems'
import type { TypeRendererListeners } from '../types/TypeRendererListeners'

const { dataSet } = useHtmlRendererData()
const { items } = useHtmlRendererItems({ dataSet })
const {
  'onHtmlInputNumber:update:modelValue': onHtmlInputNumberUpdateModelValue,
  'onHtmlInputText:update:modelValue': onHtmlInputTextUpdateModelValue,
} = useHtmlRendererHandlers({ dataSet })

const rendererListeners = computed(() => {
  const newRendererListeners: TypeRendererListeners<HtmlRendererEmits<HtmlRendererMeta>> = {
    'onHtmlInputNumber:update:modelValue': onHtmlInputNumberUpdateModelValue,
    'onHtmlInputText:update:modelValue': onHtmlInputTextUpdateModelValue,
  }

  return newRendererListeners
})
</script>

<template>
  <main class="home-view">
    <h1 class="home-view__heading">Html kitchensink</h1>

    <article class="home-view__article">
      <h2 class="home-view__article-heading">Components</h2>

      <table class="home-view__article-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Result</th>
          </tr>

          <template v-for="item in items" :key="item.id">
            <tr>
              <td>{{ item.name }}</td>
              <td>
                <HtmlRenderer v-bind="{ ...item, ...rendererListeners }"></HtmlRenderer>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </article>
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

  .home-view__article {
    .home-view__article-heading {
      @apply text-lg;
      @apply font-semibold;
      @apply py-1;
    }

    .home-view__article-table {
      @apply text-sm;
      @apply w-full;

      th,
      td {
        @apply py-1;
        @apply px-3;
        @apply border;
        @apply border-slate-400;
        @apply align-top;
      }

      th {
        @apply text-start;
      }

      td {
        @apply bg-white;

        input,
        textarea {
          @apply w-full;
        }

        &:first-child {
          @apply w-1;
          @apply bg-transparent;
        }
      }

      :deep(td) {
        input,
        textarea {
          @apply w-full;
        }
      }
    }
  }
}
</style>
