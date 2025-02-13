import type { ObjectKeysType } from '../types/ObjectKeysType'

/**
 * @example
```ts
  const exampleObject = {
    foo: 'bar',
    1: true,
  } as const

  const exampleKeys = getObjectKeys(exampleObject)

  const exampleResult = exampleKeys[0] // "foo" | 1 | undefined
```
 */
export function getObjectKeys<TObject extends object>(object: TObject): ObjectKeysType<TObject> {
  const keys = (object === null ? [] : Object.keys(object)) as ObjectKeysType<TObject>

  return keys
}
