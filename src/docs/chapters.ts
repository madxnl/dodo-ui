import { computed } from 'vue'

export const components = import.meta.globEager('../components/**/*.vue')

const componentPages: { title: string }[] = []
for (const name in components) {
  if (name.includes('Example') || name.includes('Typed')) continue
  const { docs } = components[name] as any
  const title = docs.displayName
  componentPages.push({ title })
}
componentPages.sort((a, b) => a.title.localeCompare(b.title))

export const chapters = computed(() => [
  {
    pages: [
      { title: 'Dodo UI' },
      { title: 'Installation' },
    ],
  },
  {
    pages: componentPages,
  },
])
