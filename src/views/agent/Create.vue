<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-form status-icon :model="agent" ref="agent" label-width="200px" :rules="rules" class="form">
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
            <el-button type="primary" @click="submitForm">{{ $t("common.create") }}</el-button>
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
  name: "Create",
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
.form
  margin-top 30px
</style>
