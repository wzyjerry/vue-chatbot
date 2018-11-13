<template>
  <div id="root"></div>
</template>

<script>
import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "react-simple-chatbot";

export default {
  name: "Test",
  mounted() {
    ReactDOM.render(
      <ChatBot
        steps={[
          {
            id: "hello-world",
            message: "Hello World!",
            end: true
          }
        ]}
      />,
      document.getElementById("root")
    );
  }
};
</script>
