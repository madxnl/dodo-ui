import { computed, ref, watchEffect } from 'vue'

export type JustifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
export type AlignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

const spacingValues = ['0', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const

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
  function gapValue(size: SpacingValue) {
    return `var(--dodo-spacing-${size})`
  }

  function gap(size?: SpacingValue) {
    return size ? `dodo-gap-${size}` : ''
  }

  function padding(size?: SpacingValue) {
    return size ? `dodo-padding-${size}` : ''
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
    gapValue,
    gap,
    padding,
    justify,
    align,
    wrap,
    flex,
    grow,
    theme,
    toggleTheme
  }
}

export const darkModeSetting = ref<'auto' | 'dark' | 'light'>()

const previousTheme = localStorage.getItem('dodotheme') as 'dark' | 'light' | null
const userTheme = ref(previousTheme)

const deviceTheme = ref<'dark' | 'light'>()
if (window.matchMedia) {
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)')
  const getDeviceTheme = () => {
    deviceTheme.value = preferDark.matches ? 'dark' : 'light'
  }
  preferDark.addEventListener('change', getDeviceTheme)
  getDeviceTheme()
}

const defaultTheme = computed(() => (darkModeSetting.value === 'auto' ? deviceTheme.value : darkModeSetting.value))
const theme = computed(() => userTheme.value || defaultTheme.value || 'light')

function toggleTheme() {
  userTheme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
  localStorage.setItem('dodotheme', userTheme.value ?? '')
  document.body.setAttribute('data-dodotheme', theme.value ?? '')
})
