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

const array = life.array.merge(arr, arr2);
console.log(array);
// returns: [ 1, 2, 3, 1, 2, 3 ]   
```
### Shuffle an array
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];

const array = life.array.shuffle(arr);
console.log(array);
// returns: [ 3, 2, 1]
```
### Get a random item of an array
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];

const item = life.array.randomItem(arr);
console.log(array);
// returns: 2
```
### See if two arrays are the same
```js
const jsUtils = require("practical-js-utils");
const utils = new jsUtils();

const arr = [1, 2, 3];
const arr2 = [1, 2, 3];

const item = life.array.isSame(arr, arr2);
console.log(array);
// returns: true
```