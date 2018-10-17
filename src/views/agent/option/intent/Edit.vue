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
  mounted() {
    this.view({
      agentId: this.$route.params.agentId,
      id: this.$route.params.intentId
    }).then(intent => {
      this.intent = intent;
      this.$refs.d3Tree.load(intent.root);
    });
  },
  methods: {
    ...mapActions(["view", "edit"]),
    save(data) {
      this.edit({
        agentId: this.$route.params.agentId,
        intentId: this.$route.params.intentId,
        data: data
      });
    }
  }
};
</script>
