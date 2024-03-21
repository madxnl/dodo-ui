import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import ChoiceChips from './ChoiceChips.vue'

const _options = [
  { label: 'Option one', value: 1 },
  { label: 'Option two', value: 2 },
  { label: 'Option three', value: 3 }
]

test('Select a value', async () => {
  const wrapper = mount(ChoiceChips, {
    props: { options: _options, modelValue: 1 }
  })
  const btn = wrapper.findAll('button').find((w) => w.text().includes('Option two'))!
  await btn.trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[2]] })
})

test('Select multiple', async () => {
  const wrapper = mount(ChoiceChips, {
    props: { options: _options, modelValue: [1], multiple: true }
  })
  const btn = wrapper.findAll('button').find((w) => w.text().includes('Option two'))!
  await btn.trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[[1, 2]]] })
})

test('Deselect', async () => {
  const wrapper = mount(ChoiceChips, {
    props: { options: _options, modelValue: [1, 2], multiple: true }
  })
  await wrapper.get('button').trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[[2]]] })
})
