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
      <input ref="hiddenInput" v-model="search" style="position:fixed;pointer-events:none;opacity:0" :disabled="disabled">
    </Field>
    <template #dropdown>
      <Container ref="dropdownEl" gap="0" overflow="auto" @mousedown.stop.prevent="">
        <Row v-show="showSearch" pad="s" :class="$style.searchbox">
          <TextInput ref="searchEl" v-model="search" type="search" placeholder="Search" tabindex="0" />
          <!-- <template #after><Icon name="close" size="s" style="cursor:pointer" @click="clearSearch" /></template> -->
        </Row>
        <Container gap="0" overflow="auto">
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
      </Container>
    </template>
  </Dropdown>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import Container from './Container.vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import Field from './Field.vue'
import Icon from './Icon.vue'
import Row from './Row.vue'
import Text from './Text.vue'
import TextInput from './TextInput.vue'

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
const hiddenInput = ref<HTMLInputElement>()
const searchEl = ref<InstanceType<typeof TextInput>>()
const dropdownEl = ref<InstanceType<typeof Container>>()
const fieldEl = ref<InstanceType<typeof Field>>()

watchEffect(() => {
  if (dropdownActive.value && hiddenInput.value) {
    search.value = ''
    hiddenInput.value.focus()
  }
})

watchEffect(() => {
  if (search.value && searchEl.value) {
    searchEl.value.$el.querySelector('input').focus()
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

const showSearch = computed(() => {
  return search.value || props.options.length >= 10
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

onMounted(() => {
  document.addEventListener('focusin', focusin)
})

onBeforeUnmount(() => {
  document.removeEventListener('focusin', focusin)
})
</script>

<style module>
.searchbox {
  border-bottom: 1px solid rgba(var(--dodo-rgb-foreground),0.2);
}
</style>
