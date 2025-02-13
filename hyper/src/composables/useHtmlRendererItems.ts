import { computed, type ComputedRef, type Ref } from 'vue'

import type { HtmlRendererDataSetType } from '../types/HtmlRendererDataSetType'
import type { HtmlRendererProperties } from '../types/HtmlRendererProperties'

export interface UseHtmlRendererItemsOptions {
  dataSet: Ref<HtmlRendererDataSetType>
}

export interface UseHtmlRendererItemsReturnType {
  items: ComputedRef<HtmlRendererProperties[]>
}

export function useHtmlRendererItems(options: UseHtmlRendererItemsOptions): UseHtmlRendererItemsReturnType {
  const { dataSet } = options

  const items = computed((): HtmlRendererProperties[] => [
    {
      id: 'structure-1',
      type: 'HtmlDivision',
      componentProperties: {
        content: dataSet.value['text-data']?.type === 'Text' ? dataSet.value['text-data'].value : undefined,
        isContentHtml: true,
      },
    },
    {
      id: 'structure-2',
      type: 'HtmlInputText',
      componentProperties: {
        id: 'HtmlInputText-1',
        modelValue: dataSet.value['text-data']?.type === 'Text' ? dataSet.value['text-data'].value : undefined,
      },
    },
    {
      id: 'structure-3',
      type: 'HtmlInputText',
      componentProperties: {
        id: 'HtmlInputText-2',
        modelValue: dataSet.value['text-data']?.type === 'Text' ? dataSet.value['text-data'].value : undefined,
      },
    },
    {
      id: 'structure-4',
      type: 'HtmlInputNumber',
      componentProperties: {
        id: 'HtmlInputNumber-2',
        modelValue: dataSet.value['number-data']?.type === 'Number' ? dataSet.value['number-data'].value : undefined,
      },
    },
    {
      id: 'structure-5',
      type: 'HtmlLabel',
      componentProperties: {
        content: dataSet.value['text-data']?.type === 'Text' ? dataSet.value['text-data'].value : undefined,
        forId: 'HtmlInputNumber-2',
        isContentHtml: true,
      },
    },
    {
      id: 'structure-6',
      type: 'HtmlSpan',
      componentProperties: {
        content: dataSet.value['text-data']?.type === 'Text' ? dataSet.value['text-data'].value : undefined,
        isContentHtml: true,
      },
    },
  ])

  return { items }
}
