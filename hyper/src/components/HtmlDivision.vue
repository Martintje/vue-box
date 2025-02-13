<script lang="ts" setup>
import { type HTMLAttributes, toRefs } from 'vue'

import { useContentable } from '../composables/useContentable'
import type { ContentableType } from '../types/ContentableType'

export interface HtmlDivisionProperties extends ContentableType {
  elementAttributes?: HTMLAttributes
}

const properties = defineProps<HtmlDivisionProperties>()

const { content, isContentHtml } = toRefs(properties)

const { sanitizedHtml } = useContentable({ content, isContentHtml })
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    v-if="isContentHtml"
    class="html-division"
    :class="{ 'html-division--is-content-html': true }"
    v-bind="elementAttributes"
    v-html="sanitizedHtml"
  ></div>

  <div v-else v-bind="elementAttributes" class="html-division">
    <slot name="default">
      {{ content }}
    </slot>
  </div>
</template>
