const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let newArr = arr.filter((e) => e !== -1).sort((a, b) => a - b);
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== -1) {
      result[j] = newArr[i];
      i++;
    } else {
      result[j] = -1;
    }
  }

  return result;
}
module.exports = {
  sortByHeight,
};
