const jsUtils = require("../lib/index")

const utils = new jsUtils()
const arr = [1, 2, 3]
const arr2 = [1, 2, 3, { name: "e" }]
var ob = {name: "e"}


const array = utils.array.isSame(arr, arr)
console.log(array)
