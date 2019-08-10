<template>
  <!--接发车作业-->
  <div class="tasktableChildre">
    <ul class="childreHead">
      <li class="tasktableLi">
        作业名称
      </li>
      <li class="tasktableLi">
        作业简称
      </li>
      <li class="tasktableLi">
        语音指令
      </li>
      <li class="tasktableLiTwo">
        职能组
      </li>
      <li class="tasktableLiTwo">
        旅服操作项
      </li>
      <li class="tasktableLiTwo">
        基准时间依据
      </li>
      <li class="tasktableLiThree">
        作业提醒时间于基准时间（分钟）
      </li>
      <li class="tasktableLiTwo">
        关联作业列车类型
      </li>
      <li class="tasktableLiThree">
        操作
      </li>
    </ul>
    <ul class="chaircarContent">
      <li class="ContentLi">
        <ul class="ContentUl">
          <li class="tasktableLi">
            11
          </li>
          <li class="tasktableLi">
            11
          </li>
          <li class="tasktableLi">
            11
          </li>
          <li class="tasktableLiTwo">
            22
          </li>
          <li class="tasktableLiTwo">
            22
          </li>
          <li class="tasktableLiTwo">
            22
          </li>
          <li class="tasktableLiThree">
            33
          </li>
          <li class="tasktableLiTwo">
            22
          </li>
          <li class="tasktableLiThree">
            33
          </li>
        </ul>
        <div class="conventionTask">
          <conventionTask></conventionTask>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import conventionTask from '../conventionTask/conventionTask'
export default {
  name: 'childrchairCar',
  components: {
    conventionTask
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/variable"
  .tasktableChildre
    initialize()
  .childreHead
    text-align center
    overflow hidden
    height 48px
    line-height 48px
    font-size $font-size-mini
    color $color-Title
    box-sizing border-box
    display flex
    border 1px solid $border-Three
    border-top none
    width 100%
    background $background-Wathet
  .tasktableLi
    overflow hidden
    border-right 1px solid $border-Three
    width 150px
  .tasktableLiTwo
    overflow hidden
    border-right 1px solid $border-Three
    width 220px
  .tasktableLiThree
    overflow hidden
    border-right 1px solid $border-Three
    width 250px
  .chaircarContent .ContentLi:last-child
     border-bottom none
  .chaircarContent
    border 1px solid $border-Three
    box-sizing border-box
    border-top none
    overflow hidden
    width 100%
  .ContentLi
    border-bottom 1px solid $border-Three
    overflow hidden
    width 100%
  .ContentUl
    height 48px
    line-height 48px
    overflow hidden
    display flex
    width 100%
    transition .2s
    cursor pointer
    border-bottom 1px solid $border-Three
  .ContentUl li:last-child
    border-right none
  .conventionTask
    position relative
    box-sizing border-box
    padding 10px
    overflow hidden
  .ContentUl:hover
     background $background-hover
</style>
