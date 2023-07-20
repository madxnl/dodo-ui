<template>
  <Transition @enter="enter" @leave="leave">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>

const defaultDuration = 250
const isTest = false // import.meta.env.MODE === 'test'
const duration = isTest ? 0 : defaultDuration
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function enter(el: Element, done: () => void) {
  if (el instanceof HTMLElement && duration > 0) {
    Object.assign(el.style, { transform: 'scaleY(0)', opacity: '0', 'transform-origin': 'left top' })
    await sleep(0)
    Object.assign(el.style, { transform: 'scaleY(1)', opacity: '1', transition: `all ${duration}ms` })
    await sleep(duration)
    Object.assign(el.style, { transform: null, transition: null, opacity: null, 'transform-origin': null })
  }
  done()
}

async function leave(el: Element, done: () => void) {
  if (el instanceof HTMLElement && duration > 0) {
    Object.assign(el.style, { transform: 'scaleY(1)', 'transform-origin': 'left top' })
    await sleep(0)
    Object.assign(el.style, { transform: 'scaleY(0)', opacity: '0', transition: `all ${duration}ms` })
    await sleep(duration)
    Object.assign(el.style, { transform: null, transition: null, opacity: null, 'transform-origin': null })
  }
  done()
}
</script>
