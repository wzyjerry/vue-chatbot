<template>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="20">
        <el-form :model="agent" ref="agent" label-width="200px" :rules="rules">
          <el-form-item label="ID">
            <span>{{ agent.id }}</span>
            <el-button type="primary" @click="submitForm" style="margin-left: 20px;">{{ $t("common.save") }}</el-button>
          </el-form-item>
          <el-form-item :label="$t('agent.name')" prop="name">
              <el-input v-model="agent.name" :placeholder="$t('agent.name')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-card class="danger-zone">
              <div slot="header">
                <i class="el-icon-warning"></i>
                <span style="margin-left: 20px;">{{ $t('agent.edit.dangerZone.name') }}</span>
              </div>
              <div>
                <el-col :span="18">
                  <p class="title">{{ $t('agent.edit.dangerZone.title') }}</p>
                  <p class="content">{{ $t('agent.edit.dangerZone.info', [agent.name]) }}</p>
                </el-col>
                <el-col :span="6" style="margin-top: 50px; margin-bottom: 10px">
                  <el-button type="danger" plain @click="removeConfirm">{{ $t('agent.edit.dangerZone.confirm') }}</el-button>
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
            message: this.$t("common.required", [this.$t("agent.name")]),
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {
    $route() {
      this.rules.name[0].message = this.$t("common.required", [
        this.$t("agent.name")
      ]);
      this.$refs.agent.validate();
    }
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
