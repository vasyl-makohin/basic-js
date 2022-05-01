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
  let arr = str.split("");
  let res = [];
  let x = 1;

  arr.forEach((el, i) => {
    if (el === arr[i + 1]) {
      x++;
    } else if (el !== arr[i + 1] && x > 1) {
      res.push(`${x}${el}`);
      x = 1;
    } else {
      res.push(el);
    }
  });

  return res.join("");
}

module.exports = {
  encodeLine,
};
