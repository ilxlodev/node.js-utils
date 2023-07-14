"use strict";

const { exec } = require("node:child_process"); // Import the child_process module.

/**
 * 
 * Install the dependencies.
 * 
 * @returns {Promise<Boolean>} Whether the dependencies were installed.
 * 
 */
const install = async function install() {

  return new Promise((resolve, reject) => {

    exec(`cd ${process.env.GITHUB_WORKSPACE} && npm ci`, (err, stdout, stderr) => {

      if (err) {

        if (process.env.DEBUG === "true") console.error(`Failed to install the dependencies: ${err.message}`); // Log the error.

        return reject(err); // Reject the promise.

      }; // Check if there is any error.

      if (process.env.DEBUG === "true") console.log(`The dependencies were installed successfully`); // Log the info

      return resolve(true); // Resolve the promise.

    }); // Install the dependencies.

  });

};

module.exports = install;