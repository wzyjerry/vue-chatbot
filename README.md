# vue-chatbot

Chatbot

项目部署在[GitPage](https://wzyjerry.github.io/vue-chatbot/dist/#/), 版本号1.0.0

接口文档在src/assets/swagger.yaml[导入到](https://editor.swagger.io)

引入[react-simple-chatbot](https://lucasbassetti.com.br/react-simple-chatbot/#/)

---
部署：python -m http.server 60000

---
v1.0.0 修改entity content node, 现在设置一个内容节点是否为语义槽位，如果是，设定该槽位使用的词表（Entity）和对应名称（Slot）。对应修改simulator。