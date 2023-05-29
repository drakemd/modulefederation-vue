import { defineStore } from 'pinia'
import { getData } from '../mock/mockRequest'

export const useProbationStore = defineStore('probation', {
  state: () => {
    return {
      data: [],
      loading: false
    }
  },
  getters: {
    list: (state) => state.data,
    isLoading: (state) => state.loading
  },
  actions: {
    async fetchData() {
      this.loading = true
      let res = await getData()
      this.data = res
      this.loading = false
    },
    toggleExpand(index) {
      let tempList = [...this.data]
      let tempData = {...tempList[index]}
      tempData = {...tempData, showDetail: !tempData.showDetail}
      tempList[index] = {...tempData}
      this.data = [...tempList]
    },
    toggleEdit(index) {
      let tempList = [...this.data]
      let tempData = {...tempList[index]}
      tempData = {...tempData, edit: !tempData.edit}
      tempList[index] = {...tempData}
      this.data = [...tempList]
    },
    updateData(index, kpi, weight, target, leadTo, notes){
      let tempList = [...this.data]
      let tempData = {...tempList[index]}
      tempData = {...tempData, kpi, weight, target, leadTo, notes}
      tempList[index] = {...tempData}
      this.data = [...tempList]
    },
    addNewData(kpi, weight, target, leadTo, notes) {
      this.data = [...this.data, {kpi, weight, target, leadTo, notes}]
    },
    deleteDataByKpi(kpi) {
      this.data = this.data.filter(item => item.kpi !== kpi)
    }
  },
})