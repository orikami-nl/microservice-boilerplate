const toLambda = require("@orikami/micro-to-lambda");
const { postJsonApi } = require("@orikami/fn-to-json-api");

const __NAME__ = require("./index");

module.exports.__NAME__ = toLambda(postJsonApi(__NAME__));