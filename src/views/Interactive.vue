<template>
<el-main>
  <el-row type="flex" justify="center">
    <div id="root">
    </div>
  </el-row>
</el-main>
</template>

<script crossorigin>
import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "react-simple-chatbot";

export default {
  name: "Test",
  mounted() {
    class PotentialError extends React.Component {
      constructor(props) {
        super(props);
        this.state = { error: false };
      }
      componentDidCatch(error, info) {
        this.setState({ error, info });
      }
      render() {
        if (this.state.error) {
          return <h1>Error: {this.state.error.toString()}</h1>;
        }
        return this.props.children;
      }
    }
    ReactDOM.render(
      <PotentialError>
        <ChatBot
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "2"
            },
            {
              id: "2",
              user: true,
              trigger: "3"
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              end: true
            }
          ]}
        />
      </PotentialError>,
      document.getElementById("root")
    );
  }
};
</script>

<style lang="stylus">
#root
  margin-top 50px
</style>
