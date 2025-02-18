/**
 * Source: @vue/shared/dist/shared.d.ts
 *
 * Error `[plugin:vite:vue] [@vue/compiler-sfc] Unresolvable type: TSConditionalType` prevented by using `@vue-ignore`
 * Source: https://github.com/vitejs/vite-plugin-vue/issues/167#issuecomment-1537641637
 * Source: https://github.com/vuejs/core/issues/8468#issuecomment-2431273791
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UnionToIntersectionType<U> = /* @vue-ignore */ (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
