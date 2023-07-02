<template>
  <div class="role">
    <h2>role</h2>
    <div class="content">
      <page-search :searchFormConfig="formConfig" />
    </div>
    <page-table :contentConfig="contentConfig" :pageName="'role'"></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-table'
import { contentConfig } from './config/content-config'
import { formConfig } from './config/search-config'
export default defineComponent({
  name: 'role',
  components: { PageSearch, PageTable },
  setup() {
    return { contentConfig, formConfig }
  }
})
</script>

<style scoped></style>
