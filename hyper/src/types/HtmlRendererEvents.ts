import type { HtmlInputNumberModel } from '../components/HtmlInputNumber.vue'
import type { HtmlInputTextModel } from '../components/HtmlInputText.vue'
import type { HtmlRendererEventNameType } from './HtmlRendererEventNameType'

export interface TypeHtmlRendererEvent<TValue> {
  id: string
  value: TValue
}

export type HtmlRendererHtmlInputNumberUpdateModelValueEvent = TypeHtmlRendererEvent<HtmlInputNumberModel>
export type HtmlRendererHtmlInputTextUpdateModelValueEvent = TypeHtmlRendererEvent<HtmlInputTextModel>

export type TypeHtmlRendererEventMap<TMap extends Record<HtmlRendererEventNameType, unknown>> = TMap

export type HtmlRendererEventMap = TypeHtmlRendererEventMap<{
  onHtmlInputNumberUpdateModelValue: HtmlRendererHtmlInputNumberUpdateModelValueEvent
  onHtmlInputTextUpdateModelValue: HtmlRendererHtmlInputTextUpdateModelValueEvent
}>
