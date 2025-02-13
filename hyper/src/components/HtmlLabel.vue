<script lang="ts" setup>
import { type LabelHTMLAttributes, toRefs } from 'vue'

import { useContentable } from '../composables/useContentable'
import type { ContentableType } from '../types/ContentableType'

export interface HtmlLabelProperties extends ContentableType {
  elementAttributes?: LabelHTMLAttributes
  forId: string
}

const properties = defineProps<HtmlLabelProperties>()

const { content, isContentHtml } = toRefs(properties)

const { sanitizedHtml } = useContentable({ content, isContentHtml })
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <!-- eslint-disable vuejs-accessibility/label-has-for -->
  <label
    v-if="isContentHtml"
    class="html-label"
    :class="{ 'html-label--is-content-html': true }"
    v-bind="elementAttributes"
    :for="forId"
    v-html="sanitizedHtml"
  ></label>

  <label v-else v-bind="elementAttributes" class="html-label" :for="forId">
    <slot name="default">
      {{ content }}
    </slot>
  </label>
</template>
