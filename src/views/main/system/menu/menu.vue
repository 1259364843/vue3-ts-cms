<template>
  <div class="menu">
    <h2>menu</h2>
    <page-table :contentConfig="contentTableConfig" pageName="menu">
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTable from '@/components/page-table'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'menu',
  components: { PageTable },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
