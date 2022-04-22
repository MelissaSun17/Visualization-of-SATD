<template>
  <div>
    <h1>Overview</h1>
    <div>
      <upload-excel ref="uploadExcel"> </upload-excel>
    </div>
    <h3>
      <div>
        Tips: To add data from the CSV/XLSX file, drag the files to the drop box
        or click to browse. <b>Max limit is 4 files.</b>
      </div>
    </h3>
    <h1>
      <!-- <div class="col-md-4">
        <base-button type="primary" block @click="notifyVue('top', 'center')"
          >Top Center</base-button
        >
      </div> -->
    </h1>
  </div>
</template>
<script>
import UploadExcel from '@/components/UploadExcel'
import { BaseAlert } from '@/components'
import NotificationTemplate from './Notifications/NotificationTemplate'
import Card from '../components/Cards/Card.vue'
export default {
  components: {
    UploadExcel,
    BaseAlert,
    Card
  },
  data() {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  computed: {
    // enableRTL() {
    //   return this.$route.query.enableRTL
    // },
    // isRTL() {
    //   return this.$rtl.isRTL
    // },
    // bigLineChartCategories() {
    //   return this.$t('dashboard.chartCategories')
    // }
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1)
      this.$notify({
        component: NotificationTemplate,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: 'success',
        timeout: 0
      })
    }
  },
  mounted() {},
  beforeDestroy() {}
}
</script>
<style>
</style>

