<template>
<el-main>
  <el-form :model="settings">
    <el-form-item label="Payload">
      <el-input
        type="textarea"
        :rows="5"
        placeholder="Some payload here"
        v-model="settings.payload">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Save</el-button>
    </el-form-item>
  </el-form>
</el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("intent");

export default {
  name: "Menu",
  data() {
    return {
      settings: {}
    };
  },
  methods: {
    ...mapActions(["setting"]),
    submitForm() {
      this.setting({
        agentId: this.$route.params.agentId,
        id: this.$route.params.intentId,
        data: this.settings
      });
      this.$message({
        type: "success",
        message: "Saved"
      });
    }
  }
};
</script>
