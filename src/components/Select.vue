<template>
  <Dropdown v-model="dropdownActive">
    <Field ref="fieldEl" button>
      <Text v-if="currentValues.length" color="foreground" nowrap>
        <template v-for="value,i in currentValues">
          <template v-if="i">, </template>
          <template v-if="optionForValue(value)">
            <slot :index="options.indexOf(optionForValue(value)!)" :option="optionForValue(value)!">
              {{ optionForValue(value)!.label }}
            </slot>
          </template>
          <template v-else>{{ value }}</template>
        </template>
      </Text>
      <Text v-else opacity="muted" nowrap>
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
          :active="currentValues.includes(option.value)"
          @click="clickOption(option)"
        >
          <!-- @slot Customize option html -->
          <slot :index="i" :option="option">
            {{ option.label }}
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

type Value = boolean|string|number|undefined|null
type Option = { value: Value; label?: string }

const props = defineProps<{
  /** Array of available options */
  options: Option[]
  /** v-model binding, bind an array to allow multiple selection */
  modelValue?: Value[]|Value
  // multiple?: boolean
  disabled?: boolean
  /** Set placeholder text */
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: Value[]|Value): void
}>()

const currentValues = computed(() => {
  const values = Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
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

const filteredOptions = computed(() => {
  const s = search.value.toLowerCase()
  return props.options.filter(o => `${o.value}|${o.label}`.toLowerCase().includes(s))
})

const placeholderText = computed(() => {
  if (props.placeholder) return props.placeholder
  return Array.isArray(props.modelValue) ? 'Select one or more' : 'Select one'
})

function optionForValue(value: Value) {
  return props.options.find(o => o.value === value)
}

function clickOption(o: Option) {
  Array.isArray(props.modelValue)
  let newValue: Value[]|Value = o.value
  if (Array.isArray(props.modelValue)) { // multiple
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
