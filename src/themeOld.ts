import { inject, InjectionKey, Plugin, reactive, watchEffect } from 'vue'

const createTheme = () => reactive({
  cssPrefix: 'd-',
  iconStyle: 'Outlined' as 'Outlined'|'Sharp'|'Rounded',
  iconWeight: '300' as '100'|'200'|'300'|'400'|'500'|'600'|'700',

  vars: {
    'breakpoint-small': 600,
    'breakpoint-large': 1200,

    'gap-0': '0px',
    'gap-1': '4px',
    'gap-2': '8px',
    'gap-3': '12px',
    'gap-4': '16px',
    'gap-5': '20px',
    'gap-6': '24px',
    'gap-8': '32px',
    'gap-10': '40px',
    'gap-12': '48px',
    'gap-16': '64px',

    'rgb-info': '58,134,255',
    'rgb-success': '0,177,136',
    'rgb-warn': '223,178,53',
    'rgb-danger': '231,111,81',
    'rgb-background': '255,255,255',
    'rgb-foreground': '22,41,58',

    'rgb-primary': 'var(--dodo-rgb-info)',
    'rgb-secondary': 'var(--dodo-rgb-success)',

    buttonHeight: '36px',
    'font-size': '14px',
    'font-small': '12px',
    'font-import': 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap', // &family=Syne:wght@500
    'font-base': 'var(--dodo-font-size)/1.4 Inter,sans-serif',
    'weight-body': 400,
    'weight-bold': 500,
  },
})

type Theme = ReturnType<typeof createTheme>

export type Color = [number, number, number]
export type ThemeColorName = 'info'|'success'|'warn'|'danger'|'background'|'foreground'|'primary'|'secondary'
const Colors = ['info', 'success', 'warn', 'danger', 'background', 'foreground', 'primary', 'secondary'] as const
export type ColorProp = Color | ThemeColorName
const spacingValues = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16] as const
export type SpacingValue = `${typeof spacingValues[number]}`
export type Spacing = SpacingValue[]|SpacingValue

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
    const css = `
@import url("${theme.vars['font-import']}");
:root{
  ${Object.entries(theme.vars).map(([k, v]) => `--dodo-${k}:${v};`).join('')}
}
[class^=dodo-] ::selection {
  color:white;
  background:rgb(var(--dodo-rgb-info));
}
${getTextCSS(theme)}
${getLayoutCSS(theme)}`
    const id = 'dodoui-theme-css'
    let style = document.querySelector('#' + id)
    if (!style) {
      style = document.createElement('style')
      style.id = id
      const head = document.head
      head.insertBefore(style, head.firstChild)
    }
    if (style.innerHTML !== css) {
      style.innerHTML = css
    }
  })
  return theme
}

export function useColorProp(c: ColorProp, alpha = 1) {
  return `rgba(${colorPropToRGB(c)},${alpha})`
}

export function colorPropToRGB(color: ColorProp) {
  return typeof color === 'string' ? `var(--dodo-rgb-${color})` : color.join(',')
}

