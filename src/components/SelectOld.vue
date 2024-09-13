<template>
  <Row v-if="variant === 'buttons'" gap="xs" wrap>
    <Button
      v-for="(option, i) in options.slice(0, numShownButtons)"
      :key="optionText(option)"
      :color="isSelected(option) ? 'info' : undefined"
      :active="isSelected(option)"
      :variant="isSelected(option) && !multiple ? 'solid' : undefined"
      :disabled="disabled"
      :size="size"
      round
      @click="clickOption(option)"
    >
      <Icon v-if="multiple && isSelected(option)" name="check" size="s" style="margin: -2px" />
      <slot :option="option" :index="i">
        {{ optionText(option) }}
      </slot>
    </Button>
    <template v-if="tooManyButtons">
      <Button v-if="revealMore" :size="size" variant="link" round @click="revealMore = !revealMore">
        Less <Icon name="keyboard_arrow_up" size="s" style="margin: -2px" />
      </Button>
      <Button v-else :size="size" variant="link" round @click="revealMore = !revealMore">
        {{ options.length - numShownButtons }} more <Icon name="keyboard_arrow_down" size="s" style="margin: -2px" />
      </Button>
    </template>
  </Row>
  <Dropdown v-else v-model="dropdownActive" :disabled="disabled">
    <Field ref="fieldEl" button :disabled="disabled">
      <p v-if="currentValues.length" class="dodo-nowrap">
        <template v-for="(value, i) in currentValues">
          <template v-if="i">, </template>
          <template v-if="optionForValue(value)">
            <slot :index="options.indexOf(optionForValue(value)!)" :option="optionForValue(value)!">
              {{ optionText(optionForValue(value)!) }}
            </slot>
          </template>
          <template v-else>{{ value }}</template>
        </template>
      </p>
      <p v-else class="dodo-nowrap dodo-fade-secondary">
        {{ placeholderText }}
      </p>
      <template #after>
        <Icon name="arrow_drop_down" />
      </template>
      <input
        ref="hiddenInput"
        v-model="search"
        style="position: fixed; pointer-events: none; opacity: 0"
        :disabled="disabled"
      />
    </Field>
    <template #dropdown>
      <Column ref="dropdownEl" style="min-height: 0" gap="0" @mousedown.stop.prevent="">
        <Row v-show="showSearch" padding="s" :class="$style.searchbox">
          <TextInput
            ref="searchEl"
            v-model="search"
            type="search"
            placeholder="Search"
            tabindex="0"
            style="flex-grow: 1"
          />
        </Row>
        <ScrollContainer>
          <MenuItem
            v-for="(option, i) in filteredOptions"
            :key="`${option.value}`"
            :data-selectactive="currentValues.includes(option.value) ? 'true' : undefined"
            :active="currentValues.includes(option.value)"
            @click="clickOption(option)"
          >
            <!-- @slot Customize option html -->
            <slot :index="i" :option="option">
              {{ optionText(option) }}
            </slot>
          </MenuItem>
        </ScrollContainer>
      </Column>
    </template>
  </Dropdown>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { Button, Column, Dropdown, Icon, MenuItem, Row, ScrollContainer, TextInput } from '.'
import Field from './FieldOld.vue'

type Option = { value: unknown; label: string }

const props = defineProps<{
  /** Array of available options */
  options: Option[]
  /** v-model binding */
  modelValue?: unknown
  // multiple?: boolean
  disabled?: boolean
  /** Set placeholder text */
  placeholder?: string
  /** Allow multiple select */
  multiple?: boolean
  variant?: 'buttons'
  size?: 's'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: unknown[] | unknown): void
}>()

const currentValues = computed(() => {
  const values = props.multiple ? [props.modelValue].flat() : [props.modelValue]
  return values.filter(optionForValue)
})

const dropdownActive = ref(false)
const search = ref('')
const hiddenInput = ref<HTMLInputElement>()
const searchEl = ref<InstanceType<typeof TextInput>>()
const dropdownEl = ref<InstanceType<typeof ScrollContainer>>()
const fieldEl = ref<InstanceType<typeof Field>>()

watchEffect(() => {
  if (dropdownActive.value && hiddenInput.value) {
    search.value = ''
    hiddenInput.value.focus()
  }
})

watchEffect(() => {
  if (search.value && searchEl.value) {
    searchEl.value.$el.focus()
  }
})

// Scroll to first selected option
watchEffect(() => {
  if (dropdownActive.value) {
    setTimeout(() => {
      const dropdownContent = dropdownEl.value?.$el as Element | undefined
      const activeOptionElem = dropdownContent?.querySelector('[data-selectactive]')
      activeOptionElem?.scrollIntoView({ block: 'center' })
    }, 0)
  }
})

const maxButtons = 12
const revealMore = ref(false)
const tooManyButtons = computed(() => props.options.length > maxButtons)
const numShownButtons = computed(() => (tooManyButtons.value && !revealMore.value ? 6 : props.options.length))

const showSearch = computed(() => {
  return search.value || props.options.length >= 10
})

const filteredOptions = computed(() => {
  const s = search.value.toLowerCase()
  const all = props.options.filter((o) => `${o.value}|${o.label}`.toLowerCase().includes(s))
  if (!props.multiple) return all
  const selected = all.filter((x) => currentValues.value.find((y) => compareValue(x, y)))
  const unselected = all.filter((x) => !selected.includes(x))
  return selected.concat(unselected)
})

const placeholderText = computed(() => {
  if (props.placeholder) return props.placeholder
  return props.multiple ? 'Select one or more' : 'Select one'
})

function optionForValue(value: unknown) {
  return props.options.find((o) => compareValue(o, value))
}

function clickOption(option: Option) {
  let newValue: unknown[] | unknown = option.value
  if (props.multiple) {
    if (currentValues.value.includes(newValue)) {
      // remove from selection
      newValue = currentValues.value.filter((x) => !compareValue(option, x))
    } else {
      // append to selection
      newValue = currentValues.value.concat(option.value)
    }
  } else {
    dropdownActive.value = false
  }
  emit('update:modelValue', newValue)
}

function compareValue(option: Option, value: unknown) {
  return option.value === value
}

function optionText(option: Option): string {
  return option.label || `${option.value}`
}

function isSelected(option: Option) {
  return currentValues.value.some((x) => compareValue(option, x))
}

function focusin(e: Event) {
  const focusInField = fieldEl.value?.$el.contains(e.target as Element)
  const focusInDropdown = dropdownEl.value?.$el.contains(e.target as Element)
  dropdownActive.value = focusInField || focusInDropdown
}

onMounted(() => {
  document.addEventListener('focusin', focusin)
})

onBeforeUnmount(() => {
  document.removeEventListener('focusin', focusin)
})
</script>

<style module>
.searchbox {
  border-bottom: 1px solid color-mix(in oklch, var(--dodo-color-text) 20%, transparent);
}
</style>
