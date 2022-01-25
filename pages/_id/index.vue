<template>
  <div>{{ id }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ValidatePage',
  validate({ params }) {
    return /^([a-zA-Z0-9]{5})$/.test(params.id)
  },
  setup() {
    return {}
  },
  asyncData({ params }) {
    return { id: params.id }
  },
})
</script>
