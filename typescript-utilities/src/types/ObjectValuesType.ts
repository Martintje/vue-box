export type ObjectValuesType<TObject extends object> = Partial<
  {
    [TKey in keyof TObject]: TObject[TKey]
  }[keyof TObject][]
>
