const fn = require("./index");

test("run __NAME__", async () => {
  const result = await fn();

  expect(result.greeting).toBe("Hello __NAME__");
});