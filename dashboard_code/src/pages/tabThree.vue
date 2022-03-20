<template>
  <div>
    <card>
      <div>
        <AreaChart style="height: 100%" />
      </div>
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

