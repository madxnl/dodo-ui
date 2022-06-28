import { inject, InjectionKey, Plugin, reactive, readonly, watchEffect } from 'vue'

type Theme = {
  colors: Record<string, string>
  fonts: Record<string, string>
  spacings: Record<string, string>
  iconStyle: 'Outlined'|'Sharp'|'Rounded'
  iconWeight: 100|200|300|400|500|600|700
  iconFill: boolean
}

const baseTheme: Theme = {
  colors: {
    info: '#3a86ff',
    success: '#2a9d8f',
    warn: '#e9c46a',
    danger: '#e76f51',
    background: '#ffffff',
    foreground: '#4e5d78',
    container: '#f7f8f9',
    heading: '#000000',
  },
  fonts: {
    // heading: {
    //    family: 'Open Sans, sans-serif',
    //    import: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600',
    //    size: '14px',
    // },
    // body: {
    //    family: 'Open Sans, sans-serif',
    //    import: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600',
    //    size: '14px',
    // },
    // monospace: {
    //    family: 'monospace',
    //    import: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600',
    //    size: '14px',
    // },
  },
  spacings: {
    0: '0px',
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  iconStyle: 'Outlined',
  iconWeight: 300,
  iconFill: false,
}

const key: InjectionKey<Theme> = Symbol('themeKey')

export function provideCustomTheme(customize?: (theme: Theme) => void): Plugin {
  return {
    install(app) {
      const theme = reactive(baseTheme)
      app.provide(key, theme)
      if (customize) customize(theme)
    },
  }
}

export function useTheme() {
  return readonly(inject(key, baseTheme))
}

export function useCustomTheme() {
  return inject(key, undefined)
}

export function useThemeColor(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.colors[name]) {
    throw new Error(`"${name}" is not a valid theme color (${Object.keys(theme.colors)})`)
  }
  return theme.colors[name]
}

/**
 * Returns color as RGB array: [255, 255, 255], used when modifying colors
 */
export function useThemeColorRGB(name: string) {
  return hexToRGB(useThemeColor(name))
}

export function hexToRGB(hex: string) {
  const [r, g, b] = hex.match(/(\w\w)/g)!
  return [r, g, b].map(x => parseInt(x, 16))
}

export function useSpacing(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.spacings[name]) {
    throw new Error(`"${name}" is not a valid icon name (${Object.keys(theme.spacings)})`)
  }
  return theme.spacings[name]
}

export function useThemeCssVars() {
  watchEffect(() => {
    const theme = useCustomTheme() ?? baseTheme
    const vars = [
      ...Object.entries(theme.colors).map(([k, v]) => `--color-${k}:${v};`),
      ...Object.entries(theme.colors).map(([k, v]) => `--rgb-${k}:${hexToRGB(v)};`),
      ...Object.entries(theme.fonts).map(([k, v]) => `--font-${k}:${v};`),
      ...Object.entries(theme.spacings).map(([k, v]) => `--spacing-${k}:${v};`),
    ].join('')
    const css = `:root{${vars}}`
    const id = 'dodoui-theme-vars'
    let style = document.querySelector('#' + id)
    if (!style) {
      style = document.createElement('style')
      style.id = id
      document.head.appendChild(style)
    }
    style.innerHTML = css
  })
}
