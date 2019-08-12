<template>
  <!--排班设置-->
  <div class="constraintMechanism">
    <div class="constraintLeft">
      <h4 class="titleH">
        职能组
      </h4>
      <div class="constraintleftList">
        <!--抽出一个组件来-->
        <functionalGroup></functionalGroup>
      </div>
    </div>
    <div class="constraintRight">
      <div class="constraintOperation">
        <el-button type="primary">班时设置</el-button>
        <el-button type="primary">班序设置</el-button>
        <el-button type="primary">职能组设置</el-button>
        <el-button type="primary">作业班设置</el-button>
        <el-button type="primary">作业小组设置</el-button>
      </div>
      <div class="constraintRightTitleH">
        上水组排班设置
      </div>
      <div class="mainBody" :style="mainBodyWidth()">
        <div class="mainBodyTable">
          <ul class="tableul">
            <li class="tableli">
              <div class="tabBias">
                <!--斜线-->
              </div>
              <p class="tableliP">
                作业班
              </p>
              <p class="tableliPtwo">
                天数
              </p>
            </li>
            <li :key="index" v-for="(item, index) in predestination" class="tableli">
             {{index}}
            </li>
          </ul>
          <ul class="tableul">
            <li class="tableli">

            </li>
            <li :key="index" v-for="(item, index) in predestination" class="tableli">
              <div class="timeSign">
                <timeSign></timeSign>
              </div>
            </li>
          </ul>
          <ul class="tableul tableullast">
            <li class="tableli">

            </li>
            <li :key="index" v-for="(item, index) in predestination" class="tableli">

            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import functionalGroup from './functionalGroup/functionalGroup'
import timeSign from './timeSign/timeSign'
export default {
  name: 'constraintMechanism',
  components: {
    functionalGroup,
    timeSign
  },
  data () {
    return {
      predestination: 100
    }
  },
  methods: {
    mainBodyWidth () {
      let width = (this.predestination + 1) * 232
      return `width: ${width}px`
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable"
  .constraintMechanism
    background #fff
    height 860px
    overflow-x auto
    position relative
    box-sizing border-box
    padding 50px 0
    margin 50px
  .constraintLeft
    float left
    overflow hidden
    position relative
    width 200px
    margin-right 50px
  .titleH
    titleH()
  .constraintleftList
    overflow hidden
    position relative
    width 100%
  .constraintRight
    float right
    width 880px
    position relative
  .constraintOperation
    text-align left
    overflow hidden
    position relative
    width 100%
  .mainBody
    min-height 300px
    max-height 300px
    position relative
    overflow-x hidden
    overflow-y auto
  .constraintRightTitleH
    titleH()
    margin-top 30px
    width 600px
  .mainBodyTable
    position relative
    display inline-block
  .tableul
    border 1px solid $border-Stair
    position relative
    border-bottom none
    overflow hidden
  .tableli
    float left
    width 231px
    height 30px
    color $color-Convention
    line-height 30px
    text-align center
    box-sizing border-box
    overflow hidden
    border-right 1px solid $border-Stair
    position relative
  .tableul .tableli:last-child
    border-right 1px solid transparent
  .tabBias
    height 1px
    transform-origin top left
    animation slash 5s infinite ease
    background $border-Stair
    transform rotateZ(8deg) scale(1.414)
    width 100%
  .tableliP
    font-size $font-size-mini
    color $color-Minor
    position absolute
    bottom -6px
    left 5px
  .tableliPtwo
    font-size $font-size-mini
    color $color-Minor
    position absolute
    top -6px
    right 5px
  .tableullast
    border-bottom 1px solid $border-Stair!important
  .timeSign
    position absolute
    top 0
    left 0
    overflow hidden
    height 100%
    width 100%
</style>
