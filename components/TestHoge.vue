<template>
  <div @click="hoge()">{{ value }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      value: 'hoge',
    }
  },
  methods: {
    hoge() {
      this.value = `${this.value}hoge`
    },
  },
})
</script>
