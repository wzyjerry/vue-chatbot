<template>
  <el-main>
    <template v-if="entityList">
      <el-table :data="entityList" :height="500">
        <el-table-column type="index" width="50"/>
        <el-table-column prop="name" :label="$t('entity.name')"/>
        <el-table-column prop="description" :label="$t('entity.description')"/>
        <el-table-column width="160px">
          <template slot-scope="scope">
            <el-button icon="el-icon-setting" type="primary" circle @click="editEntity(scope.row)"></el-button>
            <el-button icon="el-icon-close" type="danger" circle @click="removeConfirm(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="end" class="create">
        <el-button type="success" @click="$router.push({ name: 'optionEntityCreate', params: { agentId: $route.params.agentId } })" icon="el-icon-circle-plus-outline">{{ $t("entity.index.create") }}</el-button>
      </el-row>
    </template>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("entity");

export default {
  name: "Index",
  data: function() {
    return {
      entityList: undefined
    };
  },
  methods: {
    ...mapActions(["list", "remove"]),
    editEntity(row) {
      this.$router.push({
        name: "optionEntityEdit",
        params: {
          agentId: this.$route.params.agentId,
          entityId: row.id
        }
      });
    },
    async removeConfirm(row) {
      try {
        await this.$confirm(
          this.$t("entity.delete.info", [row.name]),
          this.$t("entity.delete.title"),
          {
            confirmButtonText: this.$t("common.delete"),
            cancelButtonText: this.$t("common.cancel"),
            type: "warning"
          }
        );
        try {
          await this.remove({
            agentId: this.$route.params.agentId,
            id: row.id
          });
          this.entityList = await this.list({
            agentId: this.$route.params.agentId
          });
        } catch {
          this.$router.push({ name: "login" });
        }
      } catch {
        this.$message({
          type: "info",
          message: this.$t("common.canceled")
        });
      }
    }
  },
  async mounted() {
    try {
      this.entityList = await this.list({
        agentId: this.$route.params.agentId
      });
    } catch {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="stylus">
.create
  margin-top 20px
</style>
