<template>
  <div class="region">
    <!--区域-->
    <div class="regionDiv">
      <!--左-->
      <div class="regionLeft">
        <div class="regionTitle">
          <div class="regionTitletop">
            <span class="regionSpan">
             <el-button>添加</el-button>
          </span>
            <span class="regionSpan">
            <el-button>修改</el-button>
          </span>
            <span class="regionSpan">
             <el-button>删除</el-button>
          </span>
          </div>
        </div>
        <div class="domain">
          <div class="domainTitle">
            区域类型
          </div>
          <div class="regionLeftDiv">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <!--中-->
      <div class="regionLeft">
        <div class="regionTitle">
          <div class="regionTitletop">
            <span class="regionSpan">
             <el-button>添加</el-button>
          </span>
            <span class="regionSpan">
            <el-button>修改</el-button>
          </span>
            <span class="regionSpan">
             <el-button>删除</el-button>
          </span>
          </div>
        </div>
        <div class="domain">
          <div class="domainTitle">
            组织机构管理
          </div>
          <div class="regionLeftDiv">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </div>
      </div>
      <!--右-->
      <div class="regionLeft">
        <div class="regionTitle"></div>
        <div class="domain">
          <div class="domainTitle">
            基本信息
          </div>
          <div class="regionLeftDiv">
            <ul class="information">
              <li class="informationLi">
                <span class="informationLiSpan">区域类型:</span>
              </li>
              <li class="informationLi">
                <span class="informationLiSpan">区域名称:</span>
                <span></span>
              </li>
              <li class="informationLi">
                <span class="informationLiSpan">区域编号:</span>
                <span></span>
              </li>
              <li class="informationLi">
                <span class="informationLiSpan">对应的BSSID:</span>
                <span></span>
              </li>
              <li class="informationLi">
                <span class="informationLiSpan">车站级:</span>
                <span><el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
</el-switch></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'region',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎'
      }, {
        date: '2016-05-04',
        name: '王小虎'
      }, {
        date: '2016-05-01',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }],
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      value: true
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .region
    overflow hidden
    position relative
    width 100%
  .regionTitle
    width 100%
    overflow hidden
    position relative
    height 60px
  .regionSpan
    margin-right 10px
  .regionDiv
    display flex
    overflow hidden
    position relative
    margin 20px
  .regionLeft
    box-sizing border-box
    overflow hidden
    position relative
    margin-right 20px
    width 33%
  .domain
    border-radius 5px
    position relative
    overflow hidden
    box-sizing border-box
    border 1px solid #DCDFE6
    width 100%
    .domainTitle
      text-indent 2em
      padding 10px 0
      font-size 16px
      border-bottom 1px solid #DCDFE6
      overflow hidden
      width 100%
  .regionLeftDiv
    margin 10px
    position relative
    overflow-y auto
    min-height 650px
    max-height 650px
  .information
    margin-top 20px
    overflow hidden
    position relative
    width 100%
  .informationLi
    margin-bottom 20px
  .informationLiSpan
    margin-right 10px
</style>
