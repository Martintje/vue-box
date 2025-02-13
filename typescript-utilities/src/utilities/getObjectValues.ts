import type { ObjectValuesType } from '../types/ObjectValuesType'

/**
 * @example
```ts
  const exampleObject = {
    foo: 'bar',
    1: true,
  } as const

  const exampleValues = getObjectValues(exampleObject)

  const exampleResult = exampleValues[0] // true | "bar" | undefined
```
 */
export function getObjectValues<TObject extends object>(object: TObject): ObjectValuesType<TObject> {
  const values = (object === null ? [] : Object.values(object)) as ObjectValuesType<TObject>

  return values
}
