const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw Error("'arr' parameter must be an instance of the Array!");

  const filtered = arr.map((e, i, arr) => {
    if (e === "--discard-next") {
      arr[i + 1] = undefined;
      return undefined;
    }
    if (e === "--double-next") {
      return arr[i + 1];
    }
    if (e === "--double-prev") {
      return arr[i - 1];
    }

    return e;
  });

  filtered.forEach((el, i) => {
    if (el === "--discard-prev") {
      filtered[i - 1] = undefined;
      filtered[i] = undefined;
    }
  });

  return filtered.filter((e) => e);
}

module.exports = {
  transform,
};
