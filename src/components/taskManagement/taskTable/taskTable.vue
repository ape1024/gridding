<template>
  <div class="table">
    <ul class="tableUl">
      <li class="tableLi">
        当前生效
      </li>
      <li class="tableLi">
        作业规则名称
      </li>
      <li class="tableLiTwo">
        <div class="tableLiTwoHeader">
          生效时间
        </div>
        <div class="tableLiTwoBottom">
          <div class="startingTime">
            规则生效起始时间
          </div>
          <div class="endTime">
            规则生效结束时间
          </div>
        </div>
      </li>
      <li class="tableLi">
        作业类型
      </li>
      <li class="tableLi">
        当前生效状态
      </li>
      <li class="tableLi">
        最后修改时间
      </li>
      <li class="tableLiThree">
        操作
      </li>
    </ul>
    <ul class="tableContent">
      <li class="contentLi">
        <ul class="contentliUl">
          <li class="contentTd">
            1dad
          </li>
          <li class="contentTd">
            233
          </li>
          <li class="contenttdTwo">
            <div class="tableLiTwoBottom">
              <div class="contentstartingTime">
                21313
              </div>
              <div class="contentendTime">
                313
              </div>
            </div>
          </li>
          <li class="contentTd">
            233
          </li>
          <li class="contentTd">
            233
          </li>
          <li class="contentTd">
            233
          </li>
          <li class="contenttdTwo">
            233
          </li>
        </ul>
        <div class="contentChildre">
          <childrchairCar></childrchairCar>
          <!--<threeLevel></threeLevel>-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import childrchairCar from './haircarTask/childrchairCar'
import threeLevel from './threeLevel/threeLevel'
export default {
  name: 'taskTable',
  components: {
    childrchairCar,
    threeLevel
  },
  data () {
    return {
      tableData: [{
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7
      }]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable"
  .table
    initialize()
  .tableUl
    border 1px solid $border-Three
    background $background-Blueness
    color $color-Title
    initialize()
    display flex
    font-size $font-size-mini
    box-sizing border-box
    text-align center
  .tableLi
    line-height 96px
    width 200px
    box-sizing border-box
    height 96px
    border-right 1px solid $border-Three
  .tableLiTwo
    width 600px
    box-sizing border-box
    height 96px
    border-right 1px solid $border-Three
  .tableLiTwoHeader
     height 46px
     line-height 45px
     box-sizing border-box
     border-bottom 1px solid $border-Three
     width 100%
  .tableLiTwoBottom
    position relative
    overflow hidden
    width 100%
  .endTime
    height 100%
    float right
    box-sizing border-box
    line-height 50px
    width 50%
  .startingTime
    height 100%
    float left
    box-sizing border-box
    line-height 50px
    border-right 1px solid $border-Three
    width 50%
  .tableLiThree
    width 600px
    line-height 96px
    box-sizing border-box
    height 96px
  .tableContent
    border 1px solid $border-Three
    initialize()
    font-size $font-size-mini
    color $color-Convention
    box-sizing border-box
    text-align center
    border-top none
  .contentLi
    border-bottom 1px solid $border-Three
    width 100%
  .tableContent:last-child .contentLi
     border-bottom none
  .contentliUl
    width 100%
    height 48px
    line-height 48px
    overflow hidden
    position relative
    display flex
    cursor pointer
    transition .2s
  .contentTd
    width 200px
    box-sizing border-box
    border-right 1px solid $border-Three
    border-bottom 1px solid $border-Three
  .contenttdTwo
    width 600px
    box-sizing border-box
    border-right 1px solid $border-Three
    border-bottom 1px solid $border-Three
  .contentstartingTime
    height 100%
    float left
    box-sizing border-box
    border-bottom 1px solid $border-Three
    border-right 1px solid $border-Three
    width 50%
  .contentendTime
    height 100%
    float right
    border-bottom 1px solid $border-Three
    box-sizing border-box
    width 50%
  .contentliUl li:last-child
    border-right none
  .contentChildre
    box-sizing border-box
    padding 10px
    position relative
    overflow hidden
  .contentliUl:hover
     background $background-hover
</style>
