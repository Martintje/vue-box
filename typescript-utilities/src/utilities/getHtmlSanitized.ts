import dompurify from 'dompurify'

/**
 * @example
```ts
  const exampleText = '<a href="#" target="_blank">Link</a>';

  const exampleResult = getHtmlSanitized(exampleText) // '<a href="#">Link</a>'
```
 */
export function getHtmlSanitized(dirty: string): string {
  const clean = dompurify.sanitize(dirty)

  return clean
}
