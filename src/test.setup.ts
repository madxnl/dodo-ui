import { beforeAll, vi } from 'vitest'

beforeAll(() => {
  Object.defineProperty(document, 'fonts', {
    value: {
      check: vi.fn(() => true),
      removeEventListener: vi.fn(),
      addEventListener: vi.fn()
    }
  })

  window.HTMLElement.prototype.scrollIntoView = vi.fn()

  // window.document.body = document.createElement('body')

  // {
  //   appendChild: vi.fn(),
  //   removeChild: vi.fn(),
  // } as any
  Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', { value: 100 })
  Object.defineProperty(window.HTMLElement.prototype, 'clientHeight', { value: 100 })
})
