// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(1)
//     [[1]]
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [[1,  2,  3, 4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]]
//  matrix(6)
//     [[1,  2,  3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11]]

function matrix(n) {

  const matrix = [];

  for(let i=0 ; i < n ; i++) {
    matrix[i] = [];
  }

  let direction = 0;
  let switchDirectionCounter = 0;
  let counter = 0;
  let x = 0;
  let y = 0;

  switchDirectionCounter = n - 1;

  for (let i=1 ; i <= n * n ; i++) {

    matrix[x][y] = i;
    counter++;

    if(direction === 0) {
      y++;
    } else if(direction === 1) {
      x++;
    } else if(direction === 2) {
      y--;
    } else if(direction === 3) {
      x--;
    }

    if(counter === switchDirectionCounter) {
      direction += 1; //change direction
      counter = 0; //reset counter

      if(direction == 4) {
        x++;
        y++;
        direction = 0;
        switchDirectionCounter -= 2;
      }
    } 
  }

  return matrix;
}

module.exports = matrix;
