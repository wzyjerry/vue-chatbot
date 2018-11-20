<template>
  <el-main>
    <el-col :offset="4" :span="12">
      <el-form :model="entity" ref="entity" label-width="200px" :rules="rules">
        <el-form-item label="ID" prop="id">
          <span>{{ entity.id }}</span>
        </el-form-item>
        <el-form-item :label="$t('entity.name')" prop="name">
          <el-input v-model="entity.name" :placeholder="$t('entity.name')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('entity.upload.name')">
          <el-upload
            ref="upload"
            :on-change="upload"
            :auto-upload="false"
            drag
            action="#"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">{{ $t("entity.upload.start") }}<em>{{ $t("entity.upload.mid") }}</em>{{ $t("entity.upload.end") }}</div>
            <div slot="tip" class="el-upload__tip">{{ $t("entity.upload.tip") }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('entity.content')">
          <el-table :data="showContents">
            <el-table-column label="#" prop="index" width="80px"></el-table-column>
            <el-table-column :label="$t('entity.value')" prop="value"></el-table-column>
            <el-table-column width="80px">
              <template slot-scope="scope">
                <el-button type="danger" icon="el-icon-close" circle @click="remove(scope.row)"></el-button>
              </template>
        </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item>
          <el-pagination
            @current-change="loadShowContents"
            :current-page.sync="id"
            :page-size="perPage"
            layout="total, prev, pager, next, jumper"
            :total="entity.entries.length">
          </el-pagination>
        </el-form-item>
        <el-form-item :label="$t('entity.addContent')">
          <el-input :placeholder="$t('entity.value')" v-model="value">
            <el-button slot="append" icon="el-icon-circle-plus-outline" @click="append"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">{{ $t("common.save") }}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("entity");

export default {
  name: "Edit",
  data: function() {
    return {
      perPage: 10,
      value: "",
      id: 1,
      showContents: [],
      fileList: [],
      entity: {
        entries: []
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter entity name",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted: function() {
    this.view({
      agentId: this.$route.params.agentId,
      id: this.$route.params.entityId
    }).then(entity => {
      this.entity = entity;
      if (this.entity.entries === undefined) {
        this.entity.entries = [];
      }
      this.loadShowContents();
    });
  },
  methods: {
    ...mapActions(["view", "edit"]),
    submitForm() {
      this.$refs.entity.validate(valid => {
        if (valid) {
          this.edit({
            agentId: this.$route.params.agentId,
            id: this.$route.params.entityId,
            data: this.entity
          }).then(() => {
            this.$message({
              type: "success",
              message: this.$t("common.saved")
            });
          });
        } else {
          return false;
        }
      });
    },
    loadShowContents() {
      const adjustId = () => {
        let maxId = this.entity.entries.length / this.perPage;
        if (this.entity.entries.length % this.perPage !== 0) {
          maxId += 1;
        }
        if (this.id > maxId) {
          this.id = maxId;
        }
      };
      adjustId();
      const page = this.id - 1;
      const start = page * this.perPage;
      const end = Math.min(
        (page + 1) * this.perPage,
        this.entity.entries.length
      );
      this.showContents = [];
      this.entity.entries.slice(start, end).forEach((value, index) => {
        this.showContents.push({
          index: page * this.perPage + index + 1,
          value
        });
      });
    },
    append() {
      if (this.value !== "") {
        this.entity.entries.push(this.value);
        this.value = "";
        this.loadShowContents();
      }
    },
    remove(row) {
      const index = this.entity.entries.indexOf(row.value);
      this.entity.entries.splice(index, 1);
      this.loadShowContents();
    },
    upload(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.$confirm(
          `This operation will append "${
            file.name
          }" to the content list, continue?`,
          "Tips",
          {
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
            type: "warning"
          }
        )
          .then(() => {
            const data = e.target.result.split(/[\r?\n]/);
            data.forEach(value => {
              value = value.trim();
              if (value !== "") {
                this.entity.entries.push(value);
              }
            });
            this.$message({
              type: "success",
              message: "Appended"
            });
            this.loadShowContents();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Canceled"
            });
            this.loadShowContents();
          });
      };
      reader.readAsText(file.raw);
      this.$refs.upload.clearFiles();
    }
  }
};
</script>

<style lang="stylus">
.el-select
  width 100%
</style>
