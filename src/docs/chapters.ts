import { computed } from 'vue'

export const components = import.meta.globEager('../components/*.vue')

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