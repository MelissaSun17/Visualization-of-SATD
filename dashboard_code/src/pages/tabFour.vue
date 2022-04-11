<template>
  <div>
    <h1>Bar Chart</h1>
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
          :series="series"
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
      series: [],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          foreColor: 'white'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['one day', 'one week', 'one month', 'one year', 'ever']
        },
        yaxis: {
          title: {
            // text: '$ (thousands)'
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
            fontSize: '20px',
            fontFamily: undefined
          }
          // items: {
          //   display: 'flex'
          // },
          // y: {
          //   formatter: function (val) {
          //     return val
          //   }
          // }
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
          // this.chartOptions.xaxis.categories.push(item.under_age)
        })
      }
      this.series.push({ name: 'handled SATD', data: this.handled })
      this.series.push({ name: 'unhandled SATD', data: this.unhandled })
      console.log(this.handled)
      // this.getOrNot = true
      // this.$forceUpdate()
    }
  }
}
</script>
<style>
</style>
