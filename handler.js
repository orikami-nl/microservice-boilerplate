#!/usr/bin/env node
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const toJsonApi = require("@orikami/fn-to-json-api");
const auth0 = require("@orikami/micro-auth0")(require("./auth0"));
const tryCatch = require("@orikami/micro-trycatch");
const cors = require("micro-cors")();
const toLambda = require("@orikami/micro-to-lambda");

const handler = compose(
  tryCatch,     // Catch errors, format as JSON
  cors,         // Send correct CORS headers
  auth0,        // Enable Auth0 authentiation, see auth0.js for config
  toJsonApi     // Convert (data)=>{} to (req,res)=>{} for micro
)(require("./index")); // Business logic: (data)=>{}

// Default export: the micro function handler
module.exports = handler;

// Lambda export: the lambda function handler (serverless.yml)
module.exports.lambda = toLambda(handler);

// Run in bash
if (require.main === module) {
  const micro = require("micro");
  const server = micro(handler);
  server.listen(process.env.PORT || 3000);
}
