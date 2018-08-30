require("dotenv").config({ path: ".env-" + (process.env.STAGE || "staging") });

// 'data' contains query + POST data
const handler = async data => {
  // Errors with 4xx of 5xx will set the HTTP status code
  // throw new Error("404 Could not find the document");
  
  return {  greeting: `Hello __NAME__`, data };
};

module.exports = handler;
