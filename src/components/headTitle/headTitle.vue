<template>
  <div class="headTitle">
    <div class="headTitleLeft">
      {{title}}
    </div>
    <div class="headTitleRight">
      {{currentTime}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'headTitle',
  data () {
    return {
      title: '',
      currentTime: ''
    }
  },
  methods: {
    timeDown () {
      let myDate = new Date()
      let year = myDate.getFullYear()
      let month = myDate.getMonth() + 1
      let day = myDate.getDate()
      let hour = myDate.getHours()
      let minutes = myDate.getMinutes()
      let seconds = myDate.getSeconds()
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      this.currentTime = `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
    }
  },
  mounted () {
    setInterval(() => {
      this.timeDown()
    }, 1000)
  },
  created () {
    this.title = '网格化管理配置系统'
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .headTitle
    color #fff
    font-size 24px
    overflow hidden
    box-sizing border-box
    background #000
    padding 20px 10px
   .headTitleLeft
     float left
     text-align left
     width 50%
   .headTitleRight
     width 50%
     font-size 18px
     text-align right
     float right
</style>
