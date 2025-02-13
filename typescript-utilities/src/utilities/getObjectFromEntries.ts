import type { ObjectFromPartialEntriesType } from '../types/ObjectFromPartialEntriesType'
import type { PartialEntriesType } from '../types/PartialEntriesType'

/**
 * @example
```ts
  const exampleObject = {
    foo: 'bar',
    1: true,
  } as const

  const exampleEntries = getObjectEntries(exampleObject)
  const exampleNewObject = getObjectFromEntries(exampleEntries)

  const exampleResult = exampleNewObject.foo // "bar" | undefined
```
 */
export function getObjectFromEntries<TPartialEntries extends PartialEntriesType>(
  entries: TPartialEntries,
): ObjectFromPartialEntriesType<TPartialEntries> {
  const validEntries = entries.filter(Boolean)

  const partialObject = Object.fromEntries(validEntries as Array<[PropertyKey, unknown]>) as ObjectFromPartialEntriesType<TPartialEntries>

  return partialObject
}
