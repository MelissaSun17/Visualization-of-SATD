<template>
<div>
  <h1>
    Tab 2: Showing information about area (file/commit/releases) sorting by
    total SATD/handled SATDs/unhandled SATDs </br> a. Top files with highest number of
    unhandled SATDs, Potential visualization plot? (treemap)
  </h1>
  <card>
      <TreeMap />
  </card>
    </div>
</template>
<script>
import TreeMap from '@/components/Charts/TreeMap.vue'
export default {
  components: {
    TreeMap
  }
}
</script>
<style>
</style>
