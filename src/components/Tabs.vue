<template>
  <Column gap="4" style="min-width: 0">
    <Column gap="0">
      <div :class="$style.bar">
        <div ref="tabsDiv" :class="[$style.tabs]">
          <div
            v-for="(tab, i) in visibleTabs"
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
        <Dropdown>
          <template #default>
            <Button v-if="overflowTabs.length > 0" :class="[$style.arrow]" variant="text" small>
              <Icon name="more_horiz" size="l" />
            </Button>
          </template>
          <template #dropdown>
            <template v-for="(tab, i) in overflowTabs" :key="keyFor(tab)">
              <p @click="current = keyFor(tab)">
                <slot name="tab-title" :i="i" :tab="tab">
                  {{ tab.name }}
                </slot>
              </p>
            </template>
          </template>
        </Dropdown>
      </div>
      <hr />
    </Column>
    <template v-if="currentTab">
      <slot :name="currentTab.slot ?? 'default'" :tab="currentTab" />
    </template>
  </Column>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue'
import { Button, Column, Dropdown, Icon } from '.'

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

const tabsDiv = ref<HTMLElement>()
const current = ref('')
const currentTab = computed(() => props.tabs.find((t) => keyFor(t) === current.value))
const overflowStartIndex = ref(99)
const visibleTabs = computed(() => props.tabs.slice(0, overflowStartIndex.value))
const overflowTabs = computed(() => props.tabs.slice(overflowStartIndex.value))
const interval = ref<ReturnType<typeof setTimeout>>()

watchEffect(() => {
  if (!currentTab.value && props.tabs.length) {
    current.value = keyFor(props.tabs[0])
  }
})

onMounted(() => {
  updateOverflow()
  interval.value = setInterval(updateOverflow, 100)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

function updateOverflow() {
  const widthPerTab = 60
  const availableWidth = tabsDiv.value?.clientWidth || 1000
  const shownTabsNum = Math.max(1, Math.floor(availableWidth / widthPerTab))
  overflowStartIndex.value = shownTabsNum
}

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
}
.tabs {
  display: flex;
  flex-grow: 1;
  min-width: 0;
}
.tab {
  overflow: hidden;
  min-width: 0;
  cursor: pointer;
  transition: all var(--dodo-transition-duration, 0.15s);
  white-space: nowrap;
  line-height: 1.7;
  padding: 0 var(--dodo-gap-2);
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
