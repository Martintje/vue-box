import { getHtmlSanitized } from '@vue-box/typescript-utilities'
import { computed, type ComputedRef, type DeepReadonly, type Ref } from 'vue'

export interface UseContentableOptions {
  content: DeepReadonly<Ref<string | undefined>>
  isContentHtml: DeepReadonly<Ref<boolean | undefined>>
}

export interface UseContentableReturnType {
  sanitizedHtml: ComputedRef<string | undefined>
}

export function useContentable(options: UseContentableOptions): UseContentableReturnType {
  const { content, isContentHtml } = options

  const sanitizedHtml = computed((): string | undefined => {
    const newContent = content.value !== undefined && isContentHtml.value ? getHtmlSanitized(content.value) : content.value

    return newContent
  })

  return {
    sanitizedHtml,
  }
}
