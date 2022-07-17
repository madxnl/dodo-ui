import { inject, InjectionKey, Plugin, reactive, ref, Ref, watchEffect } from 'vue'

const createTheme = () => reactive({
  colors: {
    info: '#3a86ff',
    success: '#00b188',
    warn: '#dfb235',
    danger: '#e76f51',
    background: '#ffffff',
    foreground: '#213547',
    container: '#f7f8f9',
    muted: '#888888',
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
})

type Theme = ReturnType<typeof createTheme>

export type CustomColor = { hex: Ref<string> }
export const useCustomColor = (hex: string): CustomColor => ({ hex: ref(hex) })

export type ThemeColor = CustomColor | keyof Theme['colors']
export type SpacingName = '0'|'xs'|'s'|'m'|'l'|'xl'
export type Spacing = SpacingName[]|SpacingName

const key: InjectionKey<Theme> = Symbol('themeKey')

export function provideCustomTheme(customize?: (theme: Theme) => void): Plugin {
  return {
    install(app) {
      const theme = createTheme()
      app.provide(key, theme)
      if (customize) customize(theme)
    },
  }
}

export function useTheme() {
  const theme = inject(key, undefined) ?? createTheme()

  watchEffect(() => {
    const vars = [
      ...Object.entries(theme.colors).map(([k, v]) => `--color-${k}:${v};`),
      ...Object.entries(theme.colors).map(([k, v]) => `--rgb-${k}:${hexToRGB(v)};`),
      ...Object.entries(theme.spacings).map(([k, v]) => `--spacing-${k}:${v};`),
      `--ui-font-size: ${theme.font.size}px;`,
      `--ui-font: ${theme.font.size}px/calc(1em + 6px) ${theme.font.family};`,
    ]
    const lines = [
      `@import url("${theme.font.externalCss}");`,
      `:root{\n${vars.join('\n')}\n}`,
    ]
    const id = 'dodoui-theme-css'
    let style = document.querySelector('#' + id)
    if (!style) {
      style = document.createElement('style')
      style.id = id
      document.head.appendChild(style)
    }
    const css = lines.join('\n')
    if (style.innerHTML !== css) {
      style.innerHTML = css
    }
  })
  return theme
}

export function useThemeColor(color: ThemeColor) {
  if (typeof color !== 'string') return color.hex.value
  const theme = useTheme()
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
  const theme = useTheme()
  return [name].flat().map(n => theme.spacings[n]).join(' ')
}
