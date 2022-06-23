import * as components from '../components'
import { DefineComponent, onMounted, shallowRef } from 'vue'
import { ComponentDoc } from 'vue-docgen-api'

import DocsInstall from './DocsInstall.vue'

export interface Chapter {
  label: string
  href: string
  component?: DefineComponent<any, any, any>
  examples?: DefineComponent<any, any, any>
  doc?: ComponentDoc
  examplesText?: string
}

export function useChapters() {
  const chapters = shallowRef<Chapter[]>([])

  onMounted(async () => {
    chapters.value.push({
      label: 'Installation',
      href: '#Installation',
      component: DocsInstall,
    })

    const names = Object.keys(components)
    const componentChapters = await Promise.all(names.map(async name => {
      const chapter: Chapter = { label: name, href: '#' + name }
      try {
        const { source, default: example } = await import(`./${name}Example.vue`)
        chapter.examples = example
        chapter.examplesText = source
      } catch {}
      try {
        chapter.doc = (await import(`../components/${name}.vue`)).docs
      } catch {}
      return chapter
    }))

    chapters.value = chapters.value.concat(componentChapters)
  })

  return chapters
}
