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
  #app
    position relative
    width 100%
    height 100%
    overflow auto
</style>
