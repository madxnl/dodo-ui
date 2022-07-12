<template>
  <div class="NavLayout" :style="css">
    <Container pad="l" gap="s" class="NavLayout_bar">
      <template v-for="item in items" :key="item.href">
        <a :href="item.href" class="NavLayout_item">{{ item.label }}</a>
        <template v-for="subitem in item.items" :key="subitem.href">
          <a :href="subitem.href" class="NavLayout_subitem">{{ subitem.label }}</a>
        </template>
      </template>
    </Container>
    <div class="NavLayout_content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '../theme'
import Container from './Container.vue'

defineProps<{
  items: {
    label: string
    href: string
    items?: {
      label: string
      href: string
    }[]
  }[]
}>()

useTheme()

const css = computed(() => {
  const s = ''
  return s
})
</script>

<style>
.NavLayout {
  display: flex;
  overflow: auto;
}
.NavLayout_bar {
  overflow: auto;
  background: rgba(var(--rgb-foreground), 0.1);
  border-right: 1px solid rgba(var(--rgb-foreground), 0.2);
}
.NavLayout_item,
.NavLayout_subitem {
  color: inherit;
  text-decoration: none;
  font: var(--ui-font);
}
.NavLayout_subitem {
  padding-left: 16px;
}
hr {
  margin: 0;
  border-color: rgba(0,0,0,0.15);
  border-right: 0;
}
.NavLayout_content {
  overflow: auto;
  flex: 1;
  padding: 32px;
}
</style>
