<script lang="ts">
import { ShallowUnwrapRef } from '@vue/composition-api'
import { shallowMount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import ErrorLayout from '@/layouts/error.vue'

/** Wrapper */
type WrapperToShallowUnwrapRef<T> = T extends ShallowUnwrapRef<infer U> ? ShallowUnwrapRef<U> : never

const getVm = (wrapper: Wrapper<Vue>) => {
  type componentDataType = NonNullable<typeof ErrorLayout.data>
  const vm = wrapper.vm as WrapperToShallowUnwrapRef<componentDataType> & Vue
  return vm
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

    const vm = getVm(wrapper)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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

    const vm = getVm(wrapper)
    expect(vm.isAdmin).toBeTruthy()
  })
})
</script>
