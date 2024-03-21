<template>
  <p>
    The <code>useTheme</code> composable lets you access the current theme and toggle between dark and light themes.
  </p>
  <h4>Usage</h4>
  <LiveExample
    :setup="`const { theme } = useTheme()
return { theme }`"
    :context="{ useTheme }"
    :template="example"
  />
</template>
<script setup lang="ts">
import { useTheme } from '@/composables'
import { LiveExample } from '@/docs/components'

const example = `<Button @click="theme = (theme === 'dark' ? 'light' : 'dark')">
  {{ theme }}
</Button>`
</script>
