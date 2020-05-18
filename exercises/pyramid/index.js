// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n, row = n-1, str = '') {

  //Soln 1
  // for(let i = n-1 ; i >= 0 ; i--) {
  //   let s = '';
  //   let col = n === 1 ? 1 : n*2-1
  //   for(let j = 0 ; j < col ; j++) {
  //     if (j < i || j > col - (i + 1))
  //       s += ' ';
  //     else
  //       s += '#';  
  //   }
  //   console.log(s)
  // }

  //Soln 2
  if (row === -1) {
    return;
  }

  if (str.length === n*2-1) {
    console.log(str);
    return pyramid(n,row-1);
  }

  if (str.length < row || str.length > n*2-1 - row - 1)
    str += ' ';
  else 
    str += '#'; 

  pyramid(n,row,str)
}

module.exports = pyramid;
