<template>
  <el-container>
    <el-header>
      <el-menu router :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/agent">Agent</el-menu-item>
      </el-menu>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0
</style>
