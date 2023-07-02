<template>
  <div class="user">
    <div class="content">
      <page-search :searchFormConfig="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
export default {
  name: 'user',
  components: { PageSearch },
  setup() {
    return {
      searchFormConfig
    }
  }
}
</script>

<style lang="less" scoped></style>
