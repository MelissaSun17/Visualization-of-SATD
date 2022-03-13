<template>
  <div>
    <input
      id="excel-upload-input"
      ref="excel-upload-input"
      type="file"
      accept=".xlsx, .xls, .csv"
      @change="handkeFileChange"
      multiple
    />
    <div
      id="drop"
      @drop="handleDrop"
      @dragover="handleDragover"
      @dragenter="handleDragover"
    >
      Drop excel file here or
      <base-button
        style="margin-left: 16px"
        size="mini"
        type="default"
        @click="handleUpload"
        >browse</base-button
      >
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import BaseButton from '@/components/BaseButton'
import { mapGetters } from 'vuex'
import myStorage from '@/store/sessionStorage'
export default {
  components: { BaseButton },
  name: 'UploadExcel',
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      }
      // tabTwoData: {
      //   header: null,
      //   results: null
      // },
      // tabThreeData: {
      //   header: null,
      //   results: null
      // },
      // tabFourData: {
      //   header: null,
      //   results: null
      // }
    }
  },
  methods: {
    generateDate({ header, results, fileName }) {
      debugger
      this.excelData.header = header
      this.excelData.results = results
      if (fileName == 'tab1.csv' || fileName == 'tab1.xlsx') {
        myStorage.setStorage('tabOne', this.excelData)
        console.log(myStorage.getStorage('tabOne'))
        // this.$setStorage('tabOne', this.excelData)
        // this.$store.dispatch('changeTabOne', this.excelData)
        // myStorage.setStorage()
      } else if (fileName == 'tab2.csv' || fileName == 'tab2.xlsx') {
        myStorage.setStorage('tabTwo', this.excelData)
      } else if (fileName == 'tab3.csv' || fileName == 'tab3.xlsx') {
        myStorage.setStorage('tabThree', this.excelData)
        console.log(myStorage.getStorage('tabThree'))
      } else if (fileName == 'tab4.csv' || fileName == 'tab4.xlsx') {
        myStorage.setStorage('tabFour', this.excelData)
      } else {
        this.$store.dispatch('changeTabOne', this.excelData)
      }
      // this.$emit('on-selected-file', this.excelData)
    },
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('Only support uploading one file!')
        return
      }
      const itemFile = files[0] // only use files[0]
      debugger
      console.log(files)
      this.readerData(itemFile)
      if (files[1]) {
        this.readerData(files[1])
      }
      if (files[2]) {
        this.readerData(files[2])
      }
      if (files[3]) {
        this.readerData(files[3])
      }
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleUpload() {
      document.getElementById('excel-upload-input').click()
    },
    handkeFileChange(e) {
      const files = e.target.files
      const itemFile = files[0] // only use files[0]
      debugger
      console.log(files)
      //const fileTwo = files[1]
      if (!itemFile) return
      this.readerData(itemFile)
      if (files[1]) {
        this.readerData(files[1])
      }
      if (files[2]) {
        this.readerData(files[2])
      }
      if (files[3]) {
        this.readerData(files[3])
      }
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel
    },
    readerData(itemFile) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = e.target.result
        const fixedData = this.fixdata(data)
        const workbook = XLSX.read(btoa(fixedData), {
          type: 'base64',
          cellDates: true,
          dateNF: 'yyyy/mm/dd HH:mm:ss'
        })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        const header = this.get_header_row(worksheet)
        const results = XLSX.utils.sheet_to_json(worksheet, { raw: false })
        const fileName = itemFile.name
        this.generateDate({ header, results, fileName })
        // this.generateDate({ header, results, fileNum })
      }
      reader.readAsArrayBuffer(itemFile)
    },
    fixdata(data) {
      let o = ''
      let l = 0
      const w = 10240
      for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        )
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    },
    get_header_row(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell =
          sheet[
            XLSX.utils.encode_cell({ c: C, r: R })
          ] /* find the cell in the first row */
        var hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    }
  }
}
</script>

<style scoped>
#excel-upload-input {
  display: none;
  z-index: -9999;
}
#drop {
  border: 2px dashed #bbb;
  width: 600px;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  margin-left: 0px;
  margin-bottom: 20px;
}
</style>
