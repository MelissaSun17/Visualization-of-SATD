<template>
<div>
  <h1>
    Tab 4: SATD handling speed (efficiency in handling SATD)
    how_many/what_percent of SATDs are handled within
    1_hour/1_day/1_week/1_month/1_year </br> Unit of one SATD: 
    Show how it evolves over time, for each appearance, what’s the content and context, file
    information, line information. when they are created, altered, and deleted
  </h1>
  <card>
      <div>
      <PieChart />
    </div>
    <!-- <div>
      <RadialBarChart />
    </div> -->
        <div>
      <CircleChart />
    </div>
    </card>
    </div>
  
</template>
<script>
import PieChart from '@/components/Charts/PieChart.vue'
// import RadialBarChart from '@/components/Charts/RadialBarChart.vue'
import CircleChart from '@/components/Charts/CircleChart.vue'
export default {
  components: {
    PieChart,
    CircleChart
  }
}
</script>
<style>
</style>
