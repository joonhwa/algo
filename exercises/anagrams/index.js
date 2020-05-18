// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  //Soln 1
  // let stringAMap = [...stringA.replace(/[^\w]/g,'').toLowerCase()].reduce((obj, char) => {
  //   obj.hasOwnProperty(char) ? obj[char]++ : obj[char] = 1
  //   return obj;  
  // } , {});

  // let stringBMap = [...stringB.replace(/[^\w]/g,'').toLowerCase()].reduce((obj, char) => {
  //   obj.hasOwnProperty(char) ? obj[char]++ : obj[char] = 1
  //   return obj;  
  // } , {});

  // if(Object.keys(stringAMap).length != Object.keys(stringBMap).length)
  //   return false;
  
  // for (const key in stringAMap) {
  //   if(stringAMap[key] != stringBMap[key])
  //     return false;
  // }

  // return true;

  //Soln 2
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
