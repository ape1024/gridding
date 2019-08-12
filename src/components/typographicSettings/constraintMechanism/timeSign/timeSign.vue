<template>
  <div class="timeSign">
    <div class="timesignLine"></div>
    <div :key="index" v-for="(item, index) in timing" class="expression" :style="setPosition(index)"></div>
    <span class="expressionPOne">06:00</span>
    <span class="expressionPTwo">18:00</span>
    <span class="expressionPThree">24:00</span>
  </div>
</template>

<script>
export default {
  name: 'timeSign',
  data () {
    return {
      canvasIndex: '',
      timing: 24
    }
  },
  created () {

  },
  methods: {
    ergodic () {

    },
    setPosition (index) {
      //  宽度230
      let position = index * 10
      if (index === 5 || index === 17) {
        return `left: ${position}px;background: red`
      } else {
        return `left: ${position}px`
      }
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
    top 15px
    height 1px
    background $background-Info
    width 100%
  .expression
    position absolute
    top 16px
    background $background-Info
    box-sizing border-box
    height 10px
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
    left 35px
    top 0
  .expressionPTwo
    position absolute
    left 155px
    top 0
  .expressionPThree
    position absolute
    right 0
    top 0
</style>
