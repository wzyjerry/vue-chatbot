<template>
  <el-tabs
    v-model="tabs"
    type="border-card"
    @tab-remove="unclick">
    <!-- 菜单 -->
    <el-tab-pane name="menu">
      <span slot="label"><i class="el-icon-menu"/> Menu</span>
      <el-scrollbar>
        <control-menu
          class="tab-scroll"
          @save="save"
          @toggleDebug="toggleDebug"
          @createNode="createNode"
          @uploadSentence="uploadSentence"/>
      </el-scrollbar>
    </el-tab-pane>
    <!-- 设置 -->
    <el-tab-pane
      v-if="selectedNode"
      closable
      name="setting">
      <span slot="label"><i class="el-icon-setting"/> Setting</span>
      <el-scrollbar>
        <control-setting
          :selected-node="selectedNode"
          class="tab-scroll"
          @changeIntent="changeIntent"
          @appendIntent="appendIntent"
          @copyTree="copyTree"
          @deleteNode="deleteNode" />
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ControlMenu from "./menu/control-menu";
import ControlSetting from "./setting/control-setting";
export default {
  name: "ControlPanel",
  components: {
    ControlMenu: ControlMenu,
    ControlSetting: ControlSetting
  },
  props: {
    selectedNode: {
      type: Object,
      default: undefined
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      // 当前的选项卡
      tabs: "menu"
    };
  },
  methods: {
    toggleDebug(debug) {
      this.$emit("toggleDebug", debug);
    },
    changeIntent() {
      this.$emit("changeIntent");
    },
    appendIntent(intent) {
      this.$emit("appendIntent", intent);
    },
    showSetting() {
      this.tabs = "setting";
    },
    unclick() {
      this.tabs = "menu";
      this.$emit("unclick");
    },
    createNode(newNode) {
      this.$emit("createNode", newNode);
    },
    uploadSentence(data) {
      this.$emit("uploadSentence", data);
    },
    save() {
      this.$emit("save");
    },
    copyTree() {
      this.$emit("copyTree");
    },
    deleteNode() {
      this.$emit("deleteNode");
    }
  }
};
</script>

<style lang="stylus">
.tab-scroll
  max-height: calc(100vh - 74px - 105px)
  padding-right: 10px
</style>
