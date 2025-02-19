import type { ShortListenersType } from './ShortListenersType'
import type { TypeListenerName } from './TypeListenerName'

export type TypeRendererListeners<THtmlRendererEmits extends object> = {
  [TEmitName in keyof THtmlRendererEmits as TypeListenerName<TEmitName>]: ShortListenersType<
    Pick<THtmlRendererEmits, TEmitName>
  >
}
