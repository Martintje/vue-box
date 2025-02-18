import type { RecordToUnionType } from './RecordToUnionType'
import type { UnionToIntersectionType } from './UnionToIntersectionType'

/**
 * Source: @vue/runtime-core/dist/runtime-core.d.ts
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ShortListenersType<T extends Record<string, any>> = UnionToIntersectionType<
  RecordToUnionType<{
    [K in keyof T]: (...arguments_: T[K]) => void
  }>
>
