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
})
</script>
