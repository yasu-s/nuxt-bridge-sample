<script lang="ts">
import { shallowMount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('@/components/NuxtLogo.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
</script>
