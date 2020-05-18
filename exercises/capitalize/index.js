// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  let retStr = "";

  for (let i = 0 ; i < str.length ; i++) {
    if (i === 0 || str.charAt(i-1) === ' ')
      retStr += str.charAt(i).toUpperCase();
    else
      retStr += str.charAt(i);
  }

  return retStr;
}

module.exports = capitalize;
