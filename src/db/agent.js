const Mock = require("mockjs");

Mock.mock("http://api/agent/getLanguages", "get", {
  languages: [
    {
      label: "English",
      value: "en-us"
    },
    {
      label: "中文",
      value: "zh-cn"
    }
  ]
});

Mock.mock("http://api/agent/getTimeZones", "get", {
  timeZones: [
    {
      label: "(GMT+8:00) Asia/Hong Kong",
      value: "+8:00"
    },
    {
      label: "(GMT+5:45) Asia/Kathmandu",
      value: "+5:45"
    }
  ]
});

Mock.mock("http://api/agent/create", "post", options => {
  console.debug(JSON.parse(options.body));
});

const getParam = (url, name) => {
  const pattern = new RegExp(`[?&]${name}=([^&]+)`, "g");
  const matcher = pattern.exec(url);
  let items = null;
  if (null != matcher) {
    try {
      items = decodeURIComponent(decodeURIComponent(matcher[1]));
    } catch (e) {
      try {
        items = decodeURIComponent(matcher[1]);
      } catch (e) {
        items = matcher[1];
      }
    }
  }
  return items;
};

Mock.mock(RegExp("http://api/agent/index.*"), "get", options => {
  const pageIndex = parseInt(getParam(options.url, "id"), 10);
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
          "id|+1": (pageIndex - 1) * perPage + 1,
          name: "@title(1, 3)",
          "lang|1-3": ["en-us"]
        }
      ]
    };
  } else if (pageIndex === totalPage) {
    agentList = {
      totalItems: totalItems,
      totalPage: totalPage,
      "list|1-4": [
        {
          "id|+1": (pageIndex - 1) * perPage + 1,
          name: "@title(1, 3)",
          "lang|1-3": ["en-us"]
        }
      ]
    };
  }
  return Mock.mock(agentList);
});
