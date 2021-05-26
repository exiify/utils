class arrayClass {
  constructor() {}
  /**
   * @param {Array} array - Array to shuffle
   * @return {Array}
   *
   */
  shuffle(array) {
    if (!array) return new Error("I need an array");
    if (!Array.isArray(array))
      throw new Error("Provided argument is not an array!!");
    if (!array.length || array.length === 0)
      throw new Error("Cannot shuffle empty array");
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  /**
   * Get's Random item of the array provided
   * @param {Array} array - Get's random item of this array
   *
   */
  randomItem(array) {
    if (!array) return new Error("I need an array");
    if (!Array.isArray(array))
      throw new Error("Provided argument is not an array!!");
    if (!array.length || array.length === 0)
      throw new Error("Cannot get random item of an empty array");
    const index = Math.floor(Math.random() * array.length);

    const random = array[index];

    return random;
  }
  /**
   * Merges two arrays!
   * @param {Array} array
   * @param {Array} array2
   * @return {Array}
   */
  merge(array, array2) {
    if (!array || !array2) return new Error("I need an array");
    if (!Array.isArray(array) || !Array.isArray(array2))
      throw new Error("Provided argument is not an array!!");
    if (
      !array.length ||
      array.length === 0 ||
      !array2.length ||
      array2.length === 0
    )
      throw new Error("Cannot get random item of an empty array");
    const newArr = array.concat(array2);
    return newArr;
  }
  /**
   * Check if two arrays are the same is in an array
   * @param {Array} array
   * @param {Array} array2
   * @return {Boolean}
   */
  isSame(array, array2) {
    if (!Array.isArray(array)) throw new Error("Not a valid Array!");
  if(array === array2) return true
  return false
  }
}

module.exports = arrayClass;
