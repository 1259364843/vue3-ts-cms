<template>
  <div>
    <BaseEchart :options="options" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/baseui/echart'
import { defineProps, computed } from 'vue'
import { IDataType } from '../types'
const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '分类销量',
        data: props.values,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
