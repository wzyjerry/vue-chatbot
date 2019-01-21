<template>
<el-main>
  <el-button type="primary" @click="start">Train</el-button>
</el-main>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("train");

export default {
  name: "Train",
  methods: {
    ...mapActions(["train"]),
    start() {
      this.train(this.$route.params.agentId).then(response => {
        const data = response.data;
        this.$message({
          type: "info",
          message: data.message
        });
      });
    }
  }
};
</script>
