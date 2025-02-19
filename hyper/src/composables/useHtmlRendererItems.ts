import { computed, type ComputedRef, type Ref } from 'vue'

import type { HtmlRendererProperties } from '../components/HtmlRenderer.vue'
import type { HtmlRendererDataSetType } from '../types/HtmlRendererDataSetType'

export interface UseHtmlRendererItemsOptions {
  dataSet: Ref<HtmlRendererDataSetType>
}

export type HtmlRendererMeta = 'text-data' | 'number-data'

export interface UseHtmlRendererItemsReturnType<TMeta> {
  items: ComputedRef<HtmlRendererProperties<TMeta>[]>
}

export function useHtmlRendererItems(
  options: UseHtmlRendererItemsOptions,
): UseHtmlRendererItemsReturnType<HtmlRendererMeta> {
  const { dataSet } = options

  const items = computed((): HtmlRendererProperties<HtmlRendererMeta>[] => [
    {
      componentId: 'structure-1',
      name: 'HtmlDivision',
      meta: 'text-data',
      componentAttributes: {
        content:
          dataSet.value['text-data']?.type === 'Text'
            ? dataSet.value['text-data'].value
            : undefined,
        isContentHtml: true,
      },
    },
    {
      componentId: 'structure-2',
      name: 'HtmlInputText',
      meta: 'text-data',
      componentAttributes: {
        id: 'HtmlInputText-1',
        modelValue:
          dataSet.value['text-data']?.type === 'Text'
            ? dataSet.value['text-data'].value
            : undefined,
      },
    },
    {
      componentId: 'structure-3',
      name: 'HtmlInputText',
      meta: 'text-data',
      componentAttributes: {
        id: 'HtmlInputText-2',
        modelValue:
          dataSet.value['text-data']?.type === 'Text'
            ? dataSet.value['text-data'].value
            : undefined,
      },
    },
    {
      componentId: 'structure-4',
      name: 'HtmlInputNumber',
      meta: 'number-data',
      componentAttributes: {
        id: 'HtmlInputNumber-2',
        modelValue:
          dataSet.value['number-data']?.type === 'Number'
            ? dataSet.value['number-data'].value
            : undefined,
      },
    },
    {
      componentId: 'structure-5',
      name: 'HtmlLabel',
      meta: 'number-data',
      componentAttributes: {
        content:
          dataSet.value['text-data']?.type === 'Text'
            ? dataSet.value['text-data'].value
            : undefined,
        forId: 'HtmlInputNumber-2',
        isContentHtml: true,
      },
    },
    {
      componentId: 'structure-6',
      name: 'HtmlSpan',
      meta: 'text-data',
      componentAttributes: {
        content:
          dataSet.value['text-data']?.type === 'Text'
            ? dataSet.value['text-data'].value
            : undefined,
        isContentHtml: true,
      },
    },
  ])

  return { items }
}
