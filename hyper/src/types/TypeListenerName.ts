export type TypeListenerName<TEmitName extends string | number | symbol> = `on${Capitalize<TEmitName extends string ? TEmitName : never>}`
