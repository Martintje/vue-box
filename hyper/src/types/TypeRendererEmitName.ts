export type TypeRendererEmitName<
  TComponentName extends string,
  TEmitName extends string | number | symbol,
> = `${Uncapitalize<TComponentName>}:${TEmitName extends string ? TEmitName : never}`
