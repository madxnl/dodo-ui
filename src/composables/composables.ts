import { computed, InjectionKey, onBeforeUnmount, onMounted, Ref, ref, watch, watchEffect } from 'vue'

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
  const small = 600
  const large = 1200
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

export function useWebFont(opts: { weight: string; name: string; href: string }) {
  const isReady = ref(false)

  onMounted(async () => {
    const id = `font-${opts.name}-${opts.weight}`
    let link = document.getElementById(id) as HTMLStyleElement | null
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('href', opts.href)
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('id', id)
      document.head.appendChild(link)
    }
    await document.fonts.ready
    isReady.value = document.fonts.check(`${opts.weight} 1em ${opts.name}`)
  })

  return { isReady }
}
