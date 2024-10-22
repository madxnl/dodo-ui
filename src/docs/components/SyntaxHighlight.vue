<template>
  <pre ref="el" :class="[$style.SyntaxHighlight, `language-${lang}`]" />
</template>
<script setup lang="ts">
import { useTheme } from '@/composables'
import prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import darkTheme from 'prismjs/themes/prism-okaidia.min.css?raw'
import lightTheme from 'prismjs/themes/prism-solarizedlight.min.css?raw'
import { onMounted, ref, watchEffect } from 'vue'
const { highlight, languages } = prism

const props = defineProps<{
  code: string
  lang: 'html' | 'ts'
}>()

const el = ref<HTMLElement>()

const styleId = 'prism-theme'

const { theme } = useTheme()

onMounted(() => {
  const result = highlight(props.code, languages[props.lang], props.lang)
  el.value!.innerHTML = result
})

watchEffect(() => {
  let style = document.getElementById(styleId)
  if (!style) {
    style = document.createElement('style')
    style.id = styleId
    document.head.appendChild(style)
  }
  if (style.getAttribute('data-mode') !== theme.value) {
    style.setAttribute('data-mode', theme.value || '')
    style.innerHTML = theme.value === 'dark' ? darkTheme : lightTheme
  }
})
</script>
<style module>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');

pre.SyntaxHighlight {
  padding: 8px 16px !important;
  border-radius: 4px !important;
  border: 0 !important;
  margin: 0;
  font-size: 16px;
  white-space: pre-wrap;
  font-family: 'Inconsolata', monospace;
  border: 1px solid var(--dodo-color-border);
  box-shadow: none !important;
  background: var(--dodo-color-card) !important;
}
</style>
