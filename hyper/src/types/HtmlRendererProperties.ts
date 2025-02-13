import type { HtmlDivisionProperties } from '../components/HtmlDivision.vue'
import type { HtmlInputNumberProperties } from '../components/HtmlInputNumber.vue'
import type { HtmlInputTextProperties } from '../components/HtmlInputText.vue'
import type { HtmlLabelProperties } from '../components/HtmlLabel.vue'
import type { HtmlSpanProperties } from '../components/HtmlSpan.vue'
import type { HtmlComponentNameType } from './HtmlComponentNameType'

export interface TypeHtmlRendererProperties<TType extends HtmlComponentNameType, TComponentProperties> {
  id: string
  type: TType
  componentProperties: TComponentProperties
}

export interface TypeHtmlRendererPropertiesChildable<TType extends HtmlComponentNameType, TComponentProperties>
  extends TypeHtmlRendererProperties<TType, TComponentProperties> {
  children?: HtmlRendererProperties[]
}

export type HtmlRendererDivisionProperties = TypeHtmlRendererPropertiesChildable<'HtmlDivision', HtmlDivisionProperties>
export type HtmlRendererInputNumberProperties = TypeHtmlRendererProperties<'HtmlInputNumber', HtmlInputNumberProperties>
export type HtmlRendererInputTextProperties = TypeHtmlRendererProperties<'HtmlInputText', HtmlInputTextProperties>
export type HtmlRendererLabelProperties = TypeHtmlRendererPropertiesChildable<'HtmlLabel', HtmlLabelProperties>
export type HtmlRendererSpanProperties = TypeHtmlRendererPropertiesChildable<'HtmlSpan', HtmlSpanProperties>

export type HtmlRendererProperties =
  | HtmlRendererDivisionProperties
  | HtmlRendererInputNumberProperties
  | HtmlRendererInputTextProperties
  | HtmlRendererLabelProperties
  | HtmlRendererSpanProperties
