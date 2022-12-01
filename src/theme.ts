import { inject, InjectionKey, Plugin, reactive, watchEffect } from 'vue'

const createTheme = () => reactive({
  iconStyle: 'Outlined' as 'Outlined'|'Sharp'|'Rounded',
  iconWeight: '300' as '100'|'200'|'300'|'400'|'500'|'600'|'700',

  vars: {
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
export type ColorProp = Color | ThemeColorName
export type SpacingValue = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'8'|'10'|'12'|'16'
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
}`
    const id = 'dodoui-theme-css'
    let style = document.querySelector('#' + id)
    if (!style) {
      style = document.createElement('style')
      style.id = id
      document.head.appendChild(style)
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
  return `var(--dodo-gap-${name})`
}
