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
  roseData: IDataType[]
}>()

const options = computed(() => {
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [50, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
