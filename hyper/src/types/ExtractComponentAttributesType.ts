/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * vue-component-type-helpers
 * Copy from https://github.com/vuejs/language-tools/tree/master/packages/component-type-helpers
 */
export type ExtractComponentAttributesType<T> = T extends new () => {
  $props: infer P
}
  ? NonNullable<P>
  : T extends (properties: infer P, ...arguments_: any) => any
    ? P
    : {}
