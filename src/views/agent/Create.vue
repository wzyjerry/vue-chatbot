<template>
  <el-main>
    <el-form :model="agent" ref="agent" label-width="200px" :rules="rules">
      <el-form-item label="Name" prop="name">
        <el-col :span="10">
          <el-input v-model="agent.name" placeholder="Agent Name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Language" prop="language">
        <el-col :span="10">
          <el-select v-model="agent.language" placeholder="Select Language">
            <el-option v-for="lang in languages" :key="lang.value" :label="lang.label" :value="lang.value"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="Time Zone" prop="timeZone">
        <el-col :span="10">
          <el-select v-model="agent.timeZone" placeholder="Select Time Zone">
            <el-option v-for="timeZone in timeZones" :key="timeZone.value" :label="timeZone.label" :value="timeZone.value"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('agent')">Create</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("agent");

export default {
  name: "Create",
  data: function() {
    return {
      agent: {},
      rules: {
        name: [
          {
            required: true,
            message: "Please enter agent name",
            trigger: "blur"
          }
        ],
        language: [
          {
            required: true,
            message: "Please select language",
            trigger: "blur"
          }
        ],
        timeZone: [
          {
            required: true,
            message: "Please select time zone",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(["languages", "timeZones"])
  },
  mounted: function() {
    this.loadLanguages();
    this.loadTimeZones();
  },
  methods: {
    ...mapActions(["loadLanguages", "loadTimeZones", "createAgent"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.createAgent(this.agent);
          this.$router.push({ name: "agentIndex" });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus">
.el-select
  width 100%
</style>
