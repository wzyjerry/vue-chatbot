const Mock = require("mockjs");

Mock.mock(RegExp("http://api/user[^/]*$"), "post", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/user/login[^/]*$"), "post", options => {
  console.debug(JSON.parse(options.body));
  return Mock.mock({
    api_key: "@guid",
    rate_limit: 0,
    expires_after: "2018-11-13T03:24:55.729Z"
  });
});

Mock.mock(RegExp("http://api/user/[^/]*$"), "put", options => {
  console.debug(JSON.parse(options.body));
});
