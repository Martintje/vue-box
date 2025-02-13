import type { Ref } from 'vue'

import type { HtmlRendererDataSetType, HtmlRendererDataType, HtmlRendererNumberData, HtmlRendererTextData } from '../types/HtmlRendererDataSetType'
import type { HtmlRendererDataTypeType } from '../types/HtmlRendererDataTypeType'
import type { HtmlRendererHtmlInputNumberUpdateModelValueEvent, HtmlRendererHtmlInputTextUpdateModelValueEvent } from '../types/HtmlRendererEvents'

export interface UseHtmlRendererHandlersOptions {
  dataSet: Ref<HtmlRendererDataSetType>
}

export interface UseHtmlRendererHandlersReturnType {
  onHtmlInputNumberUpdateModelValue: (event: HtmlRendererHtmlInputNumberUpdateModelValueEvent) => void
  onHtmlInputTextUpdateModelValue: (event: HtmlRendererHtmlInputTextUpdateModelValueEvent) => void
}

export function useHtmlRendererHandlers(options: UseHtmlRendererHandlersOptions): UseHtmlRendererHandlersReturnType {
  const { dataSet } = options

  function getData<TType extends HtmlRendererDataTypeType, TData = Extract<HtmlRendererDataType, { type: TType }>>(
    id: string,
    type: TType,
  ): TData | undefined {
    const data = dataSet.value[`${id}`]

    if (data?.type !== type) return

    return data as TData
  }

  function setData(id: string, data: HtmlRendererDataType): void {
    const newDataSet = { ...dataSet.value, [`${id}`]: data }

    dataSet.value = newDataSet
  }

  function onHtmlInputNumberUpdateModelValue(event: HtmlRendererHtmlInputNumberUpdateModelValueEvent): void {
    const { id, value } = event

    console.log('onHtmlInputNumberUpdateModelValue', { id, value })

    const temporaryId = 'number-data'

    const newData: HtmlRendererNumberData = { type: 'Number', ...getData(temporaryId, 'Number'), value }

    setData(temporaryId, newData)
  }

  function onHtmlInputTextUpdateModelValue(event: HtmlRendererHtmlInputTextUpdateModelValueEvent): void {
    const { id, value } = event

    console.log('onHtmlInputTextUpdateModelValue', { id, value })

    const temporaryId = 'text-data'

    const newData: HtmlRendererTextData = { type: 'Text', ...getData(temporaryId, 'Text'), value }

    setData(temporaryId, newData)
  }

  return {
    onHtmlInputNumberUpdateModelValue,
    onHtmlInputTextUpdateModelValue,
  }
}
