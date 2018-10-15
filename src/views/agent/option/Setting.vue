<template>
  <el-main>
    <el-form :model="agent" ref="agent" label-width="200px" :rules="rules">
      <el-form-item label="ID">
        <el-col :span="10">
          <span>{{ agent.id }}</span>
        </el-col>
      </el-form-item>
      <el-form-item label="Name" prop="name">
        <el-col :span="10">
          <el-input v-model="agent.name" placeholder="Agent Name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Save</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("agent");

export default {
  name: "Setting",
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
  mounted: function() {
    console.debug(this.viewAgent(this.$route.params.agentId));
    this.viewAgent(this.$route.params.agentId).then(agent => {
      this.agent = agent;
      console.debug(agent);
    });
  },
  methods: {
    ...mapActions(["viewAgent", "editAgent"]),
    submitForm() {
      this.$refs.agent.validate(valid => {
        if (valid) {
          this.editAgent({
            id: this.$route.params.agentId,
            data: this.agent
          });
          this.$message({
            type: "success",
            message: "Saved"
          });
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
