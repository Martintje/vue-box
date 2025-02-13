<script lang="ts" setup>
import { computed } from 'vue'

import type { HtmlRendererEventNameType } from '../types/HtmlRendererEventNameType'
import type { HtmlRendererHtmlInputNumberUpdateModelValueEvent, HtmlRendererHtmlInputTextUpdateModelValueEvent } from '../types/HtmlRendererEvents'
import type { HtmlRendererProperties } from '../types/HtmlRendererProperties'
import HtmlDivision from './HtmlDivision.vue'
import HtmlInputNumber from './HtmlInputNumber.vue'
import HtmlInputText from './HtmlInputText.vue'
import HtmlLabel from './HtmlLabel.vue'
import HtmlSpan from './HtmlSpan.vue'

const properties = defineProps<HtmlRendererProperties>()

export interface HtmlRendererEmits {
  (event: 'htmlInputNumberUpdateModelValue', data: HtmlRendererHtmlInputNumberUpdateModelValueEvent): void
  (event: 'htmlInputTextUpdateModelValue', data: HtmlRendererHtmlInputTextUpdateModelValueEvent): void
}

const emit = defineEmits<HtmlRendererEmits>()

const rendererListeners = computed(() => {
  const newRendererListeners = {
    onHtmlInputNumberUpdateModelValue: (event: HtmlRendererHtmlInputNumberUpdateModelValueEvent) => emit('htmlInputNumberUpdateModelValue', event),
    onHtmlInputTextUpdateModelValue: (event: HtmlRendererHtmlInputTextUpdateModelValueEvent) => emit('htmlInputTextUpdateModelValue', event),
  } satisfies Record<HtmlRendererEventNameType, unknown>

  return newRendererListeners
})
</script>

<template>
  <HtmlInputText
    v-if="properties.type === 'HtmlInputText'"
    v-bind="properties.componentProperties"
    @update:model-value="emit('htmlInputTextUpdateModelValue', { id: properties.id, value: $event })"
  ></HtmlInputText>

  <HtmlInputNumber
    v-else-if="properties.type === 'HtmlInputNumber'"
    v-bind="properties.componentProperties"
    @update:model-value="emit('htmlInputNumberUpdateModelValue', { id: properties.id, value: $event })"
  ></HtmlInputNumber>

  <HtmlDivision v-else-if="properties.type === 'HtmlDivision'" v-bind="properties.componentProperties">
    <HtmlRenderer v-for="child in properties.children" :key="child.id" v-bind="{ ...child, ...rendererListeners }"></HtmlRenderer>
  </HtmlDivision>

  <HtmlLabel v-else-if="properties.type === 'HtmlLabel'" v-bind="properties.componentProperties">
    <HtmlRenderer v-for="child in properties.children" :key="child.id" v-bind="{ ...child, ...rendererListeners }"></HtmlRenderer>
  </HtmlLabel>

  <HtmlSpan v-else-if="properties.type === 'HtmlSpan'" v-bind="properties.componentProperties">
    <HtmlRenderer v-for="child in properties.children" :key="child.id" v-bind="{ ...child, ...rendererListeners }"></HtmlRenderer>
  </HtmlSpan>
</template>
