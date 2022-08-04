import { ComputedRef, InjectionKey } from 'vue'

export const navBarServiceKey: InjectionKey<{
  collapsed: ComputedRef<boolean>
}> = Symbol('NavBarService')

export const dropdownServiceKey: InjectionKey<{
  toggle(active: boolean): void
}> = Symbol('DropdownService')
