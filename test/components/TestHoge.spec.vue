<script lang="ts">
import { shallowMount } from '@vue/test-utils'
import TestHoge from '@/components/TestHoge.vue'

describe('@/components/TestHoge.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(TestHoge)
    expect(wrapper.vm).toBeTruthy()
  })
})
</script>
