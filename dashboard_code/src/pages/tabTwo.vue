<template>
  <div>
    <h1>Tree Map</h1>
    <!-- <card>
      <TreeMap />
  </card> -->
    <card>
      <apexcharts
        width="98%"
        type="treemap"
        :options="chartOptions"
        :series="series"
        @dataPointSelection="myCustomMethod"
        v-if="getOrNot"
        class="xxx"
      ></apexcharts>
    </card>
  </div>
</template>
<script>
import TreeMap from '@/components/Charts/TreeMap.vue'
import VueApexCharts from 'vue-apexcharts'
import myStorage from '@/store/sessionStorage'
export default {
  name: 'tabTwo',
  components: {
    TreeMap,
    apexcharts: VueApexCharts
  },
  data() {
    return {
      dataList: [],
      tableList: [],
      colorList: [],
      seriesData: [],
      link: [],
      getOrNot: false,
      chartOptions: {
        chart: {
          type: 'treemap'
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '40',
            colors: ['#fff']
          }
        },
        // dataLabels: {
        //   enabled: true,
        //   style: {
        //     color: undefined,
        //     fontSize: '14px',
        //     fontFamily: undefined
        //   }
        // },
        colors: [],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false
          }
        },
        tooltip: {
          style: {
            fontSize: '30px',
            fontFamily: undefined
          }
        }
      },
      series: [
        {
          data: []
        }
      ]
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.dataList = myStorage.getStorage('tabTwo')
      if (this.dataList) {
        this.tableList = JSON.parse(this.dataList).results
        this.tableList.forEach((item) => {
          this.chartOptions.colors.push(item.color)
          this.series[0].data.push({
            x: item.file,
            y: Number(item.unhandled_SATD_count)
          })
          this.link.push(item.file_url)
        })
      }
      console.log(this.chartOptions.colors)
      console.log(this.series[0].data)
      this.getOrNot = true
      this.$forceUpdate()
    },
    myCustomMethod(event, chartContext, config) {
      if (config) {
        var jumpLink = this.link[config.dataPointIndex]
        window.open(jumpLink, '_blank')
      }
    }
  }
}
</script>
<style>
.xxx {
  font-size: 20px;
}
</style>
