export type PartialEntriesType<
  TEntries extends
    | ReadonlyArray<readonly [PropertyKey, unknown] | [PropertyKey, unknown] | undefined>
    | Array<readonly [PropertyKey, unknown] | [PropertyKey, unknown] | undefined> =
    | ReadonlyArray<readonly [PropertyKey, unknown] | [PropertyKey, unknown] | undefined>
    | Array<readonly [PropertyKey, unknown] | [PropertyKey, unknown] | undefined>,
> = TEntries[number][]
