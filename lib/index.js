const array = require("./structures/Array")
const str = require("./structures/String")
const arr = new array()
const string = new str()
/**
 * Creates a new client
 * @class
 */
class utils {
  constructor(opions) {
    /**
     * @param {arr} this.array - e
     */
    this.array = arr;
    this.string = string;
  }
}

module.exports = utils;