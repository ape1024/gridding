<template>
  <div class="timeSign">
    <div class="timesignLine"></div>
    <div class="expression">

    </div>
    <!--<div class="expression expressionOne"></div>-->
    <!--<div class="expression expressionTwo"></div>-->
    <!--<div class="expression expressionThree"></div>-->
    <!--<div class="expression expressionFour"></div>-->
    <!--<div class="expression expressionFive"></div>-->
    <!--<div class="expression expressionSix"></div>-->
    <!--<div class="expression expressionSeven"></div>-->
    <!--<div class="expression expressionEight"></div>-->
    <!--<div class="expression expressionNine"></div>-->
    <!--<span class="expressionPOne">06:00</span>-->
    <!--<span class="expressionPTwo">18:00</span>-->
    <!--<span class="expressionPThree">24:00</span>-->
  </div>
</template>

<script>
export default {
  name: 'timeSign',
  data () {
    return {
      canvasIndex: '',
      timing: 23
    }
  },
  created () {

  },
  methods: {
    ergodic () {

    }
  },
  mounted () {
    this.ergodic(this.timing)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/variable"
  .timeSign
    line-height normal
    font-size 12px
    overflow hidden
    position relative
  .timesignLine
    position absolute
    top 60%
    height 1px
    background $background-Info
    width 100%
  .expression
    position absolute
    top 0
    background $background-Info
    box-sizing border-box
    height 30px
    width 1px
  .expressionOne
    left 0
  .expressionTwo
    left 24px
  .expressionThree
    left 48px
  .expressionFour
    left 72px
  .expressionFive
    left 96px
  .expressionSix
    left 120px
  .expressionSeven
    left 148px
  .expressionEight
    left 172px
  .expressionNine
    left 196px
  .expressionPOne
    position absolute
    left 37px
    top 0
  .expressionPTwo
    position absolute
    left 60px
    top 0
  .expressionPThree
    position absolute
    right 0
    top 0
</style>
