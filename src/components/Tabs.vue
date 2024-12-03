<template>
  <Column gap="m" style="min-width: 0">
    <Column gap="0">
      <div :class="[$style.bar, theme.gap(gap)]">
        <div
          v-for="(tab, i) in tabs"
          :key="keyFor(tab)"
          :class="[$style.tab, current === keyFor(tab) && $style.active, tab.disabled && $style.disabled]"
          @click="current = keyFor(tab)"
        >
          <h5 :class="$style.tabName">
            <slot name="tab-title" :i="i" :tab="tab">
              {{ tab.name }}
            </slot>
          </h5>
        </div>
      </div>
      <hr />
    </Column>
    <template v-if="currentTab">
      <slot :name="currentTab.slot ?? 'default'" :tab="currentTab" />
    </template>
  </Column>
</template>

<script lang="ts" setup>
import { computed, ref, watch, watchEffect } from 'vue'
import { Column } from '.'
import { useTheme, type GapSize } from '@/composables'

export interface Tab {
  name: string
  disabled?: boolean
  slot?: string
}

const props = defineProps<{
  tabs: Tab[]
  tabIndex?: number
  gap?: GapSize
}>()

const emit = defineEmits<(e: 'update:tabIndex', i: number) => void>()

const theme = useTheme()
const current = ref('')
const currentTab = computed(() => props.tabs.find((t) => keyFor(t) === current.value))

watchEffect(() => {
  if (!currentTab.value && props.tabs.length) {
    current.value = keyFor(props.tabs[0])
  }
})

watch(
  () => props.tabIndex,
  () => {
    if (props.tabIndex != null && props.tabs[props.tabIndex]) {
      current.value = keyFor(props.tabs[props.tabIndex])
    }
  },
  { immediate: true }
)

watch(
  () => currentTab.value,
  () => {
    if (currentTab.value) emit('update:tabIndex', props.tabs.indexOf(currentTab.value))
  },
  { immediate: true }
)

function keyFor(tab: Tab) {
  return tab.slot ?? tab.name
}
</script>

<style module>
.bar {
  display: flex;
  user-select: none;
  overflow-x: auto;
}
.tab {
  cursor: pointer;
  transition: all var(--dodo-transition-duration, 0.15s);
  white-space: nowrap;
  line-height: 1.7;
  padding: 0 var(--dodo-spacing-s);
}
.tab::first-letter {
  text-transform: uppercase;
}
.tabName {
  border-bottom: 2px solid transparent;
  transition: all var(--dodo-transition-duration, 0.15s);
  text-overflow: ellipsis;
  overflow: hidden;
}
.tab.active .tabName {
  color: var(--dodo-color-info);
  border-color: currentColor;
}
.tab.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
