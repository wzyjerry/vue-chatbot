const Mock = require("mockjs");

Mock.mock(RegExp("http://api/agent/[^/]*/intent[^/]*$"), "post", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/[^/]*/intent/[^/]*$"), "put", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(
  RegExp("http://api/agent/[^/]*/intent/setting/[^/]*$"),
  "put",
  options => {
    console.debug(JSON.parse(options.body));
  }
);

Mock.mock(RegExp("http://api/agent/[^/]*/intent/[^/]*$"), "get", options => {
  const intent = {
    id: options.url.split("/").pop(),
    root: {
      type: "intent",
      intent: "@name",
      "weight|1-10.2": 1,
      children: [
        {
          type: "holder",
          children: []
        }
      ]
    }
  };
  return Mock.mock(intent);
});

Mock.mock(RegExp("http://api/agent/[^/]*/intent/[^/]*$"), "delete", options => {
  console.debug(`Delete intent: ${options.url.split("/").pop()}`);
});

Mock.mock(RegExp("http://api/agent/[^/]*/intent[^/]*$"), "get", options => {
  const pageIndex = parseInt(options.url.getParam("id"), 10);
  const perPage = 5;
  const totalItems = 73;
  const totalPage = 15;
  let intentList = {
    totalItems: totalItems,
    totalPage: totalPage
  };
  if (pageIndex < totalPage) {
    intentList = {
      totalItems: totalItems,
      totalPage: totalPage,
      "list|5": [
        {
          "index|+1": (pageIndex - 1) * perPage + 1,
          id: "@guid",
          name: "@title(1)",
          "weight|1-10.2": 1
        }
      ]
    };
  } else if (pageIndex === totalPage) {
    intentList = {
      totalItems: totalItems,
      totalPage: totalPage,
      "list|1-4": [
        {
          "index|+1": (pageIndex - 1) * perPage + 1,
          id: "@guid",
          name: "@title(1)",
          "weight|1-10.2": 1
        }
      ]
    };
  }
  return Mock.mock(intentList);
});
