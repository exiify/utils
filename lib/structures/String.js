class stringClass {
  constructor() { }
  /**
   * Removes specific keyword from string 
   * @param {String} string
   * @param {String} keyword 
   * @return {String}
   * @returns {String}
   */
  removeKeyword(string, keyword) {
    if (typeof string !== "string") throw new Error("Values have to be string")
    if (typeof keyword !== "string") throw new Error("Values have to be string")
    const item = string.split(keyword).join('')
    
    return item
  }
    /**
   * Replaces specific keyword from string 
   * @param {String} string
   * @param {String} keyword
   * @param {String} replacement 
   * @return {String}
   * @returns {String}
   */
  replaceKeyword(string, keyword, replacement) {
    if (typeof string !== "string") throw new Error("Values have to be string")
    if (typeof keyword !== "string") throw new Error("Values have to be string")
     if (typeof replacement !== "string") throw new Error("Values have to be string")
    const item = string.split(keyword).join(replacement)
    
    return item
  }

}

module.exports = stringClass;
