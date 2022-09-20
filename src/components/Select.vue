<template>
  <Dropdown v-model="dropdownActive" :disabled="disabled">
    <Field ref="fieldEl" button :disabled="disabled">
      <Text v-if="currentValues.length" color="foreground" nowrap>
        <template v-for="value,i in currentValues">
          <template v-if="i">, </template>
          <template v-if="optionForValue(value)">
            <slot :index="options.indexOf(optionForValue(value)!)" :option="optionForValue(value)!">
              {{ optionForValue(value)!.text }}
            </slot>
          </template>
          <template v-else>{{ value }}</template>
        </template>
      </Text>
      <Text v-else emphasis="low" nowrap>
        {{ placeholderText }}
      </Text>
      <template #after>
        <Icon name="arrow_drop_down" />
      </template>
      <input
        ref="searchEl"
        v-model="search" style="position:fixed;pointer-events:none;opacity:0"
      >
    </Field>
    <template #dropdown>
      <Container ref="dropdownEl" gap="0" @mousedown.stop.prevent="mousedown">
        <Row v-if="search" pad="s">
          <Chip tabindex="-1" @click.stop.prevent="clearSearch">
            {{ search }}<Icon name="close" />
          </Chip>
        </Row>
        <DropdownItem
          v-for="(option, i) in filteredOptions"
          :key="`${option.value}`"
          :data-selectactive="currentValues.includes(option.value) ? 'true' : undefined"
          :active="currentValues.includes(option.value)"
          @click="clickOption(option)"
        >
          <!-- @slot Customize option html -->
          <slot :index="i" :option="option">
            {{ option.text }}
          </slot>
        </DropdownItem>
      </Container>
    </template>
  </Dropdown>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import Chip from './Chip.vue'
import Container from './Container.vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import Field from './Field.vue'
import Icon from './Icon.vue'
import Row from './Row.vue'
import Text from './Text.vue'

type Option = { value: unknown; text: string }

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
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: unknown[]|unknown): void
}>()

const currentValues = computed(() => {
  const values = props.multiple ? [props.modelValue].flat() : [props.modelValue]
  return values.filter(optionForValue)
})

const dropdownActive = ref(false)
const search = ref('')
const searchEl = ref<HTMLInputElement>()
const dropdownEl = ref<InstanceType<typeof Container>>()
const fieldEl = ref<InstanceType<typeof Field>>()

watchEffect(() => {
  if (dropdownActive.value && searchEl.value) {
    search.value = ''
    searchEl.value.focus()
  }
})

// Scroll to first selected option
watchEffect(async () => {
  if (dropdownActive.value) {
    setTimeout(() => {
      const dropdownContent = dropdownEl.value?.$el as Element|undefined
      const activeOptionElem = dropdownContent?.querySelector('[data-selectactive]')
      activeOptionElem?.scrollIntoView({ block: 'center' })
    }, 0)
  }
})

const filteredOptions = computed(() => {
  const s = search.value.toLowerCase()
  return props.options.filter(o => `${o.value}|${o.text}`.toLowerCase().includes(s))
})

const placeholderText = computed(() => {
  if (props.placeholder) return props.placeholder
  return props.multiple ? 'Select one or more' : 'Select one'
})

function optionForValue(value: unknown) {
  return props.options.find(o => o.value === value)
}

function clickOption(o: Option) {
  let newValue: unknown[]|unknown = o.value
  if (props.multiple) {
    if (currentValues.value.includes(newValue)) { // remove from selection
      newValue = currentValues.value.filter(x => o.value !== x)
    } else { // append to selection
      newValue = currentValues.value.concat(o.value)
    }
  }
  emit('update:modelValue', newValue)
}

function focusin(e: Event) {
  const focusInField = fieldEl.value?.$el.contains(e.target as Element)
  const focusInDropdown = dropdownEl.value?.$el.contains(e.target as Element)
  dropdownActive.value = focusInField || focusInDropdown
}

function clearSearch() {
  search.value = ''
}

function mousedown() {}

onMounted(() => {
  document.addEventListener('focusin', focusin)
})

onBeforeUnmount(() => {
  document.removeEventListener('focusin', focusin)
})
</script>
