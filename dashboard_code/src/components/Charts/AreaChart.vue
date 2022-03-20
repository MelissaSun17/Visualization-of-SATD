<script>
import { Line } from 'vue-chartjs'
import myStorage from '@/store/sessionStorage'

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
      dataList: [],
      tableList: [],
      createdSATD: [],
      deletedSATD: [],
      unhandledSATD: [],
      labels: [],
      link: [],
      chart: null
    }
  },
  mounted() {
    this.getList()
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')
    var _this = this
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: 'Created SATDs',
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            // backgroundColor: this.gradient,
            data: this.createdSATD
          },
          {
            label: 'Deleted SATDs',
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            // backgroundColor: this.gradient2,
            data: this.deletedSATD
          },
          {
            label: 'Unhandled  SATDs',
            borderColor: '#06ABE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            // backgroundColor: this.gradient2,
            data: this.unhandledSATD
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        onClick: this.myCustomMethod
      }
    )
    this.chart = this.$data._chart
  },
  methods: {
    getList() {
      this.dataList = myStorage.getStorage('tabThree')
      if (this.dataList) {
        this.tableList = JSON.parse(this.dataList).results
        this.tableList.forEach((item) => {
          this.createdSATD.push(item.created_SATD)
          this.deletedSATD.push(item.deleted_SATD)
          this.unhandledSATD.push(item.unhandled_SATD)
          this.labels.push(item.commit_date)
          this.link.push(item.commit_url)
        })
      }
    },
    myCustomMethod(event, item) {
      debugger
      const element = this.chart.getElementAtEvent(event)
      if (element && element.length > 0) {
        var clickedIndex = element[0]['_index']
        var jumpLink = this.link[clickedIndex]
        // window.open(jumpLink)
        window.open(jumpLink, '_blank')
      }
    }
  }
}
</script>
