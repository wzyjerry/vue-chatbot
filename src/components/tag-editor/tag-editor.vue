<template>
  <div>
    <el-tag
      v-for="tag in tags"
      :key="tag"
      :disable-transitions="false"
      closable
      @close="handleClose(tag)">
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      class="input-new-tag"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button
      v-else
      class="button-new-tag"
      size="small"
      @click="showInput">+ New Tag</el-button>
  </div>
</template>
<style lang="stylus" scoped>
.el-tag
  margin-right 10px
  height auto
  white-space normal
  word-break break-all
.button-new-tag
  height 32px
  line-height 30px
  padding-top 0
  padding-bottom 0
.input-new-tag
  width 80px
  margin-right 10px
  vertical-align bottom
</style>
<script>
export default {
  name: "TagEditor",
  props: {
    tags: {
      type: Array
    }
  },
  data: function() {
    return {
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    handleClose: function(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },

    showInput: function() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm: function() {
      const inputValue = this.inputValue;
      if (inputValue) {
        this.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>
