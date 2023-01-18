<template>
  <template v-if="doc.props?.length">
    <!-- <Text h4>&lt;{{ doc.displayName }}&gt; Props</Text> -->
    <div style="overflow:auto">
      <BaseTable>
        <tr><th>Prop</th><th>Type</th><th>Description</th></tr>
        <tr v-for="prop in doc.props ?? []" :key="prop.name">
          <td><code>{{ prop.name }}<template v-if="!prop.required">?</template></code></td>
          <td><SyntaxHighlight :code="getPropType(prop)" lang="ts" /></td>
          <td>
            {{ prop.description }}
          </td>
        </tr>
      </BaseTable>
    </div>
  </template>
  <template v-if="doc.events?.length">
    <!-- <Text h4>&lt;{{ doc.displayName }}&gt; Events</Text> -->
    <div style="overflow:auto">
      <BaseTable>
        <tr><th>Event</th><th>Signature</th><th>Description</th></tr>
        <tr v-for="ev in doc.events ?? []" :key="ev.name">
          <td><code>{{ ev.name }}</code></td>
          <td><SyntaxHighlight :code="getEventType(ev)" lang="ts" /></td>
          <td>{{ ev.description }}</td>
        </tr>
      </BaseTable>
    </div>
  </template>
  <template v-if="doc.slots?.length">
    <!-- <Text h4>&lt;{{ doc.displayName }}&gt; Slots</Text> -->
    <div style="overflow:auto">
      <BaseTable>
        <tr><th>Slot</th><th>Scope</th><th>Description</th></tr>
        <tr v-for="slot in doc.slots ?? []" :key="slot.name">
          <td><code>{{ slot.name }}</code></td>
          <td><SyntaxHighlight :code="getSlotType(slot)" lang="ts" /></td>
          <td>{{ slot.description }}</td>
        </tr>
      </BaseTable>
    </div>
  </template>
</template>
<script setup lang="ts">
import { ComponentDoc, EventDescriptor, PropDescriptor, SlotDescriptor } from 'vue-docgen-api'
import BaseTable from './BaseTable.vue'
import SyntaxHighlight from './SyntaxHighlight.vue'

// const props = defineProps<{
defineProps<{
  doc: ComponentDoc
  code?: never
}>()

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

// const hasPropExamples = computed(() => (props.doc.props ?? []).some(p => p.tags?.example))
</script>
