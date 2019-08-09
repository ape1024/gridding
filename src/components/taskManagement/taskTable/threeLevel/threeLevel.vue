<template>
  <!--常规作业-->
  <div class="tasktableChildre">
    <ul class="childreHead">
      <li class="tasktableLi">
        作业名称
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
        操作
      </li>
    </ul>
    <ul class="chaircarContent">
      <li class="ContentLi">
        <ul class="ContentUl">
          <li class="tasktableLi">
            作业名称
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
            操作
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'threeLevel'
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
  /*background #ECF5FF*/
  .tasktableLi
    overflow hidden
    border-right 1px solid $border-Three
    width 100%
  .tasktableLiTwo
    width 100%
    overflow hidden
    border-right 1px solid $border-Three
  .tasktableLiThree
    width 100%
    overflow hidden
    border-right 1px solid $border-Three
  .chaircarContent .ContentLi:last-child
    border-bottom none
  .chaircarContent
    border 1px solid $border-Three
    box-sizing border-box
    border-top none
    overflow hidden
    width 100%
  .ContentLi
    height 48px
    line-height 48px
    border-bottom 1px solid $border-Three
    overflow hidden
    width 100%
  .ContentUl
    overflow hidden
    display flex
    width 100%
  .ContentUl li:last-child
    border-right none
</style>
