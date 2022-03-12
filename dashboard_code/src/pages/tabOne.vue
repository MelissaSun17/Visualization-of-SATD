<template>
  <div>
    <div>
      <!-- <upload-excel 
          @on-selected-file="getDataFromChild"
          ref="uploadExcel">
        </upload-excel> -->
    </div>
    <h4>
      <div class="col-12" v-if="getOrNot">
        <card>
          <h3>All SATDs:</h3>
          <div class="row">
            <div class="col-md-5 pr-md-1">
              <base-input
                style="margin-left: 16px"
                class="filter-item"
                placeholder="Please enter file name"
                v-model="searchFile"
              ></base-input>
            </div>
            <div class="col-md-3 px-md-1">
              <base-button
                style="margin-left: 16px"
                size="mini"
                type="default"
                @click="search"
                >Search</base-button
              >
            </div>
          </div>
          <base-button
            style="margin-left: 16px"
            size="mini"
            type="default"
            @click="recentCreated"
            >Most recently created unhandled SATDs</base-button
          >
          <base-button
            style="margin-left: 16px"
            size="mini"
            type="default"
            @click="LongLife"
            >Top long life unhandled SATDs</base-button
          >

          <div>
            <el-table
              empty-text="no data now"
              border
              :data="tableList"
              style="width: 100%"
              size="medium"
            >
              <el-table-column prop="index" label="index" sortable width="80px">
              </el-table-column>
              <el-table-column
                prop="createdInFile"
                label="Created in the file"
                show-overflow-tooltip
              >
              </el-table-column>
              <el-table-column
                prop="lastFile"
                label="Last file"
                show-overflow-tooltip
              >
              </el-table-column>
              <el-table-column prop="line" label="Line" sortable>
              </el-table-column>
              <el-table-column
                prop="createdInCommitUrl"
                label="created In Commit Url"
                show-overflow-tooltip
              >
                <template v-slot:default="created"
                  ><a :href="created.row.createdInCommitUrl">
                    {{
                      created.row.createdInCommitUrl.substr(
                        created.row.createdInCommitUrl.length - 8
                      )
                    }}</a
                  ></template
                >
              </el-table-column>
              <el-table-column
                prop="deletedInCommitUrl"
                label="deleted In Commit Url"
                show-overflow-tooltip
              >
                <template v-slot:default="deleted"
                  ><a
                    :href="deleted.row.deletedInCommitUrl"
                    v-if="deleted.row.deletedInCommitUrl"
                  >
                    {{
                      deleted.row.deletedInCommitUrl.substr(
                        deleted.row.deletedInCommitUrl.length - 8
                      )
                    }}</a
                  ></template
                >
              </el-table-column>
              <el-table-column
                prop="createdInDate"
                type="date"
                label="created In Date"
                sortable
                :formatter="dateformat"
              >
              </el-table-column>
              <el-table-column
                prop="deletedInDate"
                type="date"
                label="deleted In Date"
                sortable
                :formatter="dateformat1"
              >
              </el-table-column>
              <el-table-column
                prop="content"
                label="content"
                show-overflow-tooltip
              >
              </el-table-column>
            </el-table>
          </div>
        </card>
      </div>
    </h4>
  </div>
</template>
<script>
import XLSX from 'xlsx'
import UploadExcel from '@/components/UploadExcel'
import { BaseTable } from '@/components'
import { mapGetters } from 'vuex'
import myStorage from '@/store/sessionStorage'
export default {
  components: { UploadExcel, BaseTable },
  data() {
    return {
      searchFile: '',
      dataList: [],
      longLifeList: [],
      tableList: [],
      getOrNot: false,
      ISdeleted: true
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    search() {
      debugger
      var temp = []
      this.getList()
      if (this.searchFile) {
        console.log(this.searchFile)
        temp = this.tableList.filter((item) => {
          var line = item.createdInFile
            .toLowerCase()
            .includes(this.searchFile.toLowerCase())
          return line
        })
        this.tableList = temp
      }
    },
    sortNumber(val) {
      return (a, b) => {
        return b[val] - a[val]
      }
    },
    LongLife() {
      this.tableList.forEach((item) => {
        if (item.deletedInDate) {
          item.long = item.deletedInDate - item.createdInDate
        } else item.long = Date.now() / 10000000 - item.createdInDate
      })
      this.tableList.sort(this.sortNumber('long'))
    },
    recentCreated() {
      this.tableList.sort(this.sortNumber('createdInDate'))
    },
    // getDataFromChild(param) {
    //   // this.dataList = param
    //   // if (this.dataList) {
    //   //   this.table2.columns = this.dataList.header
    //   //   this.table2.dataRow = this.dataList.results
    //   //   this.tableList = this.dataList.results
    //   //   this.getOrNot = true
    //   // }
    //   this.getList()
    // },
    getList() {
      this.dataList = myStorage.getStorage('tabOne')
      // this.dataList = this.$store.getters.tabOne
      // debugger
      if (this.dataList) {
        this.tableList = JSON.parse(this.dataList).results
        // this.tableList = this.dataList.results
        this.getOrNot = true
      }
    },
    timetrans(time) {
      if (!time) {
        return ''
      } else {
        const date = new Date(time * 1000)
        const dateNumFun = (num) => (num < 10 ? `0${num}` : num)
        const [Y, M, D, h, m, s] = [
          date.getFullYear(),
          dateNumFun(date.getMonth() + 1),
          dateNumFun(date.getDate()),
          dateNumFun(date.getHours()),
          dateNumFun(date.getMinutes()),
          dateNumFun(date.getSeconds())
        ]
        return `${Y}-${M}-${D} ${h}:${m}:${s}`
      }
    },
    formatDate(numb) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const date = time.getDate()
      var hour = time.getHours()
      const min = time.getMinutes()
      const sec = time.getSeconds()
      // if (format && format.length === 1) {
      //   return year + month + date + hour + min + sec
      // }
      // if (time.getHours() + 16 >= 24) {
      //   hour = time.getHours() + 16 - 24
      // }
      return (
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (date < 10 ? '0' + date : date) +
        ' ' +
        (hour < 10 ? '0' + hour : hour) +
        ':' +
        (min < 10 ? '0' + min : min) +
        ':' +
        (sec < 10 ? '0' + sec : sec)
      )
    },
    dateformat(row, column) {
      var date = row.createdInDate
      if (!date) return ''
      var result = this.formatDate(date)
      return result
    },
    dateformat1(row, column) {
      var date = row.deletedInDate
      if (!date) return ''
      var result = this.formatDate(date)
      return result
    }
  }
}
</script>
<style>
body .el-table th.gutter {
  display: table-cell !important;
}
.el-table__header-wrapper {
  border-bottom: 1.5mm solid white;
  vertical-align: center;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
.el-table__row {
  border-bottom: 0.5mm solid white;
  vertical-align: text-top;
}

.el-table__cell {
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.el-table {
  /*border: 0px;*/
  .is-sortable {
    .cell {
      padding: 0px !important;

      .caret-wrapper {
        width: 14px;

        .sort-caret {
          left: 3px;
          color: white;
        }
      }
    }
  }
}
</style>

