<template>
  <div>
    <div class="page-modal">
      <el-dialog
        v-model="dialogVisible"
        title="新建用户"
        width="30%"
        center
        destroy-on-close
      >
        <CHForm v-bind="modalConfig" v-model="formData"></CHForm>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import CHForm from '@/baseui/form'
export default defineComponent({
  name: 'PageModal',
  components: { CHForm },
  props: {
    // 弹窗配置
    modalConfig: {
      type: Object,
      require: true
    },
    // 默认值
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    // 弹窗是否展示
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig?.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    return { dialogVisible, formData }
  }
})
</script>

<style scoped></style>
