<script lang="ts" setup>
import { type HTMLAttributes, toRefs } from 'vue'

import { useContentable } from '../composables/useContentable'
import type { ContentableType } from '../types/ContentableType'

export interface HtmlSpanProperties extends ContentableType {
  elementAttributes?: HTMLAttributes
}

const properties = defineProps<HtmlSpanProperties>()

const { content, isContentHtml } = toRefs(properties)

const { sanitizedHtml } = useContentable({ content, isContentHtml })
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <span
    v-if="isContentHtml"
    class="html-span"
    :class="{ 'html-span--is-content-html': true }"
    v-bind="elementAttributes"
    v-html="sanitizedHtml"
  ></span>

  <span v-else v-bind="elementAttributes" class="html-span">
    <slot name="default">
      {{ content }}
    </slot>
  </span>
</template>
