<template>
  <v-app dark>
    <h1 v-if="isNotFound">
      {{ pageNotFound }}
    </h1>
    <h1 v-else @click="changeOtherErrorMessage('error')">
      {{ otherError }}
    </h1>
    <nuxt-link to="/"> Home page </nuxt-link>
    <div v-if="isAdmin" class="admin-label">管理者</div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from '@vue/composition-api'

type ErrorInfo = {
  /** HTTPステータスコード */
  statusCode: number
}

export default defineComponent({
  name: 'ErroLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object as PropType<ErrorInfo>,
      default: null,
    },
  },
  setup(props) {
    const isAdmin = ref(false)
    const isNotFound = computed(() => {
      return props.error.statusCode === 404
    })
    const pageNotFound = ref('404 Not Found')
    const otherError = ref('An error occurred')
    const changeOtherErrorMessage = (message: string) => {
      otherError.value = message
    }
    return { isNotFound, isAdmin, pageNotFound, otherError, changeOtherErrorMessage }
  },
  head() {
    return {
      title: 'error',
    }
  },
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
