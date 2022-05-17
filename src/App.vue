
<template>
  <Flex column align="center">
    <Flex column style="max-width:1200px">
      <h1>DodoUI</h1>
      <h2>Versatile components for Vue</h2>
      <h3>Installation</h3>
      <code>
        npm install -D @madxnl/dodo-ui
      </code>
      <br>
      <h3>Usage</h3>
      <code>
        <pre>
import { Flex } from '@madxnl/dodo-ui'

&lt;Flex&gt;...&lt;/Flex&gt;
        </pre>
      </code>
      <template v-for="chapter in chapters">
        <br>
        <h3>{{ chapter.doc.displayName }}</h3>
        <div style="overflow:auto">
        <table>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Examples</th>
          </tr>
          <tr v-for="prop in chapter.doc.props ?? []">
            <td width=100>
              <code>{{ prop.name }}</code>
            </td>
            <td width=400>
              {{ prop.description }}
              <template v-if="prop.required">(Required)</template>
            </td>
            <td width=300>
              <code>{{ getPropType(prop) }}</code>
            </td>
            <td width=400>
              <Flex column gap="s">
                <template v-for="example in prop.tags?.example">
                  <code>{{ (example as any).description }}</code>
                </template>
              </Flex>
            </td>
            <!-- <td>{{ prop }}</td> -->
          </tr>
        </table>
        </div>
      </template>
    </Flex>
  </Flex>
</template>

<script setup lang="ts">
import { PropDescriptor } from 'vue-docgen-api';
import Flex from './components/Flex.vue';
import FlexDoc from './components/Flex.vue:doc';
import GridResponsive from './components/GridResponsive.vue';
import GridResponsiveDoc from './components/GridResponsive.vue:doc';

const chapters = [{
  component: Flex,
  doc: FlexDoc
}, {
  component: GridResponsive,
  doc: GridResponsiveDoc
}]

function getPropType(prop: PropDescriptor) {
  let s = ''
  const elements = (prop.type as any)?.elements
  if (elements) s += elements.map((e: any) => e.name).join('|')
  else if (prop.type) s += prop.type.name
  return s
}

</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  font-size: 14px;
  line-height: 1.4;
  font-family: sans-serif;
}
#app {
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: auto;
}
table {
  border-collapse: collapse;
}
th {
  text-align: left;
  padding: 8px;
}
td {
  border: 1px solid rgba(0,0,0,0.2);
  padding: 8px;
  vertical-align: top;
}
code {
  font-size: 13px;
  font-family: monospace;
  line-height: 1.2;
  /* color: white; */
  /* padding: 4px;
  background: rgba(0,0,0,0.15);
  border-radius: 4px;;
   */
}
</style>
