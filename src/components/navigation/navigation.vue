<template>
  <div class="navigation">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      :router=true
      active-text-color="#ffd04b">
      <el-menu-item index="operationSetting">操作设置</el-menu-item>
      <el-menu-item index="messageSettings">列车信息设置</el-menu-item>
      <el-menu-item index="typographicSettings">排班设置</el-menu-item>
      <el-menu-item index="taskManagement">任务管理</el-menu-item>
      <el-menu-item index="role">角色管理</el-menu-item>
      <!--<el-submenu index="subscriber">-->
        <!--<template slot="title">用户管理</template>-->
        <!--<el-menu-item index="subscriber">用户管理</el-menu-item>-->
        <!--<el-menu-item index="management">用户组管理</el-menu-item>-->
      <!--</el-submenu>-->
      <el-menu-item index="trainNumber">到发车次</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      window.sessionStorage.setItem('key', key)
    }
  },
  created () {
    this.activeIndex = sessionStorage.getItem('key') ? sessionStorage.getItem('key') : 'operationSetting'
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .navigation
    overflow hidden
    position relative
    width 100%
</style>
