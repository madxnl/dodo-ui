<template>
  <Column :class="$style.Tabs">
    <Row gap="4">
      <div
        v-for="tab in tabs" :key="keyFor(tab)"
        :class="[
          $style.tab,
          current === keyFor(tab) && $style.active,
          tab.disabled && $style.disabled
        ]"
        @click="current=keyFor(tab)"
      >
        <Text h6 color="inherit">{{ tab.name }}</Text>
      </div>
    </Row>
    <template v-if="currentTab">
      <slot :name="keyFor(currentTab)" />
    </template>
  </Column>
</template>

<script lang="ts" setup>
import { computed, ref, watch, watchEffect } from 'vue'
import { Column, Row, Text } from '..'

export interface Tab {
  name: string
  disabled?: boolean
  slot?: string
}

const props = defineProps<{
  tabs: Tab[]
  tabIndex?: number
}>()

const emit = defineEmits<{
  (e: 'update:tabIndex', i: number): void
}>()

const current = ref('')
const currentTab = computed(() => props.tabs.find(t => keyFor(t) === current.value))

const keyFor = (tab: Tab) => tab.slot ?? tab.name

watchEffect(() => {
  if (!currentTab.value && props.tabs.length) {
    current.value = keyFor(props.tabs[0])
  }
})

watch(() => props.tabIndex, () => {
  if (props.tabIndex != null && props.tabs[props.tabIndex]) {
    current.value = keyFor(props.tabs[props.tabIndex])
  }
}, { immediate: true })

watch(() => currentTab.value, () => {
  if (currentTab.value) emit('update:tabIndex', props.tabs.indexOf(currentTab.value))
}, { immediate: true })

// defineEmits<{
// }>()
</script>

<style module>
.Tabs {
  font: inherit;
}
.tab {
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* .tab:hover {
} */
.tab::first-letter {
  text-transform: uppercase;
}
.tab.active {
  color: rgb(var(--dodo-rgb-info));
  border-color: currentColor;
  overflow: visible;
}
.tab.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
