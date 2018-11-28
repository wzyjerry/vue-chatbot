<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <h1>已注销</h1>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");

export default {
  name: "Logout",
  methods: {
    ...mapActions(["logout"])
  },
  mounted() {
    this.logout().then(() => {
      localStorage.removeItem("display_name");
      localStorage.removeItem("api_key");
      this.$router.push({ name: "login" });
    });
  }
};
</script>

<style lang="stylus">
.el-select
  width 100%
.form
  margin-top 30px
</style>
