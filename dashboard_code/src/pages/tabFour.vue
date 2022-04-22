<template>
  <div>
    <h1>Bar Chart</h1>
    <h3>
    Instruction:</br>
    ‘Handled SATDs’ indicates the frequency of SATDs handled within one day/one week/one month/
    one year/over one year, separately.</br>
    ‘Unhandled SATDs’ indicates the frequency of unhandled SATDs that have existed 
    one day/one week/one month/one year/over one year.</br></br>
    Tip:</br>
    To quickly see the number of handled SATDs/unhandled SATDs, hover your mouse pointer over the bar.</br>
    </h3>
    <!-- <h1>
      Tab 4: SATD handling speed (efficiency in handling SATD)
      how_many/what_percent of SATDs are handled within
      1_hour/1_day/1_week/1_month/1_year </br> Unit of one SATD: 
      Show how it evolves over time, for each appearance, what’s the content and context, file
      information, line information. when they are created, altered, and deleted
    </h1> -->
    <card>
      <div id="chart">
        <apexchart
          type="bar"
          height="500"
          :options="chartOptions"
          :series="seriesOne"
        ></apexchart>
      </div>
    </card>
        <card>
      <div id="chart">
        <apexchart
          type="bar"
          height="500"
          :options="chartOptionsTwo"
          :series="seriesTwo"
        ></apexchart>
        
      </div>
    </card>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import myStorage from '@/store/sessionStorage'
export default {
  components: {
    apexcharts: VueApexCharts
  },
  data() {
    return {
      dataList: [],
      tableList: [],
      handled: [],
      handledP: [],
      unhandled: [],
      unhandledP: [],
      seriesOne: [],
      seriesTwo: [],
      chartOptionsTwo: [],
      chartOptions: {
        title: {
          text: 'Frequency of handling SATDs',
          style: {
            fontSize: '20px'
          }
        },
        chart: {
          type: 'bar',
          height: 350,
          foreColor: 'white'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
          }
        },
        // dataLabels: {
        //   enabled: false
        // },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['one day', 'one week', 'one month', 'one year', 'ever'],
          title: {
            text: 'Time period of how many SATDs handled',
            style: {
              fontSize: '15px'
            }
          }
        },
        yaxis: {
          title: {
            text: '# of SATDs',
            style: {
              fontSize: '15px'
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          enabled: true,
          shared: true,
          intersect: false,
          style: {
            fontSize: '20px'
          }
        }
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.dataList = myStorage.getStorage('tabFour')
      if (this.dataList) {
        this.tableList = JSON.parse(this.dataList).results
        this.tableList.forEach((item) => {
          this.handled.push(item.handled_SATD)
          this.handledP.push(item.handled_SATD_p)
          this.unhandled.push(item.unhandled_SATD)
          this.unhandledP.push(item.unhandled_SATD_p)
        })
      }
      this.seriesOne.push({
        name: 'handled SATD',
        data: this.handled
      })
      this.seriesTwo.push({
        name: 'unhandled SATD',
        data: this.unhandled,
        colors: '#FEB019'
      })
      this.chartOptionsTwo = this.chartOptions
      this.chartOptionsTwo.fill.colors = ['#FEB019']
      this.chartOptionsTwo.xaxis.title.text =
        'Time period of the number of SATDs left'
      this.chartOptionsTwo.title.text = 'Frequency of lefting SATDs'
      this.chartOptionsTwo.colors = ['#FEB019']
    }
  }
}
</script>
<style>
</style>
