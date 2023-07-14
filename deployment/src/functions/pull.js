"use strict";

const { exec } = require("node:child_process"); // Import the child_process module.

/**
 * 
 * Pull the latest changes with the local repository.
 * 
 * @returns {Promise<Boolean>} Whether the latest changes were pulled.
 * 
 */
const pull = async function pull() {

  return new Promise((resolve, reject) => {

    exec(`cd ${process.env.GITHUB_WORKSPACE} && git pull origin ${process.env.GITHUB_REPOSITORY_BRANCH}`, (err, stdout, stderr) => {

      if (err) {

        if (process.env.DEBUG === "true") console.error(`Failed to pull the latest changes with the local repository: ${err.message}`); // Log the error.

        return reject(err); // Reject the promise.

      }; // Check if there is any error.

      if (process.env.DEBUG === "true") console.log(`Pulled the latest changes with the local repository: ${stdout}`); // Log the info

      return resolve(true); // Resolve the promise.

    }); // Pull the latest changes.

  }); // Return the promise.

};

module.exports = pull;