export function parseColor(hex: string) {
  if (!hex.match(/^#\w{6}$/)) throw new Error('Invalid hex color')
  return hex.match(/(\w\w)/g)!.map(x => parseInt(x, 16)).slice(0, 3) as [number, number, number]
}

export function useSpacing(name: Spacing) {
  return [name].flat().map(n => `var(--dodo-gap-${n})`).join(' ')
}

function getLayoutCSS(theme: Theme) {
  let css = ''
  const { cssPrefix } = theme
  const calcSpace = (m: number) => `var(--dodo-gap-${m})`
  const addClass = (cls: string, body: string) => { css += `.${cssPrefix}${cls}{${body}}\n` }
  addClass('row', `display:flex;align-items:center;gap:${calcSpace(2)}`)
  addClass('column', `display:flex;flex-flow:column;gap:${calcSpace(4)}`)
  addClass('grow', 'flex-grow:1')
  addClass('wrap', 'flex-wrap:wrap')
  const addClasses = (prop: string, prefix: string, values: string) => values.split(',').forEach(value => {
    const key = value.replace(/ /g, '-')
    addClass(`${prefix}-${key}`, `${prop}:${value}`)
  })
  addClasses('justify-content', 'justify', 'start,end,center,space-between,space-around,space-evenly')
  // addClasses('justify-items', 'justify-items', 'start,end,center,auto,stretch,self-start,self-end,left,right')
  // addClasses('justify-self', 'justify-self', 'start,end,center,auto,normal,stretch,left,right,self-start,self-end,baseline,safe center')
  // addClasses('align-content', 'align-content', 'start,end,center,space-between,space-around,stretch')
  addClasses('align-items', 'align', 'start,end,center,stretch,baseline,safe-center')
  // addClasses('align-self', 'align-self', 'start,end,center,baseline,stretch')
  const spacings = spacingValues.map(m => [m, calcSpace(m)])
  for (const [n, v] of spacings) addClass('gap-' + n, `gap:${v}`)
  for (const [n, v] of spacings) addClass('pad-' + n, `padding:${v}`)
  for (const [n, v] of spacings) addClass('pad-x' + n, `padding-left:${v};padding-right:${v}`)
  for (const [n, v] of spacings) addClass('pad-y' + n, `padding-top:${v};padding-bottom:${v}`)
  for (const [n, v] of spacings) addClass('pad-t' + n, `padding-top:${v}`)
  for (const [n, v] of spacings) addClass('pad-b' + n, `padding-bottom:${v}`)
  for (const [n, v] of spacings) addClass('pad-l' + n, `padding-left:${v}`)
  for (const [n, v] of spacings) addClass('pad-r' + n, `padding-right:${v}`)
  return css
}

function getTextCSS(theme: Theme) {
  // const calcSpace = (m: number) => `var(--dodo-gap-${m})`
  let css = ''
  const { cssPrefix } = theme
  const primary = 'rbg(var(--dodo-rgb-primary))'
  const font = 'var(--dodo-font-base)'
  const bold = 'var(--dodo-weight-bold)'
  const addClass = (cls: string, body: string) => { css += `.${cssPrefix}${cls}{${body}}\n` }
  // overflow-wrap:break-word
  const base = `margin:0;cursor:default;overflow-wrap:break-word;font:${font}`
  const heading = `${base};font-weight:${bold}`
  addClass('text', `${base};color: rgba(var(--text-rgb, var(--dodo-rgb-foreground)), var(--text-opacity, 1));`)
  addClass('link', `${base};cursor:pointer;text-decoration:underline;color:${primary}`)
  addClass('label', `${base};font-weight:${bold}`)
  addClass('code', `${base};font-family:monospace`)
  addClass('h1', `${heading};font-size:calc(var(--dodo-font-size)*2.5)`)
  addClass('h2', `${heading};font-size:calc(var(--dodo-font-size)*2.0)`)
  addClass('h3', `${heading};font-size:calc(var(--dodo-font-size)*1.5)`)
  addClass('h4', `${heading};font-size:calc(var(--dodo-font-size)*1.25)`)
  addClass('h5', `${heading};font-size:calc(var(--dodo-font-size)*1.15)`)
  addClass('h6', `${heading};font-size:calc(var(--dodo-font-size)*1.0)`)
  addClass('strong', `font-weight:${bold}`)
  addClass('small', 'font-size:var(--dodo-font-small)')
  addClass('muted', 'opacity:0.65')
  addClass('nowrap', 'white-space:nowrap;text-overflow:ellipsis;overflow:hidden')
  addClass('text-center', 'text-align:center')
  for (const color of Colors) {
    addClass('color-' + color, `color:rgb(var(--dodo-rgb-${color}))`)
  }
  return css
}
