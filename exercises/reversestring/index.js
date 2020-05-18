// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  //Soln 1
  // let reversed_str = "";
  // for(let char of str)
  //   reversed_str = char + reversed_str;
  // return reversed_str;

  //Soln 2
  return [...str].reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
