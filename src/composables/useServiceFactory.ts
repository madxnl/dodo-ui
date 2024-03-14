import type { InjectionKey } from 'vue'
import { inject, provide } from 'vue'

export function useServiceFactory<T>(factory: () => T) {
  const key: InjectionKey<T> = Symbol('ServiceKey')
  const injectOptional = () => inject(key, undefined)
  const createAndProvide = () => {
    const service = factory()
    provide(key, service)
    return service
  }
  return { createAndProvide, injectOptional }
}
