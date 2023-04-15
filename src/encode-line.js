const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  if (str.length === 0) {
    return "";
  }

  let stack = [];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      stack.push(str[i]);
    } else {
      stack.push(str[i]);
      if (stack.length > 1) {
        result = `${result}${stack.length}${stack[0]}`;
      } else if (stack.length === 1) {
        result = `${result}${stack[0]}`;
      }
      stack = [];
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
