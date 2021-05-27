const jsUtils = require("../lib/index")

const utils = new jsUtils()

const string ="I love cake"
const item = utils.string.replaceKeyword(string, "cake", "rice")
console.log(item)
