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

  if (process.env.AUTO_UPDATE !== "true") {

    if (process.env.DEBUG === "true") console.log("The auto update is not enabled for the deployment package"); // Log the info.
    
    return false; // Return false.
  
  }; // Check if the auto update is not enabled.

  if (process.env.DEBUG === "true") console.log("Starting the process of updating the deployment package"); // Log the info.
  
  process.env.GITHUB_WORKSPACE = process.cwd(); // Set the GitHub workspace to the current working directory.
  process.env.GITHUB_REPOSITORY_BRANCH = "main"; // Set the GitHub repository branch to "main".

  const pulled = await this.pull(); // Start the process of updating the application.

  if (!pulled) {

    if (process.env.DEBUG === "true") console.error("Failed to pull the latest changes of the deployment package with the local repository"); // Log the error.

    return false; // Return false.

  }; // Check if the process of updating the application was not successful.

  if (process.env.DEBUG === "true") console.log("Starting the installation of the dependencies"); // Log the info.

  const installed = await this.install(); // Install the dependencies.

  if (!installed) {

    if (process.env.DEBUG === "true") console.error("Failed to install the dependencies"); // Log the error.

    return false; // Return false.

  }; // Check if the dependencies were not installed.

  if (process.env.DEBUG === "true") console.log("Finished the process of updating the deployment package"); // Log the info.

  return true; // Return true.

};

module.exports = prestart;