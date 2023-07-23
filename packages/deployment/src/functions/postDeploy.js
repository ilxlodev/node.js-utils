"use strict";

const { exec } = require("node:child_process"); // Import the child_process module.

/**
 * 
 * Post deploy sequence.
 * 
 * @returns {Promise<Boolean>} Whether the post deploy completed successfully.
 * 
 */
const postDeploy = async function postDeploy() {

  if (process.env.POST_DEPLOY_COMMAND === "") return true; // Check if the post deploy command is empty.

  return await new Promise((resolve, reject) => {

    exec(process.env.POST_DEPLOY_COMMAND, (err, stdout, stderr) => {

      if (err) {

        if (process.env.DEBUG === "true") console.error(`Failed to run the post deploy command: ${err.message}`); // Log the error.

        return reject(err); // Reject the promise.

      }; // Check if there is any error.

      if (process.env.DEBUG === "true") console.log("The post deploy command was run successfully"); // Log the info

      return resolve(true); // Resolve the promise.

    }); // Run the post deploy command.

  });

};

module.exports = postDeploy;