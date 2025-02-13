export type ObjectKeysType<TObject extends object> = Partial<
  {
    [TKey in keyof TObject]: TKey
  }[keyof TObject][]
>
