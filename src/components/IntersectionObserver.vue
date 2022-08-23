
<template>
  <div ref="el" :class="$style.IntersectionObserver">
    <slot
      :intersection-ratio="intersectionRatio"
      :is-intersecting="isIntersecting"
    />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useTheme } from '../theme'

const props = defineProps<{
  /* See IntersectionObserver browser API specification */
  threshold?: number|number[]
}>()

const intersectionRatio = ref(0)
const isIntersecting = ref(false)

const emit = defineEmits<{
  (e: 'update:intersectionRatio', intersectionRatio: number): void
  (e: 'update:isIntersecting', isIntersecting: boolean): void
}>()

const observer = new IntersectionObserver(([entry]) => {
  intersectionRatio.value = entry.intersectionRatio
  isIntersecting.value = entry.isIntersecting
  emit('update:intersectionRatio', entry.intersectionRatio)
  emit('update:isIntersecting', entry.isIntersecting)
}, {
  threshold: props.threshold,
})

const el = ref<HTMLElement>()

onMounted(() => {
  observer.observe(el.value!)
})

onUnmounted(() => {
  observer.disconnect()
})

useTheme()
</script>

<style module>
.IntersectionObserver {
  display: grid;
  gap: var(--dodo-gap-m);
}
</style>
