<template>
  <template v-if="doc.props?.length">
    <div style="overflow:auto">
      <table :class="$style.Table">
        <tr><th>Prop</th><th>Type</th><th>Description</th></tr>
        <tr v-for="prop in doc.props ?? []" :key="prop.name">
          <td><code>{{ prop.name }}<template v-if="!prop.required">?</template></code></td>
          <td><SyntaxHighlight :code="getPropType(prop)" lang="ts" /></td>
          <td>{{ prop.description }}</td>
        </tr>
      </table>
    </div>
  </template>
  <template v-if="doc.events?.length">
    <div style="overflow:auto">
      <table :class="$style.Table">
        <tr><th>Event</th><th>Signature</th><th>Description</th></tr>
        <tr v-for="ev in doc.events ?? []" :key="ev.name">
          <td><code>{{ ev.name }}</code></td>
          <td><SyntaxHighlight :code="getEventType(ev)" lang="ts" /></td>
          <td>{{ ev.description }}</td>
        </tr>
      </table>
    </div>
  </template>
  <template v-if="doc.slots?.length">
    <div style="overflow:auto">
      <table :class="$style.Table">
        <tr><th>Slot</th><th>Scope</th><th>Description</th></tr>
        <tr v-for="slot in doc.slots ?? []" :key="slot.name">
          <td><code>{{ slot.name }}</code></td>
          <td><SyntaxHighlight :code="getSlotType(slot)" lang="ts" /></td>
          <td>{{ slot.description }}</td>
        </tr>
      </table>
    </div>
  </template>
</template>
<script setup lang="ts">
import { ComponentDoc, EventDescriptor, PropDescriptor, SlotDescriptor } from 'vue-docgen-api'
import SyntaxHighlight from './SyntaxHighlight.vue'

function getPropType(prop: PropDescriptor) {
  let s = ''
  const elements = (prop.type as any)?.elements
  if (elements) s += elements.map((e: any) => e.name).join(' | ')
  else if (prop.type) s += prop.type.name
  if (prop.type!.name === 'Array') s += '[]'
  return s
}

function getEventType(ev: EventDescriptor) {
  const params = (ev.properties ?? []).map(p => `${p.name}: ${p.type.names.join('|')}`)
  return `(${params.join(', ')}): void`
  // return `${params.join(', ')}`
}

function getSlotType(slot: SlotDescriptor) {
  const bindings = (slot.bindings ?? []).map(b => `${b.name}: ${b.type?.name}`)
  return bindings.length ? `{\n  ${bindings.join(';\n  ')};\n}` : '{}'
}

// const props = defineProps<{
defineProps<{
  doc: ComponentDoc
}>()

// const hasPropExamples = computed(() => (props.doc.props ?? []).some(p => p.tags?.example))
</script>
<style module>
.Table {
  font: var(--dodo-font-base);
  font-size: calc(var(--dodo-font-size) - 1px);
  border-collapse: collapse;
}
.Table th {
  text-align: left;
  padding: 8px;
  font-weight: var(--dodo-font-weightSemi);
}
.Table td {
  border-width: 1px 0;
  padding: 8px;
  vertical-align: top;
  max-width: 350px;
  min-width: 150px;
}
.Table tr:nth-child(even) {
  background: rgba(0,0,0,0.05);
}
</style>
