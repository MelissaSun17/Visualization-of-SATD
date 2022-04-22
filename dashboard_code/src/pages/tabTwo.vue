<template>
  <div>
    <h1>Information Visualization</h1>
    <h3>
        Instruction:</br>
        Each sub-rectangle represents a file of the project.</br>
        The area of a rectangle is determined by its #unhandled STADs. </br>
        The greater the number of unhandled STADs the file contains, the larger the area allocated to a file.</br>
        The color of a rectangle is determined by the average age of its unhandled STADs. </br>
        A file with a longer average age of unhandled STADs has a darker color; 
        conversely, A file with a shorter average age of unhandled STADs has a lighter color.</br></br>
        Tip:</br>
        To preview the exact #unhandled STADs and their average ages of a file, hover your mouse pointer over. 
    </h3>
    <card>
      <apexcharts
        width="98%"
        type="treemap"
        :options="chartOptions"
        :series="series"
        @dataPointSelection="myCustomMethod"
        v-if="getOrNot"
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
