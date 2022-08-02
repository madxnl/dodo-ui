import { ComputedRef, InjectionKey } from 'vue'

export const navBarServiceKey: InjectionKey<{
  collapsed: ComputedRef<boolean>
}> = Symbol('NavBarService')
