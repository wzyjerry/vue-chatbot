<template>
<el-main>
  <el-row type="flex" justify="center">
    <div id="root">
    </div>
  </el-row>
</el-main>
</template>

<script crossorigin>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("interactive");
const agent = createNamespacedHelpers("agent");
import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot, { Loading } from "react-simple-chatbot";
import { Button, Input } from "element-react";
import "element-theme-default";

class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: "",
      trigger: false
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps, vue } = this.props;
    const search = steps.search.value;

    vue
      .question({
        agentId: vue.$route.params.agentId,
        data: search
      })
      .then(response => {
        const data = response.data;
        self.setState({
          loading: false,
          result: JSON.stringify(data, null, 4)
        });
      })
      .catch(() => {
        self.setState({
          loading: false,
          result: "Something error"
        });
      });
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div
        style={{
          width: "100%"
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          <Input type="textarea" autosize={true} value={result} />
        )}
        {!loading && (
          <div
            style={{
              textAlign: "center",
              marginTop: 20
            }}
          >
            {!trigger && (
              <Button type="primary" onClick={() => this.triggetNext()}>
                Search Again
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
}

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined
};

export default {
  name: "Interactive",
  methods: {
    ...mapActions(["question"]),
    // ...agent.mapActions(["view"])
  },
  data() {
    return {
      agent: undefined
    };
  },
  async mounted() {
    // this.agent = await this.view(this.$route.params.agentId);
    ReactDOM.render(
      <ChatBot
        recognitionEnable={true}
        // speechSynthesis={{ enable: true, lang: "en" }}
        // headerTitle={this.agent.name}
        steps={[
          {
            id: "begin",
            message: "Welcome to chatbot!",
            trigger: "1"
          },
          {
            id: "1",
            message: "Enter what you want to know about",
            trigger: "search"
          },
          {
            id: "search",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            component: <DBPedia vue={this} />,
            waitAction: true,
            trigger: "1"
          }
        ]}
      />,
      document.getElementById("root")
    );
  }
};
</script>

<style lang="stylus">
#root
  margin-top 50px
</style>
