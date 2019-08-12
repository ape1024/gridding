<template>
  <div class="functional">
    <!--任务管理-->
    <div class="subject">
      <h4 class="functionalH4">{{title}}</h4>
      <div class="condition">
      </div>
      <div class="tabulation">
        <taskTable></taskTable>
      </div>
    </div>
    <!--组件-->
    <div class="module">

    </div>
  </div>
</template>

<script>
import taskTable from './taskTable/taskTable'
export default {
  name: 'scheduling',
  components: {
    taskTable
  },
  data () {
    return {
      title: '',
      value: '',
      options: []
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  created () {
    this.title = '任务管理'
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  .functional
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
</style>
