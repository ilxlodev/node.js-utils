"use strict";

require("dotenv").config(); // Import the dotenv library and configure it.

/**
 * 
 * Start the process of updating the application.
 * 
 * @returns {Boolean} Whether the process of updating the application was successful or not.
 * 
 */
const prestart = async function prestart() {

  if (process.env.AUTO_UPDATE !== "true") return false; // Check if the auto update is not enabled.
  
  process.env.GITHUB_VERSION_PREFIX = "v"; // Set the GitHub version prefix to "v".
  process.env.GITHUB_WORKSPACE = process.cwd(); // Set the GitHub workspace to the current working directory.

  process.env.GITHUB_REPOSITORY_OWNER = "ilxlo"; // Set the GitHub repository owner to "ilxlo".
  process.env.GITHUB_REPOSITORY_NAME = "node.js-utils"; // Set the GitHub repository name to "node.js-utils".
  process.env.GITHUB_REPOSITORY_BRANCH = "main"; // Set the GitHub repository branch to "main".

  this.start(); // Start the process of updating the application.

};

module.exports = prestart;