<script lang="ts">
import { shallowMount } from '@vue/test-utils'
import AsyncTestPage from '@/pages/asyncTest.vue'

describe('@/pages/asyncTest.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AsyncTestPage)
    expect(wrapper.vm).toBeTruthy()
  })

  test('run asyncData', async () => {
    const wrapper = shallowMount(AsyncTestPage)

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const func = wrapper.vm.$options.asyncData
    if (!func) throw new Error('err')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = func({} as any)
    const actual = result instanceof Promise ? await result : result
    expect(actual).toEqual({ name: 'aaaa' })
  })
})
</script>
