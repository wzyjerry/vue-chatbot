<template>
  <el-main>
    <el-col :offset="4" :span="12">
      <el-form :model="intent" ref="intent" label-width="200px" :rules="rules">
        <el-form-item label="Name" prop="name">
          <el-input v-model="intent.name" placeholder="Intent Name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('intent.description')">
          <el-input
            type="textarea"
            autosize
            :placeholder="$t('intent.description')"
            v-model="intent.description">
          </el-input>
        </el-form-item>
        <el-form-item label="Weight" prop="weight">
          <el-input-number
            v-model="intent.weight"
            :precision="2"
            :step="0.01"
            :min="0"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">Create</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("intent");

export default {
  name: "Create",
  data: function() {
    return {
      intent: {},
      rules: {
        name: [
          {
            required: true,
            message: "Please enter intent name",
            trigger: "blur"
          }
        ],
        weight: [
          {
            required: true,
            message: "Please enter intent weight",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["create"]),
    submitForm() {
      this.$refs.intent.validate(valid => {
        if (valid) {
          delete this.intent.tree;
          this.intent.tree = {
            type: "intent",
            weight: this.intent.weight,
            intent: this.intent.name,
            description: this.intent.description,
            children: [
              {
                type: "holder"
              }
            ]
          };
          this.create({
            agentId: this.$route.params.agentId,
            data: this.intent
          }).then(() => {
            this.$router.push({
              name: "optionIntentIndex",
              params: {
                agentId: this.$route.params.agentId
              }
            });
          });
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
