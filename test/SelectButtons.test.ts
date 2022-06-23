import { mount } from '@vue/test-utils'
import { SelectButtons } from '../src'
import { test, expect } from 'vitest'

const _options = [
  { label: 'Option one', value: 1 },
  { label: 'Option two', value: 2 },
  { label: 'Option three', value: 3 },
]

/**
* @vitest-environment jsdom
*/

test('Select a value', async () => {
  const wrapper = mount(SelectButtons, {
    propsData: { options: _options, modelValue: 1 },
  })
  await wrapper.findAll('button').find(w => w.text().includes('Option two'))!.trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[2]] })
  expect(wrapper.html()).toMatchSnapshot()
})

test('Select multiple', async () => {
  const wrapper = mount(SelectButtons, {
    propsData: { options: _options, modelValue: [1], multiple: true },
  })
  await wrapper.findAll('button').find(w => w.text().includes('Option two'))!.trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[[1, 2]]] })
  expect(wrapper.html()).toMatchSnapshot()
})

test('Deselect', async () => {
  const wrapper = mount(SelectButtons, {
    propsData: { options: _options, modelValue: [1, 2], multiple: true },
  })
  await wrapper.get('button').trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[[2]]] })
  expect(wrapper.html()).toMatchSnapshot()
})
