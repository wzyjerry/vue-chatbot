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
  console.log(JSON.parse(options.body));
});
