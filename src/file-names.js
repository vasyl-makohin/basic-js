const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const map = new Map();
  names.forEach((f) => {
    if (map.has(f)) {
      let val = map.get(f) + 1;
      map.set(f, val);
      f = `${f}(${val})`;
      map.set(f, 0);
    } else {
      map.set(f, 0);
    }
  });

  return [...map.keys()];
}

module.exports = {
  renameFiles,
};
