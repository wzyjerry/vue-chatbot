(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["User"],{"757c":function(e,s,r){"use strict";var t=r("fdf8"),a=r.n(t);a.a},"7fa3":function(e,s,r){"use strict";var t=r("b8ca"),a=r.n(t);a.a},"879c":function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("el-main",[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:8}},[r("el-form",{ref:"user",staticClass:"form",attrs:{"status-icon":"",model:e.user,"label-width":"200px",rules:e.rules}},[r("el-form-item",{attrs:{label:e.$t("user.username"),prop:"username"}},[r("el-input",{attrs:{placeholder:e.$t("user.username")},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}})],1),r("el-form-item",{attrs:{label:e.$t("user.password"),prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:e.$t("user.password"),autocomplete:"off"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}})],1),r("el-form-item",{attrs:{label:e.$t("user.confirm"),prop:"confirm"}},[r("el-input",{attrs:{type:"password",placeholder:e.$t("user.confirm"),autocomplete:"off"},model:{value:e.user.confirm,callback:function(s){e.$set(e.user,"confirm",s)},expression:"user.confirm"}})],1),r("el-form-item",{attrs:{label:e.$t("user.display"),prop:"display"}},[r("el-input",{attrs:{placeholder:e.$t("user.display")},model:{value:e.user.display,callback:function(s){e.$set(e.user,"display",s)},expression:"user.display"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.$t("nav.regist")))])],1)],1)],1)],1)],1)},a=[],u=r("2f62");const{mapActions:i}=Object(u["a"])("user");var o={name:"Regist",data:function(){return{user:{},rules:{username:[{required:!0,message:this.$t("common.required",[this.$t("user.username")]),trigger:"blur"}],password:[{required:!0,validator:this.validatePass,trigger:"blur"}],confirm:[{required:!0,validator:this.validatePass2,trigger:"blur"}]}}},watch:{$route(){this.rules.username[0].message=this.$t("common.required",[this.$t("user.username")]),this.$refs.user.validate()}},methods:{...i(["regist"]),submitForm(){this.$refs.user.validate(e=>{if(!e)return!1;this.regist(this.user),this.$router.push({name:"login"})})},validatePass(e,s,r){void 0===s||""===s?r(new Error(this.$t("user.requirePassword"))):(void 0===this.user.confirm&&""===this.user.confirm||this.$refs.user.validateField("confirm"),r())},validatePass2(e,s,r){console.debug(s),void 0===s||""===s?r(new Error(this.$t("user.requireConfirm"))):s!==this.user.password?r(new Error(this.$t("user.confirmFail"))):r()}}},l=o,n=(r("757c"),r("2877")),m=Object(n["a"])(l,t,a,!1,null,null,null);m.options.__file="Regist.vue";s["default"]=m.exports},a55b:function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("el-main",[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:8}},[r("el-form",{ref:"user",staticClass:"form",attrs:{"status-icon":"",model:e.user,"label-width":"200px",rules:e.rules}},[r("el-form-item",{attrs:{label:e.$t("user.username"),prop:"username"}},[r("el-input",{attrs:{placeholder:e.$t("user.username")},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}})],1),r("el-form-item",{attrs:{label:e.$t("user.password"),prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:e.$t("user.password"),autocomplete:"off"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.$t("nav.login")))])],1)],1)],1)],1)],1)},a=[],u=r("2f62");const{mapActions:i}=Object(u["a"])("user");var o={name:"Regist",data:function(){return{user:{},rules:{username:[{required:!0,message:this.$t("common.required",[this.$t("user.username")]),trigger:"blur"}],password:[{required:!0,message:this.$t("common.required",[this.$t("user.password")]),trigger:"blur"}]}}},watch:{$route(){this.rules.username[0].message=this.$t("common.required",[this.$t("user.username")]),this.rules.password[0].message=this.$t("common.required",[this.$t("user.password")]),this.$refs.user.validate()}},methods:{...i(["login"]),submitForm(){this.$refs.user.validate(e=>{if(!e)return!1;this.login(this.user),this.$router.push({name:"home"})})},validatePass(e,s,r){void 0!==s&&""!==s||r(new Error(this.$t("user.requirePassword")))}}},l=o,n=(r("7fa3"),r("2877")),m=Object(n["a"])(l,t,a,!1,null,null,null);m.options.__file="Login.vue";s["default"]=m.exports},b8ca:function(e,s,r){},fdf8:function(e,s,r){}}]);
//# sourceMappingURL=User.93d61b6d.js.map