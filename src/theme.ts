import { inject, InjectionKey, Plugin, reactive, readonly, ref, Ref, watchEffect } from 'vue'

const baseTheme = {
  colors: {
    info: '#3a86ff',
    success: '#00b188',
    warn: '#dfb235',
    danger: '#e76f51',
    background: '#ffffff',
    foreground: '#4e5d78',
    container: '#f7f8f9',
    heading: '#000000',
  },

  font: {
    size: 14,
    family: 'Open Sans, sans-serif',
    externalCss: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600',
  },

  spacings: {
    0: '0px',
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },

  iconStyle: 'Outlined' as 'Outlined'|'Sharp'|'Rounded',
  iconWeight: 300 as 100|200|300|400|500|600|700,
  iconFill: false,
}

type Theme = typeof baseTheme

export type CustomColor = { hex: Ref<string> }
export const useCustomColor = (hex: string): CustomColor => ({ hex: ref(hex) })

export type ThemeColor = CustomColor | keyof Theme['colors']
export type SpacingName = '0'|'xs'|'s'|'m'|'l'|'xl'
export type Spacing = SpacingName[]|SpacingName

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

export function useThemeColor(color: ThemeColor) {
  if (typeof color !== 'string') return color.hex.value
  const theme = useTheme() ?? baseTheme
  return theme.colors[color]
}

/**
 * Returns color as RGB array: [255, 255, 255], used when modifying colors
 */
export function useThemeColorRGB(name: ThemeColor) {
  return hexToRGB(useThemeColor(name))
}

export function hexToRGB(hex: string) {
  const [r, g, b] = hex.match(/(\w\w)/g)!
  return [r, g, b].map(x => parseInt(x, 16))
}

export function useSpacing(name: Spacing) {
  const theme = useTheme() ?? baseTheme
  return [name].flat().map(n => theme.spacings[n]).join(' ')
}

export function useThemeCssVars() {
  watchEffect(() => {
    const theme = useCustomTheme() ?? baseTheme
    const vars = [
      ...Object.entries(theme.colors).map(([k, v]) => `--color-${k}:${v}`),
      ...Object.entries(theme.colors).map(([k, v]) => `--rgb-${k}:${hexToRGB(v)}`),
      ...Object.entries(theme.spacings).map(([k, v]) => `--spacing-${k}:${v}`),
      `--ui-font-size: ${theme.font.size}px`,
      `--ui-font: ${theme.font.size}px/calc(1em + 6px) ${theme.font.family}`,
    ].join(';')
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
