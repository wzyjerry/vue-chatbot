<template>
  <el-main>
    <template v-if="intentList">
      <el-table :data="intentList">
        <el-table-column type="index" width="50"/>
        <el-table-column prop="name" label="Name"/>
        <el-table-column prop="description" label="Description"/>
        <el-table-column prop="weight" label="Weight"/>
        <el-table-column width="160px">
          <template slot-scope="scope">
            <el-button icon="el-icon-setting" circle @click="editIntent(scope.row)"></el-button>
            <el-button icon="el-icon-menu" type="primary" circle @click="intentMenu(scope.row)"></el-button>
            <el-button icon="el-icon-close" type="danger" circle @click="removeConfirm(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="end" class="create">
        <el-button @click="$router.push({ name: 'optionIntentCreate', params: { agentId: $route.params.agentId } })" icon="el-icon-circle-plus-outline">Create Intent</el-button>
      </el-row>
    </template>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("intent");

export default {
  name: "Index",
  data: function() {
    return {
      intentList: undefined
    };
  },
  methods: {
    ...mapActions(["list", "remove"]),
    editIntent(row) {
      this.$router.push({
        name: "optionIntentEdit",
        params: {
          agentId: this.$route.params.agentId,
          intentId: row.id
        }
      });
    },
    intentMenu(row) {
      this.$router.push({
        name: "optionIntentMenu",
        params: {
          agentId: this.$route.params.agentId,
          intentId: row.id
        }
      });
    },
    removeConfirm(row) {
      this.$confirm(
        `Are you sure you would like to delete intent "${row.name}"?`,
        "Delete Intent",
        {
          confirmButtonText: "DELETE",
          cancelButtonText: "CANCEL",
          type: "warning"
        }
      )
        .then(() => {
          this.remove({
            agentId: this.$route.params.agentId,
            id: row.id
          }).then(() => {
            this.id = 1;
            this.loadPage(this.id);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Canceled"
          });
        });
    }
  },
  mounted: function() {
    this.list({ agentId: this.$route.params.agentId }).then(intentList => {
      this.intentList = intentList;
    });
  }
};
</script>

<style lang="stylus">
.create
  margin-top 20px
</style>
