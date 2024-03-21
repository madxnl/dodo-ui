<template>
  <p>
    The <code>useTheme</code> composable lets you access the current theme and toggle between dark and light themes.
  </p>
  <h4>Usage</h4>
  <LiveExample :setup="`return { ...useTheme() }`" :context="{ useTheme }" :template="example" />
</template>
<script setup lang="ts">
import { useTheme } from '@/composables'
import { LiveExample } from '@/docs/components'

const example = `<Button @click="toggleTheme()">{{ theme }}</Button>`
</script>
