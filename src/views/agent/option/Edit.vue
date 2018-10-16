<template>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="20">
        <el-form :model="agent" ref="agent" label-width="200px" :rules="rules">
          <el-form-item label="ID">
            <span>{{ agent.id }}</span>
            <el-button type="primary" @click="submitForm" style="margin-left: 20px;">Save</el-button>
          </el-form-item>
          <el-form-item label="Name" prop="name">
              <el-input v-model="agent.name" placeholder="Agent Name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-card class="danger-zone">
              <div slot="header">
                <i class="el-icon-warning"></i>
                <span style="margin-left: 20px;">DANGER ZONE</span>
              </div>
              <div>
                <el-col :span="18">
                  <p class="title">Delete Agent</p>
                  <p class="content">Are you sure you want to delete agent <strong>{{ agent.name }}</strong>? This will destroy the agent with all corresponding data and cannot be undone!</p>
                </el-col>
                <el-col :span="6" style="margin-top: 50px; margin-bottom: 10px">
                  <el-button type="danger" plain @click="removeConfirm">DELETE THIS AGENT</el-button>
                </el-col>
              </div>
            </el-card>
          </el-form-item>      
        </el-form>
      </el-col>
    </el-row>
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
    this.view(this.$route.params.agentId).then(agent => {
      this.agent = agent;
    });
  },
  methods: {
    ...mapActions(["view", "edit", "remove"]),
    submitForm() {
      this.$refs.agent.validate(valid => {
        if (valid) {
          this.edit({
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
    },
    removeConfirm() {
      this.$prompt(
        `Are you sure you would like to delete agent "${
          this.agent.name
        }"? This will destroy agent and cannot be undone!`,
        "Delete Agent",
        {
          confirmButtonText: "DELETE",
          cancelButtonText: "CANCEL",
          inputPlaceholder: "Type DELETE here and click DELETE button",
          inputPattern: /DELETE/,
          inputErrorMessage:
            "You can type DELETE above and click DELETE button to delete, or click CANCEL button to cancel"
        }
      )
        .then(() => {
          this.remove(this.$route.params.agentId);
          this.$router.push({ name: "agentIndex" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Canceled"
          });
        });
    }
  }
};
</script>

<style lang="stylus">
.el-select
  width 100%
.danger-zone
  color red
  i
    font-size 20px
    vertical-align middle
  span 
    font-size 15px
    vertical-align middle
  .title
    font-size 25px
    font-weight 100
  .content
    color black
</style>
