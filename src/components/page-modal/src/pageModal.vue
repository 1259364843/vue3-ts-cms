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
            <el-button type="primary" @click="handleConfirmClick">
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
import { useStore } from 'vuex'
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
    },
    pageName: {
      type: String,
      require: true
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
    const store = useStore()
    // 确定按钮处理逻辑
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }
    return { dialogVisible, formData, handleConfirmClick }
  }
})
</script>

<style scoped></style>
