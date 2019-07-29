<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/variable"
  html,body
    position relative
    overflow hidden
    height 100%
    width 100%
    #app
      position relative
      width 100%
      height 100%
      overflow auto
</style>
