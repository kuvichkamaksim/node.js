const functions = require('./index');
const process = require('process');

const checkFunc = functions.isPositive;

if (checkFunc(1) === true &&
  checkFunc(-3) === false &&
  checkFunc(12) === true &&
  checkFunc(-5) === false) {
    process.exit(0);
  } else {
    throw new Error("Test crashed with an error!");
  }
