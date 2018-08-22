require("dotenv").config({ path: ".env-" + (process.env.STAGE || "staging") });

const handler = async data => {
  return {  greeting: `Hello __NAME__`, data };
};

module.exports = handler;
