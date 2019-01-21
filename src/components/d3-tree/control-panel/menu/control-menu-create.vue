<template>
  <el-form
    label-width="70px">
    <!-- 节点类型 -->
    <el-form-item label="Type">
      <el-select
        v-model="newNode.type"
        placeholder="Type">
        <el-option value="order"/>
        <el-option value="pickone"/>
        <el-option value="exchangeable"/>
        <el-option value="content"/>
      </el-select>
    </el-form-item>
    <!-- 节点名称 -->
    <el-form-item label="Name">
      <el-input
        v-model="newNode.name"
        placeholder="Name"
        clearable/>
    </el-form-item>
    <!-- 剪枝概率 -->
    <el-form-item label="Dropout">
      <el-slider
        v-model="newNode.dropout"
        :min="0"
        :max="1"
        :step="0.01"
        show-input/>
    </el-form-item>
    <!-- 节点权重 -->
    <el-form-item label="Weight">
      <el-input-number
        v-model="newNode.weight"
        :precision="2"
        :step="0.01"
        :min="0"/>
    </el-form-item>
    <!-- 内容节点 -->
    <template v-if="newNode.type && newNode.type === 'content'">
       <!-- 是否为语义槽 -->
      <el-form-item label="Content Type">
        <el-switch
          style="margin-top: 30px;"
          v-model="newNode.isSlot"
          active-text="Slot"
          inactive-text="Content">
        </el-switch>
      </el-form-item>
      <!-- 实体类型 -->
      <el-form-item
        v-if="newNode.isSlot"
        label="Entity">
        <el-select v-model="newNode.entity" filterable placeholder="Select Entity">
          <el-option
            v-for="entity in entityList"
            :key="entity.id"
            :label="entity.name"
            :value="entity.id">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 语义槽名称 -->
      <el-form-item
        v-if="newNode.isSlot"
        label="Slot">
        <el-input
          v-model="newNode.slot"
          placeholder="Slot"
          clearable/>
      </el-form-item>
      <!-- 内容 -->
      <el-form-item
        v-else
        label="Content">
        <tag-editor :tags="newNode.content" />
      </el-form-item>
      <!-- 缺字概率 -->
      <el-form-item label="Cut">
        <el-slider
          v-model="newNode.cut"
          :min="0"
          :max="1"
          :step="0.01"
          show-input/>
      </el-form-item>
      <!-- 缺字概率>0：单字缺字概率 -->
      <el-form-item
        v-if="newNode.cut && newNode.cut>0"
        label="WordCut">
        <el-slider
          v-model="newNode.word_cut"
          :min="0"
          :max="1"
          :step="0.01"
          show-input/>
      </el-form-item>
    </template>
    <el-row
      v-if="newNode.type"
      type="flex"
      justify="center">
      <el-button
        type="success"
        @click="create">Create<i class="el-icon-success el-icon--right"/></el-button>
    </el-row>
  </el-form>
</template>
<script>
import TagEditor from "@/components/tag-editor/tag-editor";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("entity");

export default {
  name: "ControlMenuCreate",
  components: {
    TagEditor: TagEditor
  },
  data() {
    return {
      newNode: {
        content: []
      },
      entityList: []
    };
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
    create: function() {
      this.$emit("create", this.newNode);
      this.newNode = {
        content: []
      };
    }
  }
};
</script>

<style lang="stylus">
.el-select
  width 100%
</style>
