<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <template v-if="agentList">
          <el-table :data="agentList" :height="500">
            <el-table-column type="index" width="50"/>
            <el-table-column prop="name" width="150" :label="$t('agent.name')"/>
            <el-table-column prop="description" width="200" :label="$t('agent.description')"/>
            <el-table-column :label="$t('agent.interactive')">
              <template slot-scope="scope">
                <a :href="`${origin}/#/${$route.params.lang}/interactive/${scope.row.id}`">{{ `${origin}/#/${$route.params.lang}/interactive/${scope.row.id}` }}</a>
              </template>
            </el-table-column>
            <el-table-column width="80px">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-setting" circle @click="editAgent(scope.row)"></el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row type="flex" justify="end" class="create">
            <el-button type="success" @click="$router.push({ name: 'agentCreate' })" icon="el-icon-circle-plus-outline">{{ $t("agent.index.create") }}</el-button>
          </el-row>
        </template>
      </el-col>
    </el-row>    
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("agent");

export default {
  name: "Index",
  data: function() {
    return {
      agentList: undefined,
      origin: location.origin
    };
  },
  methods: {
    ...mapActions(["list"]),
    editAgent(row) {
      this.$router.push({
        name: "agentEdit",
        params: { agentId: row.id }
      });
    }
  },
  mounted() {
    this.list()
      .then(agentList => {
        this.agentList = agentList;
      })
      .catch(() => {
        this.$router.push({
          name: "login"
        });
      });
  }
};
</script>

<style lang="stylus">
.create
  margin-top 20px
</style>
