<template>
  <el-container direction="horizontal">
    <router-view name="aside"/>
    <router-view/>
  </el-container>  
</template>

<script>
export default {
  name: "Agent"
};
</script>

<style lang="stylus">
.el-aside
.el-main
  height calc(100vh - 60px)
</style>
