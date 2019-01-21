<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :lg="20">
        <el-form status-icon :model="agent" ref="agent" label-width="200px" :rules="rules" class="form">
          <el-form-item label="ID">
            <span>{{ agent.id }}</span>
            <el-button type="primary" @click="submitForm" style="margin-left: 20px;">{{ $t("common.save") }}</el-button>
          </el-form-item>
          <el-form-item :label="$t('agent.name')" prop="name">
            <el-input v-model="agent.name" :placeholder="$t('agent.name')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('agent.description')">
            <el-input
              type="textarea"
              autosize
              :placeholder="$t('agent.description')"
              v-model="agent.description">
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('agent.webhook')" prop="webhook">
            <el-input v-model="agent.webhook" :placeholder="$t('agent.webhook')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-card class="danger-zone">
              <div slot="header">
                <i class="el-icon-warning"></i>
                <span style="margin-left: 20px;">{{ $t('agent.edit.dangerZone.name') }}</span>
              </div>
              <el-row :gutter="10">
                <el-col :span="16">
                  <p class="title">{{ $t('agent.edit.dangerZone.title') }}</p>
                  <p class="content">{{ $t('agent.edit.dangerZone.info', [agent.name]) }}</p>
                </el-col>
                <el-col :span="6" style="margin-top: 50px">
                  <el-button type="danger" plain @click="removeConfirm">{{ $t('agent.edit.dangerZone.confirm') }}</el-button>
                </el-col>
              </el-row>
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
          }).then(() => {
            this.$message({
              type: "success",
              message: this.$t("common.saved")
            });
          });
        } else {
          return false;
        }
      });
    },
    removeConfirm() {
      this.$prompt(
        this.$t("agent.edit.dangerZone.info", [this.agent.name]),
        this.$t("agent.edit.dangerZone.title"),
        {
          confirmButtonText: this.$t("common.delete"),
          cancelButtonText: this.$t("common.cancel"),
          inputPlaceholder: this.$t("agent.edit.dangerZone.placeholder"),
          inputPattern: /DELETE/,
          inputErrorMessage: this.$t("agent.edit.dangerZone.errorMessage")
        }
      )
        .then(() => {
          this.remove(this.$route.params.agentId).then(() => {
            this.$router.push({ name: "agentIndex" });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: this.$t("common.canceled")
          });
        });
    }
  }
};
</script>

<style lang="stylus">
.form
  margin-top 20px
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
