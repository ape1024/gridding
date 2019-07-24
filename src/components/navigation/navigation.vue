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
      <el-menu-item index="functional">职能组</el-menu-item>
      <el-menu-item index="working">作业组</el-menu-item>
      <el-menu-item index="region">区域管理</el-menu-item>
      <el-menu-item index="role">角色管理</el-menu-item>
      <el-submenu index="subscriber">
        <template slot="title">用户管理</template>
        <el-menu-item index="2-1">用户管理</el-menu-item>
        <el-menu-item index="2-2">用户组管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="scheduling">排班计划</el-menu-item>
      <el-menu-item index="trainNumber">到发车次</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      activeIndex: 'functional'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .navigation
    overflow hidden
    position relative
    width 100%
</style>
