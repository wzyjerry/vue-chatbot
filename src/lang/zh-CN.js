import zhLocale from "element-ui/lib/locale/lang/zh-CN";

export default {
  ...zhLocale,
  common: {
    create: "创建",
    save: "保存",
    delete: "删除",
    cancel: "取消",
    saved: "已保存",
    canceled: "已取消",
    required: "请输入{0}"
  },
  header: {
    testMessage: "你好，世界~！"
  },
  nav: {
    agent: "代理",
    login: "登录",
    regist: "注册"
  },
  aside: {
    setting: "设置",
    entities: "实体",
    intents: "兴趣",
    train: "训练"
  },
  user: {
    username: "用户名",
    password: "密码",
    confirm: "确认密码",
    display: "显示名",
    requirePassword: "请输入密码",
    requireConfirm: "请再次输入密码",
    confirmFail: "两次输入密码不一致"
  },
  agent: {
    name: "代理名称",
    description: "描述",
    webhook: "回调URL",
    index: {
      create: "创建代理"
    },
    edit: {
      dangerZone: {
        name: "危险区域",
        title: "删除代理",
        info: `确定要删除代理"{0}"吗？这将删除代理所包含的全部数据，且不能被撤销！`,
        confirm: "删除这个代理",
        placeholder: "输入DELETE并点击删除",
        errorMessage:
          "你可以在上面输入DELETE并点击删除来删除代理，或者点击取消撤销本操作"
      }
    }
  },
  entity: {
    name: "实体类型",
    value: "实体",
    description: "描述",
    upload: {
      name: "上传实体",
      start: "拖拽TXT文件到这里，或者",
      mid: "点击",
      end: "上传",
      tip: "只能上传TXT文件，每行包含一个值"
    },
    content: "实体值列表",
    addContent: "添加实体值",
    index: {
      create: "创建实体"
    },
    delete: {
      title: "删除实体",
      info: '确定要删除实体"{0}"吗？'
    }
  }
};
