<script lang="ts">
import { shallowMount } from '@vue/test-utils'
import ErrorLayout from '@/layouts/error.vue'

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

    // eslint-disable-next-line
    const vm = wrapper.vm as any

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

    // eslint-disable-next-line
    expect((wrapper.vm as any).isAdmin).toBeTruthy()
  })
})
</script>
