const hello = require("./index");

test("run hello", async () => {
  const result = await hello();

  expect(result.data).toBe("Hello world");
  expect(result.version).toBe("v1");
});