<script lang="ts" setup>
import { type InputHTMLAttributes } from 'vue'

export type HtmlInputNumberModel = number

export interface HtmlInputNumberProperties {
  modelValue?: HtmlInputNumberModel
  elementAttributes?: InputHTMLAttributes
  id: string
}

defineProps<HtmlInputNumberProperties>()

const model = defineModel<HtmlInputNumberModel>()
</script>

<template>
  <input v-bind="elementAttributes" :id v-model="model" class="html-input-number" type="number" />
</template>
