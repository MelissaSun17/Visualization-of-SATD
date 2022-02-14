<template>
  <div>
    <h1>
      Tab 3: The number of all SATDs and handled SATDs of the project over time,
      allow users to see time stamps referred to release or able to click data
      points to pull out SATDs on one release version. (you can show them in a
      time series graph that both of them continually increase over time but
      their distance increases and decreases over time. When their distance is
      zero, it means that in that time all SATDs were handled) It would be
      something like this but with two series not three.
    </h1>
    <card>
      <div>
        <AreaChart />
      </div>
    </card>
  </div>
</template>

<script>
import AreaChart from '@/components/Charts/AreaChart.vue'

export default {
  name: 'tabThree',
  components: {
    AreaChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    }
  }
}
</script>

<style>
</style>

