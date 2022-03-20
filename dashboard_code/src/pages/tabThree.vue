<template>
  <div>
    <h1>Line Chart</h1>
    <card>
      <h4>
        <div>
          <AreaChart height="600" />
        </div>
      </h4>
    </card>
  </div>
</template>

<script>
import AreaChart from '@/components/Charts/AreaChart.vue'
import Card from '../components/Cards/Card.vue'
export default {
  name: 'tabThree',
  components: {
    AreaChart,
    Card
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style>
</style>

