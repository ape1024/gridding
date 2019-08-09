<template>
  <div class="operationSetting">
    <!--操作设置-->
    <div class="subject">
      <h4 class="functionalH4">{{title}}</h4>
      <div class="condition">
        <!--<span class="conditionSpan">-->
           <!--<el-button size="medium" type="primary">查询</el-button>-->
        <!--</span>-->
        <span>
           <el-button @click="operationAddtion" size="medium" type="primary">新增</el-button>
        </span>
      </div>
      <div class="tabulation">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            align="center"
            prop="date"
            label="序号"
            width="500">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="操作项目"
            width="500">
          </el-table-column>
          <el-table-column
            prop="province"
            align="center"
            label="操作参数"
            width="200">
          </el-table-column>
          <el-table-column
            fixed="right"
            align="center"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!--组件-->
    <div class="module" v-if="moduleSwith">
      <div class="addModule" >
        <operationAModule @close="closeFn"></operationAModule>
      </div>
    </div>
  </div>
</template>

<script>
import operationAModule from './operationModule/operationAModule'
export default {
  name: 'operationSetting',
  components: {
    operationAModule
  },
  data () {
    return {
      title: '',
      value: '',
      options: [],
      tableData: [],
      moduleSwith: false
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    deleteClick (row) {
      console.log(row)
    },
    operationAddtion () {
      //  新增
      this.moduleSwith = true
    },
    closeFn () {
      //  关闭弹窗
      this.moduleSwith = false
    }
  },
  created () {
    this.title = '操作设置'
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
.operationSetting
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
     .conditionSpan
       margin-right 10px
   .tabulation
     initialize()
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
