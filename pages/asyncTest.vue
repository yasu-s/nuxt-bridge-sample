<template>
  <div>{{ name + value }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return { value: ref('-bbbb') }
  },
  async asyncData() {
    const name = await Promise.resolve('aaaa')
    return { name }
  },
})
</script>
