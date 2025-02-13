import type HtmlDivision from '../components/HtmlDivision.vue'
import type HtmlInputNumber from '../components/HtmlInputNumber.vue'
import type HtmlInputText from '../components/HtmlInputText.vue'
import type HtmlLabel from '../components/HtmlLabel.vue'
import type HtmlSpan from '../components/HtmlSpan.vue'
import type { ExtractComponentAttributesType } from '../types/ExtractComponentAttributesType'
import type { HtmlComponentNameType } from './HtmlComponentNameType'

export type HtmlDivisionAttributes = ExtractComponentAttributesType<typeof HtmlDivision>
export type HtmlInputNumberAttributes = ExtractComponentAttributesType<typeof HtmlInputNumber>
export type HtmlInputTextAttributes = ExtractComponentAttributesType<typeof HtmlInputText>
export type HtmlLabelAttributes = ExtractComponentAttributesType<typeof HtmlLabel>
export type HtmlSpanAttributes = ExtractComponentAttributesType<typeof HtmlSpan>

export type TypeHtmlAttributesMap<TMap extends Record<HtmlComponentNameType, unknown>> = TMap

export type HtmlAttributesMap = TypeHtmlAttributesMap<{
  HtmlDivision: HtmlDivisionAttributes
  HtmlInputNumber: HtmlInputNumberAttributes
  HtmlInputText: HtmlInputTextAttributes
  HtmlLabel: HtmlLabelAttributes
  HtmlSpan: HtmlSpanAttributes
}>
