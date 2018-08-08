const toLambda = require("@orikami/micro-to-lambda");
const { postJsonApi } = require("@orikami/fn-to-json-api");

const hello = require("./index");

module.exports.hello = toLambda(postJsonApi(hello));