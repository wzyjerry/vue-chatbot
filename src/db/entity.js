const Mock = require("mockjs");

Mock.mock(
  RegExp("http://api/agent/view/[^/]*/entity/create$"),
  "post",
  options => {
    console.debug(JSON.parse(options.body));
  }
);

Mock.mock(
  RegExp("http://api/agent/view/[^/]*/entity/edit/[^/]*$"),
  "put",
  options => {
    console.debug(JSON.parse(options.body));
  }
);

Mock.mock(
  RegExp("http://api/agent/view/[^/]*/entity/view/[^/]*$"),
  "get",
  options => {
    const entity = {
      id: options.url.split("/").pop(),
      name: "@title(1, 3)",
      "contents|30-75": ["SomeValue"]
    };
    return Mock.mock(entity);
  }
);

Mock.mock(
  RegExp("http://api/agent/view/[^/]*/entity/delete/[^/]*$"),
  "delete",
  options => {
    console.debug(`Delete entity: ${options.url.split("/").pop()}`);
  }
);

Mock.mock(
  RegExp("http://api/agent/view/[^/]*/entity/index[^/]*$"),
  "get",
  options => {
    const pageIndex = parseInt(options.url.getParam("id"), 10);
    const perPage = 5;
    const totalItems = 73;
    const totalPage = 15;
    let entityList = {
      totalItems: totalItems,
      totalPage: totalPage
    };
    if (pageIndex < totalPage) {
      entityList = {
        totalItems: totalItems,
        totalPage: totalPage,
        "list|5": [
          {
            "index|+1": (pageIndex - 1) * perPage + 1,
            id: "@guid",
            name: "@title(1)"
          }
        ]
      };
    } else if (pageIndex === totalPage) {
      entityList = {
        totalItems: totalItems,
        totalPage: totalPage,
        "list|1-4": [
          {
            "index|+1": (pageIndex - 1) * perPage + 1,
            id: "@guid",
            name: "@title(1)"
          }
        ]
      };
    }
    return Mock.mock(entityList);
  }
);
