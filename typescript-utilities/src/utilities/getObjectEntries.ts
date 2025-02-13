import type { ObjectEntriesType } from '../types/ObjectEntriesType'

/**
 * @example
```ts
  const exampleObject = {
    foo: 'bar',
    1: true,
  } as const

  const exampleEntries = getObjectEntries(exampleObject)

  const exampleResult = exampleEntries[0] // ["foo", "bar"] | [1, true] | undefined
```
 */
export function getObjectEntries<TObject extends object>(object: TObject): ObjectEntriesType<TObject> {
  const entries = (object === null ? [] : Object.entries(object)) as ObjectEntriesType<TObject>

  return entries
}
