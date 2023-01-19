<template>
  <p class="d-text">
    The following CSS classes for layout are available based on flex-box CSS properties:
  </p>
  <BaseTable>
    <tr><th>Class</th><th>Description</th></tr>
    <tr><td class="d-code">d-text</td><td>Basic text element using base font</td></tr>
    <tr><td class="d-code">d-link</td><td>Apply styling for clickable link</td></tr>
    <tr><td class="d-code">d-label</td><td>Form label style text</td></tr>
    <tr><td class="d-code">d-h1|h2|h3|h4|h5|h6</td><td>Heading styles</td></tr>
    <tr><td class="d-code">d-strong</td><td>Strong aka Bold font weight</td></tr>
    <tr><td class="d-code">d-small</td><td>Apply a small font size</td></tr>
    <tr><td class="d-code">d-muted</td><td>Fades texts that have lower importance</td></tr>
    <tr><td class="d-code">d-nowrap</td><td>Prevent text from wrapping and show ellipsis instead</td></tr>
    <tr><td class="d-code">d-text-center</td><td>Text center aligned</td></tr>
    <tr><td class="d-code">d-color-info</td><td>Sets text color, see colors</td></tr>
  </BaseTable>
</template>
<script setup lang="ts">
import BaseTable from '../BaseTable.vue'

</script>
<style>
.d-code{font-family:monospace}
</style>
