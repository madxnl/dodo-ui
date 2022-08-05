import { ComputedRef, InjectionKey, onBeforeUnmount, onMounted, Ref, ref, watch, watchEffect } from 'vue'

export const navBarServiceKey: InjectionKey<{
  collapsed: ComputedRef<boolean>
}> = Symbol('NavBarService')

export const dropdownServiceKey: InjectionKey<{
  toggle(active: boolean): void
}> = Symbol('DropdownService')

export function useElementSize(el: Ref<Element|undefined>) {
  const width = ref(0)
  const height = ref(0)
  const observer = new ResizeObserver(update)
  function update() {
    width.value = el.value?.clientWidth ?? 0
    height.value = el.value?.clientHeight ?? 0
  }
  onMounted(update)
  watchEffect(() => {
    observer.disconnect()
    if (el.value) observer.observe(el.value)
    update()
  })
  onBeforeUnmount(() => {
    observer.disconnect()
  })
  return { width, height, observer }
}

export function useSessionStoredRef<T>(key: string, initialValue: T) {
  const data = ref(initialValue)
  const prev = sessionStorage.getItem(key)
  if (prev) data.value = JSON.parse(prev)
  watch(data, value => {
    sessionStorage.setItem(key, JSON.stringify(value))
  })
  return data
}
