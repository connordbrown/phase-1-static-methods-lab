class Formatter {
  static capitalize(word) {
    return word.slice(0,1).toUpperCase() + word.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(string) {
    const checkCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let strArr = string.split(" ")
    let newArr = [];
    newArr.push(this.capitalize(strArr[0]));
    
    strArr.slice(1).forEach(word => {
      if (checkCap.includes(word)) {
        newArr.push(word);
      } else {
        newArr.push(this.capitalize(word));
      }
    })

    return newArr.join(" ");
  }

}
