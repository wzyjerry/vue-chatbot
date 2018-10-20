<template>
  <el-main>
    <template v-if="entityList">
      <el-table :data="entityList.list">
        <el-table-column prop="index" label="#" width="80px"/>
        <el-table-column prop="name" :label="$t('entity.name')"/>
        <el-table-column width="160px">
          <template slot-scope="scope">
            <el-button icon="el-icon-setting" circle @click="editEntity(scope.row)"></el-button>
            <el-button icon="el-icon-close" type="danger" circle @click="removeConfirm(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="end" class="create">
        <el-button @click="$router.push({ name: 'optionEntityCreate', params: { agentId: $route.params.agentId } })" icon="el-icon-circle-plus-outline">{{ $t("entity.index.create") }}</el-button>
      </el-row>
      <div class="page">
        <el-pagination
          @current-change="loadPage"
          :current-page.sync="id"
          :page-size="5"
          layout="total, prev, pager, next, jumper"
          :page-count="entityList.totalPage"
          :total="entityList.totalItems">
        </el-pagination>
      </div>
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
      id: 1,
      entityList: undefined
    };
  },
  methods: {
    ...mapActions(["page", "remove"]),
    loadPage(id) {
      this.page({ agentId: this.$route.params.agentId, id }).then(
        entityList => {
          this.entityList = entityList;
        }
      );
    },
    editEntity(row) {
      this.$router.push({
        name: "optionEntityEdit",
        params: {
          agentId: this.$route.params.agentId,
          entityId: row.id
        }
      });
    },
    removeConfirm(row) {
      this.$confirm(
        this.$t("entity.delete.info", [row.name]),
        this.$t("entity.delete.title"),
        {
          confirmButtonText: this.$t("common.delete"),
          cancelButtonText: this.$t("common.cancel"),
          type: "warning"
        }
      )
        .then(() => {
          this.remove({
            agentId: this.$route.params.agentId,
            id: row.id
          });
          this.id = 1;
          this.loadPage(this.id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: this.$t("common.canceled")
          });
        });
    }
  },
  mounted: function() {
    this.loadPage(1);
  }
};
</script>

<style lang="stylus">
.create
  margin-top 20px
.page
  margin-top 20px
  text-align center
</style>
