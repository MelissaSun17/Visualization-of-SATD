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
   <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{ prop: 'index', order: 'descending' }"
          >
          <el-table-column prop="index" label="index" sortable width="50">
            </el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="date" label="日期" sortable width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
          </el-table>
      <div class="col-12"  v-if="getOrNot">
        <card :title="table2.title">
          <div class="table-responsive">
              <div>
          <input
            type="text"
            id="myInput"
            onkeyup="sorting"
            placeholder="Search for names.."
          />
        </div>
            <!-- <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{ prop: 'index', order: 'descending' }"
          >
          <el-table-column prop="index" label="index" sortable width="50">
            </el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="date" label="日期" sortable width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
          </el-table> -->
        
            <!-- <base-table 
                        :data="table2.data"
                        :columns="table2.columns"
                        thead-classes="text-primary">
            </base-table> -->
            <!-- <table-list
                :data="table2.data"
                :columns="table2.columns">
            </table-list> -->
          </div>
        </card>
      </div>
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
      getOrNot: false,
      table2: {
        title: 'ALL SATDs',
        columns: null,
        data: null
      }
    }
  },
  methods: {
    getDataFromChild(param) {
      debugger
      this.dataList = param
      if (this.dataList) {
        this.table2.columns = this.dataList.header
        this.table2.data = this.dataList.results
        this.getOrNot = true
      }
    },
    sorting() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue
      input = document.getElementById('myInput')
      filter = input.value.toUpperCase()
      table = document.getElementById('myTable')
      tr = table.getElementsByTagName('tr')

      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0]
        if (td) {
          txtValue = td.textContent || td.innerText
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = ''
          } else {
            tr[i].style.display = 'none'
          }
        }
      }
    }
  }
}
</script>
<style>
</style>
