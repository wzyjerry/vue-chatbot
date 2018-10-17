(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OptionEntity"],{"28b6":function(t,e,n){"use strict";var a=n("b485"),i=n.n(a);i.a},3595:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[n("el-col",{attrs:{offset:4,span:12}},[n("el-form",{ref:"entity",attrs:{model:t.entity,"label-width":"200px",rules:t.rules}},[n("el-form-item",{attrs:{label:"ID"}},[n("span",[t._v(t._s(t.entity.id))])]),n("el-form-item",{attrs:{label:"Name",prop:"name"}},[n("el-input",{attrs:{placeholder:"Entity Name"},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1),n("el-form-item",{attrs:{label:"Upload Entities"}},[n("el-upload",{ref:"upload",attrs:{"on-change":t.upload,"auto-upload":!1,drag:"",action:"#",multiple:""}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[t._v("Drag and drop txt files there, or "),n("em",[t._v("click")]),t._v(" to upload")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("Can only upload txt file, each line contains a value")])])],1),n("el-form-item",{attrs:{label:"Contents"}},[n("el-table",{attrs:{data:t.showContents}},[n("el-table-column",{attrs:{label:"#",prop:"index",width:"80px"}}),n("el-table-column",{attrs:{label:"Value",prop:"value"}}),n("el-table-column",{attrs:{width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-close",circle:""},on:{click:function(n){t.remove(e.row)}}})]}}])})],1)],1),n("el-form-item",[n("el-pagination",{attrs:{"current-page":t.id,"page-size":t.perPage,layout:"total, prev, pager, next, jumper",total:t.entity.contents.length},on:{"current-change":t.loadShowContents,"update:currentPage":function(e){t.id=e}}})],1),n("el-form-item",{attrs:{label:"Add Content"}},[n("el-input",{attrs:{placeholder:"Value"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-circle-plus-outline"},on:{click:t.append},slot:"append"})],1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("Save")])],1)],1)],1)],1)},i=[],s=n("2f62");const{mapActions:o}=Object(s["a"])("entity");var l={name:"Edit",data:function(){return{perPage:10,value:"",id:1,showContents:[],fileList:[],entity:{contents:[]},rules:{name:[{required:!0,message:"Please enter entity name",trigger:"blur"}]}}},mounted:function(){this.view({agentId:this.$route.params.agentId,id:this.$route.params.entityId}).then(t=>{this.entity=t,this.loadShowContents()})},methods:{...o(["view","edit"]),submitForm(){this.$refs.entity.validate(t=>{if(!t)return!1;this.edit({agentId:this.$route.params.agentId,id:this.$route.params.entityId,data:this.entity}),this.$message({type:"success",message:"Saved"})})},loadShowContents(){const t=()=>{let t=this.entity.contents.length/this.perPage;this.entity.contents.length%this.perPage!==0&&(t+=1),this.id>t&&(this.id=t)};t();const e=this.id-1,n=e*this.perPage,a=Math.min((e+1)*this.perPage,this.entity.contents.length);this.showContents=[],this.entity.contents.slice(n,a).forEach((t,n)=>{this.showContents.push({index:e*this.perPage+n+1,value:t})})},append(){this.entity.contents.push(this.value),this.value="",this.loadShowContents()},remove(t){const e=this.entity.contents.indexOf(t.value);this.entity.contents.splice(e,1),this.loadShowContents()},upload(t){const e=new FileReader;e.onload=(e=>{this.$confirm(`This operation will append "${t.name}" to the content list, continue?`,"Tips",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(()=>{const t=e.target.result.split(/[\r?\n]/);t.forEach(t=>{t=t.trim(),""!==t&&this.entity.contents.push(t)}),this.$message({type:"success",message:"Appended"}),this.loadShowContents()}).catch(()=>{this.$message({type:"info",message:"Canceled"}),this.loadShowContents()})}),e.readAsText(t.raw),this.$refs.upload.clearFiles()}}},r=l,c=(n("b4c6"),n("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);u.options.__file="Edit.vue";e["default"]=u.exports},"401f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[n("el-col",{attrs:{offset:4,span:12}},[n("el-form",{ref:"entity",attrs:{model:t.entity,"label-width":"200px",rules:t.rules}},[n("el-form-item",{attrs:{label:"Name",prop:"name"}},[n("el-input",{attrs:{placeholder:"Entity Name"},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1),n("el-form-item",{attrs:{label:"Upload Entities"}},[n("el-upload",{ref:"upload",attrs:{"on-change":t.upload,"auto-upload":!1,drag:"",action:"#",multiple:""}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[t._v("Drag and drop txt files there, or "),n("em",[t._v("click")]),t._v(" to upload")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("Can only upload txt file, each line contains a value")])])],1),n("el-form-item",{attrs:{label:"Contents"}},[n("el-table",{attrs:{data:t.showContents}},[n("el-table-column",{attrs:{label:"#",prop:"index",width:"80px"}}),n("el-table-column",{attrs:{label:"Value",prop:"value"}}),n("el-table-column",{attrs:{width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-close",circle:""},on:{click:function(n){t.remove(e.row)}}})]}}])})],1)],1),n("el-form-item",[n("el-pagination",{attrs:{"current-page":t.id,"page-size":t.perPage,layout:"total, prev, pager, next, jumper",total:t.entity.contents.length},on:{"current-change":t.loadShowContents,"update:currentPage":function(e){t.id=e}}})],1),n("el-form-item",{attrs:{label:"Add Content"}},[n("el-input",{attrs:{placeholder:"Value"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-circle-plus-outline"},on:{click:t.append},slot:"append"})],1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("Create")])],1)],1)],1)],1)},i=[],s=n("2f62");const{mapActions:o}=Object(s["a"])("entity");var l={name:"Create",data:function(){return{perPage:10,value:"",id:1,showContents:[],fileList:[],entity:{contents:[]},rules:{name:[{required:!0,message:"Please enter entity name",trigger:"blur"}]}}},methods:{...o(["create"]),submitForm(){this.$refs.entity.validate(t=>{if(!t)return!1;this.create({agentId:this.$route.params.agentId,data:this.entity}),this.$router.push({name:"optionEntityIndex",params:{agentId:this.$route.params.agentId}})})},loadShowContents(){const t=()=>{let t=this.entity.contents.length/this.perPage;this.entity.contents.length%this.perPage!==0&&(t+=1),this.id>t&&(this.id=t)};t();const e=this.id-1,n=e*this.perPage,a=Math.min((e+1)*this.perPage,this.entity.contents.length);this.showContents=[],this.entity.contents.slice(n,a).forEach((t,n)=>{this.showContents.push({index:e*this.perPage+n+1,value:t})})},append(){this.entity.contents.push(this.value),this.value="",this.loadShowContents()},remove(t){const e=this.entity.contents.indexOf(t.value);this.entity.contents.splice(e,1),this.loadShowContents()},upload:function(t){const e=new FileReader;e.onload=(e=>{this.$confirm(`This operation will append "${t.name}" to the content list, continue?`,"Tips",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(()=>{const t=e.target.result.split(/[\r?\n]/);t.forEach(t=>{t=t.trim(),""!==t&&this.entity.contents.push(t)}),this.$message({type:"success",message:"Appended"}),this.loadShowContents()}).catch(()=>{this.$message({type:"info",message:"Canceled"}),this.loadShowContents()})}),e.readAsText(t.raw),this.$refs.upload.clearFiles()}}},r=l,c=(n("28b6"),n("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);u.options.__file="Create.vue";e["default"]=u.exports},4046:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[t.entityList?[n("el-table",{attrs:{data:t.entityList.list}},[n("el-table-column",{attrs:{prop:"index",label:"#",width:"80px"}}),n("el-table-column",{attrs:{prop:"name",label:"Name"}}),n("el-table-column",{attrs:{width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{icon:"el-icon-setting",circle:""},on:{click:function(n){t.editEntity(e.row)}}}),n("el-button",{attrs:{icon:"el-icon-close",type:"danger",circle:""},on:{click:function(n){t.removeConfirm(e.row)}}})]}}])})],1),n("el-row",{staticClass:"create",attrs:{type:"flex",justify:"end"}},[n("el-button",{attrs:{icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.$router.push({name:"optionEntityCreate",params:{agentId:t.$route.params.agentId}})}}},[t._v("Create Entity")])],1),n("div",{staticClass:"page"},[n("el-pagination",{attrs:{"current-page":t.id,"page-size":5,layout:"total, prev, pager, next, jumper","page-count":t.entityList.totalPage,total:t.entityList.totalItems},on:{"current-change":t.loadPage,"update:currentPage":function(e){t.id=e}}})],1)]:t._e()],2)},i=[],s=n("2f62");const{mapActions:o}=Object(s["a"])("entity");var l={name:"Index",data:function(){return{id:1,entityList:void 0}},methods:{...o(["page","remove"]),loadPage(t){this.page({agentId:this.$route.params.agentId,id:t}).then(t=>{this.entityList=t})},editEntity(t){this.$router.push({name:"optionEntityEdit",params:{agentId:this.$route.params.agentId,entityId:t.id}})},removeConfirm(t){this.$confirm(`Are you sure you would like to delete entity "${t.name}"?`,"Delete Entity",{confirmButtonText:"DELETE",cancelButtonText:"CANCEL",type:"warning"}).then(()=>{this.remove({agentId:this.$route.params.agentId,id:t.id}),this.id=1,this.loadPage(this.id)}).catch(()=>{this.$message({type:"info",message:"Canceled"})})}},mounted:function(){this.loadPage(1)}},r=l,c=(n("80c5"),n("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);u.options.__file="Index.vue";e["default"]=u.exports},"80c5":function(t,e,n){"use strict";var a=n("d0e0"),i=n.n(a);i.a},b485:function(t,e,n){},b4c6:function(t,e,n){"use strict";var a=n("f601"),i=n.n(a);i.a},d0e0:function(t,e,n){},f601:function(t,e,n){}}]);
//# sourceMappingURL=OptionEntity.341f8402.js.map