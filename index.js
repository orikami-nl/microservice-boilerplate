const handler = async (data) => {
    return {
        version: "v1",
        data: `Hello world`
    };
};

module.exports = handler;