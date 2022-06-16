<template>
  <svg
    class="UiSpinner"
    viewBox="0 0 18 18"
  >
    <path stroke="currentColor" fill="none" d="M 9 1 A 8 8 0 0 1 9 17" stroke-width="2" />
  </svg>
</template>
<style lang="css">
.UiSpinner {
  width: 24px;
  height: 24px;
  animation: UiSpinner 1s linear infinite;
}
@keyframes UiSpinner {
  from { transform:none }
  to { transform:rotate(360deg)}
}
.UiSpinner_small {
  width: 18px;
  height: 18px;
}
.UiSpinner_large {
  width: 32px;
  height: 32px;
}
</style>
