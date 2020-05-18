// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  let o = [...str].reduce((obj, char) => {
    obj.hasOwnProperty(char) ? obj[char]++ : obj[char] = 1

    if(obj.maxChar == '' || obj[char] > obj[obj.maxChar])
      obj.maxChar = char
  
    return obj;  
  } , {maxChar: ''});

  return o.maxChar;
}

module.exports = maxChar;
