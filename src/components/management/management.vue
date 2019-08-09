<template>
  <div class="functional">
    <!--用户管理-->
    <div class="subject">
      <h4 class="functionalH4">{{title}}</h4>
      <div class="condition">
        <span>
           <el-button size="mini" type="primary">添加</el-button>
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
            label="职能组名称"
            width="500">
          </el-table-column>
          <el-table-column
            prop="name"
            label="部门"
            width="500">
          </el-table-column>
          <el-table-column
            prop="province"
            label="优先级"
            width="200">
          </el-table-column>
          <el-table-column
            prop="city"
            label="区域"
            width="500">
          </el-table-column>
          <el-table-column
            fixed="right"
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
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  name: 'management',
  data () {
    return {
      title: '',
      value: '',
      options: [],
      tableData: []
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  created () {
    this.title = '用户组管理信息列表'
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
</style>
