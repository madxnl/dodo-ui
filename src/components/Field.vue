<template>
  <div :class="[$style.Field, disabled && $style.disabled, button && $style.button]">
    <slot name="before" />
    <div :class="$style.inner">
      <slot />
    </div>
    <slot name="after" />
  </div>
</template>
<script lang="ts" setup>
import { useTheme } from '../composables'

defineProps<{
  disabled?: boolean
  button?: boolean
}>()

useTheme()
</script>
<style module>
.Field {
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 2px 6px;
  box-shadow: 0 1px 2px inset rgba(0, 0, 0, 0.1);
  background: white;
  gap: 4px;
  cursor: text;
  border: 1px solid rgba(var(--dodo-rgb-foreground), 0.3);
  border-radius: 4px;
  --height: var(--dodo-button-height);
  min-height: var(--height);
  font: var(--dodo-font-base);
  color: var(--dodo-color-foreground);
  box-sizing: border-box;
}
.button {
  cursor: pointer;
}
.Field:focus-within {
  border-color: var(--dodo-color-info);
  outline: 1px solid var(--dodo-color-info);
}
[class$='_hasError'] .Field {
  border-color: var(--dodo-color-danger);
  color: var(--dodo-color-danger);
}
.inner {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-grow: 1;
  padding: 0 2px;
  min-width: 0;
  width: 100%;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
