<template>
  <el-aside width="300px">
    <el-menu router :default-active="$route.path">
      <el-menu-item :index="`/${this.$route.params.lang}/${$route.params.agentId}`">{{ $t("aside.setting") }}</el-menu-item>
      <el-menu-item :index="`/${this.$route.params.lang}/${$route.params.agentId}/entity`">{{ $t("aside.entities") }}</el-menu-item>
      <el-menu-item :index="`/${this.$route.params.lang}/${$route.params.agentId}/intent`">{{ $t("aside.intents") }}</el-menu-item>
      <el-menu-item :index="`/${this.$route.params.lang}/${$route.params.agentId}/train`">{{ $t("aside.train") }}</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside"
};
</script>
