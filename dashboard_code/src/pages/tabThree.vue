<template>
  <div>
    <card>
      <div>
        <AreaChart @click="jump" />
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

