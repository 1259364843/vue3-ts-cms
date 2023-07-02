<template>
  <div>
    <CHFrom v-bind="formConfig" v-model="formData" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { formConfig } from './config/search.config'
import CHFrom from '@/baseui/form'
export default {
  name: 'user',
  components: { CHFrom },
  setup() {
    const formData = ref({
      username: '',
      password: '',
      like: '',
      date: ''
    })
    return {
      formConfig,
      formData
    }
  }
}
</script>

<style lang="scss" scoped></style>
