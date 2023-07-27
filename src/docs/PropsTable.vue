<template>
  <Column v-if="doc.props?.length">
    <h4>Props</h4>
    <code>
      <SyntaxHighlight :code="(doc.props ?? []).map((prop) => getPropType(prop)).join('\n')" lang="ts" />
    </code>
  </Column>

  <Column v-if="doc.events?.length">
    <h4>Events</h4>
    <code>
      <SyntaxHighlight :code="(doc.events ?? []).map((ev) => getEventType(ev)).join('\n')" lang="ts" />
    </code>
  </Column>

  <Column v-if="doc.slots?.length">
    <h4>Slots</h4>
    <code>
      <SyntaxHighlight :code="(doc.slots ?? []).map((s) => getSlotType(s)).join('\n')" lang="ts" />
    </code>
  </Column>
</template>
<script setup lang="ts">
import { ComponentDoc, EventDescriptor, PropDescriptor, SlotDescriptor } from 'vue-docgen-api'
import { Column } from '..'
import SyntaxHighlight from './SyntaxHighlight.vue'

// const props = defineProps<{
defineProps<{
  doc: ComponentDoc
}>()

function getPropType(prop: PropDescriptor) {
  let s = ''
  const elements = (prop.type as any)?.elements
  if (elements) s += elements.map((e: any) => e.name).join(' | ')
  else if (prop.type) s += prop.type.name
  if (prop.type!.name === 'Array') s += '[]'
  const q = prop.required ? '' : '?'
  const desc = prop.description ? ` // ${prop.description}` : ''
  return `${desc}${prop.name}${q}: ${s}`
}

function getEventType(ev: EventDescriptor) {
  let t = ''
  if (ev.type?.elements) {
    if (ev.type?.names.includes('Array')) {
      t = `${ev.type.elements[0].name}[]`
    } else if (ev.type?.names.includes('union')) {
      t = `${ev.type.elements.map((e) => e.name).join(' | ')}`
    }
  } else {
    const params = (ev.properties ?? []).map((p) => `${p.type.names.join('|')}`)
    t = `(${params.join(', ')}): void`
  }
  const desc = ev.description ? ` // ${ev.description}` : ''
  return `${desc}${ev.name}: ${t}`
}

function getSlotType(slot: SlotDescriptor) {
  const bindings = (slot.bindings ?? []).map((b) => `${b.name}: ${b.type?.name}`)
  const t = bindings.length ? `{\n  ${bindings.join(';\n  ')};\n}` : '{}'
  const desc = slot.description ? ` // ${slot.description}` : ''
  return `${desc}${slot.name}: ${t}`
}

// const hasPropExamples = computed(() => (props.doc.props ?? []).some(p => p.tags?.example))
</script>
