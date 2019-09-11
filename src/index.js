#!/usr/bin/env node
require("dotenv").config({ path: ".env-" + (process.env.STAGE || "staging") });
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const toJsonApi = require("@orikami/fn-to-json-api");
const auth0 = require("@orikami/micro-auth0")(require(`${process.env.AUTH0_CONFIG}`));
const tryCatch = require("@orikami/micro-trycatch");
const cors = require("micro-cors")();
const { send } = require('micro');
let match = require('fs-router')(__dirname + '/api');

const router = async function(req, res) {
  let matched = toJsonApi(match(req));
  if (matched) return await matched(req, res);
  send(res, 404, { error: 'Method not found' })
};

const handler = compose(
  tryCatch, // Catch errors, format as JSON
  cors, // Send correct CORS headers
  auth0, // Enable Auth0 authentiation, see auth0.js for config
)(router); // Business logic: (data)=>{}

// Run in bash
if (require.main === module) {
  const micro = require("micro");
  const server = micro(handler);
  server.listen(process.env.PORT || 3000);
}

// Default export: the micro function handler
module.exports = handler;
