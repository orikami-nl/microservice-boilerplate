const hello = require("./index");

test("run hello", () => {
  const result = hello();

  expect(result.data).toBe("Hello world");
  expect(result.version).toBe("v1");
});

