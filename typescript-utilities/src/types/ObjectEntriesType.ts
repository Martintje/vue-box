export type ObjectEntriesType<TObject extends object> = Partial<
  {
    [TKey in keyof TObject]: [TKey, TObject[TKey]]
  }[keyof TObject][]
>
