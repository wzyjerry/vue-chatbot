<template>
  <el-container direction="horizontal">
    <router-view name="asideLeft"/>
    <router-view/>
    <router-view name="asideRight"/>
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
