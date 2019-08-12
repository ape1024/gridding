<template>
  <div class="typographic">
    <!--排班设置-->
    <div class="subject">
      <h4 class="functionalH4">{{title}}</h4>
      <div class="condition">

      </div>
      <div class="tabulation">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="计划名称">
          </el-table-column>
          <el-table-column label="生效时间">
            <el-table-column
              prop="province"
              label="计划生效起始时间">
            </el-table-column>
            <el-table-column
              prop="city"
              label="计划生效结束时间">
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="name"
            label="当前启用状态">
          </el-table-column>
          <el-table-column
            prop="name"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!--弹出框-->
    <div class="module">
      <constraintMechanism></constraintMechanism>
    </div>
  </div>
</template>

<script>
import constraintMechanism from './constraintMechanism/constraintMechanism'
export default {
  name: 'typographicSettings',
  components: {
    constraintMechanism
  },
  data () {
    return {
      title: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎'
      }]
    }
  },
  methods: {
  },
  created () {
    this.title = '排班设置'
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  .typographic
    initialize()
  .subject
    subject()
  .functionalH4
    titleH()
  .condition
    margin-bottom 20px
    line-height 28px
    text-align right
    overflow hidden
  .tabulation
    initialize()
  .module
    module()
</style>
