/**
 * Source: @vue/runtime-core/dist/runtime-core.d.ts
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RecordToUnionType<T extends Record<string, any>> = T[keyof T]
