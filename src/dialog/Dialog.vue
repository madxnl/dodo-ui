<template>
  <teleport to="body">
    <div class="Dialog" :style="css">
      <div class="Dialog_window">
        <Container pad="m">
          <div>
            {{ title }}
          </div>
          <slot name="content" />
          <!-- <BaseLayout :padding="24" :gap="8">
            <slot name="content"></slot>
          </BaseLayout>
          <hr>-->
        </Container>
        <Row pad="m" justify="end" gap="s">
          <slot name="controls" />
        </Row>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import Container from '../layout/Container.vue'
import Row from '../layout/Row.vue'

defineProps<{
  title: string
}>()

const css = computed(() => {
  const s = ''
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
