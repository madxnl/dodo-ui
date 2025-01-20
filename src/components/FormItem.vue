<script lang="ts" setup>
import { getCurrentInstance, onMounted, useSlots } from 'vue'

const props = defineProps<{
  label?: string
  error?: string
  description?: string
  for?: string
  optional?: boolean
}>()

const slots = useSlots()
const instance = getCurrentInstance()

onMounted(() => {
  if (!slots.default) {
    throw new Error('FormEntry requires a default slot')
  }
})
</script>

<template>
  <div :class="[$style.FormEntry, error && $style.hasError]" :data-itemerror="error">
    <div v-if="label" :class="$style.labelRow">
      <label :class="$style.label" :for="props.for">
        {{ label }}
      </label>

      <span v-if="optional" :class="$style.optional">Optional</span>
    </div>

    <slot :error="error" :entry-id="props.for ? props.for : `form-item-${instance?.uid}`" />

    <div v-if="error" :class="$style.error">
      <span>{{ error }}</span>
    </div>

    <div v-if="description" :class="$style.description">
      {{ description }}
    </div>
  </div>
</template>

<style module>
.FormEntry {
  display: flex;
  flex-flow: column;
  gap: 8px;
  position: relative;
}
.label {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.optional {
  color: var(--grey-4-disabled);
  font-size: 14px;
}
.labelRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.description {
  color: var(--grey-4-disabled);
  font-size: 14px;
}
.hasError .label {
  color: var(--dodo-color-danger);
}
.error {
  position: absolute;
  z-index: 1;
  top: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.error span {
  background-color: var(--dodo-color-danger);
  color: white;
  font-weight: 500;
  border-radius: var(--dodo-radius-s);
  padding: 4px 8px;
  position: relative;
  top: 4px;
}
.error span:after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  border: 4px solid transparent;
  border-bottom-color: var(--dodo-color-danger);
  transform: translate(-50%, -100%);
}
</style>
