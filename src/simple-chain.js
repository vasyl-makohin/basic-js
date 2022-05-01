const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.filter((e, i) => i !== position - 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finish = this.chain.map((e) => `( ${e} )`).join("~~");
    this.chain = [];
    return finish;
  },
};

module.exports = {
  chainMaker,
};
