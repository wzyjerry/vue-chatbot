const Mock = require("mockjs");

Mock.mock(RegExp("http://api/agent[^/]*$"), "post", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/[^/]*$"), "put", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/[^/]*$"), "get", options => {
  const agent = {
    id: options.url.split("/").pop(),
    name: "@name",
    description: "@paragraph",
    webhook: "webhook"
  };
  return Mock.mock(agent);
});

Mock.mock(RegExp("http://api/agent/[^/]*$"), "delete", options => {
  console.debug(`Delete agent: ${options.url.split("/").pop()}`);
});

Mock.mock(RegExp("http://api/agent[^/]*$"), "get", {
  "list|5-14": [
    {
      id: "@guid",
      name: "@name",
      description: "@paragraph",
      webhook: "webhook"
    }
  ]
});
