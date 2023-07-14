"use strict";

require("dotenv").config(); // Import the dotenv library and configure it.

/**
 * 
 * Start the process of updating the application.
 * 
 * @returns {Boolean} Whether the process of updating the application was successful or not.
 * 
 */
const start = async function start() {

  if (process.env.DEBUG === "true") console.log("Starting the process of updating the application"); // Log the info.

  const newUpdate = await this.check(); // Check if there is any update available.

  if (!newUpdate) {

    if (process.env.DEBUG === "true") console.log("There is no update available"); // Log the info.

    return false; // Return false.

  }; // Check if there is no update available.

  if (process.env.DEBUG === "true") console.log("Starting the process of pulling the latest changes with the local repository"); // Log the info.

  const pulled = await this.pull(); // Pull the latest changes with the local repository.

  if (!pulled) {

    if (process.env.DEBUG === "true") console.error("Failed to pull the latest changes with the local repository"); // Log the error.

    return false; // Return false.

  }; // Check if the latest changes were not pulled.

  if (process.env.DEBUG === "true") console.log("Starting the installation of the dependencies"); // Log the info.

  const installed = await this.install(); // Install the dependencies.

  if (!installed) {

    if (process.env.DEBUG === "true") console.error("Failed to install the dependencies"); // Log the error.

    return false; // Return false.

  }; // Check if the dependencies were not installed.

  if (process.env.DEBUG === "true") console.log("The application was updated successfully"); // Log the info.

  return true; // Return true.

};

module.exports = start;