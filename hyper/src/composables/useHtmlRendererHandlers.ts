import type { Ref } from 'vue'

import type { HtmlRendererEmits } from '../components/HtmlRenderer.vue'
import type { HtmlRendererDataSetType, HtmlRendererDataType, HtmlRendererNumberData, HtmlRendererTextData } from '../types/HtmlRendererDataSetType'
import type { HtmlRendererDataTypeType } from '../types/HtmlRendererDataTypeType'
import type { TypeRendererListeners } from '../types/TypeRendererListeners'
import type { HtmlRendererMeta } from './useHtmlRendererItems'

export interface UseHtmlRendererHandlersOptions {
  dataSet: Ref<HtmlRendererDataSetType>
}

export type UseHtmlRendererHandlersReturnType<TMeta> = TypeRendererListeners<HtmlRendererEmits<TMeta>>

export function useHtmlRendererHandlers(options: UseHtmlRendererHandlersOptions): UseHtmlRendererHandlersReturnType<HtmlRendererMeta> {
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

  return {
    'onHtmlInputNumber:update:modelValue': (...event) => {
      const [meta, componentId, data] = event

      const [value] = data

      console.log('onHtmlInputNumber:update:modelValue', { meta, componentId, value })

      const newData: HtmlRendererNumberData = { type: 'Number', ...getData(meta, 'Number'), value }

      setData(meta, newData)
    },
    'onHtmlInputText:update:modelValue': (...event) => {
      const [meta, componentId, data] = event

      const [value] = data

      console.log('onHtmlInputText:update:modelValue', { meta, componentId, value })

      const newData: HtmlRendererTextData = { type: 'Text', ...getData(meta, 'Text'), value }

      setData(meta, newData)
    },
  }
}
