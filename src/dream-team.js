const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let result = [];
  members.forEach((e) => {
    if (typeof e === "string") {
      result.push(e.replace(/[ ]/g, "")[0]);
    }
  });
  console.log(result);
  console.log(result.sort().join("").toUpperCase());
  return result.join("").toUpperCase().split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
