const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const { repeatTimes = 1, separator = "+" } = options;
  const {
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const fullAddition =
    additionRepeatTimes <= 1
      ? addition ?? ""
      : Array(additionRepeatTimes + 1)
          .join(addition + "#")
          .split("#")
          .filter((e) => e.length > 0)
          .join(additionSeparator);

  const base =
    repeatTimes <= 1
      ? str + fullAddition
      : Array(repeatTimes + 1)
          .join(str + fullAddition + "#")
          .split("#")
          .filter((e) => e.length > 0)
          .join(separator);

  return base;
}

module.exports = {
  repeater,
};
