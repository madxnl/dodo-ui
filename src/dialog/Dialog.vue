<template>
  <teleport to="body">
    <div class="Dialog" :style="css">
      <div class="Dialog_window">
        <UiFlex column pad="m" gap="m">
          <div>
            {{ title }}
          </div>
          <slot name=content></slot>
          <!-- <BaseLayout :padding="24" :gap="8">
            <slot name="content"></slot>
          </BaseLayout>
          <hr>-->
        </UiFlex>
        <UiFlex pad="m" justify="end" gap="s">
          <slot name="controls">
          </slot>
        </UiFlex>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import UiFlex from "../layout/UiFlex.vue";

const props = defineProps<{
  title: string
}>()

const css = computed(() => {
  let s = ''
  return s
})
</script>
<style>
.Dialog {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  /* z-index: 50; */
}
.Dialog_window {
  background: white;
  border-radius: 8px;
  width: 500px;
}
.Dialog_window {
  box-shadow: var(--shadow-5);
  border-radius: 8px;
}
</style>
