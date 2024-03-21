import { ref, watchEffect } from 'vue'

export type JustifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
export type AlignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

const spacingValues = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32] as const

export type Color = [number, number, number]
export type ThemeColorName =
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'background'
  | 'foreground'
  | 'primary'
  | 'secondary'
export type ColorProp = Color | ThemeColorName
export type SpacingValue = `${(typeof spacingValues)[number]}`
export type GapSize = SpacingValue
export type Spacing = SpacingValue[] | SpacingValue

export function useTheme() {
  function colorCss(color: ColorProp) {
    return typeof color === 'string' ? `var(--dodo-color-${color})` : `rgb(${color.join(',')})`
  }

  function gapValue(size: SpacingValue) {
    return `var(--dodo-gap-${size})`
  }

  function gap(size?: SpacingValue) {
    return size ? `dodo-gap-${size}` : ''
  }

  function padding(size?: SpacingValue) {
    return size ? `dodo-pad-${size}` : ''
  }

  function justify(type?: JustifyType) {
    return type ? `dodo-justify-${type}` : ''
  }

  function align(type?: AlignType) {
    return type ? `dodo-align-${type}` : ''
  }

  function wrap(wrap?: boolean) {
    return wrap ? 'dodo-wrap' : ''
  }

  function flex(flex?: boolean) {
    return flex ? 'dodo-flex' : ''
  }

  function grow(grow?: boolean) {
    return grow ? 'dodo-grow' : ''
  }

  return {
    colorCss,
    gapValue,
    gap,
    padding,
    justify,
    align,
    wrap,
    flex,
    grow
  }
}

const preferDark = window.matchMedia('(prefers-color-scheme: dark)')
const userTheme = localStorage.getItem('dodotheme')
const defaultTheme = preferDark.matches ? 'dark' : 'light'
const theme = ref(userTheme || defaultTheme)

preferDark.addEventListener('change', onchange)

function onchange() {
  theme.value = preferDark.matches ? 'dark' : 'light'
}

watchEffect(() => {
  localStorage.setItem('dodotheme', theme.value ?? '')
  document.body.setAttribute('data-dodotheme', theme.value ?? '')
})

export function useCurrentTheme() {
  return { theme }
}
