<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const echartInstance = echarts.init(echartDivRef.value!, 'light', {
    renderer: 'svg'
  })
  echartInstance.setOption(props.options)
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  watchEffect(() => {
    echartInstance.setOption(props.options)
  })
})
</script>

<style lang="scss" scoped></style>
