<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-alert :title="$t('user.edit')" type="warning"/>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-form status-icon :model="user" ref="user" label-width="200px" :rules="rules" class="form">
          <el-form-item :label="$t('user.display')" prop="display">
            <el-input v-model="user.display_name" :placeholder="$t('user.display')"></el-input>
          </el-form-item>         
          <el-form-item :label="$t('user.password')" prop="password">
            <el-input type="password" v-model="user.password" :placeholder="$t('user.password')" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item :label="$t('user.confirm')" prop="confirm">
            <el-input type="password" v-model="user.confirm" :placeholder="$t('user.confirm')" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">{{ $t("common.save") }}</el-button>
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
  name: "Edit",
  data() {
    return {
      user: {},
      rules: {
        password: [
          {
            validator: this.validatePass,
            trigger: "blur"
          }
        ],
        confirm: [
          {
            validator: this.validatePass2,
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
      this.$refs.user.validate();
    }
  },
  methods: {
    ...mapActions(["edit"]),
    submitForm() {
      this.$refs.user.validate(valid => {
        if (valid) {
          if (this.user.password === "") {
            delete this.user.password;
          }
          this.edit(this.user)
            .then(() => {
              this.$router.push({ name: "logout" });
            })
            .catch(() => {
              this.$message.error(this.$t("user.editError"));
            });
        } else {
          return false;
        }
      });
    },
    validatePass(rule, value, callback) {
      if (value === undefined || value === "") {
        callback();
      } else {
        if (this.user.confirm !== undefined || this.user.confirm !== "") {
          this.$refs.user.validateField("confirm");
        }
        callback();
      }
    },
    validatePass2(rule, value, callback) {
      if (value === undefined || value === "") {
        callback();
      } else if (value !== this.user.password) {
        callback(new Error(this.$t("user.confirmFail")));
      } else {
        callback();
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
