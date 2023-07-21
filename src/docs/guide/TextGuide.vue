<template>
  <Text p>
    The following CSS classes for layout are available based on flex-box CSS properties:
  </Text>
  <BaseTable>
    <tr><th>Class</th><th>Description</th></tr>
    <tr><td><code>d-text</code></td><td>Basic text element using base font</td></tr>
    <tr><td><code>d-link</code></td><td>Apply styling for clickable link</td></tr>
    <tr><td><code>d-label</code></td><td>Form label style text</td></tr>
    <tr><td><code>d-h1|h2|h3|h4|h5|h6</code></td><td>Heading styles</td></tr>
    <tr><td><code>d-strong</code></td><td>Strong aka Bold font weight</td></tr>
    <tr><td><code>d-small</code></td><td>Apply a small font size</td></tr>
    <tr><td><code>d-muted</code></td><td>Fades texts that have lower importance</td></tr>
    <tr><td><code>d-nowrap</code></td><td>Prevent text from wrapping and show ellipsis instead</td></tr>
    <tr><td><code>d-text-center</code></td><td>Text center aligned</td></tr>
    <tr><td><code>d-color-info</code></td><td>Sets text color, see colors</td></tr>
  </BaseTable>
</template>
<script setup lang="ts">
import { Text } from '../..'
import BaseTable from '../BaseTable.vue'

</script>
<style>
.d-code{font-family:monospace}
</style>
