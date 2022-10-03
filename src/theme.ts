import { inject, InjectionKey, Plugin, reactive, watchEffect } from 'vue'

const createTheme = () => reactive({
  colors: {
    info: '#3a86ff',
    success: '#00b188',
    warn: '#dfb235',
    danger: '#e76f51',
    background: '#ffffff',
    foreground: '#16293a',
  },

  font: {
    size: '15px',
    sizeSmall: '13px',
    weight: 400,
    family: 'Roboto, sans-serif',
    import: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500',
    weightSemi: 500,
    weightBold: 500,
    lineHeight: '1.4',
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
  iconWeight: '300' as '100'|'200'|'300'|'400'|'500'|'600'|'700',

  vars: {
    buttonHeight: '36px',
  },
})

type Theme = ReturnType<typeof createTheme>

export type Color = [number, number, number]
export type ThemeColorName = keyof Theme['colors']
export type ColorProp = Color | ThemeColorName
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
    const css = `
@import url("${theme.font.import}");
:root{
  ${Object.entries(theme.colors).map(([k, v]) => `--dodo-color-${k}:${v};`).join('')}
  ${Object.entries(theme.colors).map(([k, v]) => `--dodo-rgb-${k}:${parseColor(v)};`).join('')}
  ${Object.entries(theme.spacings).map(([k, v]) => `--dodo-gap-${k}:${v};`).join('')}
  ${Object.entries(theme.vars).map(([k, v]) => `--dodo-${k}:${v};`).join('')}
  ${Object.entries(theme.font).map(([k, v]) => `--dodo-font-${k}:${v};`).join('')}
  --dodo-font-base: var(--dodo-font-size)/var(--dodo-font-lineHeight) var(--dodo-font-family);
}
[class^="dodo"] ::selection{color:white;background:var(--dodo-color-info)}`
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
  return typeof color === 'string' ? parseColor(useTheme().colors[color]) : color
}

export function parseColor(hex: string) {
  if (!hex.match(/^#\w{6}$/)) throw new Error('Invalid hex color')
  return hex.match(/(\w\w)/g)!.map(x => parseInt(x, 16)).slice(0, 3) as [number, number, number]
}

export function mixColors(color1: ColorProp, color2: ColorProp, mixPct: number) {
  const c1 = colorPropToRGB(color1)
  const c2 = colorPropToRGB(color2)
  return c1.map((x, i) => Math.round(x + (c2[i] - x) * mixPct))
}

export function useSpacing(name: Spacing) {
  const theme = useTheme()
  return [name].flat().map(n => theme.spacings[n]).join(' ')
}

// function parseColor(hex: string) {
//   const [r, g, b] = parseColor(hex)
//   const max = Math.max(r, g, b); const min = Math.min(r, g, b)
//   let h = 0; let s = 0; const l = (max + min) / 2
//   if (max > min) {
//     const d = max - min
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
//     switch (max) {
//       case r: h = (g - b) / d + (g < b ? 6 : 0); break
//       case g: h = (b - r) / d + 2; break
//       case b: h = (r - g) / d + 4; break
//     }
//     h /= 6
//   }
//   return { h: Math.floor(h * 360), s: Math.floor(s * 100), l: Math.floor(l * 100) }
// }

// export function mixColors(color1: ColorProp, color2: ColorProp, mixPct: number) {
//   const c1 = colorPropToRGB(color1)
//   const c2 = colorPropToRGB(color2)
//   const h = Math.floor(c1.h + (((c2.h - c1.h + 180) % 360) - 180) * mixPct + 360) % 360
//   const s = Math.floor(c1.s + (c2.s - c1.s) * mixPct)
//   const l = Math.floor(c1.l + (c2.l - c1.l) * mixPct)
//   console.log(c1, c2, mixPct, { h, s, l })
//   return { h, s, l }
// }
