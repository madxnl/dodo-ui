import { computed, InjectionKey, onBeforeUnmount, onMounted, Ref, ref, watch, watchEffect } from 'vue'
import { useTheme } from '..'

export const navBarServiceKey: InjectionKey<{
  collapsed: Ref<boolean|null>
  renderMobile: Ref<boolean>
  mobileToggle: Ref<boolean>
}> = Symbol('NavBarService')

export const dropdownServiceKey: InjectionKey<{
  toggle(active: boolean): void
}> = Symbol('DropdownService')

export const formServiceKey: InjectionKey<{
  errors: Record<string, string|undefined>
  validateField: (field: string) => Promise<void>
}> = Symbol('FormService')

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

export function useScreenSize() {
  const theme = useTheme()
  const small = theme.vars['breakpoint-small']
  const large = theme.vars['breakpoint-large']
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)
  const screenSmall = computed(() => width.value < small)
  const screenMedium = computed(() => width.value >= small && width.value < large)
  const screenLarge = computed(() => width.value >= large)

  function onResize() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', onResize, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })

  return {
    screenSmall,
    screenMedium,
    screenLarge,
  }
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
