<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-form status-icon :model="user" ref="user" label-width="200px" :rules="rules" class="form">
          <el-form-item :label="$t('user.username')" prop="username">
            <el-input v-model="user.username" :placeholder="$t('user.username')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('user.password')" prop="password">
            <el-input type="password" v-model="user.password" :placeholder="$t('user.password')" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">{{ $t("nav.login") }}</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");

export default {
  name: "Regist",
  data: function() {
    return {
      user: {},
      rules: {
        username: [
          {
            required: true,
            message: this.$t("common.required", [this.$t("user.username")]),
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("common.required", [this.$t("user.password")]),
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {
    $route() {
      this.rules.username[0].message = this.$t("common.required", [
        this.$t("user.username")
      ]);
      this.rules.password[0].message = this.$t("common.required", [
        this.$t("user.password")
      ]);
      this.$refs.user.validate();
    }
  },
  methods: {
    ...mapActions(["login"]),
    submitForm() {
      this.$refs.user.validate(valid => {
        if (valid) {
          this.login(this.user);
          this.$router.push({ name: "home" });
        } else {
          return false;
        }
      });
    },
    validatePass(rule, value, callback) {
      if (value === undefined || value === "") {
        callback(new Error(this.$t("user.requirePassword")));
      }
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
