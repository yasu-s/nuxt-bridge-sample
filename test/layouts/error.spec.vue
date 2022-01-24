<script lang="ts">
import { shallowMount } from '@vue/test-utils'
import ErrorLayout from '@/layouts/error.vue'

describe('@/layouts/error.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ErrorLayout, { propsData: { error: { statusCode: 404 } } })
    expect(wrapper.vm).toBeTruthy()
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
  })
})
</script>
