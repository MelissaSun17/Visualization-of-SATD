<template>
  <div>
    <h1>Line Chart</h1>
    <h3>
      Instruction:</br>
      This chart demonstrates the variation in SATD frequency over commit dates. </br></br>
      Tips:</br>
      To quickly check the exact #STADs/#handled STADs/#unhandled STADs, hover your mouse pointer over the node. </br>
      To redirect to the source code of a commit, click the node.</br>
      To enable/disable a line, click the legend above the chart.</br>
    </h3>
    <card>
      <h4>
        <div>
          <AreaChart height="500" />
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

