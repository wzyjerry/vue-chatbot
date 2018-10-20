<template>
  <el-aside width="300px">
    <el-menu router :default-active="$route.path">
      <el-menu-item :index="`/${this.$route.params.lang}/agent/view/${$route.params.agentId}`">{{ $t("aside.setting") }}</el-menu-item>
      <el-menu-item :index="`/${this.$route.params.lang}/agent/view/${$route.params.agentId}/entity/index`">{{ $t("aside.entities") }}</el-menu-item>
      <el-menu-item :index="`/${this.$route.params.lang}/agent/view/${$route.params.agentId}/intent/index`">{{ $t("aside.intents") }}</el-menu-item>
      <el-menu-item :index="`/${this.$route.params.lang}/agent/view/${$route.params.agentId}/train/index`">{{ $t("aside.train") }}</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside"
};
</script>
