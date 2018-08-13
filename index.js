const handler = async () => {
  return { version: "v1", data: `Hello __NAME__` };
};

module.exports = handler;
