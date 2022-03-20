<template>
<div>
  <h1>Column Chart</h1>
  <h1>
    Tab 4: SATD handling speed (efficiency in handling SATD)
    how_many/what_percent of SATDs are handled within
    1_hour/1_day/1_week/1_month/1_year </br> Unit of one SATD: 
    Show how it evolves over time, for each appearance, what’s the content and context, file
    information, line information. when they are created, altered, and deleted
  </h1>
  <card>
          <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      <!-- <div>
      <PieChart />
    </div> -->
    <!-- <div>
      <RadialBarChart />
    </div> -->
        <!-- <div>
      <CircleChart />
    </div> -->
    </card>
    </div>
  
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import PieChart from '@/components/Charts/PieChart.vue'

// import RadialBarChart from '@/components/Charts/RadialBarChart.vue'
import CircleChart from '@/components/Charts/CircleChart.vue'
export default {
  components: {
    PieChart,
    CircleChart,
    apexcharts: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
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
          categories: [
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct'
          ]
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    }
  }
}
</script>
<style>
</style>
