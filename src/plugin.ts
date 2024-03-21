import type { Plugin } from 'vue'
import { darkModeSetting } from './composables'

export function dodoPlugin(options: { darkMode?: 'auto' | 'dark' | 'light' }): Plugin {
  return (app) => {
    if (options.darkMode) {
      darkModeSetting.value = options.darkMode
    }
  }
}
