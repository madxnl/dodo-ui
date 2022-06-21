<template>
  <div class="NavLayout" :style="css">
    <Container pad="l" class="NavLayout_bar">
      <template v-for="item in items" :key="item.href">
        <a :href="item.href" class="NavLayout_item">{{ item.label }}</a>
      </template>
    </Container>
    <div class="NavLayout_content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import Container from '../layout/Container.vue'

defineProps<{
  items: {
    label: string
    href: string
  }[]
}>()

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
