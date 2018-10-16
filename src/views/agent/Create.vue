<template>
  <el-main>
    <el-form :model="agent" ref="agent" label-width="200px" :rules="rules">
      <el-form-item label="Name" prop="name">
        <el-col :span="10">
          <el-input v-model="agent.name" placeholder="Agent Name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Create</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("agent");

export default {
  name: "Create",
  data: function() {
    return {
      agent: {},
      rules: {
        name: [
          {
            required: true,
            message: "Please enter agent name",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["create"]),
    submitForm() {
      this.$refs.agent.validate(valid => {
        if (valid) {
          this.create(this.agent);
          this.$router.push({ name: "agentIndex" });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus">
.el-select
  width 100%
</style>
