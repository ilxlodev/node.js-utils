"use strict";

/**
 * 
 * Deployment module.
 * 
 */
const deployment = {
  check: require("./functions/check.js"),
  install: require("./functions/install.js"),
  prestart: require("./functions/prestart.js"),
  pull: require("./functions/pull.js"),
  start: require("./functions/start.js")
};

module.exports = deployment;