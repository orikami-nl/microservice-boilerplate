#!/usr/bin/env node
const { postJsonApi } = require("@orikami/fn-to-json-api");
const cors = require("micro-cors")();
const toLambda = require("@orikami/micro-to-lambda");

const handler = cors(postJsonApi(require("./index")));

// Default export: the micro function handler
module.exports = handler;

// Lambda export: the lambda function handler (serverless.yml)
module.exports.lambda = toLambda(handler);

// Run in bash
if(require.main === module) {
    const micro = require("micro");
    const server = micro(handler);
    server.listen(process.env.PORT || 3000);
}