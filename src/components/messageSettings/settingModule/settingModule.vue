<template>
  <div class="subject">
    <h4 class="moduleTitle">
      {{settingTitle}}
    </h4>
    <div class="moduleSubject">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="province"
          align="center"
          width="100"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="city"
          align="center"
          label="作业列车类型">
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="operation">
        <el-button size="medium" type="primary">保存</el-button>
        <el-button size="medium" @click="close">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'settingModule',
  data () {
    return {
      tableData: [],
      settingTitle: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  created () {
    this.settingTitle = '列车类型设置'
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable"
  .moduleTitle
    moduleTitle()
  .operation
    modeleoPeration()
</style>
