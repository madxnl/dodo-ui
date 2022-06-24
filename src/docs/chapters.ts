import * as components from '../components'
import { DefineComponent, onMounted, shallowRef } from 'vue'
import { ComponentDoc } from 'vue-docgen-api'

interface ComponentPage {
  examples: {
    component: DefineComponent<any, any, any>
    source: string
  }[]
  docs: ComponentDoc
  guide?: DefineComponent<any, any, any>
}

export function useComponentsInfo() {
  const chapters = shallowRef<ComponentPage[]>([])

  onMounted(async () => {
    const names = Object.keys(components)
    const componentChapters = await Promise.all(names.map(async name => {
      const docs = (await import(`../components/${name}.vue`)).docs
      const page: ComponentPage = { docs, examples: [] }
      try {
        const { source, default: component } = await import(`./${name}Example.vue`)
        page.examples.push({ source, component })
      } catch {}
      return page
    }))

    chapters.value = componentChapters
  })

  return chapters
}
