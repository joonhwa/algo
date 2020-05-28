// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  const vowels = ['a','e','i','o','u','A','E','I','O','U'];

  return [...str].reduce((total, c) => {
    if (vowels.includes(c))
      total++;
    return total;
  },0);
}

module.exports = vowels;
