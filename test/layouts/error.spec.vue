<script lang="ts">
import { shallowMount } from '@vue/test-utils'
import ErrorLayout from '@/layouts/error.vue'
import { WrapperUtil } from '@/test/utils'

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

    const vm = WrapperUtil.getVm(ErrorLayout, wrapper)
    vm.changeOtherErrorMessage('hoge')
    await vm.$nextTick()

    expect(wrapper.find('h1').text()).toBe('hoge')
    expect(wrapper.emitted()['change-other-error-message']).toEqual([['hoge']])
  })

  test('isAdmin=true', async () => {
    const wrapper = shallowMount(ErrorLayout, {
      propsData: { error: { statusCode: 500 } },
    })
    await wrapper.setData({ isAdmin: true })

    const actual = wrapper.find('.admin-label')
    expect(actual.exists()).toBeTruthy()
    expect(actual.text()).toBe('管理者')

    const vm = WrapperUtil.getVm(ErrorLayout, wrapper)
    expect(vm.isAdmin).toBeTruthy()
  })
})
</script>
