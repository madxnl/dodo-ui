<template>
  <div class="NavLayout" :style="css">
    <Flex column pad=l class="NavLayout_bar">
      <template v-for="item in items">
        <a :href="item.href" class="NavLayout_item">{{ item.label }}</a>
      </template>
    </Flex>
    <div class="NavLayout_content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import Flex from "../layout/Flex.vue";

const props = defineProps<{
  items: {
    label: string
    href: string
  }[]
}>()

const css = computed(() => {
  let s = ''
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
