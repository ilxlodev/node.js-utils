"use strict";

const fetch = require("node-fetch"); // Import the node-fetch library.
const pkg = require("../../package.json"); // Import the package.json file.

/**
 * 
 * Check if there is any update available.
 * 
 * @returns {Boolean} Whether there is any update available.
 * 
 */
const check = async function check() {

  const controller = new AbortController(); // Create a new AbortController.

  const headers = {
    "User-Agent": `Node.js-Utils (${pkg.repository.url.replace(".git", "")}, ${pkg.version})`,
    "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
  }; // Create the headers.

  const release = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY_OWNER}/${process.env.GITHUB_REPOSITORY_NAME}/releases/latest`, { method: "GET", headers }); // Fetch the latest release.

  controller.abort(); // Abort the controller.

  if (release.status !== 200) {

    if (process.env.DEBUG === "true") console.error(`Failed to fetch the latest release: ${release.status} ${release.statusText}`); // Log the error.

    return false; // Return false.

  }; // Check if the status code is not 200.

  const parsedRelease = await release.json().catch(err => err); // Parse the release.

  if (parsedRelease instanceof Error) {

    if (process.env.DEBUG === "true") console.error(`Failed to parse the latest release: ${parsedRelease.message}`); // Log the error.

    return false; // Return false.

  }; // Check if the release is not valid.

  const localVersion = require(`${process.env.GITHUB_WORKSPACE}/package.json`); // Get the local version.

  if (!localVersion || !localVersion.version) {

    if (process.env.DEBUG === "true") console.error(`Failed to get the local version: ${localVersion}`); // Log the error.

    return false; // Return false.

  }; // Check if the local version is not valid.

  if (parsedRelease.tag_name.replace(process.env.GITHUB_VERSION_PREFIX, "") === localVersion.version) return false; // Check if the latest release is the same as the current version.

  if (process.env.DEBUG === "true") console.log(`NEW UPDATE! The latest release is ${parsedRelease.tag_name} and the current version is ${localVersion.version}`); // Log the info.

  return true; // Return true.

};

module.exports = check;