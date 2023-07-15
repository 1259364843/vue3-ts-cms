import { ref } from 'vue'
import PageTable from '@/components/page-table'
export function usePageSearch() {
  const pageTableRef = ref<InstanceType<typeof PageTable>>()
  const handleReset = () => {
    console.log('hook-重置')
    pageTableRef.value?.getPageData()
  }
  const handleQuery = (queryInfo: any) => {
    console.log('hook-搜索')
    pageTableRef.value?.getPageData(queryInfo)
  }
  return [pageTableRef, handleReset, handleQuery]
}
