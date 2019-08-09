<template>
  <div class="functional">
    <!--列车信息设置-->
    <div class="subject">
      <h4 class="functionalH4">{{title}}</h4>
      <div class="condition">
        <span class="conditionSpan">
           <el-button @click="setting" size="medium" type="primary">作业列车类型设置</el-button>
        </span>
      </div>
      <div class="tabulation">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="date"
            align="center"
            label="车次"
            width="200">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="始发站"
            width="300">
          </el-table-column>
          <el-table-column
            prop="province"
            align="center"
            label="到达站"
            width="300">
          </el-table-column>
          <el-table-column
            prop="city"
            align="center"
            label="作业列车类型"
            width="600">
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
      </div>
    </div>
    <!--组件-->
    <div class="module" v-if="moduleSwith">
      <div class="addModule">
        <settingModule @close="closeFn"></settingModule>
      </div>
    </div>
  </div>
</template>

<script>
import settingModule from './settingModule/settingModule'
export default {
  name: 'messageSettings',
  data () {
    return {
      title: '',
      value: '',
      options: [],
      tableData: [],
      moduleSwith: false
    }
  },
  components: {
    settingModule
  },
  methods: {
    setting () {
      this.moduleSwith = true
    },
    closeFn () {
      this.moduleSwith = false
    },
    handleClick (row) {
      console.log(row)
    }
  },
  created () {
    this.title = '列车信息设置'
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  .functional
    overflow hidden
    position relative
    height 100%
    width 100%
  .subject
    subject()
    .functionalH4
      titleH()
    .condition
      margin-bottom 20px
      line-height 28px
      text-align right
      overflow hidden
      .conditionSpan
        margin-right 10px
    .tabulation
      overflow hidden
      width 100%
  .module
    module()
  .addModule
    position absolute
    top 50%
    left 50%
    margin -200px 0 0 -400px
    background $background-FFF
    border-radius 10px
    width 800px
</style>
