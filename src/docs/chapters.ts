import { computed } from 'vue'

export const components = import.meta.globEager('../components/**/*.vue')

for (const k in components) {
  if (k.includes('Example') || k.includes('Typed')) delete components[k]
}

export const chapters = computed(() => [
  {
    pages: [
      { title: 'Dodo UI' },
      { title: 'Installation' },
    ],
  },
  {
    pages: Object.values(components).map(({ docs }) => ({
      title: docs.displayName,
    })),
  },
])
