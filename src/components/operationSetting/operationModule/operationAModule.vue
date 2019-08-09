<template>
  <div class="subject">
    <h4 class="moduleTitle">
      {{operationTitle}}
    </h4>
    <div class="moduleSubject">
      <div class="subjectName">
        <span class="characters">名称:</span>
        <span class="subjectInput">
          <el-input size="small" v-model="inputName" placeholder="请输入内容"></el-input>
        </span>
      </div>
      <div class="subjectName">
        <span class="characters">参数:</span>
        <span class="subjectInput">
          <el-input size="small" v-model="inputName" placeholder="请输入内容"></el-input>
        </span>
      </div>
      <div class="operation">
        <el-button size="medium" type="primary">保存</el-button>
        <el-button size="medium" @click="close">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'operationAModule',
  data () {
    return {
      operationTitle: '',
      inputName: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  created () {
    this.operationTitle = '修改操作'
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable"
  .subject
    subject()
    .moduleTitle
      moduleTitle()
    .moduleSubject
      margin-top 20px
      moduleSubject()
      .subjectName
        color $color-Convention
        margin-bottom 20px
        overflow hidden
        text-align center
   .characters
     display inline-block
     margin-right 10px
     line-height 32px
  .subjectInput
    display inline-block
    width 250px
  .operation
    modeleoPeration()
</style>
