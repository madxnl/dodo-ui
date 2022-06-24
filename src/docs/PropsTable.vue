<template>
  <template v-if="doc.props?.length">
    <div style="overflow:auto">
      <table>
        <tr>
          <th width="10%">Prop</th>
          <th width="25%">Type</th>
          <th width="35%">Description</th>
          <th width="30%">Example</th>
        </tr>
        <tr v-for="prop in doc.props ?? []" :key="prop.name">
          <td>
            <component :is="prop.required ? 'b' : 'span'">
              <code>{{ prop.name }}<template v-if="!prop.required">?</template></code>
            </component>
          </td>
          <td>
            <code>{{ getPropType(prop) }}</code>
          </td>
          <td>
            {{ prop.description }}
          </td>
          <td>
            <Container gap="s">
              <template v-for="example in prop.tags?.example" :key="example">
                <code>{{ (example as any).description }}</code>
              </template>
            </Container>
          </td>
          <!-- <td>{{ prop }}</td> -->
        </tr>
      </table>
    </div>
  </template>
</template>
<script setup lang="ts">
import { ComponentDoc, PropDescriptor } from 'vue-docgen-api'
import Container from '../components/Container.vue'

function getPropType(prop: PropDescriptor) {
  let s = ''
  const elements = (prop.type as any)?.elements
  if (elements) s += elements.map((e: any) => e.name).join(' | ')
  else if (prop.type) s += prop.type.name
  if (prop.type!.name === 'Array') s += '[]'
  return s
}

defineProps<{
  doc: ComponentDoc
}>()
</script>
<style>
.App_chapter {
  min-height: 100vh;
  padding: 32px 0;
}
</style>
