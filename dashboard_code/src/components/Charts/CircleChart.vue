<template>
  <div id="app">
    <hr />

    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'CircleChart',
  mounted() {
    // code from Example: https://apexcharts.com/javascript-chart-demos/area-charts/spline/
    var options = {
      chart: {
        height: 350,
        type: 'radialBar'
      },
      series: [70, 85, 85],
      colors: ['#FA595E', '#26AEF0', '#29B589'],
      labels: ['Visibly', 'Joint Analytics', 'Green Tech'],
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: 'TOTAL'
            }
          }
        }
      }
    }

    if (this.$refs.chart) {
      // HTML element exists
      var chart = new ApexCharts(this.$refs.chart, options)
      chart.render()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.chart {
  width: 100%;
}
</style>
