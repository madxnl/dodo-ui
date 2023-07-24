<template>
  <p>
    Use basic html tags like <code>&lt;h1&gt;</code> or <code>&lt;p&gt;</code> for text.
    To add the default font styles for your app or page, apply the class <mark><code>useBaseFont().fontClass</code></mark>.
    For additional text styling you can use the following CSS classes:
  </p>
  <BaseTable>
    <tr><th>Class</th><th>Description</th></tr>
    <tr><td><code>dodo-color-primary</code></td><td>Set text color</td></tr>
    <tr><td><code>dodo-align-center|end</code></td><td>Align text</td></tr>
    <tr><td><code>dodo-fade-secondary</code></td><td>Fades texts that have lower importance</td></tr>
    <tr><td><code>dodo-fade-disabled</code></td><td>Fades texts even more to appear disabled</td></tr>
    <tr><td><code>dodo-nowrap</code></td><td>Prevent text from wrapping and show ellipsis instead</td></tr>
  </BaseTable>
  <DocsExample :options="{ setup, template }" />
</template>
<script setup lang="ts">
import { DocsExample } from '..'
import { useBaseFont } from '../..'
import BaseTable from '../BaseTable.vue'

const setup = () => ({ useBaseFont })

const template = `
<Column gap="1" :class="useBaseFont().fontClass">
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  <p>Paragraph</p>
  <p class="dodo-fade-secondary">Paragraph with secondary opacity</p>
  <p class="dodo-fade-disabled">Paragraph with disabled opacity</p>
  <p class="dodo-nowrap">Paragraph with nowrap</p>
  <p class="dodo-align-center">Paragraph with center alignment</p>
  <p class="dodo-align-end">Paragraph with end alignment</p>
  <p class="dodo-color-primary">Paragraph with primary color</p>
  <p class="dodo-color-secondary">Paragraph with secondary color</p>
  <p class="dodo-color-danger">Paragraph with danger color</p>
  <p class="dodo-color-warn">Paragraph with warning color</p>
  <p class="dodo-color-success">Paragraph with success color</p>
  <p class="dodo-color-info">Paragraph with info color</p>
  <code>Code</code>
</Column>
`
</script>
