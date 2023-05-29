import { defineStore } from 'pinia'

export const useProbationStore = defineStore('probation', {
  state: () => {
    return {
      data: [
        { 
          kpi: 'Redesign Performance',
          weight: 50,
          target: 100,
          leadTo: 'Performance',
          kpiList: [
            'Concept Redesign',
            'Menganalisis Design Performance',
            'Review Performance'
          ],
          notes: '<ul><li><p>Concept Redesign</p></li><li><p>Menganalisis Design Performance</p></li><li><p>Review Performance</p></li></ul>',
          showDetail: false,
          edit: false
        },
        { 
          kpi: 'Define Matrix Leadership Development',
          weight: 30,
          target: 100,
          leadTo: 'Development',
          kpiList: [
            'Concept Redesign',
            'Menganalisis Design Performance',
            'Review Performance'
          ],
          notes: '<ul><li><p>Concept Redesign</p></li><li><p>Menganalisis Design Performance</p></li><li><p>Review Performance</p></li></ul>',
          showDetail: false,
          edit: false
        },
        { 
          kpi: 'Melakukan Review Jobdesk',
          weight: 20,
          target: 100,
          leadTo: 'Talent',
          kpiList: [
            'Concept Redesign',
            'Menganalisis Design Performance',
            'Review Performance'
          ],
          notes: '<ul><li><p>Concept Redesign</p></li><li><p>Menganalisis Design Performance</p></li><li><p>Review Performance</p></li></ul>',
          showDetail: false,
          edit: false
        }
      ]
    }
  },
  getters: {
    list: (state) => state.data,
  },
  actions: {
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