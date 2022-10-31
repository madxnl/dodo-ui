import { mount, VueWrapper } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Datatable from './DatatableTyped.vue'

const rows = [
  { id: 1, name: 'Foo', modified: '2022-01-01' },
  { id: 2, name: 'Bar', modified: '2022-02-01' },
  { id: 3, name: 'Baz', modified: '2022-01-04' },
]

const columns = [
  { name: 'Name', value: 'name', sort: 'name' },
  { name: 'Modified', value: 'modified' },
]

const findByText = (w: VueWrapper, s: string) => w.findAll('*').find(w => w.text() === s)!

test('Column sort', async () => {
  const wrapper = mount(Datatable, { props: { columns, rows } })
  await findByText(wrapper, 'Name').trigger('click')
  expect(wrapper.emitted('update:sortValue')![0]).toEqual(['name'])
  await findByText(wrapper, 'Name').trigger('click')
  expect(wrapper.emitted('update:sortValue')![1]).toEqual(['-name'])
  await findByText(wrapper, 'Name').trigger('click')
  expect(wrapper.emitted('update:sortValue')![2]).toEqual([undefined])
  expect(wrapper.html()).toMatchSnapshot()
})

test('Selecting rows', async () => {
  const wrapper = mount(Datatable, { props: { columns, rows, selection: [], selectBy: 'id' } })
  const checkboxes = wrapper.findAllComponents({ name: 'Checkbox' })
  await checkboxes[0].trigger('click')
  expect(wrapper.emitted('update:selection')![0]).toEqual([[1, 2, 3]])
  await checkboxes[1].trigger('click')
  expect(wrapper.emitted('update:selection')![1]).toEqual([[2, 3]])
  await checkboxes[1].trigger('click')
  expect(wrapper.emitted('update:selection')![2]).toEqual([[2, 3, 1]])
  expect(wrapper.html()).toMatchSnapshot()
})

test('Show more', async () => {
  const showMore = vi.fn(async () => {})
  const wrapper = mount(Datatable, { props: { columns, rows, showMore } })
  await findByText(wrapper, 'Show more results').find('button').trigger('click')
  expect(showMore).toBeCalled()
  expect(wrapper.html()).toMatchSnapshot()
})
