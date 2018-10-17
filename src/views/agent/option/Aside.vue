<template>
  <el-aside width="300px">
    <el-menu router :default-active="$route.path">
      <el-menu-item :index="`/agent/view/${$route.params.agentId}`">Setting</el-menu-item>
      <el-menu-item :index="`/agent/view/${$route.params.agentId}/entity/index`">Entities</el-menu-item>
      <el-menu-item :index="`/agent/view/${$route.params.agentId}/intent/index`">Intents</el-menu-item>
      <el-menu-item :index="`/agent/view/${$route.params.agentId}/train/index`">Train</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside"
};
</script>
