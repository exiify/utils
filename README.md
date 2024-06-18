# practical-js-utils
Make development easier with this package!

# Installation
```shell 
npm i practical-js-utils
```


# Methods
## Array

### Merge two arrays
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];
const arr2 = [1, 2, 3];

const array = utils.array.merge(arr, arr2);
console.log(array);
// returns: [ 1, 2, 3, 1, 2, 3 ]   
```
### Shuffle an array
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];

const array = utils.array.shuffle(arr);
console.log(array);
// returns: [ 3, 2, 1]
```
### Get a random item of an array
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];

const item = utils.array.randomItem(arr);
console.log(item);
// returns: 2
```
### See if two arrays are the same
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];
const arr2 = [1, 2, 3];

const item = utils.array.isSame(arr, arr2);
console.log(item);
// returns: true
```
## String
### Remove a keyword from a string
```js
const jsUtils = require("../lib/index")

const utils = new jsUtils()

const string ="I love cake cake"
const item = utils.string.removeKeyword(string, "cake")
console.log(item)
//returns: I love
```

### Replace a keyword from a string
```js
const jsUtils = require("../lib/index")

const utils = new jsUtils()

const string ="I love cake"
const item = utils.string.replaceKeyword(string, "cake", "rice")
console.log(item)
// returns: I love rice
```
