<template>
  <el-aside width="300px">
    <iframe :src="`/#/${this.$route.params.lang}/interactive/${this.$route.params.agentId}`"/>
  </el-aside>
</template>

<script>
export default {
  name: "AsideRight"
};
</script>

<style lang="stylus">
iframe 
  width 100%
  height calc(100vh - 65px)
  border 0
</style>
