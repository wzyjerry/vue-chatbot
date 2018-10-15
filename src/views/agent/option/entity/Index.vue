<template>
  <el-main>
    <template v-if="entityList">
      <el-table :data="entityList.list">
        <el-table-column prop="index" label="#" width="80px"/>
        <el-table-column prop="name" label="Name"/>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button icon="el-icon-setting" circle @click="viewAgent(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="end" class="create">
        <el-col :span="6">
          <el-button @click="$router.push({ name: 'optionEntityCreate', params: { agentId: $route.params.agentId } })" icon="el-icon-circle-plus-outline">Create Entity</el-button>
        </el-col>
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
    ...mapActions(["getEntityList"]),
    loadPage(id) {
      this.getEntityList({ agentId: this.$route.params.agentId, id }).then(
        entityList => {
          this.entityList = entityList;
        }
      );
    },
    viewAgent(row) {
      this.$router.push({
        name: "agentView",
        params: { agentId: row.name.replace(new RegExp(" ", "gm"), "_") }
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
