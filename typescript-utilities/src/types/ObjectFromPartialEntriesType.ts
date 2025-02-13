import type { PartialEntriesType } from './PartialEntriesType'

export type ObjectFromPartialEntriesType<TPartialObjectEntries extends PartialEntriesType> = {
  [K in Exclude<TPartialObjectEntries[number], undefined> as K[0]]?: K[1]
}
