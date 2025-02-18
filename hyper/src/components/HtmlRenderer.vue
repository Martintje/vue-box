<script lang="ts">
export const htmlRendererComponentNamesConstant = ['HtmlDivision', 'HtmlInputNumber', 'HtmlInputText', 'HtmlLabel', 'HtmlSpan'] as const
</script>

<script lang="ts" setup generic="TMeta">
import { computed } from 'vue'

import type { ShortEmitsType } from '../types/ShortEmitsType'
import type { TypeRendererEmitName } from '../types/TypeRendererEmitName'
import type { TypeRendererListeners } from '../types/TypeRendererListeners'
import HtmlDivision, { type HtmlDivisionProperties } from './HtmlDivision.vue'
import HtmlInputNumber, { type HtmlInputNumberEmits, type HtmlInputNumberProperties } from './HtmlInputNumber.vue'
import HtmlInputText, { type HtmlInputTextEmits, type HtmlInputTextProperties } from './HtmlInputText.vue'
import HtmlLabel, { type HtmlLabelProperties } from './HtmlLabel.vue'
import HtmlSpan, { type HtmlSpanProperties } from './HtmlSpan.vue'

export type HtmlRendererComponentNameType = (typeof htmlRendererComponentNamesConstant)[number]

export interface TypeHtmlRendererPropertiesBase<TMeta, TComponentName extends HtmlRendererComponentNameType, TComponentAttributes> {
  componentId: string
  name: TComponentName
  componentAttributes: TComponentAttributes
  meta: TMeta
}

export interface TypeHtmlRendererPropertiesChildable<TMeta, TComponentName extends HtmlRendererComponentNameType, TComponentAttributes>
  extends TypeHtmlRendererPropertiesBase<TMeta, TComponentName, TComponentAttributes> {
  children?: HtmlRendererProperties<TMeta>[]
}

export type HtmlRendererHtmlDivisionProperties<TMeta> = TypeHtmlRendererPropertiesChildable<TMeta, 'HtmlDivision', HtmlDivisionProperties>
export type HtmlRendererHtmlInputNumberProperties<TMeta> = TypeHtmlRendererPropertiesBase<TMeta, 'HtmlInputNumber', HtmlInputNumberProperties>
export type HtmlRendererHtmlInputTextProperties<TMeta> = TypeHtmlRendererPropertiesBase<TMeta, 'HtmlInputText', HtmlInputTextProperties>
export type HtmlRendererHtmlLabelProperties<TMeta> = TypeHtmlRendererPropertiesChildable<TMeta, 'HtmlLabel', HtmlLabelProperties>
export type HtmlRendererHtmlSpanProperties<TMeta> = TypeHtmlRendererPropertiesChildable<TMeta, 'HtmlSpan', HtmlSpanProperties>

export type HtmlRendererProperties<TMeta> =
  | HtmlRendererHtmlDivisionProperties<TMeta>
  | HtmlRendererHtmlInputNumberProperties<TMeta>
  | HtmlRendererHtmlInputTextProperties<TMeta>
  | HtmlRendererHtmlLabelProperties<TMeta>
  | HtmlRendererHtmlSpanProperties<TMeta>

export type TypeHtmlRendererEmits<TMeta, TComponentName extends HtmlRendererComponentNameType, TEmits extends object> = {
  [TEmitName in keyof TEmits as TypeRendererEmitName<TComponentName, TEmitName>]: [meta: TMeta, componentId: string, data: TEmits[TEmitName]]
}

export type HtmlRendererHtmlInputNumberEmits<TMeta> = TypeHtmlRendererEmits<TMeta, 'HtmlInputNumber', HtmlInputNumberEmits>
export type HtmlRendererHtmlInputTextEmits<TMeta> = TypeHtmlRendererEmits<TMeta, 'HtmlInputText', HtmlInputTextEmits>

export type HtmlRendererEmits<TMeta> = HtmlRendererHtmlInputNumberEmits<TMeta> & HtmlRendererHtmlInputTextEmits<TMeta>

const properties = defineProps<HtmlRendererProperties<TMeta>>()

const emit = defineEmits<ShortEmitsType<HtmlRendererEmits<TMeta>>>()

const rendererListeners = computed(
  (): TypeRendererListeners<HtmlRendererEmits<TMeta>> => ({
    'onHtmlInputNumber:update:modelValue': (...event) => emit('htmlInputNumber:update:modelValue', ...event),
    'onHtmlInputText:update:modelValue': (...event) => emit('htmlInputText:update:modelValue', ...event),
  }),
)
</script>

<template>
  <HtmlInputNumber
    v-if="properties.name === 'HtmlInputNumber'"
    v-bind="properties.componentAttributes"
    @update:model-value="(...event) => emit('htmlInputNumber:update:modelValue', properties.meta, properties.componentId, event)"
  ></HtmlInputNumber>

  <HtmlInputText
    v-else-if="properties.name === 'HtmlInputText'"
    v-bind="properties.componentAttributes"
    @update:model-value="(...event) => emit('htmlInputText:update:modelValue', properties.meta, properties.componentId, event)"
  ></HtmlInputText>

  <HtmlDivision v-else-if="properties.name === 'HtmlDivision'" v-bind="properties.componentAttributes">
    <HtmlRenderer v-for="child in properties.children" :key="child.componentId" v-bind="{ ...child, ...rendererListeners }"></HtmlRenderer>
  </HtmlDivision>

  <HtmlLabel v-else-if="properties.name === 'HtmlLabel'" v-bind="properties.componentAttributes">
    <HtmlRenderer v-for="child in properties.children" :key="child.componentId" v-bind="{ ...child, ...rendererListeners }"></HtmlRenderer>
  </HtmlLabel>

  <HtmlSpan v-else-if="properties.name === 'HtmlSpan'" v-bind="properties.componentAttributes">
    <HtmlRenderer v-for="child in properties.children" :key="child.componentId" v-bind="{ ...child, ...rendererListeners }"></HtmlRenderer>
  </HtmlSpan>
</template>
