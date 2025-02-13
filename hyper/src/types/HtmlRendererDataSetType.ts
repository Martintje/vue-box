import type { HtmlRendererDataTypeType } from './HtmlRendererDataTypeType'

export interface TypeHtmlRendererData<TType extends HtmlRendererDataTypeType> {
  type: TType
}

export interface HtmlRendererNumberData extends TypeHtmlRendererData<'Number'> {
  value: number
}
export interface HtmlRendererTextData extends TypeHtmlRendererData<'Text'> {
  value: string
}

export type TypeHtmlRendererDataMap<TMap extends Record<HtmlRendererDataTypeType, unknown>> = TMap

export type HtmlRendererDataMap = TypeHtmlRendererDataMap<{
  Number: HtmlRendererNumberData
  Text: HtmlRendererTextData
}>

export type HtmlRendererDataType = HtmlRendererDataMap[keyof HtmlRendererDataMap]

export type HtmlRendererDataSetType = Record<string, HtmlRendererDataType>
