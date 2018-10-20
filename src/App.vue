<template>
  <el-container>
    <el-header>
      <el-row type="flex" :gutter="20" >
        <el-col :offset="4" :span="6">
          <el-button @click="goHome" style="margin:10px 50px;height:40px;line-height:35px;padding: 0;width:300px;text-align:center;font-size:30px;font-weight:100;">{{ $t("header.testMessage") }}</el-button>
        </el-col>
        <el-col :span="2">
          <el-menu router :default-active="$route.path" mode="horizontal">
            <el-menu-item :index="`/${this.$route.params.lang}/agent/index`">{{ $t("nav.agent") }}</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :offset="5">
          <el-menu router :default-active="$route.path" mode="horizontal">
            <el-menu-item index="lang">
              <el-select v-model="lang" @change="langChange">
                <el-option value="zh-CN" label="简体中文"></el-option>
                <el-option value="en-US" label="English"></el-option>
              </el-select>
            </el-menu-item>
            <el-menu-item index="/login">{{ $t("nav.login") }}</el-menu-item>
            <el-menu-item index="/regist">{{ $t("nav.regist") }}</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route() {
      this.lang = this.$route.params.lang;
      this.$i18n.locale = this.lang;
    }
  },
  data() {
    return {
      lang: "en-US"
    };
  },
  methods: {
    langChange() {
      this.$router.push({
        name: this.$route.name,
        params: { lang: this.lang }
      });
    },
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0
</style>
