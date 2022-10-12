import { mount, VueWrapper } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Datatable from './DatatableTyped.vue'

const rows = [
  { id: 1, name: 'Foo', modified: '2022-01-01' },
  { id: 2, name: 'Bar', modified: '2022-02-01' },
  { id: 3, name: 'Baz', modified: '2022-01-04' },
]

type Row = typeof rows[number]

const columns = [
  { name: 'Name', field: 'name' },
  { name: 'Modified', field: 'modified' },
]

const findByText = (w: VueWrapper, s: string) => w.findAll('*').find(w => w.text() === s)!

test('Column sort', async () => {
  const wrapper = mount(Datatable, { propsData: { columns, rows } })
  await findByText(wrapper, columns[0].name).trigger('click')
  expect(wrapper.emitted('update:sortBy')![0]).toEqual([columns[0].field])
  await findByText(wrapper, columns[0].name).trigger('click')
  expect(wrapper.emitted('update:sortBy')![1]).toEqual(['-' + columns[0].field])
  await findByText(wrapper, columns[0].name).trigger('click')
  expect(wrapper.emitted('update:sortBy')![2]).toEqual([undefined])
  expect(wrapper.html()).toMatchSnapshot()
})

test('Selecting rows', async () => {
  const selectable = (x: Row) => x.id
  const wrapper = mount(Datatable, { propsData: { columns, rows, selectable } })
  const checkboxes = wrapper.findAll('.dodoCheckbox')
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
  const wrapper = mount(Datatable, { propsData: { columns, rows, showMore } })
  await findByText(wrapper, 'Show more').find('button').trigger('click')
  expect(showMore).toBeCalled()
  expect(wrapper.html()).toMatchSnapshot()
})
