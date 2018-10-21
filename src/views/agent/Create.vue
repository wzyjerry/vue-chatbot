<template>
  <el-main>
    <el-col :offset="4" :span="12">
      <el-form :model="agent" ref="agent" label-width="200px" :rules="rules">
        <el-form-item :label="$t('agent.name')" prop="name">
          <el-input v-model="agent.name" :placeholder="$t('agent.name')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">{{ $t("common.create") }}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
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
</style>
