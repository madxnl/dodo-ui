<template>
  <div
    :class="[
      $style.Field,
      disabled && $style.disabled,
      button && $style.button,
    ]"
  >
    <slot name="before" />
    <div :class="$style.inner">
      <slot />
    </div>
    <slot name="after" />
  </div>
</template>
<script lang="ts" setup>
import { useTheme } from '../../theme'

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
  box-shadow: 0 1px 2px inset rgba(0,0,0,0.1);
  background: white;
  gap: 4px;
  cursor: text;
  border: 1px solid rgba(var(--dodo-rgb-foreground),.3);
  border-radius: 4px;
  --height: var(--dodo-buttonHeight);
  min-height: var(--height);
  font: var(--dodo-font-base);
  color: rgb(var(--dodo-rgb-foreground));
  box-sizing: border-box;
}
.button {
  cursor: pointer;
}
.Field:focus-within {
  border-color: rgb(var(--dodo-rgb-info));
  outline: 1px solid rgb(var(--dodo-rgb-info));
}
[class$=_hasError] .Field {
  border-color: rgb(var(--dodo-rgb-danger));
  color: rgb(var(--dodo-rgb-danger));
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
  opacity: .5;
  pointer-events: none;
}
</style>
