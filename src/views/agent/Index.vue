<template>
  <el-main>
    <template v-if="agentList">
      <el-table :data="agentList.list">
        <el-table-column prop="id" label="#" width="80px"/>
        <el-table-column prop="name" label="Name"/>
        <el-table-column label="Language">
          <template slot-scope="scope">
            <el-tag v-for="(lang, index) in scope.row.lang" :key="index">
              {{ lang }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button icon="el-icon-setting" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
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
    ...mapActions(["getAgentList"]),
    loadPage(id) {
      this.getAgentList(id).then(agentList => {
        this.agentList = agentList;
      });
    }
  },
  mounted: function() {
    this.getAgentList(1).then(agentList => {
      this.agentList = agentList;
      console.debug(agentList)
    });
  }
};
</script>

<style lang="stylus">
.page
  margin-top 20px
  text-align center
</style>
