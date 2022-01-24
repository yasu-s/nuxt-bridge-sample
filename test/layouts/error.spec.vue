<script lang="ts">
import { shallowMount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import ErrorLayout from '@/layouts/error.vue'

const getVm = (wrapper: Wrapper<Vue>) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return wrapper.vm as NonNullable<typeof ErrorLayout.data> & Vue
}

describe('@/layouts/error.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ErrorLayout, { propsData: { error: { statusCode: 404 } } })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('statusCode=500', () => {
    const wrapper = shallowMount(ErrorLayout, { propsData: { error: { statusCode: 500 } } })
    expect(wrapper.find('h1').text()).toBe('An error occurred')
  })

  test('changeOtherErrorMessage', async () => {
    const wrapper = shallowMount(ErrorLayout, { propsData: { error: { statusCode: 500 } } })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const vm = getVm(wrapper)

    // eslint-disable-next-line
    vm.changeOtherErrorMessage('hoge')

    // eslint-disable-next-line
    await vm.$nextTick()

    expect(wrapper.find('h1').text()).toBe('hoge')
    expect(wrapper.emitted()['change-other-error-message']).toEqual([['hoge']])
  })

  test('isAdmin=true', async () => {
    const wrapper = shallowMount(ErrorLayout, { propsData: { error: { statusCode: 500 } } })
    await wrapper.setData({ isAdmin: true })

    const actual = wrapper.find('.admin-label')
    expect(actual.exists()).toBeTruthy()
    expect(actual.text()).toBe('管理者')

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const vm = getVm(wrapper)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(vm.isAdmin).toBeTruthy()
  })
})
</script>
