import enLocale from "element-ui/lib/locale/lang/en";

export default {
  ...enLocale,
  common: {
    create: "CREATE",
    save: "SAVE",
    delete: "DELETE",
    cancel: "CANCEL",
    saved: "Saved",
    canceled: "Canceled",
    required: "Please enter {0}"
  },
  header: {
    testMessage: "Hello, world~!"
  },
  nav: {
    agent: "Agent",
    login: "Login",
    regist: "Regist"
  },
  aside: {
    setting: "Setting",
    entities: "Entities",
    intents: "Intents",
    train: "Train"
  },
  user: {
    username: "Username",
    password: "Password",
    confirm: "Confirm Password",
    display: "Display Name",
    requirePassword: "Please enter Password",
    requireConfirm: "Please enter Password again",
    confirmFail: "Confirm password does not match the password",
    loginError: "Login failed",
    registError: "Regist failed"
  },
  agent: {
    name: "Agent Name",
    description: "Description",
    webhook: "Webhook",
    index: {
      create: "Create Agent"
    },
    edit: {
      dangerZone: {
        name: "DANGER ZONE",
        title: "Delete Agent",
        info: `Are you sure you want to delete agent "{0}"? This will destroy the agent with all corresponding data and cannot be undone!`,
        confirm: "DELETE THIS AGENT",
        placeholder: "Type DELETE here and click DELETE button",
        errorMessage:
          "You can type DELETE above and click DELETE button to delete, or click CANCEL button to cancel"
      }
    }
  },
  entity: {
    name: "Entity Type",
    value: "Entity",
    description: "Description",
    upload: {
      name: "Upload Entities",
      start: "Drag and drop txt files there, or ",
      mid: "click",
      end: " to upload",
      tip: "Can only upload txt file, each line contains a value"
    },
    content: "Entity List",
    addContent: "Add Entity",
    index: {
      create: "Create Entity"
    },
    delete: {
      title: "Delete Entity",
      info: 'Are you sure you would like to delete entity "{0}"?'
    }
  }
};
