import { beforeAll, vi } from 'vitest'

beforeAll(() => {
  Object.defineProperty(document, 'fonts', {
    value: {
      check: vi.fn(() => true),
      removeEventListener: vi.fn(),
      addEventListener: vi.fn(),
    },
  })

  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})
