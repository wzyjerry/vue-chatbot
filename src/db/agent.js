const Mock = require("mockjs");

Mock.mock(RegExp("http://api/agent/create$"), "post", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/edit/[^/]*$"), "put", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/view/[^/]*$"), "get", options => {
  const agent = {
    id: options.url.split("/").pop(),
    name: "@title(1, 3)"
  };
  return Mock.mock(agent);
});

Mock.mock(RegExp("http://api/agent/remove/[^/]*$"), "delete", options => {
  console.debug(`Delete agent: ${options.url.split("/").pop()}`);
});

Mock.mock(RegExp("http://api/agent/page[^/]*$"), "get", options => {
  const pageIndex = parseInt(options.url.getParam("id"), 10);
  const perPage = 5;
  const totalItems = 73;
  const totalPage = 15;
  let agentList = {
    totalItems: totalItems,
    totalPage: totalPage
  };
  if (pageIndex < totalPage) {
    agentList = {
      totalItems: totalItems,
      totalPage: totalPage,
      "list|5": [
        {
          "index|+1": (pageIndex - 1) * perPage + 1,
          id: "@guid",
          name: "@title(1, 3)"
        }
      ]
    };
  } else if (pageIndex === totalPage) {
    agentList = {
      totalItems: totalItems,
      totalPage: totalPage,
      "list|1-4": [
        {
          "index|+1": (pageIndex - 1) * perPage + 1,
          id: "@guid",
          name: "@title(1, 3)"
        }
      ]
    };
  }
  return Mock.mock(agentList);
});
