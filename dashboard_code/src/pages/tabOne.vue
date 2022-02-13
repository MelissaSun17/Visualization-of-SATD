<template>
  <div>
    <h1>
      Tab 1: A table of all SATDs with the capability of sorting on each column
      (and maybe also filtering) </br> a. The most recently created unhandled SATDs
      </br>b. Top long life SATDs that are unhandled yet
    </h1>
      <div>
        <upload-excel 
          @on-selected-file="getDataFromChild"
          ref="uploadExcel">
        </upload-excel>
      </div>
      <h4>
        <div class="col-12"  v-if="getOrNot">
          <card>
             <h3> All SATDs: </h3>
             <base-button
        style="margin-left: 16px"
        size="mini"
        type="default"
        >Shows the most recently created unhandled SATDs</base-button
      >
                   <base-button
        style="margin-left: 16px"
        size="mini"
        type="default"

        >Shows top long life SATDs that are unhandled yet</base-button
      >
            <div>
          <el-table
              empty-text="no data now"
              border
              :data="tableList"
              style="width: 100%"
              size="medium"
            >
              <el-table-column prop="index" label="index" sortable width=80px>
              </el-table-column>
              <el-table-column prop="createdInFile" label="Created in the file" show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="lastFile" label="Last file" show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="line" label="Line" sortable >
              </el-table-column>
              <el-table-column prop="createdInCommitUrl" label="created In Commit Url" show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="deletedInCommitUrl" label="deleted In Commit Url" show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="createdInDate" type="date" label="created In Date" sortable >
              </el-table-column>
              <el-table-column prop="deletedInDate" type="date" label="deleted In Date" sortable >
              </el-table-column>
              <el-table-column prop="content" label="content" show-overflow-tooltip>
              </el-table-column>
            </el-table>
              <!-- <base-table 
                          :data="table2.data"
                          :columns="table2.columns"
                          thead-classes="text-primary">
              </base-table> -->
            </div>
          </card>
        </div>
      </h4>
  </div>
</template>
<script>
import XLSX from 'xlsx'
import UploadExcel from '@/components/UploadExcel'
import buildTable from '@/components/table'
import { BaseTable } from '@/components'
const table2Columns = [
  'createdInFile',
  'lastFile',
  'createdInLine',
  'line',
  'createdInCommitUrl',
  'deletedInCommitUrl',
  'createdInDate',
  'deletedInDate',
  'content'
]
export default {
  components: { UploadExcel, BaseTable, buildTable },
  data() {
    return {
      dataList: [],
      tableList: [],
      getOrNot: false,
      table2: {
        title: 'ALL SATDs',
        columns: null,
        dataRow: null
      }
    }
  },
  methods: {
    getDataFromChild(param) {
      debugger
      this.dataList = param
      if (this.dataList) {
        this.table2.columns = this.dataList.header
        this.table2.dataRow = this.dataList.results
        this.tableList = this.dataList.results
        this.getOrNot = true
      }
    },
    formatter1(row, column) {
      return row.createdInFile
    },
    formatter2(row, column) {
      return row.lastFile
    },
    formatter3(row, column) {
      return row.createdInCommitUrl
    },
    formatter4(row, column) {
      return row.deletedInCommitUrl
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

