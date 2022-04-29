const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (MODERN_ACTIVITY < sampleActivity) {
    return false;
  }

  if (sampleActivity <= 0) {
    return false;
  }

  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  if (!activity) {
    return false;
  }
  return Math.ceil((Math.log(MODERN_ACTIVITY / activity)) / (Math.log(2)) * HALF_LIFE_PERIOD);
}

module.exports = {
  dateSample,
};
