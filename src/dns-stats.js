const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrOfArrs = [];
  let arrOfStrings = [];

  domains.forEach((el) => {
    let x = el.split(".");
    arrOfArrs.push(x);
  });

  arrOfArrs.forEach((el) => {
    el.reverse();
  });
  arrOfArrs.forEach((el) => {
    arrOfStrings.push(...el);
  });

  let unique = [...new Set(arrOfStrings)];

  let res = {};
  let k = 1;
  let key = "";

  for (let i = 0; i < unique.length; i++) {
    arrOfArrs.forEach((el, index) => {
      if (el.includes(unique[i]) && index === arrOfArrs.length - 1) {
        key += `.${unique[i]}`;
        res[key] = k;
        k = 1;
      } else if (el.includes(unique[i])) {
        k++;
      } else if (index === arrOfArrs.length - 1 && !el.includes(unique[i])) {
        key += `.${unique[i]}`;
        res[key] = 1;
        key = key.substring(0, key.length - unique[i].length);
        k = 1;
      }
    });
  }

  return res;
}

module.exports = {
  getDNSStats,
};
