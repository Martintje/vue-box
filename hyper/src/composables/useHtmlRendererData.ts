import { type Ref, ref } from 'vue'

import type { HtmlRendererDataSetType } from '../types/HtmlRendererDataSetType'

export interface useHtmlRendererDataReturnType {
  dataSet: Ref<HtmlRendererDataSetType>
}

export function useHtmlRendererData(): useHtmlRendererDataReturnType {
  const dataSet = ref<HtmlRendererDataSetType>({
    'text-data': {
      type: 'Text',
      value: "<a href='#' target='_blank'>Link</a>",
    },
    'number-data': {
      type: 'Number',
      value: 3,
    },
  })

  return {
    dataSet,
  }
}
