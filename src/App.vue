<template>
  <el-container>
    <el-header v-if="$route.name !== 'interactive'" >
      <el-row type="flex" :gutter="20" >
        <el-col :offset="4" :span="6">
          <logo />
        </el-col>
        <el-col :offset="5">
          <el-menu router :default-active="$route.path" mode="horizontal">
            <el-menu-item index="lang">
              <el-select v-model="lang" @change="langChange">
                <el-option value="zh-CN" label="简体中文"></el-option>
                <el-option value="en-US" label="English"></el-option>
              </el-select>
            </el-menu-item>
            <template v-if="display_name !== null">
              <el-menu-item :index="`/${this.$route.params.lang}/user`">{{ display_name }}</el-menu-item>
              <el-menu-item :index="`/${this.$route.params.lang}/logout`">{{ $t("user.logout") }}</el-menu-item>
            </template>
            <template v-else>
              <el-menu-item :index="`/${this.$route.params.lang}/login`">{{ $t("user.login") }}</el-menu-item>
              <el-menu-item :index="`/${this.$route.params.lang}/regist`">{{ $t("user.regist") }}</el-menu-item>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "App",
  components: {
    Logo
  },
  watch: {
    $route() {
      this.lang = this.$route.params.lang;
      localStorage.setItem("lang", this.lang);
      this.$i18n.locale = this.lang;
      this.display_name = localStorage.getItem("display_name");
    }
  },
  data() {
    return {
      lang: "en-US",
      display_name: null
    };
  },
  methods: {
    langChange() {
      this.$router.push({
        name: this.$route.name,
        params: { lang: this.lang },
        query: this.$route.query
      });
    }
  }
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0
</style>
