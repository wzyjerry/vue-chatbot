<template>
  <el-main>
    <template v-if="agentList">
      <el-table :data="agentList.list">
        <el-table-column prop="index" label="#" width="80px"/>
        <el-table-column prop="name" :label="$t('agent.name')"/>
        <el-table-column width="80px">
          <template slot-scope="scope">
            <el-button icon="el-icon-setting" circle @click="editAgent(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="end" class="create">
        <el-button @click="$router.push({ name: 'agentCreate' })" icon="el-icon-circle-plus-outline">{{ $t("agent.index.create") }}</el-button>
      </el-row>
      <div class="page">
        <el-pagination
          @current-change="loadPage"
          :current-page.sync="id"
          :page-size="5"
          layout="total, prev, pager, next, jumper"
          :page-count="agentList.totalPage"
          :total="agentList.totalItems">
        </el-pagination>
      </div>
    </template>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("agent");

export default {
  name: "Index",
  data: function() {
    return {
      id: 1,
      agentList: undefined
    };
  },
  methods: {
    ...mapActions(["page"]),
    loadPage(id) {
      this.page(id).then(agentList => {
        this.agentList = agentList;
      });
    },
    editAgent(row) {
      this.$router.push({
        name: "agentEdit",
        params: { agentId: row.id }
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
