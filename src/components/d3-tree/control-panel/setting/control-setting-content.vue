<template>
  <el-collapse
    :value="['common', 'content']">
    <!-- 通用设置 -->
    <el-collapse-item
      name="common"
      title="Common Settings">
      <!-- 节点类型 -->
      <el-form-item label="Type">
        <el-tag type="success">{{ selectedNode.data.type }}</el-tag>
      </el-form-item>
      <!-- 子节点数量 -->
      <el-form-item label="Childrens">
        <el-tag type="info">{{ childrenLength }}</el-tag>
      </el-form-item>
      <!-- 节点名称 -->
      <el-form-item label="Name">
        <el-input
          v-model="selectedNode.data.name"
          placeholder="Name"
          clearable/>
      </el-form-item>
      <!-- 剪枝概率 -->
      <el-form-item label="Dropout">
        <el-slider
          v-model="selectedNode.data.dropout"
          :min="0"
          :max="1"
          :step="0.01"
          show-input/>
      </el-form-item>
      <!-- 节点权重 -->
      <el-form-item
        label="Weight">
        <el-input-number
          v-model="selectedNode.data.weight"
          :precision="2"
          :step="0.01"
          :min="0"/>
      </el-form-item>
    </el-collapse-item>
    <!-- 内容设置 -->
    <el-collapse-item
      name="content"
      title="Content Settings">
       <!-- 是否为实体 -->
      <el-form-item label="Content Type">
        <el-switch
          style="margin-top: 30px;"
          v-model="selectedNode.data.isEntity"
          active-text="Entity"
          inactive-text="Content">
        </el-switch>
      </el-form-item>
      <!-- 实体类型 -->
      <el-form-item
        v-if="selectedNode.data.isEntity"
        label="Entity">
        <el-select v-model="selectedNode.data.entity" filterable placeholder="Select Entity">
          <el-option
            v-for="entity in entityList"
            :key="entity.id"
            :label="entity.name"
            :value="entity.id">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 内容 -->
      <el-form-item
        v-else
        label="Content">
        <tag-editor :tags="selectedNode.data.content" />
      </el-form-item>
      <!-- 缺字概率 -->
      <el-form-item label="Cut">
        <el-slider
          v-model="selectedNode.data.cut"
          :min="0"
          :max="1"
          :step="0.01"
          show-input/>
      </el-form-item>
      <!-- 缺字概率>0：单字缺字概率 -->
      <el-form-item
        v-if="selectedNode.data.cut && selectedNode.data.cut>0"
        label="WordCut">
        <el-slider
          v-model="selectedNode.data.word_cut"
          :min="0"
          :max="1"
          :step="0.01"
          show-input/>
      </el-form-item>
    </el-collapse-item>
    <!-- 复制子树 -->
    <el-collapse-item
      name="copy"
      title="Copy Tree">
      <el-row
        type="flex"
        justify="center">
        <el-button
          type="warning"
          @click="copyTree">Copy<i class="el-icon-info el-icon--right"/></el-button>
      </el-row>
    </el-collapse-item>
    <!-- 删除节点 -->
    <el-collapse-item
      name="delete"
      title="Delete Node">
      <el-row
        type="flex"
        justify="center">
        <el-button
          type="danger"
          @click="deleteNode">Delete<i class="el-icon-warning el-icon--right"/></el-button>
      </el-row>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import TagEditor from "@/components/tag-editor/tag-editor";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("entity");

export default {
  name: "ControlSettingContent",
  components: {
    TagEditor: TagEditor
  },
  data() {
    return {
      entityList: []
    };
  },
  props: {
    selectedNode: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    childrenLength: function() {
      if (
        this.selectedNode.children === undefined &&
        this.selectedNode._children === undefined
      ) {
        return 0;
      }
      return (this.selectedNode.children || this.selectedNode._children).length;
    }
  },
  mounted() {
    this.list({
      agentId: this.$route.params.agentId
    }).then(entityList => {
      this.entityList = entityList;
    });
  },
  methods: {
    ...mapActions(["list"]),
    copyTree: function() {
      this.$emit("copyTree");
    },
    deleteNode: function() {
      this.$emit("deleteNode");
    }
  }
};
</script>
