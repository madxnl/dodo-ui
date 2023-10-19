import { getCurrentInstance, onBeforeUnmount, onMounted, ref } from 'vue'

export type MenuItem = {
  name: string
  path: string
  isActive?: boolean
  subItem?: boolean
}

export function useSinglepageNav() {
  // ?.appContext.config.globalProperties.$singlepageNav = {

  const menu = ref<MenuItem[]>([])
  let menuInterval: ReturnType<typeof setInterval>
  const itemSelector = 'h1'
  const subItemSelector = 'h2,h3,h4'

  onMounted(() => {
    const instance = getCurrentInstance()
    const el = instance?.vnode.el
    if (!el) return
    const elems = el.querySelectorAll('[id]')
    for (const el of elems) {
      const isItem = el.matches(itemSelector)
      const subItem = el.matches(subItemSelector)
      if (!isItem && !subItem) continue
      const path = `#${el.id}`
      const name = el.textContent
      menu.value.push({ name, path, subItem })
    }

    menuInterval = setInterval(updateMenu, 50)
  })

  onBeforeUnmount(() => {
    menu.value = []

    clearInterval(menuInterval)
  })

  function updateMenu() {
    let active: MenuItem | undefined
    for (const item of menu.value) {
      const el = document.querySelector(item.path)
      if (!el) continue
      const rect = el.getBoundingClientRect()
      item.isActive = false
      if (!active && rect.top > -10) {
        item.isActive = true
        active = item
      }
    }
  }

  return { menu }
}
