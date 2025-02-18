<script lang="ts" setup>
import { type InputHTMLAttributes } from 'vue'

import type { ShortEmitsType } from '../types/ShortEmitsType'

export type HtmlInputTextModel = string

export interface HtmlInputTextProperties {
  modelValue?: HtmlInputTextModel
  elementAttributes?: InputHTMLAttributes
  id: string
}

defineProps<HtmlInputTextProperties>()

export interface HtmlInputTextEmits {
  'update:modelValue': [data: HtmlInputTextModel]
}

defineEmits<ShortEmitsType<HtmlInputTextEmits>>()

const model = defineModel<HtmlInputTextModel>()
</script>

<template>
  <input v-bind="elementAttributes" :id v-model="model" class="html-input-text" type="text" />
</template>
