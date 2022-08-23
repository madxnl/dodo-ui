import { computed, ComputedRef, InjectionKey, onBeforeUnmount, onMounted, Ref, ref, watch, watchEffect } from 'vue'

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

export function useWebFont(opts: { id: string; font: () => string; href: () => string }) {
  const isReady = ref(false)
  const font = computed(opts.font)
  const href = computed(opts.href)
  const css = computed(() => `@import url('${href.value}');\n`)

  let style = document.getElementById(opts.id)
  if (!style) {
    style = document.createElement('style')
    style.setAttribute('id', opts.id)
    document.head.appendChild(style)
    document.fonts.addEventListener('loadingdone', onFontsLoaded)
  }

  watchEffect(() => {
    if (!style!.innerHTML.includes(css.value)) {
      isReady.value = false
      style!.innerHTML = css.value + style!.innerHTML
    }
  })

  async function onFontsLoaded() {
    if (style!.innerHTML !== css.value) {
      style!.innerHTML = css.value
    }
    isReady.value = document.fonts.check(font.value)
  }

  onBeforeUnmount(() => {
    document.fonts.removeEventListener('loadingdone', onFontsLoaded)
  })

  return { href, font, isReady }
}
