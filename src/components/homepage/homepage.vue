<template>
  <div>
    <!--标头-->
    <headTitle></headTitle>
    <!--导航-->
    <navigation></navigation>
    <div>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import headTitle from '../headTitle/headTitle'
import navigation from '../navigation/navigation'
export default {
  components: {
    headTitle,
    navigation
  },
  created () {
    let routerData = sessionStorage.getItem('key') ? sessionStorage.getItem('key') : 'operationSetting'
    console.log(sessionStorage.getItem('key'))
    this.$router.push(`/homepage/${routerData}`)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
