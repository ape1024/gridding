<template>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

  </div>
</template>

<script>
export default {
  name: 'constraintMechanism',
  data () {
    return {
      data: [{
        label: '一级 1'
      }, {
        label: '一级 2'
      }, {
        label: '一级 3'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
