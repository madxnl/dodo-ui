<template>
  <pre :class="`uiSyntaxHighlight language-${lang}`" v-html="html" />
</template>
<script setup lang="ts">
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-typescript'
// import 'prismjs/themes/prism.min.css'
// import 'prismjs/themes/prism-tomorrow.min.css'
// import 'prismjs/themes/prism-twilight.min.css'
import 'prismjs/themes/prism-solarizedlight.min.css'
// import 'prismjs/themes/prism-okaidia.min.css'
// import 'prismjs/themes/prism-funky.min.css'
// import 'prismjs/themes/prism-coy.min.css'
// import 'prismjs/themes/prism-dark.min.css'
import { computed } from 'vue'

const props = defineProps<{
  code: string
  lang: 'html'|'ts'
}>()

const html = computed(() => {
  return highlight(props.code, languages[props.lang], props.lang)
})
</script>
<style>
.uiSyntaxHighlight {
  padding: 0 !important;
  margin: 0 !important;
  background: transparent !important;
  font-size: 15px !important;
  border-radius: 0 !important;
}
</style>
