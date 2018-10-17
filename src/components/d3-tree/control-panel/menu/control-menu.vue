<template>
  <el-collapse
    class="tab-scroll"
    accordion
    value="create">
    <!-- 创建节点 -->
    <el-collapse-item
      name="create"
      title="Create Node">
      <control-menu-create @create="createNode" />
    </el-collapse-item>
    <!-- 保存兴趣 -->
    <el-collapse-item
      name="save"
      title="Save Intent">
      <el-row type="flex" justify="center">
        <el-button type="warning" @click="save">
          Save<i class="el-icon-warning el-icon--right"/>
        </el-button>
      </el-row>
    </el-collapse-item>
    <!-- Debug Mode -->
    <!-- <el-collapse-item
      name="debug"
      title="Debug">
      <el-row
        type="flex"
        justify="end">
        <el-col :span="23">
          <el-form label-position="top">
            <el-form-item
              v-show="!debug"
              label="Debug Mode">
              <el-switch
                v-model="debug"
                @change="toggleDebug" />
            </el-form-item>
            <el-form-item label="Sentence">
              <control-menu-upload @upload="uploadSentence" />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-collapse-item> -->
  </el-collapse>
</template>

<script>
import ControlMenuCreate from "./control-menu-create";

export default {
  name: "ControlMenu",
  components: {
    ControlMenuCreate: ControlMenuCreate
  },
  data: function() {
    return {
      newNode: {},
      debug: false
    };
  },
  methods: {
    toggleDebug: function() {
      this.$emit("toggleDebug", this.debug);
    },
    createNode: function(newNode) {
      this.$emit("createNode", newNode);
    },
    uploadSentence: function(data) {
      this.$emit("uploadSentence", data);
    },
    save: function() {
      this.$emit("save");
    }
  }
};
</script>
