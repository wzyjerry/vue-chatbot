<template>
  <el-container>
    <el-header>
      <el-row type="flex" :gutter="20" >
        <el-col :span="6">
          <el-tag style="margin:10px 50px;height:40px;line-height:35px;width:300px;text-align:center;font-size:30px;font-weight:100;">Logo here</el-tag>
        </el-col>
        <el-col :span="2">
          <el-menu router :default-active="$route.path" mode="horizontal">
            <el-menu-item index="/agent/index">Agent</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :offset="13" :span="3">
          <el-menu router :default-active="$route.path" mode="horizontal">
            <el-menu-item index="/login">Login</el-menu-item>
            <el-menu-item index="/regist">Regist</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0
</style>
