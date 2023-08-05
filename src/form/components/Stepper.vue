<template>
  <Column :class="$style.stepper">
    <template v-for="(step, i) in steps" :key="step.name">
      <Row align="stretch" gap="4" :class="i > currentIndex && $style.inactiveStep">
        <Column align="center">
          <div :class="[$style.circle]">
            <Icon v-if="currentIndex > i" name="check" />
            <h3 v-else>{{ i + 1 }}</h3>
          </div>
          <div v-if="i < steps.length - 1" :class="$style.line" />
        </Column>

        <Column grow>
          <Column gap="1">
            <h3>
              <span v-if="step === currentStep">{{ step.name }}</span>
              <span v-else class="dodo-fade-secondary">{{ step.name }}</span>
            </h3>
            <p v-if="step.hint" class="dodo-fade-secondary">{{ step.hint }}</p>
          </Column>

          <Column v-if="step === currentStep">
            <slot :name="step.key" />

            <Row>
              <Button
                v-if="currentIndex < steps.length - 1"
                :disabled="step.incomplete"
                color="primary"
                variant="solid"
                @click="goNext"
              >
                {{ step.submitText || 'Continue' }}
              </Button>
              <Button v-else color="primary" variant="solid" @click="goNext">
                {{ step.submitText || 'Complete' }}
              </Button>
              <Button v-if="currentIndex > 0" variant="text" @click="goPrev"> Back </Button>
            </Row>
          </Column>
          <br />
        </Column>
      </Row>
    </template>
  </Column>
</template>

<script lang="ts" setup>
import { Button, Column, Icon, Row, useTheme } from '@/index'
import { computed, ref, watch, watchEffect } from 'vue'

const props = defineProps<{
  stepIndex?: number
  steps: {
    name: string
    key?: string
    hint?: string
    submitText?: string
    incomplete?: boolean
    submitStep?: () => Promise<boolean> | boolean
  }[]
  completed: () => Promise<void> | void
}>()

const emit = defineEmits<{
  (e: 'update:stepIndex', index: number): void
}>()

const currentIndex = ref(0)

type Step = (typeof props.steps)[0]

const currentStep = computed<Step | undefined>(() => {
  return props.steps[currentIndex.value]
})

function goPrev() {
  currentIndex.value--
}

async function goNext() {
  const step = currentStep.value!
  if (step.incomplete) return
  if (step.submitStep) {
    const res = await step.submitStep()
    if (!res) return
  }
  if (currentIndex.value === props.steps.length - 1) {
    await props.completed()
    return
  }
  currentIndex.value++
}

useTheme()

watchEffect(() => {
  if (props.stepIndex != null) {
    currentIndex.value = props.stepIndex
  }
})

watch(currentIndex, () => {
  emit('update:stepIndex', currentIndex.value)
})
</script>

<style module>
.stepper {
  min-width: 400px;
}
.line {
  flex: 1 1 0;
  width: 2px;
  background: rgba(var(--dodo-rgb-foreground), 0.5);
  opacity: 0.4;
}
.circle {
  background: var(--dodo-color-primary);
  min-width: 2em;
  height: 2em;
  border-radius: 999px;
  color: var(--dodo-color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2em;
}
.inactiveStep {
  opacity: 0.6;
}
.inactiveStep .circle {
  background: rgba(var(--dodo-rgb-foreground), 0.5);
}
</style>
