<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from '@vue/composition-api'

type ErrorInfo = {
  /** HTTPステータスコード */
  statusCode: number
}

export default defineComponent({
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object as PropType<ErrorInfo>,
      default: null
    }
  },
  setup () {
    const pageNotFound = ref('404 Not Found')
    const otherError = ref('An error occurred')
    return { pageNotFound, otherError }
  },
  head () {
    return {
      title: 'error'
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
