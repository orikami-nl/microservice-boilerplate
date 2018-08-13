const __NAME__ = require("./index");

test("run __NAME__", async () => {
  const result = await __NAME__();

  expect(result.data).toBe("Hello __NAME__");
  expect(result.version).toBe("v1");
});