import { ColorProp, SpacingValue } from '..'
import '../dodo.css'

export type JustifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
export type AlignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

export function useStyle() {
  function colorPropRgb(color: ColorProp) {
    return typeof color === 'string' ? `var(--dodo-rgb-${color})` : color.join(',')
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

  return { colorPropRgb, gap, padding, justify, align, wrap, flex, grow }
}
