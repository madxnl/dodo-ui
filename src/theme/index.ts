import { App, inject, InjectionKey, reactive } from "vue";

type Theme = {
  colors: Record<string, string>,
  buttonClasses: Record<string, string>,
  textClasses: Record<string, string>,
}

const baseTheme: Theme = {
  colors: {
    info: '#3a86ff',
    success: '#2a9d8f',
    warn: '#e9c46a',
    danger: '#e76f51',
  },
  buttonClasses: {
    default: 'UiButton_default',
    border: 'UiButton_border',
    text: 'UiButton_text'
  },
  textClasses: {
    p: 'UiText_p',
    h1: 'UiText_h1',
    h2: 'UiText_h2',
    h3: 'UiText_h3',
    small: 'UiText_small'
  },
}

const key: InjectionKey<Theme> = Symbol('themeKey')

export function createTheme(app: App, customize?: (theme: Theme) => void) {
  const theme = reactive(baseTheme)
  app.provide(key, theme)
  if (customize) customize(theme)
}

export function useTheme() {
  return inject(key)
}

export function useThemeColor(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.colors[name]) {
    throw new Error(`"${name}" is not a valid theme color (${Object.keys(theme.colors)})`)
  }
  return theme.colors[name]
}

export function useTextVariant(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.textClasses[name]) {
    throw new Error(`"${name}" is not a valid text variant (${Object.keys(theme.textClasses)})`)
  }
  return theme.textClasses[name]
}

export function useButtonVariant(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.buttonClasses[name]) {
    throw new Error(`"${name}" is not a valid button variant (${Object.keys(theme.buttonClasses)})`)
  }
  return theme.buttonClasses[name]
}
