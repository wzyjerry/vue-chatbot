<template>
<el-main>
  <d3-tree ref="d3Tree" @save="save"/>
</el-main>
</template>

<script>
import D3Tree from "@/components/d3-tree/d3-tree.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("intent");

export default {
  name: "Create",
  components: {
    D3Tree
  },
  data() {
    return {
      intent: undefined
    };
  },
  mounted() {
    this.view({
      agentId: this.$route.params.agentId,
      id: this.$route.params.intentId
    }).then(intent => {
      this.intent = intent;
      this.$refs.d3Tree.load(this.intent.tree);
    });
  },
  methods: {
    ...mapActions(["view", "edit"]),
    save(data) {
      data = JSON.parse(data);
      this.intent.tree = data;
      this.intent.name = data.intent;
      this.intent.description = data.description;
      this.intent.weight = data.weight;
      this.edit({
        agentId: this.$route.params.agentId,
        id: this.$route.params.intentId,
        data: this.intent
      }).then(() => {
        this.$message({
          type: "success",
          message: this.$t("common.saved")
        });
      });
    }
  }
};
</script>
