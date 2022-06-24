<template>
  <span :style="css" :class="classes">{{ loading ? '' : name }}</span>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { useTheme, useThemeColor } from '../theme'
import { icons } from '../icons'

type IconName = typeof icons[number]

const props = defineProps<{
  /** The icon name
   * @example icon="plus"
   */
  name: IconName
  /** Change icon color
   * @example color="success"
   */
  color?: string
  /** Change icon size
   * @example size="s"
   */
  size?: 's'|'l'
  /** Filled variant
   */
  fill?: boolean
}>()

const theme = useTheme()

const loading = ref(true)

watchEffect(async () => {
  const id = 'material-symbols-css'
  let link = document.getElementById(id)
  // Create the <link> element once
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('id', id)
    link.setAttribute('rel', 'stylesheet')
    document.head.appendChild(link)
  }
  // Reactively load icon font based on theme settings
  const { weight, style } = theme.icons
  const url = `https://fonts.googleapis.com/css2?family=Material+Symbols+${style}:wght,FILL@${weight},0..1`
  // If the url changed, update the link and reset loading
  if (link.getAttribute('href') !== url) {
    link.setAttribute('href', url)
    link.removeAttribute('data-loaded')
  }
  // Track font loading
  loading.value = !link.hasAttribute('data-loaded')
  if (loading.value) {
    await new Promise((resolve, reject) => {
      link!.addEventListener('load', resolve)
      link!.addEventListener('error', () => reject(new Error('Failed to load icon webfont')))
    })
    link.setAttribute('data-loaded', 'true')
    loading.value = false
  }
})

const classes = computed(() => {
  let s = 'uiIcon material-symbols-' + theme.icons.style.toLowerCase()
  if (props.size) s += ` uiIcon_${props.size}`
  return s
})

const css = computed(() => {
  let s = ''
  if (props.color) s += `color: ${useThemeColor(props.color)};`
  if (props.fill) s += "font-variation-settings: 'FILL' 1;"
  return s
})
</script>

<style lang="css">
.uiIcon {
  min-height: 1em;
  min-width: 1em;
  font-size: 24px;
  user-select: none;
}
.uiIcon.uiIcon_s {
  font-size: 18px;
}
.uiIcon.uiIcon_l {
  font-size: 32px;
}
</style>
