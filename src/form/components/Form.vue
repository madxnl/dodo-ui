<template>
  <form ref="formElem" :class="[$style.Form, steps ? $style.showSteps : '']" @submit.prevent="onSubmit">
    <div
      v-for="(item, i) in renderSteps"
      :key="item ? item.step.name : i"
      :class="[
        $style.step,
        item?.invalid ? $style.stepInvalid : '',
        item?.active ? $style.stepActive : '',
        item?.completed ? $style.stepCompleted : '',
        item?.unavailable ? $style.stepUnavailable : '',
      ]"
      @click="clickStep(i)"
    >
      <template v-if="item">
        <div :class="$style.stepNumber">
          <Icon v-if="item.invalid" name="close" />
          <Icon v-else-if="item.completed" name="check" />
          <h4 v-else style="color: inherit">{{ i + 1 }}</h4>
        </div>
        <h4 :class="$style.stepName">{{ item.step.name }}</h4>
        <div :class="$style.progressBar" />
      </template>

      <div v-if="!item || item.active" :class="$style.stepContent">
        <slot :step="item ? item.step : undefined" :step-index="i" />

        <Row justify="end">
          <Button type="submit" variant="solid" color="info" :disabled="!item?.filled">
            <template v-if="props.steps && stepIndex < props.steps.length - 1"> Next </template>
            <template v-else>
              <slot name="submit-text">Submit</slot>
            </template>
          </Button>
        </Row>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Button, Icon, Row, formServiceKey, useTheme } from '@/index'
import { computed, nextTick, provide, reactive, ref, watchEffect } from 'vue'

type Validator = (value: any) => Promise<string | undefined> | string | undefined

const props = defineProps<{
  validate?: Record<
    string,
    {
      value: unknown
      optional?: boolean
      validator?: Validator
    }
  >
  steps?: {
    name: string
    fields: string[]
  }[]
}>()

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const stepIndex = ref(0)
const formElem = ref<HTMLFormElement>()
const errors = reactive<Record<string, string | undefined>>({})

const renderSteps = computed(() => {
  if (!props.steps) return [null]
  return props.steps.map((step, index) => {
    const active = stepIndex.value === index
    const invalid = step.fields.some((f) => errors[f])
    const completed = stepIndex.value > index
    const filled =
      !props.validate ||
      step.fields.every((f) => {
        const { value, optional } = props.validate![f]
        return optional || !isEmptyValue(value)
      })
    const unavailable = !completed && !active
    return { step, active, index, invalid, completed, unavailable, filled }
  })
})

// const lastFilledStep = computed(() => {
//   return props.steps?.findIndex(step => {
//     return props.validate && step.fields.some(f => isEmptyValue(props.validate![f].value))
//   })
// })

provide(formServiceKey, {
  errors,
  validateField,
})

useTheme()

watchEffect(() => {
  const nSteps = props.steps?.length ?? 1
  if (stepIndex.value >= nSteps) {
    stepIndex.value = nSteps - 1
  }
})

async function onSubmit() {
  if (!(await validateCurrentStep())) return
  if (props.steps && stepIndex.value < props.steps.length - 1) {
    stepIndex.value += 1
  } else {
    emit('submit')
  }
}

async function validateCurrentStep() {
  if (!props.validate) return true
  // Validate either the current step or the entire form
  const allFields = Object.keys(props.validate)
  const isNonFinalStep = props.steps && stepIndex.value < props.steps.length - 1
  const fieldsToValidate = isNonFinalStep ? props.steps[stepIndex.value].fields : allFields
  await Promise.all(fieldsToValidate.map(validateField))
  const firstInvalidField = fieldsToValidate.find((field) => errors[field])
  if (!firstInvalidField) return true
  // Activate the step that has errors and scroll to the field
  const stepToActivate = props.steps?.findIndex((step) => step.fields.includes(firstInvalidField)) ?? -1
  if (stepToActivate >= 0) {
    stepIndex.value = stepToActivate
    await nextTick()
  }
  const labelEl = formElem.value?.querySelector(`[for=${firstInvalidField}]`)
  labelEl?.scrollIntoView({ block: 'nearest' })
  return false
}

function isEmptyValue(value: unknown) {
  return !value || (Array.isArray(value) && value.length < 1)
}

async function validateField(field: string) {
  if (!props.validate) return
  const { optional, validator, value } = props.validate[field]
  const empty = isEmptyValue(value)
  if (empty && !optional) {
    errors[field] = 'is required'
  } else if (!empty && validator) {
    errors[field] = await validator(value)
  } else {
    errors[field] = undefined
  }
}

function clickStep(index: number) {
  if (index < stepIndex.value) {
    stepIndex.value = index
  }
}
</script>

<style module>
.Form {
  display: grid;
  gap: var(--dodo-gap-2);
}
.showSteps .step {
  grid-template-columns: auto 1fr;
}
.step {
  display: grid;
  gap: var(--dodo-gap-2) var(--dodo-gap-4);
  --stepNumColor: var(--dodo-color-muted);
}
.stepContent {
  display: grid;
  gap: var(--dodo-gap-4);
  padding: var(--dodo-gap-2) 0;
}
.stepNumber {
  border-radius: 999px;
  background: var(--stepNumColor);
  width: 32px;
  height: 32px;
  display: grid;
  color: white;
  justify-content: center;
  align-items: center;
}
.stepName {
  align-self: center;
}
.stepCompleted {
  --stepNumColor: var(--dodo-color-success);
}
.stepActive {
  --stepNumColor: var(--dodo-color-info);
}
.stepInvalid {
  --stepNumColor: var(--dodo-color-danger);
}
.progressBar {
  width: 0;
  min-height: 16px;
  justify-self: center;
  border: solid rgba(0, 0, 0, 0.2);
  border-width: 0 2px 0 0;
}
.step:last-child .progressBar {
  border: none;
}
.stepUnavailable {
  pointer-events: none;
  filter: grayscale(1);
}
.stepUnavailable .stepName,
.stepUnavailable .stepNumber {
  opacity: 0.5;
}
.stepUnavailable .progressBar {
  border-style: dashed;
}
</style>
