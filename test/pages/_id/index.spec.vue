<script lang="ts">
import { shallowMount } from '@vue/test-utils'
import ValidatePage from '@/pages/_id/index.vue'

describe('@/pages/_id/index.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ValidatePage)
    expect(wrapper.vm).toBeTruthy()
  })

  test('run validate', async () => {
    const wrapper = shallowMount(ValidatePage)

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const validate = wrapper.vm.$options.validate
    if (!validate) throw new Error('err')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = validate({ params: { id: '11111' } } as any)
    const actual = result instanceof Promise ? await result : result
    expect(actual).toBeTruthy()
  })
})
</script>
