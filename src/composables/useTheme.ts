import '../dodo.css'

export type JustifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
export type AlignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

const spacingValues = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16] as const

export type Color = [number, number, number]
export type ThemeColorName = 'info'|'success'|'warn'|'danger'|'background'|'foreground'|'primary'|'secondary'
export type ColorProp = Color | ThemeColorName
export type SpacingValue = `${typeof spacingValues[number]}`
export type GapSize = SpacingValue
export type Spacing = SpacingValue[]|SpacingValue

export function useTheme() {
  function colorPropRgb(color: ColorProp) {
    return typeof color === 'string' ? `var(--dodo-rgb-${color})` : color.join(',')
  }

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

  return { colorCss, colorPropRgb, gapValue, gap, padding, justify, align, wrap, flex, grow }
}
