const Mock = require("mockjs");

Mock.mock(RegExp("http://api/agent/[^/]*/entity$"), "post", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/[^/]*/entity/[^/]*$"), "put", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/[^/]*/entity/[^/]*$"), "get", options => {
  const entity = {
    id: options.url.split("/").pop(),
    name: "@title(1)",
    description: "@paragraph",
    "entries|5-25": ["SomeValue"]
  };
  return Mock.mock(entity);
});

Mock.mock(RegExp("http://api/agent/[^/]*/entity/[^/]*$"), "delete", options => {
  console.debug(`Delete entity: ${options.url.split("/").pop()}`);
});

Mock.mock(RegExp("http://api/agent/[^/]*/entity$"), "get", () => {
  const entityList = Mock.mock({
    "list|12-16": [
      {
        id: "@guid",
        name: "@title(1)",
        description: "@paragraph"
      }
    ]
  });
  return entityList;
});
