import '../dodo.scss'

export type JustifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
export type AlignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

const spacingValues = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32] as const

export type Color = [number, number, number]
export type ThemeColorName =
  | 'info'
  | 'success'
  | 'warn'
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

  function colorRgbValues(color: ColorProp) {
    if (color instanceof Array) return color
    const rgbStr = getComputedStyle(document.body).getPropertyValue(`--dodo-rgb-${color}`)
    if (!rgbStr) return [0, 0, 0]
    return rgbStr.split(',').map(Number)
  }

  function colorHexStr(color: ColorProp) {
    const rgb = colorRgbValues(color)
    return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('')
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
    colorHexStr,
    colorRgbValues,
    gap,
    padding,
    justify,
    align,
    wrap,
    flex,
    grow,
  }
}

export function useBaseFont() {
  const fontClass = 'dodo-fonts'

  return { fontClass }
}
