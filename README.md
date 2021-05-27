# practical-js-utils
Make development easier with this package!

# Installation
```shell 
npm i practical-js-utils
```
# Help Wanted
As you can tell there isn't a lot this package can do at the moment that is why i need people to help contribute!

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
console.log(array);
// returns: 2
```
### See if two arrays are the same
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];
const arr2 = [1, 2, 3];

const item = utils.array.isSame(arr, arr2);
console.log(array);
// returns: true
```
